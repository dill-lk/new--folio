import Link from "next/link";
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
        <CategoryHeader className="text-sky-500 dark:text-sky-400">About Me</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
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
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl">
          Hi, I'm Jinuk Chanthusa, a 14-year-old Full-Stack Developer and Open Source Contributor from Sri Lanka. 
          My journey into the world of technology began not with formal education, but with an insatiable curiosity 
          and a relentless drive to understand how things work beneath the surface. I don't just build applications—I 
          architect systems, analyze patterns, and push the boundaries of what's possible with code.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl">
          As a self-taught developer, I've embraced the challenge of mastering both Software Engineering and DevOps 
          practices. While most of my peers are just discovering programming, I'm building production-grade tools like 
          <span className="font-semibold text-sky-600 dark:text-sky-400"> YakaJS</span>—a next-generation JavaScript 
          library that rivals jQuery in power while maintaining elegant simplicity. My work focuses on solving real 
          problems: simplifying state management, enabling voice-controlled web applications, and creating developer 
          tools that others can rely on.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-lg) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white lg:max-w-5xl">
          But coding is just the beginning. I believe that truly great developers don't just write code—they secure it, 
          optimize it, and make it maintainable. That's why I've invested time mastering <span className="font-semibold">GPG 
          Cryptography</span> for commit verification, implementing robust <span className="font-semibold">CI/CD pipelines</span> 
          with GitHub Actions, and understanding the intricacies of modern DevOps practices. Every commit I make is signed, 
          every deployment is automated, and every line of code is written with security in mind.
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
          <h3 className="text-2xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-6">
            🏆 Key Achievements
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Self-Taught Excellence</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Mastered full-stack development, DevOps, and cybersecurity practices independently at age 14
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">YakaJS Creation</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Built production-grade JavaScript library with advanced features rivaling established frameworks
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30">
              <div className="text-3xl mb-2">🔐</div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Security Expert</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Implemented GPG cryptography and automated CI/CD with 100% verified secure development workflow
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Open Source Contributor</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Active contributor to open-source community, sharing tools and knowledge with developers worldwide
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Research Aspirations</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Working toward PhD in Computer Science to contribute to cutting-edge technological innovations
              </p>
            </div>
            <div className="p-4 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30">
              <div className="text-3xl mb-2">🇱🇰</div>
              <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Sri Lankan Pride</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">
                Representing Sri Lanka in the global tech community, proving age is no barrier to excellence
              </p>
            </div>
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
