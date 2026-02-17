'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Pixelated shader for WebGL background
const PixelatedMaterial = ({ mousePos }: { mousePos: { x: number; y: number } }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
      mouse: { value: new THREE.Vector2(0, 0) },
      pixelSize: { value: 8.0 },
    }),
    [viewport.width, viewport.height]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.mouse.value.set(mousePos.x, mousePos.y);
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    uniform vec2 mouse;
    uniform float pixelSize;
    varying vec2 vUv;

    // Pixelation effect
    vec2 pixelate(vec2 uv, float pixels) {
      return floor(uv * pixels) / pixels;
    }

    // Distance field for mouse interaction
    float mouseDist(vec2 uv) {
      vec2 mouseUV = mouse * 0.5 + 0.5;
      return length(uv - mouseUV);
    }

    // Animated pattern
    float pattern(vec2 uv, float t) {
      vec2 p = pixelate(uv, pixelSize);
      float dist = mouseDist(uv);
      
      // Create animated grid
      float grid = sin(p.x * 20.0 + t) * sin(p.y * 20.0 + t);
      
      // Mouse influence
      float mouseInfluence = smoothstep(0.3, 0.0, dist);
      
      // Combine effects
      return grid * 0.5 + mouseInfluence * 0.8;
    }

    void main() {
      vec2 uv = vUv;
      
      // Pixelate coordinates
      vec2 pixelUV = pixelate(uv, pixelSize);
      
      // Create pattern
      float pat = pattern(pixelUV, time * 0.5);
      
      // Add noise based on mouse distance
      float dist = mouseDist(uv);
      float noise = fract(sin(dot(pixelUV, vec2(12.9898, 78.233)) + time) * 43758.5453);
      noise *= smoothstep(0.4, 0.0, dist);
      
      // Create final color (black & white with mouse interaction)
      float intensity = pat + noise;
      intensity = smoothstep(0.3, 0.7, intensity);
      
      // Black and white output
      vec3 color = vec3(intensity);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Scene = ({ mousePos }: { mousePos: { x: number; y: number } }) => {
  return <PixelatedMaterial mousePos={mousePos} />;
};

export default function PixelatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: false,
          alpha: true,
        }}
      >
        <Scene mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
