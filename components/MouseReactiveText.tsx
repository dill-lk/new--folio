'use client';

import { useEffect, useRef, useState } from 'react';

interface MouseReactiveTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function MouseReactiveText({ 
  text, 
  className = '', 
  as: Component = 'span' 
}: MouseReactiveTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letters = text.split('');

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      <Component className="inline-block">
        {letters.map((letter, index) => {
          if (letter === ' ') {
            return <span key={index} className="inline-block">&nbsp;</span>;
          }

          return (
            <MouseReactiveLetter
              key={index}
              letter={letter}
              mousePos={mousePos}
              containerRef={containerRef}
              index={index}
            />
          );
        })}
      </Component>
    </div>
  );
}

function MouseReactiveLetter({
  letter,
  mousePos,
  containerRef,
  index,
}: {
  letter: string;
  mousePos: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement | null>;
  index: number;
}) {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [transform, setTransform] = useState('');
  const [pixelation, setPixelation] = useState(1);

  useEffect(() => {
    if (letterRef.current && containerRef.current) {
      const rect = letterRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const letterX = rect.left - containerRect.left + rect.width / 2;
      const letterY = rect.top - containerRect.top + rect.height / 2;
      
      const dx = mousePos.x - letterX;
      const dy = mousePos.y - letterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Maximum interaction distance
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        const force = 1 - distance / maxDistance;
        const angle = Math.atan2(dy, dx);
        
        // Push letters away from mouse
        const pushX = -Math.cos(angle) * force * 20;
        const pushY = -Math.sin(angle) * force * 20;
        
        // Rotation effect
        const rotation = force * 15 * (index % 2 === 0 ? 1 : -1);
        
        // Scale effect
        const scale = 1 + force * 0.3;
        
        // Pixelation effect (closer = more pixelated)
        const pixelLevel = 1 + force * 3;
        
        setTransform(
          `translate(${pushX}px, ${pushY}px) rotate(${rotation}deg) scale(${scale})`
        );
        setPixelation(pixelLevel);
      } else {
        setTransform('');
        setPixelation(1);
      }
    }
  }, [mousePos, index, containerRef]);

  return (
    <span
      ref={letterRef}
      className="inline-block transition-all duration-100 ease-out"
      style={{
        transform,
        filter: `contrast(${pixelation}) brightness(${1 + pixelation * 0.1})`,
        imageRendering: pixelation > 1.5 ? 'pixelated' : 'auto',
      }}
    >
      {letter}
    </span>
  );
}
