# YouTube to Colorful ASCII Conversion Guide

Complete guide for converting YouTube videos to colorful ASCII intros for your portfolio.

## 🎬 Overview

This system allows you to:
1. Download any YouTube video
2. Convert it to colored ASCII art (16 ANSI colors)
3. Use it as a cinematic intro for your portfolio

The result is a professional, colorful, pixelated intro that plays from real video footage!

## 📋 Requirements

### Python Dependencies

```bash
pip install yt-dlp opencv-python numpy
```

- **yt-dlp**: YouTube video downloader
- **opencv-python**: Video processing
- **numpy**: Color calculations

## 🚀 Quick Start

### Step 1: Download Video from YouTube

```bash
python3 scripts/youtube_downloader.py "YOUTUBE_URL" output.mp4 480p
```

**Parameters:**
- `YOUTUBE_URL`: Full YouTube video URL
- `output.mp4`: Where to save the video
- `480p`: Video quality (720p, 480p, or 360p)

**Example:**
```bash
python3 scripts/youtube_downloader.py \
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ" \
  intro_video.mp4 \
  480p
```

### Step 2: Convert to Colored ASCII

```bash
python3 scripts/video_to_colored_ascii.py input.mp4 output.json width
```

**Parameters:**
- `input.mp4`: Video file from step 1
- `output.json`: Where to save ASCII frames
- `width`: ASCII width in characters (60-150 recommended)

**Example:**
```bash
python3 scripts/video_to_colored_ascii.py \
  intro_video.mp4 \
  public/ascii-frames/intro.json \
  100
```

### Step 3: Build and Deploy

```bash
npm run build
# Deploy to Vercel, Netlify, etc.
```

## 🎨 Color System

### 16 ANSI Color Palette

The converter maps video colors to 16 ANSI terminal colors:

| Index | Color | RGB | Hex |
|-------|-------|-----|-----|
| 0 | Black | (0,0,0) | #000000 |
| 1 | Red | (170,0,0) | #aa0000 |
| 2 | Green | (0,170,0) | #00aa00 |
| 3 | Yellow | (170,85,0) | #aa5500 |
| 4 | Blue | (0,0,170) | #0000aa |
| 5 | Magenta | (170,0,170) | #aa00aa |
| 6 | Cyan | (0,170,170) | #00aaaa |
| 7 | White | (170,170,170) | #aaaaaa |
| 8 | Bright Black | (85,85,85) | #555555 |
| 9 | Bright Red | (255,85,85) | #ff5555 |
| 10 | Bright Green | (85,255,85) | #55ff55 |
| 11 | Bright Yellow | (255,255,85) | #ffff55 |
| 12 | Bright Blue | (85,85,255) | #5555ff |
| 13 | Bright Magenta | (255,85,255) | #ff55ff |
| 14 | Bright Cyan | (85,255,255) | #55ffff |
| 15 | Bright White | (255,255,255) | #ffffff |

### Character Density Mapping

90 characters from darkest to lightest:
```
 .`-_':,;^=+/"|)\\<>)iv%xclrs{*}I?!][1taeo7zjLunT#JCwfy325Fp6mqSghVd4EgXPGZbYkOA&8U$@BNWM
```

## 📐 Width Recommendations

| Width | Use Case | File Size | Detail |
|-------|----------|-----------|--------|
| 60 | Mobile, minimal | Small (~500KB) | Low |
| 80 | Standard intro | Medium (~700KB) | Medium |
| 100 | Recommended | Medium (~900KB) | Good |
| 120 | High detail | Large (~1.2MB) | High |
| 150 | Maximum detail | Very Large (~1.8MB) | Very High |

**Recommendation:** Start with 100 characters width for best balance.

## 🎯 Video Selection Tips

### Best Types of Videos:

1. **High Contrast**: Clear subjects, good lighting
2. **Simple Compositions**: Not too busy
3. **Slow Motion**: Captures more detail
4. **Bold Colors**: Work better with 16-color palette
5. **Short Duration**: 5-10 seconds ideal

### Avoid:

- Very dark or low-contrast videos
- Extremely busy scenes
- Videos with fine text (gets pixelated)
- Very long videos (large file size)

## 📊 Output Format

The JSON output contains:

```json
{
  "fps": 30,
  "width": 100,
  "totalFrames": 210,
  "frames": [
    {
      "text": ["line1", "line2", ...],
      "colors": [[0,1,2,...], [0,1,2,...], ...]
    }
  ]
}
```

**Fields:**
- `fps`: Frames per second from original video
- `width`: ASCII width in characters
- `totalFrames`: Total number of frames
- `frames`: Array of frame data
  - `text`: Array of ASCII text lines
  - `colors`: 2D array of color indices (0-15)

## 🔧 Advanced Usage

### Custom Width for Different Sections

```bash
# Mobile-optimized (smaller)
python3 scripts/video_to_colored_ascii.py video.mp4 public/ascii-frames/mobile.json 60

