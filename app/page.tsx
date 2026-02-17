'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for WebGL and ASCII components (client-side only)
const PixelatedBackground = dynamic(() => import('@/components/PixelatedBackground'), {
  ssr: false,
  loading: () => null,
});

const MouseReactiveText = dynamic(() => import('@/components/MouseReactiveText'), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});

// NEW: Video-based ASCII intro (professional quality)
const VideoASCIIIntro = dynamic(() => import('@/components/VideoASCIIIntro'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has seen intro before
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
      setIntroCompleted(true);
      setIsLoaded(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroCompleted(true);
    setIsLoaded(true);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  // Show video-based ASCII intro first
  if (isMounted && showIntro && !introCompleted) {
    return <VideoASCIIIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* WebGL Pixelated Background - only on client */}
      {isMounted && introCompleted && <PixelatedBackground />}
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <div className="max-w-4xl w-full space-y-8">
          {/* ASCII Logo */}
          <div className={`ascii-art text-xs md:text-sm text-center mb-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
            {`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
            `}
          </div>

          {/* Main Title with Mouse Reactive Text */}
          <div className={`text-center mb-4 ${isLoaded ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
            <MouseReactiveText 
              text="WELCOME TO MY PORTFOLIO" 
              as="h1"
              className="text-2xl md:text-4xl lg:text-5xl"
            />
          </div>

          {/* Subtitle with typing effect */}
          <p className={`text-sm md:text-base text-center mb-8 ${isLoaded ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
            {'>'} Full Stack Developer | Digital Creator | Tech Enthusiast
          </p>

          {/* Blinking cursor */}
          <div className={`text-center text-2xl ${isLoaded ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
            <span className="animate-blink">_</span>
          </div>

          {/* Navigation Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mt-8 ${isLoaded ? 'animate-fadeIn delay-800' : 'opacity-0'}`}>
            <a href="#about" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ ABOUT ]
            </a>
            <a href="#projects" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ PROJECTS ]
            </a>
            <a href="#skills" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ SKILLS ]
            </a>
            <a href="#contact" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ CONTACT ]
            </a>
          </div>
        </div>

        {/* Decorative ASCII */}
        <div className="absolute bottom-8 left-8 ascii-art text-xs opacity-50 hidden md:block">
          {`
    /\\___/\\
   (  o.o  )
    > ^ <
          `}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <div className="max-w-4xl w-full">
          <div className="mb-8 animate-slideInLeft">
            <MouseReactiveText 
              text="> ABOUT_ME" 
              as="h2"
              className="text-3xl md:text-4xl"
            />
          </div>
          
          <div className="space-y-6 text-sm md:text-base">
            <p className="animate-fadeIn delay-200">
              → Hello! I&apos;m a passionate developer who loves creating unique digital experiences.
            </p>
            <p className="animate-fadeIn delay-400">
              → I specialize in building modern web applications with a focus on clean code and 
              user experience.
            </p>
            <p className="animate-fadeIn delay-600">
              → When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open source, or experimenting with pixel art.
            </p>
          </div>

          {/* ASCII Decoration */}
          <div className="mt-12 ascii-art text-xs text-center animate-fadeIn delay-800">
            {`
    ┌─────────────────────────────────────┐
    │  CONSTANTLY LEARNING & IMPROVING    │
    └─────────────────────────────────────┘
            `}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <div className="max-w-6xl w-full">
          <div className="mb-8 animate-slideInRight">
            <MouseReactiveText 
              text="> PROJECTS" 
              as="h2"
              className="text-3xl md:text-4xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "PROJECT_01",
                desc: "A modern web application with real-time features",
                tech: "React | Next.js | TypeScript"
              },
              {
                title: "PROJECT_02",
                desc: "E-commerce platform with advanced filtering",
                tech: "Node.js | MongoDB | Express"
              },
              {
                title: "PROJECT_03",
                desc: "Portfolio generator with custom themes",
                tech: "React | Tailwind | Framer Motion"
              },
              {
                title: "PROJECT_04",
                desc: "Real-time chat application with WebSocket",
                tech: "Socket.io | Redis | PostgreSQL"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className={`pixel-border p-6 hover:bg-white hover:text-black transition-all duration-300 animate-fadeIn delay-${(index + 2) * 100}`}
              >
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-xs md:text-sm mb-4 opacity-80">{project.desc}</p>
                <div className="text-xs">
                  <span className="opacity-60">Stack: </span>{project.tech}
                </div>
                <div className="mt-4 text-xs">
                  [ <span className="hover:animate-glitch cursor-pointer">VIEW_CODE</span> ]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <div className="max-w-4xl w-full">
          <div className="mb-8 animate-slideInLeft">
            <MouseReactiveText 
              text="> SKILLS" 
              as="h2"
              className="text-3xl md:text-4xl"
            />
          </div>

          <div className="space-y-8">
            {[
              { name: "JavaScript/TypeScript", level: 90 },
              { name: "React/Next.js", level: 85 },
              { name: "Node.js/Express", level: 80 },
              { name: "Database (SQL/NoSQL)", level: 75 },
              { name: "Git/GitHub", level: 95 },
              { name: "UI/UX Design", level: 70 }
            ].map((skill, index) => (
              <div key={index} className={`animate-fadeIn delay-${(index + 2) * 100}`}>
                <div className="flex justify-between mb-2 text-xs md:text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 h-4 pixel-border">
                  <div 
                    className="bg-white h-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ASCII Skills Visualization */}
          <div className="mt-12 ascii-art text-xs grid grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn delay-800">
            <div>
              {`
    ╔═══╗
    ║ ♦ ║ JS
    ╚═══╝
              `}
            </div>
            <div>
              {`
    ╔═══╗
    ║ ⚛ ║ React
    ╚═══╝
              `}
            </div>
            <div>
              {`
    ╔═══╗
    ║ ⚙ ║ Node
    ╚═══╝
              `}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8 animate-slideInRight">
            <MouseReactiveText 
              text="> CONTACT" 
              as="h2"
              className="text-3xl md:text-4xl"
            />
          </div>

          <div className="ascii-art text-xs md:text-sm mb-8 animate-fadeIn delay-200">
            {`
    ╔═══════════════════════════════════╗
    ║   LET'S WORK TOGETHER!            ║
    ╚═══════════════════════════════════╝
            `}
          </div>

          <p className="text-sm md:text-base mb-8 animate-fadeIn delay-400">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 animate-fadeIn delay-600">
            <a href="mailto:your.email@example.com" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ EMAIL ]
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ GITHUB ]
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="pixel-border px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm">
              [ LINKEDIN ]
            </a>
          </div>

          {/* ASCII Art Footer */}
          <div className="ascii-art text-xs opacity-50 animate-pulse">
            {`
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    
    █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
    █  MADE WITH ♥ IN PIXELATED 2026  █
    █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
    
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
            `}
          </div>
        </div>
      </section>
    </div>
  );
}
