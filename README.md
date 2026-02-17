# Pixelated Portfolio - Black & White Theme

A modern, fully animated portfolio website with a retro pixelated aesthetic. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎮 **Retro Pixelated Design** - Authentic 8-bit gaming aesthetic
- ⚫⚪ **Strict Black & White** - Minimalist color palette
- 🎨 **ASCII Art Elements** - Custom logo and decorations
- 💫 **Fully Animated** - Smooth transitions and effects
- 🌐 **Interactive WebGL** - Mouse-reactive background with custom shaders
- 🖱️ **Mouse-Reactive Text** - Text responds to cursor proximity
- 📺 **CRT Screen Effect** - Authentic retro monitor simulation
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized Next.js build
- 🎯 **SEO Ready** - Proper metadata and structure
- ✅ **Production Ready** - Static export with no 404 errors

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dill-lk/new--folio.git
cd new--folio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Production Build

Build for production:
```bash
npm run build
```

This creates an optimized static export in the `out/` directory that can be deployed anywhere.

Test production build locally:
```bash
npx serve out
```

## 🚀 Deployment

This portfolio is ready to deploy! See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options:

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages:**
Push to `main` branch and enable GitHub Actions in repository settings.

### ✅ No 404 Errors

The portfolio is configured with:
- Static HTML export (`output: 'export'`)
- Custom 404 page with ASCII art
- Proper routing configuration
- Deployment configs for all major platforms

## 📁 Project Structure

```
new--folio/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx       # Root layout with effects
│   └── page.tsx         # Main portfolio page
├── public/              # Static assets
├── CUSTOMIZATION.md     # Detailed customization guide
└── README.md           # This file
```

## 🎨 Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions on:
- Editing personal information
- Customizing colors and fonts
- Adding new sections
- Modifying animations
- Creating custom ASCII art

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Create optimized production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Press Start 2P, VT323
- **Animations**: Custom CSS keyframes
- **Effects**: CRT screen, scanlines, pixel borders

## 🎮 Sections Included

1. **Hero** - ASCII logo with animated entrance
2. **About** - Personal introduction
3. **Projects** - Showcase of work (4 projects)
4. **Skills** - Tech stack with progress bars
5. **Contact** - Social links and email

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

## 📸 Screenshots

### Hero Section
![Hero](https://github.com/user-attachments/assets/61f2b7f6-2ea6-4a9f-a792-9b50b94e44f0)

### About Section
![About](https://github.com/user-attachments/assets/0f3676af-ecba-4fed-afa8-8306f8f1686d)

## 🎯 Design Philosophy

This portfolio embraces a retro gaming aesthetic while maintaining modern web standards:
- **Minimalist**: Black & white only, no distractions
- **Nostalgic**: ASCII art and pixelated fonts
- **Animated**: Smooth, purposeful animations
- **Accessible**: Semantic HTML and proper contrast
- **Fast**: Optimized for performance

## 📝 License

This project is open source and available under the MIT License.

## �� Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Created by [Your Name]
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Made with ♥ in PIXELATED 2026**

## 🎬 Cinematic ASCII Intro

The portfolio features an epic cinematic ASCII intro sequence on first visit!

### Features:
- **Particle Effects**: ASCII characters construct letters from hundreds of particles
- **Matrix Rain**: Cascading green-style ASCII rain effect
- **3D ASCII Cube**: Rotating wireframe cube made entirely of ASCII characters
- **Glitch Transitions**: Screen-slice glitch effects between scenes
- **Multi-Scene Timeline**: 8 distinct animated scenes

### ASCII Characters Used:
```
. / * \ ` % # @ + - = ~
```

Small characters dynamically form large text like "WELCOME" and "2026".

### Controls:
- **Skip Button**: Bottom right corner to skip intro
- **Auto-play**: Plays once per session
- **Scene Indicator**: Bottom left shows current scene

### Technical:
- Canvas-based 60 FPS animations
- Particle physics simulation
- 3D matrix transformations
- Real-time character generation
- Session storage for one-time viewing

This is **true 2026 technology** - a fully cinematic ASCII video experience!

## 🎬 Professional Video-to-ASCII System

The portfolio now uses a **professional video-to-ASCII conversion system** instead of procedural animations!

### Why This is Better:
- ✅ **Cinematic Quality**: Real video sources
- ✅ **Professional Look**: Not childish or procedural
- ✅ **Customizable**: Use ANY video
- ✅ **Predictable**: Same playback every time
- ✅ **High Quality**: 90-character density mapping

### Quick Start

**Use the Sample:**
```bash
python3 scripts/generate_sample_intro.py
```
Creates a 7-second intro (210 frames, 679KB)

**Convert Your Own Video:**
```bash
python3 scripts/video_to_ascii.py your_video.mp4 public/ascii-frames/intro.json 120
```

**Requirements:**
```bash
pip install opencv-python numpy
```

### Character Mapping

90-character gradient (dark → light):
```
 .`-_':,;^=+/"|)\\<>)iv%xclrs{*}I?!][1taeo7zjLunT#JCwfy325Fp6mqSghVd4EgXPGZbYkOA&8U$@BNWM
```

### Output Format

```json
{
  "fps": 30,
  "width": 100,
  "height": 30,
  "frames": [["line1", "line2", ...], ...]
}
```

### Full Documentation

See [VIDEO_TO_ASCII.md](./VIDEO_TO_ASCII.md) for complete guide including:
- Video recommendations
- Optimization tips
- Advanced usage
- Troubleshooting
- Examples

**This is a professional, production-ready system for cinematic ASCII intros!**