# Desktop (larger, more detail)
python3 scripts/video_to_colored_ascii.py video.mp4 public/ascii-frames/desktop.json 120
```

### Processing Only Part of Video

Use ffmpeg to trim first:
```bash
ffmpeg -i input.mp4 -ss 00:00:05 -t 00:00:10 -c copy trimmed.mp4
python3 scripts/video_to_colored_ascii.py trimmed.mp4 output.json 100
```

### Optimizing File Size

1. Use lower width (60-80)
2. Shorter duration (5-7 seconds)
3. Lower video quality when downloading (360p)
4. Trim unnecessary frames

## 🎬 Integration

The `ColorfulVideoASCIIIntro` component automatically:
- Loads JSON from `/ascii-frames/intro.json`
- Renders with correct FPS timing
- Shows progress bar
- Allows skipping
- Stores completion in sessionStorage

## 🐛 Troubleshooting

### "yt-dlp not found"
```bash
pip install yt-dlp
# or
pip3 install yt-dlp
```

### "opencv not found"
```bash
pip install opencv-python
# or
pip3 install opencv-python
```

### Video download fails
- Check YouTube URL is valid
- Try different quality (360p instead of 720p)
- Some videos may be region-locked

### File too large
- Use smaller width (60-80)
- Shorter video duration
- Lower video quality

### Colors look wrong
- This is normal with 16-color palette
- Try videos with bolder, simpler colors
- High-contrast videos work best

## 📝 Example Workflow

Complete example from YouTube to deployed intro:

```bash
# 1. Download video (10 seconds, 480p)
python3 scripts/youtube_downloader.py \
  "https://youtube.com/watch?v=EXAMPLE" \
  my_intro.mp4 \
  480p

# 2. Optional: Trim to first 7 seconds
ffmpeg -i my_intro.mp4 -ss 0 -t 7 -c copy trimmed.mp4

# 3. Convert to colored ASCII (100 chars wide)
python3 scripts/video_to_colored_ascii.py \
  trimmed.mp4 \
  public/ascii-frames/intro.json \
  100

# 4. Build Next.js project
npm run build

# 5. Test locally
npm run start
# Visit http://localhost:3000

# 6. Deploy
# Push to GitHub and deploy via Vercel/Netlify
```

## 🎨 Customization

### Change Colors

Edit `components/ColorfulVideoASCIIIntro.tsx`:
```typescript
const ANSI_COLORS = [
  '#000000', // Customize these!
  '#ff0000', // Your colors here
  // ... 14 more colors
];
```

### Adjust Playback

Modify frame delay or add effects in the component.

### Different Intro Files

Change the fetch path:
```typescript
fetch('/ascii-frames/my-custom-intro.json')
```

## 🚀 Performance

- Canvas rendering: 60 FPS target
- File loading: Async with loading state
- Memory: Minimal (frames loaded once)
- Build time: ~4 seconds
- Compatible: All modern browsers

## 📚 Additional Resources

- [yt-dlp Documentation](https://github.com/yt-dlp/yt-dlp)
- [OpenCV Python Tutorials](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html)
- [ANSI Color Codes](https://en.wikipedia.org/wiki/ANSI_escape_code)

---

**Result:** Professional, colorful, cinematic ASCII intro from any YouTube video! 🎬🌈
