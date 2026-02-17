'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  char: string;
}

export default function MassiveParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const PARTICLE_COUNT = 50000; // 50k particles for performance
    const particles: Particle[] = [];
    const chars = ['·', '•', '∙', '○', '●', '◦', '◉', '⦿', '⊙', '⊕'];

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let mousePressed = false;

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
        size: 8 + Math.random() * 4,
        char: chars[Math.floor(Math.random() * chars.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      mousePressed = true;
    };

    const handleMouseUp = () => {
      mousePressed = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let frame = 0;

    const render = () => {
      frame++;

      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '12px "VT323", monospace';

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = mousePressed ? 0.5 : -0.5;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force / dist;
          p.vy += Math.sin(angle) * force / dist;
        }

        // Apply velocity with damping
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Gravity
        p.vy += 0.02;

        // Boundaries with bounce
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -0.8;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -0.8;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        // Life cycle
        p.life++;
        if (p.life > p.maxLife) {
          p.life = 0;
          p.x = Math.random() * canvas.width;
          p.y = 0;
          p.vx = (Math.random() - 0.5) * 2;
          p.vy = Math.random() * 2;
        }

        // Draw
        const alpha = 1 - (p.life / p.maxLife);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      // Draw connections between nearby particles (sample for performance)
      if (frame % 2 === 0) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;

        for (let i = 0; i < particles.length; i += 20) {
          const p1 = particles[i];
          
          for (let j = i + 20; j < particles.length; j += 20) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Performance stats
      ctx.fillStyle = '#ffffff';
      ctx.font = '14px "VT323", monospace';
      ctx.fillText(`${PARTICLE_COUNT.toLocaleString()} PARTICLES`, 20, 30);
      ctx.fillText(`FRAME: ${frame}`, 20, 50);

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ imageRendering: 'auto' }}
    />
  );
}
