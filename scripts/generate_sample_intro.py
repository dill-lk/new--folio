#!/usr/bin/env python3
"""Generate sample ASCII intro animation"""

import json
from pathlib import Path

ASCII_CHARS = " .:-=+*#%@"

def create_cinematic_intro(output_path, width=100, height=30):
    """Create a cinematic ASCII intro sequence"""
    
    frames_data = {
        'fps': 30,
        'width': width,
        'height': height,
        'frames': []
    }
    
    # Scene 1: Fade in "DILL-LK"
    text1 = "DILL-LK"
    for frame_num in range(45):
        frame = []
        intensity = min(1.0, frame_num / 30)
        
        for row in range(height):
            line = []
            for col in range(width):
                # Center text
                text_row = height // 2
                text_start = (width - len(text1) * 2) // 2
                
                if row == text_row and text_start <= col < text_start + len(text1) * 2:
                    char_index = (col - text_start) // 2
                    if char_index < len(text1):
                        # Use intensity for fade
                        char = text1[char_index] if intensity > 0.3 else ' '
                        line.append(char)
                    else:
                        line.append(' ')
                else:
                    # Add some noise
                    if frame_num > 20 and (row + col + frame_num) % 17 == 0:
                        line.append(ASCII_CHARS[frame_num % len(ASCII_CHARS)])
                    else:
                        line.append(' ')
            
            frame.append(''.join(line))
        
        frames_data['frames'].append(frame)
    
    # Scene 2: Matrix effect transition
    for frame_num in range(30):
        frame = []
        for row in range(height):
            line = []
            for col in range(width):
                if (row + frame_num) % 3 == col % 3:
                    line.append(ASCII_CHARS[(row + col + frame_num) % len(ASCII_CHARS)])
                else:
                    line.append(' ')
            frame.append(''.join(line))
        
        frames_data['frames'].append(frame)
    
    # Scene 3: "PORTFOLIO" reveal
    text2 = "PORTFOLIO"
    for frame_num in range(45):
        frame = []
        revealed_chars = min(len(text2), (frame_num * len(text2)) // 30)
        
        for row in range(height):
            line = []
            for col in range(width):
                text_row = height // 2
                text_start = (width - len(text2) * 2) // 2
                
                if row == text_row and text_start <= col < text_start + len(text2) * 2:
                    char_index = (col - text_start) // 2
                    if char_index < revealed_chars:
                        line.append(text2[char_index])
                    else:
                        line.append(ASCII_CHARS[(row + col + frame_num) % len(ASCII_CHARS)])
                else:
                    line.append(' ')
            
            frame.append(''.join(line))
        
        frames_data['frames'].append(frame)
    
    # Scene 4: "2026" with effects
    text3 = "2026"
    for frame_num in range(60):
        frame = []
        
        for row in range(height):
            line = []
            for col in range(width):
                text_row = height // 2
                text_start = (width - len(text3) * 3) // 2
                
                # Create expanding circles
                center_x = width // 2
                center_y = height // 2
                distance = ((col - center_x) ** 2 + (row - center_y) ** 2) ** 0.5
                wave = int(distance - frame_num * 0.5) % 10
                
                if row == text_row and text_start <= col < text_start + len(text3) * 3:
                    char_index = (col - text_start) // 3
                    if char_index < len(text3) and frame_num > 15:
                        line.append(text3[char_index])
                    else:
                        line.append(' ')
                elif wave < 2:
                    line.append(ASCII_CHARS[wave % len(ASCII_CHARS)])
                else:
                    line.append(' ')
            
            frame.append(''.join(line))
        
        frames_data['frames'].append(frame)
    
    # Scene 5: Fade out
    for frame_num in range(30):
        frame = []
        fade = 1.0 - (frame_num / 30)
        
        for row in range(height):
            line = []
            for col in range(width):
                if (row + col + frame_num) % int(max(1, 5 / max(0.1, fade))) == 0:
                    line.append(ASCII_CHARS[0])
                else:
                    line.append(' ')
            
            frame.append(''.join(line))
        
        frames_data['frames'].append(frame)
    
    # Save to JSON
    output_file = Path(output_path)
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w') as f:
        json.dump(frames_data, f, indent=2)
    
    print(f"✅ Created cinematic intro with {len(frames_data['frames'])} frames")
    print(f"📁 Output: {output_file}")
    print(f"📊 File size: {output_file.stat().st_size / 1024:.2f} KB")
    print(f"⏱️  Duration: {len(frames_data['frames']) / frames_data['fps']:.2f}s")
    
    return True

if __name__ == "__main__":
    create_cinematic_intro("public/ascii-frames/intro.json")
