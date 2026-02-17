#!/usr/bin/env python3
"""
YouTube Video Downloader
Downloads videos from YouTube for ASCII conversion
"""

import sys
import os

def download_video(url, output_path, quality='480p'):
    """
    Download video from YouTube URL
    
    Args:
        url: YouTube video URL
        output_path: Where to save the video
        quality: Video quality (720p, 480p, 360p)
    """
    try:
        import yt_dlp
    except ImportError:
        print("ERROR: yt-dlp not installed. Run: pip install yt-dlp")
        sys.exit(1)
    
    # Quality format mapping
    quality_formats = {
        '720p': 'best[height<=720]',
        '480p': 'best[height<=480]',
        '360p': 'best[height<=360]',
    }
    
    format_string = quality_formats.get(quality, 'best[height<=480]')
    
    ydl_opts = {
        'format': format_string + '/best',
        'outtmpl': output_path,
        'quiet': False,
        'no_warnings': False,
    }
    
    print(f"Downloading video from: {url}")
    print(f"Quality: {quality}")
    print(f"Output: {output_path}")
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        print(f"\n✓ Download complete: {output_path}")
        return True
    except Exception as e:
        print(f"\n✗ Download failed: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 youtube_downloader.py <youtube_url> <output_file> [quality]")
        print("Example: python3 youtube_downloader.py 'https://youtube.com/watch?v=...' video.mp4 480p")
        print("Quality options: 720p, 480p, 360p (default: 480p)")
        sys.exit(1)
    
    url = sys.argv[1]
    output = sys.argv[2]
    quality = sys.argv[3] if len(sys.argv) > 3 else '480p'
    
    success = download_video(url, output, quality)
    sys.exit(0 if success else 1)
