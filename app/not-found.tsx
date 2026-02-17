'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 relative overflow-hidden">
      {/* CRT Effect */}
      <div className="scanline animate-scan" />
      <div className="crt-effect min-h-screen">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* 404 ASCII Art */}
          <div className={`ascii-art text-sm md:text-base ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
            {`
  ██╗  ██╗ ██████╗ ██╗  ██╗
  ██║  ██║██╔═████╗██║  ██║
  ███████║██║██╔██║███████║
  ╚════██║████╔╝██║╚════██║
       ██║╚██████╔╝     ██║
       ╚═╝ ╚═════╝      ╚═╝
            `}
          </div>

          {/* Error Message */}
          <h1 className={`text-3xl md:text-5xl mb-4 ${isLoaded ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
            PAGE NOT FOUND
          </h1>

          <p className={`text-sm md:text-base mb-8 opacity-80 ${isLoaded ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
            {'>'} The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* ASCII Error Box */}
          <div className={`ascii-art text-xs md:text-sm mb-8 ${isLoaded ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
            {`
    ╔════════════════════════════════╗
    ║   ERROR: ROUTE NOT FOUND       ║
    ╚════════════════════════════════╝
            `}
          </div>

          {/* Navigation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? 'animate-fadeIn delay-800' : 'opacity-0'}`}>
            <Link 
              href="/"
              className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm"
            >
              [ RETURN HOME ]
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm"
            >
              [ GO BACK ]
            </button>
          </div>

          {/* Blinking Cursor */}
          <div className={`text-2xl mt-8 ${isLoaded ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
            <span className="animate-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
