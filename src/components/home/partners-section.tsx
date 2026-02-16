import Link from "next/link";
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  BeakerIcon, 
  MapPinIcon,
  TrophyIcon 
} from "@heroicons/react/24/outline";
import GridContainer from "../grid-container";
import CategoryHeader from "./category-header";
import type { Sponsor } from "@/lib/sponsors";

export default function PartnersSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="relative max-w-full" id="about">
      <div
        aria-hidden="true"
        className="hidden h-4 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/25"
      >
        text-4xl <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> tracking-tighter text-balance
      </div>

      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-oatmeal-stone dark:text-oatmeal-stone animate-fade-in">About Me</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0 animate-slide-up [animation-delay:100ms]">
          A Journey from Curiosity to Innovation
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        text-base <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl animate-slide-up [animation-delay:200ms]">
          Hi, I'm Jinuk Chanthusa, a 14-year-old Full-Stack Developer and Open Source Contributor from Sri Lanka. 
          My journey into the world of technology began not with formal education, but with an insatiable curiosity 
          and a relentless drive to understand how things work beneath the surface. I don't just build applications—I 
          architect systems, analyze patterns, and push the boundaries of what's possible with code.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl animate-slide-up [animation-delay:300ms]">
          As a self-taught developer, I've embraced the challenge of mastering <span className="font-semibold">Frontend Development</span> and 
          <span className="font-semibold"> Cybersecurity</span>. While most of my peers are just discovering programming, I'm building 
          production-grade tools like <span className="font-semibold text-oatmeal-stone dark:text-oatmeal-white"> YakaJS</span>—a next-generation 
          JavaScript library that rivals jQuery in power while maintaining elegant simplicity. My passion lies in creating beautiful, 
          secure user interfaces and ensuring every application I build is protected from vulnerabilities. My work focuses on solving real 
          problems: crafting intuitive frontend experiences, implementing security best practices, and creating developer tools that others can rely on.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl">
          But coding beautiful interfaces is just the beginning. I believe that truly great developers don't just write code—they 
          <span className="font-semibold"> secure it</span>, optimize it, and make it maintainable. That's why I've invested significant 
          time mastering <span className="font-semibold">cybersecurity practices</span>, <span className="font-semibold">GPG Cryptography</span> 
          for commit verification, implementing robust <span className="font-semibold">CI/CD pipelines</span> with GitHub Actions, and 
          understanding vulnerabilities in modern web applications. Every commit I make is signed, every deployment is automated, and 
          every line of frontend code is written with security-first thinking. I see cybersecurity not as an add-on, but as a fundamental 
          part of excellent frontend development.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl">
          My ultimate goal extends beyond building great software. I dream of pursuing a PhD in Computer Science in South Korea, 
          where I can contribute to cutting-edge research and world-class technological innovations. I want to be at the forefront 
          of discovery, pushing the boundaries of what technology can achieve. Every project I work on, every concept I master, 
          and every challenge I overcome brings me one step closer to that vision.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl">
          When I'm not coding, I'm learning. Whether it's exploring system architecture, diving deep into performance optimization, 
          debugging complex systems, or staying current with the latest in cybersecurity, I approach every challenge as an opportunity 
          to grow. Technology isn't just my profession—it's my passion, my puzzle, and my path to making a meaningful impact on the world.
        </p>
      </GridContainer>

      <GridContainer className="mt-12">
        <div className="px-2 max-sm:px-4">
          <h3 className="text-2xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-6 flex items-center gap-2 animate-fade-in">
            <TrophyIcon className="w-7 h-7 text-oatmeal-stone dark:text-oatmeal-stone" />
            Key Achievements
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 animate-scale-up [animation-delay:100ms] hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <AcademicCapIcon className="w-10 h-10 mb-2 text-oatmeal-stone dark:text-oatmeal-stone" />
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Self-Taught Excellence</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Mastered full-stack development, DevOps, and cybersecurity practices independently at age 14
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 animate-scale-up [animation-delay:200ms] hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <CodeBracketIcon className="w-10 h-10 mb-2 text-oatmeal-stone dark:text-oatmeal-stone" />
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">YakaJS Creation</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Built production-grade JavaScript library with advanced features rivaling established frameworks
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 animate-scale-up [animation-delay:300ms] hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <ShieldCheckIcon className="w-10 h-10 mb-2 text-oatmeal-stone dark:text-oatmeal-stone" />
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Security Expert</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Implemented GPG cryptography and automated CI/CD with 100% verified secure development workflow
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 animate-scale-up [animation-delay:400ms] hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <GlobeAltIcon className="w-10 h-10 mb-2 text-oatmeal-stone dark:text-oatmeal-stone" />
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Open Source Contributor</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Active contributor to open-source community, sharing tools and knowledge with developers worldwide
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 animate-scale-up [animation-delay:500ms] hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <BeakerIcon className="w-10 h-10 mb-2 text-oatmeal-stone dark:text-oatmeal-stone" />
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Research Aspirations</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Working toward PhD in Computer Science to contribute to cutting-edge technological innovations
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 animate-scale-up [animation-delay:600ms] hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <MapPinIcon className="w-10 h-10 mb-2 text-oatmeal-stone dark:text-oatmeal-stone" />
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Sri Lankan Pride</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Representing Sri Lanka in the global tech community, proving age is no barrier to excellence
              </p>
            </div>
          </div>
        </div>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="px-2 max-sm:px-4">
          <h3 className="text-2xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-6 animate-fade-in">
            Development Journey
          </h3>
          <div className="space-y-6">
            
            <div className="flex gap-4 animate-slide-in-left [animation-delay:100ms]">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-oatmeal-stone animate-pulse"></div>
                <div className="w-0.5 h-full bg-oatmeal-stone/30"></div>
              </div>
              <div className="pb-8">
                <p className="text-sm font-semibold text-oatmeal-stone dark:text-oatmeal-white mb-1">2026 - Present</p>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Advanced Development & Research</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                  Working on cutting-edge projects, contributing to open source, and preparing for PhD application. 
                  Focus on advanced frontend techniques and cybersecurity research.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-right [animation-delay:200ms]">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-oatmeal-stone"></div>
                <div className="w-0.5 h-full bg-oatmeal-stone/30"></div>
              </div>
              <div className="pb-8">
                <p className="text-sm font-semibold text-oatmeal-stone dark:text-oatmeal-white mb-1">2025</p>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">YakaJS Development & Security Mastery</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                  Created YakaJS library from scratch. Mastered GPG cryptography and implemented 100% verified development workflow. 
                  Built multiple production-ready applications with security-first approach.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-left [animation-delay:300ms]">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-oatmeal-stone"></div>
                <div className="w-0.5 h-full bg-oatmeal-stone/30"></div>
              </div>
              <div className="pb-8">
                <p className="text-sm font-semibold text-oatmeal-stone dark:text-oatmeal-white mb-1">2024</p>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Full-Stack Mastery & CI/CD</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                  Deep dive into React, Next.js, and modern JavaScript frameworks. Automated development workflows with GitHub Actions. 
                  Started exploring cybersecurity and ethical hacking concepts.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-right [animation-delay:400ms]">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-oatmeal-stone"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-oatmeal-stone dark:text-oatmeal-white mb-1">2023</p>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Self-Taught Journey Begins</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                  Started programming journey with HTML, CSS, and JavaScript. Built first projects and fell in love with web development. 
                  Realized the power of technology to solve real-world problems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="px-2 max-sm:px-4">
          <h3 className="text-2xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-6 animate-fade-in">
            Stats & Metrics
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            
            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 text-center animate-scale-up [animation-delay:100ms] hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-oatmeal-black dark:text-oatmeal-white mb-2">5+</div>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">Projects Completed</p>
            </div>

            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 text-center animate-scale-up [animation-delay:200ms] hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-oatmeal-black dark:text-oatmeal-white mb-2">1000+</div>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">GitHub Contributions</p>
            </div>

            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 text-center animate-scale-up [animation-delay:300ms] hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-oatmeal-black dark:text-oatmeal-white mb-2">3+</div>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">Years Experience</p>
            </div>

            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 text-center animate-scale-up [animation-delay:400ms] hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-oatmeal-black dark:text-oatmeal-white mb-2">100%</div>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">GPG Verified</p>
            </div>

          </div>
        </div>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="px-2 max-sm:px-4">
          <h3 className="text-2xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-6 animate-fade-in">
            Availability Status
          </h3>
          <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 border-2 border-oatmeal-stone/30 animate-slide-up [animation-delay:100ms]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 rounded-full bg-oatmeal-stone animate-pulse"></div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white text-lg">Currently Available for Work</h4>
            </div>
            <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white mb-3">
              I'm actively seeking opportunities in:
            </p>
            <ul className="text-sm text-oatmeal-stone dark:text-oatmeal-white space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-oatmeal-stone flex-shrink-0"></span>
                <span>Frontend Development Projects (React, Next.js, TypeScript)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-oatmeal-stone flex-shrink-0"></span>
                <span>Web Security Consulting & Penetration Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-oatmeal-stone flex-shrink-0"></span>
                <span>Open Source Contributions & Library Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-oatmeal-stone flex-shrink-0"></span>
                <span>Remote Work & Freelance Opportunities</span>
              </li>
            </ul>
            <p className="text-xs text-oatmeal-stone dark:text-oatmeal-white mt-4">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </GridContainer>

      <section style={{ display: 'none' }}>
        <div className="relative isolate mt-16">
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <div className="border-r border-gray-950/5 dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
          </div>
          <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
            {sponsors.map((company, index) => (
              <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener sponsored"
                  className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
                >
                  <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
