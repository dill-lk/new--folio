# Portfolio Customization Guide

## 🎨 Changing Content

### Personal Information
Edit `app/page.tsx` to customize:

1. **Hero Section** (lines 18-60)
   - ASCII logo
   - Title and subtitle
   - Navigation buttons

2. **About Section** (lines 68-91)
   - Personal description
   - Background info

3. **Projects Section** (lines 93-143)
   - Project titles and descriptions
   - Technology stacks
   - Links to repositories

4. **Skills Section** (lines 145-198)
   - Skill names and percentages
   - Progress bars

5. **Contact Section** (lines 200-248)
   - Email, GitHub, LinkedIn links
   - Footer text

## 🎭 Styling

### Colors
All styling is in `app/globals.css`. The portfolio uses:
- **Background**: #000000 (pure black)
- **Foreground**: #ffffff (pure white)

To change colors, update the `:root` variables (lines 4-7).

### Fonts
Using Google Fonts:
- **Press Start 2P** - Main pixelated font
- **VT323** - Monospace font for ASCII art

Change fonts in the `@import` statement (line 1) and body styling.

### Animations
Customize animation timing in `app/globals.css`:
- Animation durations (lines 35-106)
- Delay utilities (lines 181-209)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Run Development Server
```bash
npm run dev
```

### Deploy to Vercel
```bash
npx vercel
```

## 📝 Adding New Sections

1. Add a new section in `app/page.tsx`
2. Follow the existing pattern:
   ```tsx
   <section id="new-section" className="min-h-screen flex items-center justify-center p-8">
     <div className="max-w-4xl w-full">
       <h2 className="text-3xl md:text-4xl mb-8 animate-slideInLeft">
         {`>`} NEW_SECTION
       </h2>
       {/* Your content here */}
     </div>
   </section>
   ```
3. Add navigation link in the Hero section

## 🎮 ASCII Art

Generate ASCII art at:
- https://patorjk.com/software/taag/
- Use "ANSI Shadow" font for best results

## 💡 Tips

- Keep the black & white theme for consistency
- Use `pixel-border` class for retro borders
- Add `animate-fadeIn delay-XXX` for staggered animations
- Test on mobile devices (responsive design included)

## 🎮 Interactive WebGL Features

### WebGL Background
The portfolio now includes a WebGL background with custom shaders that react to mouse movement.

**Component**: `components/PixelatedBackground.tsx`

**Customization Options:**
```typescript
// Adjust pixelation level (line 17)
pixelSize: { value: 8.0 }  // Lower = more pixels, Higher = more pixelated

// Adjust animation speed (line 69)
float pat = pattern(pixelUV, time * 0.5);  // Change 0.5 to speed up/slow down

// Adjust mouse influence distance (line 63)
float mouseInfluence = smoothstep(0.3, 0.0, dist);  // Change 0.3 to adjust range
```

### Mouse-Reactive Text
Text elements respond to cursor proximity with multiple effects.

**Component**: `components/MouseReactiveText.tsx`

**Customization Options:**
```typescript
// Adjust interaction distance (line 89)
const maxDistance = 150;  // Pixels from mouse

// Adjust push strength (line 97)
const pushX = -Math.cos(angle) * force * 20;  // Change 20 for more/less push

// Adjust rotation amount (line 101)
const rotation = force * 15 * (index % 2 === 0 ? 1 : -1);  // Change 15

// Adjust pixelation intensity (line 107)
const pixelLevel = 1 + force * 3;  // Change 3 for more/less pixelation
```

### Usage
```tsx
import MouseReactiveText from '@/components/MouseReactiveText';

<MouseReactiveText 
  text="YOUR TEXT HERE" 
  as="h1"  // or h2, h3, p, span
  className="your-classes"
/>
```

### Performance Tips
- The WebGL background uses GPU acceleration
- Mouse tracking is throttled for performance
- Text effects use CSS transforms (GPU-accelerated)
- Both components are optimized for 60fps

### Disabling Effects
To disable WebGL background, remove the `<PixelatedBackground />` component from `app/page.tsx`.

To use static text instead of reactive, replace `<MouseReactiveText />` with regular HTML elements.
