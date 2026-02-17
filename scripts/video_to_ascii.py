#!/usr/bin/env python3
"""
Professional Video to ASCII Converter
Converts video frames to high-quality ASCII art for web playback
"""

import cv2
import numpy as np
import json
import sys
from pathlib import Path

# ASCII characters ordered by density (dark to light)
ASCII_CHARS = " .`-_':,;^=+/\"|)\\<>)iv%xclrs{*}I?!][1taeo7zjLunT#JCwfy325Fp6mqSghVd4EgXPGZbYkOA&8U$@BNWM"

def resize_frame(frame, new_width=120):
    """Resize frame maintaining aspect ratio"""
    height, width = frame.shape[:2]
    aspect_ratio = height / width
    new_height = int(new_width * aspect_ratio * 0.55)  # 0.55 to account for char height
    return cv2.resize(frame, (new_width, new_height))

def grayscale_to_ascii(gray_value):
    """Convert grayscale value (0-255) to ASCII character"""
    char_index = int((gray_value / 255) * (len(ASCII_CHARS) - 1))
    return ASCII_CHARS[char_index]

def frame_to_ascii(frame, width=120):
    """Convert a video frame to ASCII art"""
    # Resize frame
    frame = resize_frame(frame, width)
    
    # Convert to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Apply some contrast enhancement
    gray = cv2.equalizeHist(gray)
    
    # Convert to ASCII
    ascii_frame = []
    for row in gray:
        ascii_row = ''.join([grayscale_to_ascii(pixel) for pixel in row])
        ascii_frame.append(ascii_row)
    
    return ascii_frame

def video_to_ascii_frames(video_path, output_path, width=120, max_frames=300):
    """Convert video to ASCII frames and save as JSON"""
    
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print(f"Error: Could not open video {video_path}")
        return False
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    print(f"Video Info:")
    print(f"  FPS: {fps}")
    print(f"  Total Frames: {total_frames}")
    print(f"  Duration: {total_frames/fps:.2f}s")
    
    frames_data = {
        'fps': fps,
        'width': width,
        'frames': []
    }
    
    frame_count = 0
    processed = 0
    
    # Sample frames if video is too long
    frame_step = max(1, total_frames // max_frames)
    
    while True:
        ret, frame = cap.read()
        
        if not ret:
            break
        
        # Sample frames
        if frame_count % frame_step == 0:
            ascii_frame = frame_to_ascii(frame, width)
            frames_data['frames'].append(ascii_frame)
            processed += 1
            
            if processed % 10 == 0:
                print(f"Processed {processed} frames...")
            
            if processed >= max_frames:
                break
        
        frame_count += 1
    
    cap.release()
    
    # Save to JSON
    output_file = Path(output_path)
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w') as f:
        json.dump(frames_data, f)
    
    print(f"\nConversion complete!")
    print(f"Processed {processed} frames")
    print(f"Output: {output_file}")
    print(f"File size: {output_file.stat().st_size / 1024:.2f} KB")
    
    return True

def create_sample_animation(output_path, width=120, frames=60):
    """Create a sample animated ASCII sequence (fallback if no video)"""
    
    frames_data = {
        'fps': 30,
        'width': width,
        'frames': []
    }
    
    # Create animated text sequence
    texts = [
        "LOADING",
        "PORTFOLIO",
        "DILL-LK",
        "2026"
    ]
    
    for text in texts:
        for i in range(15):
            frame = []
            height = 40
            
            # Center the text
            text_row = height // 2
            text_col = (width - len(text) * 2) // 2
            
            for row in range(height):
                line = ' ' * width
                if row == text_row:
                    # Add text with animation
                    visible_chars = min(len(text), (i * len(text)) // 15)
                    animated_text = text[:visible_chars].center(width)
                    line = animated_text
                frame.append(line)
            
            frames_data['frames'].append(frame)
    
    # Save to JSON
    output_file = Path(output_path)
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w') as f:
        json.dump(frames_data, f)
    
    print(f"Sample animation created: {output_file}")
    return True

if __name__ == "__main__":
    if len(sys.argv) > 1:
        video_path = sys.argv[1]
        output_path = sys.argv[2] if len(sys.argv) > 2 else "public/ascii-frames/intro.json"
        width = int(sys.argv[3]) if len(sys.argv) > 3 else 120
        
        video_to_ascii_frames(video_path, output_path, width)
    else:
        print("Video-to-ASCII Converter")
        print("\nUsage:")
        print("  python3 video_to_ascii.py <video_path> [output_path] [width]")
        print("\nExample:")
        print("  python3 video_to_ascii.py intro_video.mp4 public/ascii-frames/intro.json 120")
        print("\nCreating sample animation...")
        create_sample_animation("public/ascii-frames/intro.json")
