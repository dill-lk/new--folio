# 🌌 Neural Bridge - Living Organism Portfolio

A highly technical, cinematic ASCII art portfolio that functions as a **Living Organism**. Built entirely with ASCII characters and pixel art, creating an interactive, breathing digital ecosystem.

![Neural Bridge Portfolio](https://github.com/user-attachments/assets/c2d316b1-d419-4703-9948-069895f0b5bc)

## Character Set
`.'-:;^=+/"|)\\<>iv%xclrs{*}I?!]`

## Features

### 🌊 Dynamic ASCII Particle Sea
- 300+ ocean particles creating a living, flowing background
- Smooth wave motion using mathematical sine/cosine functions
- Infinite ocean with particle wrapping
- Breathing pulse animation (4-second cycle)

### ⚡ Digital Distortion System
- Mouse proximity detection (100px radius)
- Real-time character transformation: `.` → `xclrs{}`
- Chromatic glitch effects with magenta, cyan, red, green colors
- Activity level tracking: IDLE → ACTIVE → HIGH

### 🎮 Pixel Creatures (Animal Garden Style)
- Retro 8x8 pixel art sprites (3 different creature types)
- Autonomous AI movement with edge collision detection
- Smooth frame-by-frame animation
- Interactive: Click anywhere to spawn new creatures (up to 20)

### 📡 Info Stream System
Every 10 seconds, a scrolling info message appears:
- `[INFO: Searching for a Pure Signal...]`
- `[INFO: Neural Bridge Connection Established...]`
- `[INFO: සංඥා සෙවීම (Signal Search)...]`
- And more... (9 different messages in English and Sinhala)

### 🧠 Neural Connection Map
- 5 neural pathways drawn with ASCII characters `| / - \`
- Energy pulse system that reacts to mouse proximity
- Smooth fade-out decay animation
- Random pulse generation for "thinking" effect

### 📊 Game-Style UI
- **Stats Panel** (top-right): Neural Sync, Ocean Flow, Distortion bars
- **Creature Info** (top-left): Organism count, activity level, signal strength
- **Signal Indicator**: `█████░░░░░` style visualization

### 🎨 Retro Aesthetic
- Pixel-perfect rendering with `image-rendering: pixelated`
- CRT scanline effect
- 3x3 pixel grid overlay
- Custom 16x16 checkerboard cursor
- Retro color palette: `#00ff00`, `#00ffff`, `#00ff88`

## Technical Details

### Performance
- **60 FPS** target rendering
- **GPU-accelerated** multi-canvas architecture
- **Efficient particle pooling** system
- Frame-independent animation timing

### Canvas Layers (Z-index)
1. `ocean-canvas` (z:1) - Particle sea background
2. `distortion-canvas` (z:2) - Mouse distortion effects
3. `creatures-canvas` (z:3) - Pixel art sprites
4. `pixel-grid` (z:4) - Grid overlay
5. `crt-overlay` (z:5) - Scanline effect
6. `neural-canvas` (z:6) - Neural connections

### Mathematics
- **Wave motion**: `x += sin(time * 0.001 + phase) * 2`
- **Distance calculation**: `sqrt(dx² + dy²)`
- **Velocity physics**: `vx *= 0.98` (damping)
- **Sine wave bobbing**: `sin(frame) * 2`

## How to Interact

1. **Move Mouse** → Particles transform into distortion characters
2. **Click** → Spawn new pixel creature + particle burst
3. **Watch** → Creatures move autonomously, ocean flows
4. **Wait 10s** → Info stream message scrolls by

## Files

- `index.html` - Main Neural Bridge portfolio (final version)
- `neural-bridge.html` - Source version
- `ascii-portfolio.html` - Basic ASCII version
- `cinematic-portfolio.html` - Advanced cinematic features
- `cinematic-simulation.html` - Full GPU-accelerated simulation

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Requires JavaScript enabled and HTML5 Canvas support.

## Credits

Character set design and Living Organism concept by user specification.

---

**මේක නිකන්ම වෙබ් පේජ් එකක් නෙවෙයි, මේක අකුරු සහ පික්සල් වලින් හැදුණු Living Organism එකක්!**

*This isn't just a webpage, it's a Living Organism made from characters and pixels!*
