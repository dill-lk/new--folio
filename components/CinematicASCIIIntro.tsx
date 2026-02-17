'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  char: string;
  speed: number;
  opacity: number;
  angle: number;
  radius: number;
}

export default function CinematicASCIIIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = ['.', '/', '*', '\\', '`', '%', '#', '@', '+', '-', '=', '~', '|', '_', '^', '<', '>', 'o', 'x', '▓', '▒', '░'];
    let particles: Particle[] = [];
    let frame = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Enhanced particle text formation
    const createParticleText = (text: string, scale = 1, explosion = false) => {
      particles = [];
      const fontSize = 60 * scale;
      ctx.font = `bold ${fontSize}px "Press Start 2P", monospace`;
      const textWidth = ctx.measureText(text).width;
      
      const startX = (canvas.width - textWidth) / 2;
      const startY = canvas.height / 2;

      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = textWidth + 100;
      tempCanvas.height = fontSize + 100;
      tempCtx.font = ctx.font;
      tempCtx.fillStyle = 'white';
      tempCtx.fillText(text, 50, fontSize);

      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      
      for (let y = 0; y < imageData.height; y += 3) {
        for (let x = 0; x < imageData.width; x += 3) {
          const index = (y * imageData.width + x) * 4;
          if (imageData.data[index + 3] > 128) {
            const targetX = startX + x - 50;
            const targetY = startY + y - fontSize;
            const angle = Math.atan2(targetY - centerY, targetX - centerX);
            
            particles.push({
              x: explosion ? targetX : Math.random() * canvas.width,
              y: explosion ? targetY : Math.random() * canvas.height,
              vx: explosion ? Math.cos(angle) * (5 + Math.random() * 10) : 0,
              vy: explosion ? Math.sin(angle) * (5 + Math.random() * 10) : 0,
              targetX,
              targetY,
              char: chars[Math.floor(Math.random() * chars.length)],
              speed: 0.05 + Math.random() * 0.1,
              opacity: 0,
              angle: 0,
              radius: 0,
            });
          }
        }
      }
    };

    // Spiral particle formation
    const createSpiralParticles = () => {
      particles = [];
      for (let i = 0; i < 500; i++) {
        const angle = (i / 500) * Math.PI * 8;
        const radius = (i / 500) * 300;
        particles.push({
          x: centerX,
          y: centerY,
          vx: 0,
          vy: 0,
          targetX: centerX + Math.cos(angle) * radius,
          targetY: centerY + Math.sin(angle) * radius,
          char: chars[Math.floor(Math.random() * chars.length)],
          speed: 0.08,
          opacity: 0,
          angle: angle,
          radius: radius,
        });
      }
    };

    // DNA helix
    const createDNAHelix = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        const z = (i / 100) * 400 - 200;
        const angle1 = (i / 100) * Math.PI * 6;
        const angle2 = angle1 + Math.PI;
        const radius = 100;
        
        particles.push({
          x: centerX + Math.cos(angle1) * radius,
          y: centerY + z,
          vx: 0,
          vy: 0,
          targetX: centerX + Math.cos(angle1) * radius,
          targetY: centerY + z,
          char: chars[Math.floor(Math.random() * chars.length)],
          speed: 0.1,
          opacity: 1,
          angle: angle1,
          radius: radius,
        });
        
        particles.push({
          x: centerX + Math.cos(angle2) * radius,
          y: centerY + z,
          vx: 0,
          vy: 0,
          targetX: centerX + Math.cos(angle2) * radius,
          targetY: centerY + z,
          char: chars[Math.floor(Math.random() * chars.length)],
          speed: 0.1,
          opacity: 1,
          angle: angle2,
          radius: radius,
        });
      }
    };

    // Matrix rain with more columns
    const matrixColumns: number[] = [];
    const columnChars: string[] = [];
    const columnSpeeds: number[] = [];
    const columnCount = Math.floor(canvas.width / 15);
    
    for (let i = 0; i < columnCount; i++) {
      matrixColumns[i] = Math.random() * canvas.height;
      columnChars[i] = chars[Math.floor(Math.random() * chars.length)];
      columnSpeeds[i] = 1 + Math.random() * 3;
    }

    // 3D shapes rotation
    let rotation = 0;

    // 3D Sphere
    const drawASCIISphere = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px "Press Start 2P", monospace';
      ctx.fillStyle = '#ffffff';

      const radius = 150;
      for (let lat = 0; lat < Math.PI; lat += 0.2) {
        for (let lon = 0; lon < 2 * Math.PI; lon += 0.2) {
          const x = radius * Math.sin(lat) * Math.cos(lon);
          const y = radius * Math.sin(lat) * Math.sin(lon);
          const z = radius * Math.cos(lat);

          const rotX = x * Math.cos(rotation) - z * Math.sin(rotation);
          const rotZ = x * Math.sin(rotation) + z * Math.cos(rotation);
          const rotY = y * Math.cos(rotation * 0.7) - rotZ * Math.sin(rotation * 0.7);
          const finalZ = y * Math.sin(rotation * 0.7) + rotZ * Math.cos(rotation * 0.7);

          const scale = 300 / (finalZ + 400);
          const screenX = centerX + rotX * scale;
          const screenY = centerY + rotY * scale;

          const brightness = (finalZ + radius) / (2 * radius);
          ctx.globalAlpha = brightness;
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], screenX, screenY);
        }
      }
      ctx.globalAlpha = 1;
      rotation += 0.03;
    };

    // 3D Torus
    const drawASCIITorus = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '10px "VT323", monospace';
      ctx.fillStyle = '#ffffff';

      const R = 100;
      const r = 50;
      for (let u = 0; u < 2 * Math.PI; u += 0.15) {
        for (let v = 0; v < 2 * Math.PI; v += 0.15) {
          const x = (R + r * Math.cos(v)) * Math.cos(u);
          const y = (R + r * Math.cos(v)) * Math.sin(u);
          const z = r * Math.sin(v);

          const rotX = x * Math.cos(rotation) - z * Math.sin(rotation);
          const rotZ = x * Math.sin(rotation) + z * Math.cos(rotation);
          const rotY = y;

          const scale = 200 / (rotZ + 300);
          const screenX = centerX + rotX * scale;
          const screenY = centerY + rotY * scale;

          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], screenX, screenY);
        }
      }
      rotation += 0.02;
    };

    // Tunnel effect
    const drawASCIITunnel = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '16px "VT323", monospace';

      for (let y = 0; y < canvas.height; y += 20) {
        for (let x = 0; x < canvas.width; x += 20) {
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);

          const depth = (distance + frame * 5) % 200;
          const brightness = 1 - (depth / 200);
          const charIndex = Math.floor((angle + Math.PI) / (2 * Math.PI) * chars.length);

          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.fillText(chars[charIndex % chars.length], x, y);
        }
      }
    };

    // Fire effect
    const fireBuffer: number[][] = [];
    const fireWidth = Math.floor(canvas.width / 8);
    const fireHeight = Math.floor(canvas.height / 8);
    
    for (let y = 0; y < fireHeight; y++) {
      fireBuffer[y] = [];
      for (let x = 0; x < fireWidth; x++) {
        fireBuffer[y][x] = 0;
      }
    }

    const drawASCIIFire = () => {
      // Add fire source at bottom
      for (let x = 0; x < fireWidth; x++) {
        fireBuffer[fireHeight - 1][x] = Math.random() > 0.5 ? 255 : 0;
      }

      // Propagate fire upward
      for (let y = 0; y < fireHeight - 1; y++) {
        for (let x = 0; x < fireWidth; x++) {
          const below = fireBuffer[y + 1][x] || 0;
          const left = fireBuffer[y + 1][(x - 1 + fireWidth) % fireWidth] || 0;
          const right = fireBuffer[y + 1][(x + 1) % fireWidth] || 0;
          fireBuffer[y][x] = ((below + left + right) / 3) * 0.95;
        }
      }

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '16px "VT323", monospace';

      for (let y = 0; y < fireHeight; y++) {
        for (let x = 0; x < fireWidth; x++) {
          const heat = fireBuffer[y][x];
          if (heat > 20) {
            const charIndex = Math.floor((heat / 255) * chars.length);
            ctx.fillStyle = `rgba(255, 255, 255, ${heat / 255})`;
            ctx.fillText(chars[Math.min(charIndex, chars.length - 1)], x * 8, y * 8);
          }
        }
      }
    };

    // Enhanced Matrix rain
    const drawEnhancedMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '16px "VT323", monospace';

      for (let i = 0; i < columnCount; i++) {
        const char = columnChars[i];
        const x = i * 15;
        const y = matrixColumns[i];

        // Leading bright character
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 1;
        ctx.fillText(char, x, y);

        // Trail
        for (let j = 1; j < 10; j++) {
          ctx.globalAlpha = 1 - (j / 10);
          ctx.fillStyle = '#00ff00';
          ctx.fillText(
            chars[Math.floor(Math.random() * chars.length)],
            x,
            y - j * 20
          );
        }

        if (y > canvas.height && Math.random() > 0.975) {
          matrixColumns[i] = 0;
          columnChars[i] = chars[Math.floor(Math.random() * chars.length)];
        }

        matrixColumns[i] += columnSpeeds[i];
      }
      ctx.globalAlpha = 1;
    };

    // RGB Split glitch
    const drawRGBSplit = () => {
      const offset = 10 + Math.random() * 20;
      
      // Save current canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw text with RGB split
      ctx.font = '80px "Press Start 2P", monospace';
      const text = 'GLITCH';
      const textWidth = ctx.measureText(text).width;
      const x = (canvas.width - textWidth) / 2;
      const y = canvas.height / 2;

      ctx.fillStyle = '#ff0000';
      ctx.fillText(text, x - offset, y);
      
      ctx.fillStyle = '#00ff00';
      ctx.fillText(text, x, y);
      
      ctx.fillStyle = '#0000ff';
      ctx.fillText(text, x + offset, y);

      // Add scan lines
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, i, canvas.width, 2);
      }
    };

    // Wave effect
    const drawWaveEffect = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '20px "VT323", monospace';
      ctx.fillStyle = '#ffffff';

      for (let y = 0; y < canvas.height; y += 25) {
        for (let x = 0; x < canvas.width; x += 25) {
          const wave = Math.sin((x / 50) + (frame / 10)) * Math.cos((y / 50) + (frame / 10));
          const char = chars[Math.floor((wave + 1) * chars.length / 2)];
          const alpha = (wave + 1) / 2;
          
          ctx.globalAlpha = alpha;
          ctx.fillText(char, x, y);
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawParticles = (exploding = false) => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px "VT323", monospace';

      particles.forEach(particle => {
        if (exploding) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.98;
          particle.vy *= 0.98;
        } else {
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          particle.x += dx * particle.speed;
          particle.y += dy * particle.speed;
        }

        if (particle.opacity < 1) {
          particle.opacity += 0.02;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });
    };

    const drawSpiralEffect = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '14px "VT323", monospace';

      particles.forEach(particle => {
        particle.angle += 0.05;
        particle.x = centerX + Math.cos(particle.angle) * particle.radius;
        particle.y = centerY + Math.sin(particle.angle) * particle.radius;

        if (particle.opacity < 1) {
          particle.opacity += 0.03;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });
    };

    const drawDNAEffect = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px "VT323", monospace';

      particles.forEach(particle => {
        particle.angle += 0.02;
        particle.x = centerX + Math.cos(particle.angle) * particle.radius;

        ctx.fillStyle = '#ffffff';
        ctx.fillText(particle.char, particle.x, particle.y);
      });
    };

    // Animation timeline - MUCH LONGER
    const animate = () => {
      frame++;
      const totalFrames = 2000; // Extended from 1050
      setProgress((frame / totalFrames) * 100);

      // 15+ scenes instead of 8
      if (frame < 150) {
        if (frame === 1) {
          createParticleText('WELCOME', 1.2);
          setCurrentScene(0);
        }
        drawParticles();
      } else if (frame < 200) {
        setCurrentScene(1);
        drawRGBSplit();
      } else if (frame < 400) {
        if (frame === 200) {
          createSpiralParticles();
          setCurrentScene(2);
        }
        drawSpiralEffect();
      } else if (frame < 450) {
        setCurrentScene(3);
        drawRGBSplit();
      } else if (frame < 650) {
        setCurrentScene(4);
        drawEnhancedMatrix();
      } else if (frame < 700) {
        setCurrentScene(5);
        drawRGBSplit();
      } else if (frame < 900) {
        setCurrentScene(6);
        drawASCIISphere();
      } else if (frame < 950) {
        setCurrentScene(7);
        drawRGBSplit();
      } else if (frame < 1150) {
        setCurrentScene(8);
        drawASCIITorus();
      } else if (frame < 1200) {
        setCurrentScene(9);
        drawRGBSplit();
      } else if (frame < 1350) {
        setCurrentScene(10);
        drawASCIITunnel();
      } else if (frame < 1400) {
        setCurrentScene(11);
        drawRGBSplit();
      } else if (frame < 1550) {
        setCurrentScene(12);
        drawASCIIFire();
      } else if (frame < 1600) {
        setCurrentScene(13);
        drawRGBSplit();
      } else if (frame < 1750) {
        if (frame === 1600) {
          createDNAHelix();
          setCurrentScene(14);
        }
        drawDNAEffect();
      } else if (frame < 1800) {
        setCurrentScene(15);
        drawWaveEffect();
      } else if (frame < 1850) {
        setCurrentScene(16);
        drawRGBSplit();
      } else if (frame < 1950) {
        if (frame === 1850) {
          createParticleText('2026', 1.8, true);
          setCurrentScene(17);
        }
        drawParticles(frame < 1900);
      } else {
        // Final fade
        ctx.fillStyle = `rgba(0, 0, 0, ${(frame - 1950) / 50})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (frame > 2000) {
          onComplete();
          return;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
      
      {/* Skip button */}
      <button
        onClick={onComplete}
        className="fixed bottom-8 right-8 pixel-border px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs z-[10000]"
      >
        [ SKIP INTRO ]
      </button>
      
      {/* Enhanced scene indicator */}
      <div className="fixed bottom-8 left-8 text-white font-mono text-xs opacity-70 z-[10000]">
        <div>SCENE {currentScene + 1}/18</div>
        <div className="w-48 h-2 bg-white/20 mt-2">
          <div 
            className="h-full bg-white transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Scene names */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 text-white font-mono text-sm opacity-50 z-[10000]">
        {['PARTICLE FORMATION', 'RGB GLITCH', 'SPIRAL VORTEX', 'GLITCH', 'MATRIX RAIN', 
          'GLITCH', '3D SPHERE', 'GLITCH', '3D TORUS', 'GLITCH', 'TUNNEL DIVE', 'GLITCH',
          'ASCII FIRE', 'GLITCH', 'DNA HELIX', 'WAVE PATTERN', 'GLITCH', 'FINALE'][currentScene]}
      </div>
    </div>
  );
}
