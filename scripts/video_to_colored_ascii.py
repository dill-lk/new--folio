#!/usr/bin/env python3
"""
Video to Colored ASCII Converter
Converts video files to colored ASCII art frames with ANSI color support
"""

import cv2
import numpy as np
import json
import sys

# 16 ANSI color palette (RGB values)
ANSI_COLORS = [
    (0, 0, 0),         # 0: Black
    (170, 0, 0),       # 1: Red
    (0, 170, 0),       # 2: Green  
    (170, 85, 0),      # 3: Yellow
    (0, 0, 170),       # 4: Blue
    (170, 0, 170),     # 5: Magenta
    (0, 170, 170),     # 6: Cyan
    (170, 170, 170),   # 7: White
    (85, 85, 85),      # 8: Bright Black
    (255, 85, 85),     # 9: Bright Red
    (85, 255, 85),     # 10: Bright Green
    (255, 255, 85),    # 11: Bright Yellow
    (85, 85, 255),     # 12: Bright Blue
    (255, 85, 255),    # 13: Bright Magenta
    (85, 255, 255),    # 14: Bright Cyan
    (255, 255, 255),   # 15: Bright White
]

# ASCII characters from darkest to lightest
ASCII_CHARS = ' .`-_\':,;^=+/"|)\\<>)iv%xclrs{*}I?!][1taeo7zjLunT#JCwfy325Fp6mqSghVd4EgXPGZbYkOA&8U$@BNWM'

def rgb_to_ansi_color(r, g, b):
    """Find closest ANSI color to RGB value"""
    min_dist = float('inf')
    closest = 0
    
    for i, (ar, ag, ab) in enumerate(ANSI_COLORS):
        dist = (r - ar)**2 + (g - ag)**2 + (b - ab)**2
        if dist < min_dist:
            min_dist = dist
            closest = i
    
    return closest

def frame_to_colored_ascii(frame, width=100):
    """Convert a frame to colored ASCII art"""
    height, orig_width = frame.shape[:2]
    aspect_ratio = height / orig_width
    new_height = int(width * aspect_ratio * 0.55)  # Adjust for character aspect ratio
    
    # Resize frame
    resized = cv2.resize(frame, (width, new_height))
    
    # Convert to grayscale for character selection
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)
    
    # Enhance contrast
    gray = cv2.equalizeHist(gray)
    
    ascii_frame = []
    colors = []
    
    for row_idx in range(new_height):
        row_chars = []
        row_colors = []
        
        for col_idx in range(width):
            # Get grayscale value for character
            pixel_value = gray[row_idx, col_idx]
            char_idx = int((pixel_value / 255) * (len(ASCII_CHARS) - 1))
            char = ASCII_CHARS[char_idx]
            row_chars.append(char)
            
            # Get color value
            b, g, r = resized[row_idx, col_idx]
            color_idx = rgb_to_ansi_color(int(r), int(g), int(b))
            row_colors.append(color_idx)
        
        ascii_frame.append(''.join(row_chars))
        colors.append(row_colors)
    
    return ascii_frame, colors

def convert_video_to_colored_ascii(video_path, output_json, width=100):
    """Convert video to colored ASCII frames and save as JSON"""
    print(f"Opening video: {video_path}")
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print(f"Error: Could not open video {video_path}")
        return False
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    print(f"Video info: {total_frames} frames at {fps} FPS")
    print(f"ASCII width: {width} characters")
    print("Converting frames...")
    
    frames_data = []
    frame_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        ascii_frame, colors = frame_to_colored_ascii(frame, width)
        frames_data.append({
            'text': ascii_frame,
            'colors': colors
        })
        
        frame_count += 1
        if frame_count % 10 == 0:
            print(f"Processed {frame_count}/{total_frames} frames...")
    
    cap.release()
    
    # Save to JSON
    output_data = {
        'fps': fps,
        'frames': frames_data,
        'width': width,
        'totalFrames': len(frames_data)
    }
    
    print(f"\nSaving to {output_json}...")
    with open(output_json, 'w') as f:
        json.dump(output_data, f)
    
    file_size = len(json.dumps(output_data)) / 1024 / 1024
    print(f"✓ Complete! {len(frames_data)} frames saved ({file_size:.2f} MB)")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 video_to_colored_ascii.py <input_video> <output_json> [width]")
        print("Example: python3 video_to_colored_ascii.py video.mp4 intro.json 100")
        sys.exit(1)
    
    video_path = sys.argv[1]
    output_json = sys.argv[2]
    width = int(sys.argv[3]) if len(sys.argv) > 3 else 100
    
    success = convert_video_to_colored_ascii(video_path, output_json, width)
    sys.exit(0 if success else 1)
