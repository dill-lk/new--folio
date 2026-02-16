import Link from "next/link";
import GridContainer from "../grid-container";
import CategoryHeader from "./category-header";
import type { Sponsor } from "@/lib/sponsors";

export default function PartnersSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="relative max-w-full">
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
          Building the Future of Web with Code & Security
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
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          Hi, I'm Jinuk Chanthusa. A 14-year-old Full-Stack Developer and Open Source Contributor from Sri Lanka. 
          I specialize in building high-performance JavaScript libraries and secure development workflows. 
          My goal? To reach the pinnacle of research in Computer Science and beyond.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          I am a self-taught developer with a deep passion for Software Engineering and DevOps. While most people my age 
          are just starting with code, I am building complex tools like YakaJS—a next-gen JavaScript library designed to 
          simplify state management and UI interactions.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          I don't just write code; I secure it. I have mastered GPG Cryptography for commit verification and GitHub Actions 
          for CI/CD automation. My journey is fueled by a dream to pursue a PhD in South Korea and contribute to world-class 
          technological innovations.
        </p>
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
