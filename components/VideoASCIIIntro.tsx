'use client';

import { useEffect, useRef, useState } from 'react';

interface ASCIIFrameData {
  fps: number;
  width: number;
  height?: number;
  frames: string[][];
}

export default function VideoASCIIIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const framesDataRef = useRef<ASCIIFrameData | null>(null);

  useEffect(() => {
    // Load ASCII frames data
    fetch('/ascii-frames/intro.json')
      .then(res => res.json())
      .then((data: ASCIIFrameData) => {
        framesDataRef.current = data;
        setLoading(false);
        startPlayback(data);
      })
      .catch(err => {
        console.error('Error loading ASCII frames:', err);
        // Fallback to completing immediately
        setTimeout(onComplete, 1000);
      });
  }, [onComplete]);

  const startPlayback = (data: ASCIIFrameData) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frameIndex = 0;
    const frameDelay = 1000 / data.fps;
    let lastFrameTime = Date.now();

    const renderFrame = () => {
      if (frameIndex >= data.frames.length) {
        onComplete();
        return;
      }

      const now = Date.now();
      if (now - lastFrameTime < frameDelay) {
        requestAnimationFrame(renderFrame);
        return;
      }

      lastFrameTime = now;

      // Clear canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get current frame
      const frame = data.frames[frameIndex];
      if (!frame || frame.length === 0) {
        frameIndex++;
        requestAnimationFrame(renderFrame);
        return;
      }

      // Calculate character size to fit screen
      const frameWidth = frame[0].length;
      const frameHeight = frame.length;
      
      const charWidth = Math.floor(canvas.width / frameWidth);
      const charHeight = Math.floor(canvas.height / frameHeight);
      const fontSize = Math.min(charWidth, charHeight);

      // Center the frame
      const totalWidth = frameWidth * (fontSize * 0.6);
      const totalHeight = frameHeight * fontSize;
      const offsetX = (canvas.width - totalWidth) / 2;
      const offsetY = (canvas.height - totalHeight) / 2;

      // Render ASCII frame
      ctx.font = `${fontSize}px "VT323", "Courier New", monospace`;
      ctx.fillStyle = '#ffffff';
      ctx.textBaseline = 'top';

      for (let y = 0; y < frame.length; y++) {
        const line = frame[y];
        for (let x = 0; x < line.length; x++) {
          const char = line[x];
          if (char && char !== ' ') {
            ctx.fillText(
              char,
              offsetX + x * (fontSize * 0.6),
              offsetY + y * fontSize
            );
          }
        }
      }

      // Update progress
      setCurrentFrame(frameIndex);
      setProgress((frameIndex / data.frames.length) * 100);

      frameIndex++;
      requestAnimationFrame(renderFrame);
    };

    renderFrame();
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="text-white font-mono text-sm animate-pulse">
            LOADING ASCII FRAMES...
          </div>
        </div>
      )}

      {/* Skip button */}
      <button
        onClick={onComplete}
        className="fixed bottom-8 right-8 pixel-border px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs z-[10000]"
      >
        [ SKIP INTRO ]
      </button>

      {/* Progress indicator */}
      {!loading && framesDataRef.current && (
        <div className="fixed bottom-8 left-8 text-white font-mono text-xs opacity-70 z-[10000]">
          <div>
            FRAME {currentFrame + 1}/{framesDataRef.current.frames.length}
          </div>
          <div className="w-48 h-2 bg-white/20 mt-2">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Professional overlay */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 text-white font-mono text-sm opacity-50 z-[10000]">
        VIDEO-TO-ASCII CONVERSION
      </div>
    </div>
  );
}
