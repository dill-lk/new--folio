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
