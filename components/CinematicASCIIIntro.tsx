'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  char: string;
  speed: number;
  opacity: number;
}

export default function CinematicASCIIIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentScene, setCurrentScene] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = ['.', '/', '*', '\\', '`', '%', '#', '@', '+', '-', '=', '~'];
    let particles: Particle[] = [];
    let frame = 0;

    // Scene 1: Particle Formation
    const createParticleText = (text: string, scale = 1) => {
      particles = [];
      const fontSize = 60 * scale;
      ctx.font = `bold ${fontSize}px "Press Start 2P", monospace`;
      const textWidth = ctx.measureText(text).width;
      
      const startX = (canvas.width - textWidth) / 2;
      const startY = canvas.height / 2;

      // Create temporary canvas to get text pixels
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = textWidth + 100;
      tempCanvas.height = fontSize + 100;
      tempCtx.font = ctx.font;
      tempCtx.fillStyle = 'white';
      tempCtx.fillText(text, 50, fontSize);

      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      
      // Sample pixels and create particles
      for (let y = 0; y < imageData.height; y += 4) {
        for (let x = 0; x < imageData.width; x += 4) {
          const index = (y * imageData.width + x) * 4;
          if (imageData.data[index + 3] > 128) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              targetX: startX + x - 50,
              targetY: startY + y - fontSize,
              char: chars[Math.floor(Math.random() * chars.length)],
              speed: 0.05 + Math.random() * 0.1,
              opacity: 0,
            });
          }
        }
      }
    };

    // Scene 2: Matrix Rain
    const matrixColumns: number[] = [];
    const columnChars: string[] = [];
    const columnCount = Math.floor(canvas.width / 20);
    
    for (let i = 0; i < columnCount; i++) {
      matrixColumns[i] = Math.random() * canvas.height;
      columnChars[i] = chars[Math.floor(Math.random() * chars.length)];
    }

    // Scene 3: 3D Rotating Cube ASCII
    let cubeRotation = 0;

    const drawMatrixRain = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.font = '20px "VT323", monospace';

      for (let i = 0; i < columnCount; i++) {
        const char = columnChars[i];
        const x = i * 20;
        const y = matrixColumns[i];

        ctx.globalAlpha = 1;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          matrixColumns[i] = 0;
          columnChars[i] = chars[Math.floor(Math.random() * chars.length)];
        }

        matrixColumns[i] += 2;
      }
      ctx.globalAlpha = 1;
    };

    const draw3DASCIICube = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const size = 150;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Simple 3D cube vertices
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
      ];

      const rotatedVertices = vertices.map(([x, y, z]) => {
        // Rotate around Y and X axes
        const cosY = Math.cos(cubeRotation);
        const sinY = Math.sin(cubeRotation);
        const cosX = Math.cos(cubeRotation * 0.7);
        const sinX = Math.sin(cubeRotation * 0.7);

        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const scale = 200 / (z2 + 4);
        return {
          x: centerX + x1 * size * scale,
          y: centerY + y1 * size * scale,
          z: z2
        };
      });

      // Draw edges with ASCII characters
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      ctx.font = '16px "Press Start 2P", monospace';
      ctx.fillStyle = '#ffffff';

      edges.forEach(([start, end]) => {
        const v1 = rotatedVertices[start];
        const v2 = rotatedVertices[end];
        
        const steps = 20;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const x = v1.x + (v2.x - v1.x) * t;
          const y = v1.y + (v2.y - v1.y) * t;
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, x, y);
        }
      });

      cubeRotation += 0.02;
    };

    const drawParticles = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px "VT323", monospace';

      particles.forEach(particle => {
        // Move towards target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        particle.x += dx * particle.speed;
        particle.y += dy * particle.speed;

        // Fade in
        if (particle.opacity < 1) {
          particle.opacity += 0.02;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });
    };

    const drawGlitchTransition = () => {
      // Glitch effect between scenes
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const slices = 20;
      for (let i = 0; i < slices; i++) {
        const y = (canvas.height / slices) * i;
        const offset = (Math.random() - 0.5) * 100;
        
        ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#000000';
        ctx.fillRect(offset, y, canvas.width, canvas.height / slices);
        
        const text = chars[Math.floor(Math.random() * chars.length)].repeat(50);
        ctx.font = '20px "Press Start 2P", monospace';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, 0, y + 20);
      }
    };

    // Animation timeline
    const animate = () => {
      frame++;

      // Scene progression
      if (frame < 200) {
        // Scene 0: Initial particle formation
        if (frame === 1) {
          createParticleText('WELCOME', 1.2);
        }
        if (frame === 1) setCurrentScene(0);
        drawParticles();
      } else if (frame < 250) {
        // Glitch transition
        if (frame === 200) setCurrentScene(1);
        drawGlitchTransition();
      } else if (frame < 450) {
        // Scene 1: Matrix rain
        if (frame === 250) setCurrentScene(2);
        drawMatrixRain();
      } else if (frame < 500) {
        // Glitch transition
        if (frame === 450) setCurrentScene(3);
        drawGlitchTransition();
      } else if (frame < 700) {
        // Scene 2: 3D ASCII cube
        if (frame === 500) setCurrentScene(4);
        draw3DASCIICube();
      } else if (frame < 750) {
        // Glitch transition
        if (frame === 700) setCurrentScene(5);
        drawGlitchTransition();
      } else if (frame < 950) {
        // Scene 3: Final text formation
        if (frame === 750) {
          createParticleText('2026', 1.5);
          setCurrentScene(6);
        }
        drawParticles();
      } else if (frame < 1000) {
        // Final glitch
        setCurrentScene(7);
        drawGlitchTransition();
      } else {
        // Fade out and complete
        ctx.fillStyle = `rgba(0, 0, 0, ${(frame - 1000) / 50})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (frame > 1050) {
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
        className="fixed bottom-8 right-8 pixel-border px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs"
      >
        [ SKIP INTRO ]
      </button>
      
      {/* Scene indicator */}
      <div className="fixed bottom-8 left-8 text-white font-mono text-xs opacity-50">
        SCENE {currentScene + 1}/8
      </div>
    </div>
  );
}
