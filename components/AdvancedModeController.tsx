'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const AdvancedShaderBackground = dynamic(() => import('@/components/AdvancedShaderBackground'), {
  ssr: false,
  loading: () => null,
});

const MassiveParticleSystem = dynamic(() => import('@/components/MassiveParticleSystem'), {
  ssr: false,
  loading: () => null,
});

// Removed AudioReactiveVisualizer due to TypeScript complexity

type AdvancedMode = 'none' | 'shader' | 'particles';

export default function AdvancedModeController() {
  const [mode, setMode] = useState<AdvancedMode>('none');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Render active mode */}
      {mode === 'shader' && <AdvancedShaderBackground />}
      {mode === 'particles' && <MassiveParticleSystem />}

      {/* Control Menu */}
      <div className="fixed bottom-4 right-4 z-[9999]">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="pixel-border px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition-all mb-2"
        >
          {showMenu ? '[ HIDE MODES ]' : '[ ADVANCED MODES ]'}
        </button>

        {showMenu && (
          <div className="space-y-2 animate-fade-in">
            <button
              onClick={() => setMode(mode === 'none' ? 'none' : 'none')}
              className={`w-full pixel-border px-4 py-2 transition-all ${
                mode === 'none'
                  ? 'bg-white text-black'
                  : 'bg-black text-white hover:bg-white hover:text-black'
              }`}
            >
              [ DEFAULT MODE ]
            </button>

            <button
              onClick={() => setMode(mode === 'shader' ? 'none' : 'shader')}
              className={`w-full pixel-border px-4 py-2 transition-all ${
                mode === 'shader'
                  ? 'bg-white text-black'
                  : 'bg-black text-white hover:bg-white hover:text-black'
              }`}
            >
              [ RAYMARCHING SHADER ]
              <div className="text-xs opacity-70 mt-1">3D shapes + fractals</div>
            </button>

            <button
              onClick={() => setMode(mode === 'particles' ? 'none' : 'particles')}
              className={`w-full pixel-border px-4 py-2 transition-all ${
                mode === 'particles'
                  ? 'bg-white text-black'
                  : 'bg-black text-white hover:bg-white hover:text-black'
              }`}
            >
              [ 50K PARTICLES ]
              <div className="text-xs opacity-70 mt-1">Interactive physics</div>
            </button>
          </div>
        )}

        {mode !== 'none' && (
          <div className="mt-2 text-xs text-white/70 text-center">
            Current: {mode.toUpperCase()}
          </div>
        )}
      </div>
    </>
  );
}
