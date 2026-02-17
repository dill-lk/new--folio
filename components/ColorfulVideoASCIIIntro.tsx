'use client';

import { useEffect, useRef, useState } from 'react';

// 16 ANSI color palette
const ANSI_COLORS = [
  '#000000', // 0: Black
  '#aa0000', // 1: Red
  '#00aa00', // 2: Green
  '#aa5500', // 3: Yellow
  '#0000aa', // 4: Blue
  '#aa00aa', // 5: Magenta
  '#00aaaa', // 6: Cyan
  '#aaaaaa', // 7: White
  '#555555', // 8: Bright Black
  '#ff5555', // 9: Bright Red
  '#55ff55', // 10: Bright Green
  '#ffff55', // 11: Bright Yellow
  '#5555ff', // 12: Bright Blue
  '#ff55ff', // 13: Bright Magenta
  '#55ffff', // 14: Bright Cyan
  '#ffffff', // 15: Bright White
];

interface ColoredFrame {
  text: string[];
  colors: number[][];
}

interface IntroData {
  fps: number;
  frames: ColoredFrame[];
  width: number;
  totalFrames: number;
}

export default function ColorfulVideoASCIIIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [introData, setIntroData] = useState<IntroData | null>(null);
  const [loading, setLoading] = useState(true);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Load intro data
    fetch('/ascii-frames/intro.json')
      .then(res => res.json())
      .then((data: IntroData) => {
        setIntroData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load intro:', err);
        onComplete(); // Skip if loading fails
      });
  }, [onComplete]);

  useEffect(() => {
    if (!introData || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameDelay = 1000 / introData.fps;
    let lastTime = Date.now();
    let frameIndex = 0;

    const renderFrame = () => {
      const now = Date.now();
      const elapsed = now - lastTime;

      if (elapsed >= frameDelay) {
        lastTime = now;

        const frame = introData.frames[frameIndex];
        if (!frame) {
          onComplete();
          return;
        }

        // Clear canvas
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Calculate character size
        const charWidth = Math.floor(canvas.width / introData.width);
        const charHeight = charWidth * 2;
        const fontSize = charWidth * 1.8;

        ctx.font = `${fontSize}px "Courier New", monospace`;
        ctx.textBaseline = 'top';

        // Render ASCII with colors
        frame.text.forEach((line, y) => {
          for (let x = 0; x < line.length; x++) {
            const char = line[x];
            const colorIdx = frame.colors[y][x];
            ctx.fillStyle = ANSI_COLORS[colorIdx];
            ctx.fillText(char, x * charWidth, y * charHeight);
          }
        });

        // Progress bar
        const progress = frameIndex / introData.totalFrames;
        const barHeight = 4;
        const barY = canvas.height - 30;
        
        ctx.fillStyle = '#333333';
        ctx.fillRect(20, barY, canvas.width - 40, barHeight);
        
        const gradient = ctx.createLinearGradient(20, barY, 20 + (canvas.width - 40) * progress, barY);
        gradient.addColorStop(0, '#00ffff');
        gradient.addColorStop(0.5, '#ff00ff');
        gradient.addColorStop(1, '#ffff00');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(20, barY, (canvas.width - 40) * progress, barHeight);

        // Frame counter
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px "Press Start 2P", monospace';
        ctx.fillText(`Frame ${frameIndex + 1}/${introData.totalFrames}`, 20, barY - 25);

        setCurrentFrame(frameIndex);
        frameIndex++;

        if (frameIndex < introData.totalFrames) {
          animationRef.current = requestAnimationFrame(renderFrame);
        } else {
          setTimeout(onComplete, 500);
        }
      } else {
        animationRef.current = requestAnimationFrame(renderFrame);
      }
    };

    animationRef.current = requestAnimationFrame(renderFrame);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [introData, onComplete]);

  const handleSkip = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    onComplete();
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-white font-mono animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
      
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="fixed bottom-8 right-8 px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-sm font-bold rounded hover:scale-110 transition-transform"
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        SKIP
      </button>
    </div>
  );
}
