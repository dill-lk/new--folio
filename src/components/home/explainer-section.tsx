import clsx from "clsx";
import type { Element, ElementContent } from "hast";
import React from "react";
import type { ShikiTransformer } from "shiki";
import { 
  MicrophoneIcon, 
  BoltIcon, 
  LockClosedIcon, 
  RocketLaunchIcon 
} from "@heroicons/react/24/outline";
import { html } from "../code-example";
import { generateCss } from "../generated-css";
import GridContainer from "../grid-container";
import { HighlightedCode } from "../highlight";
import { getTextContent } from "../highlight-classes";
import { AnchoredToBottom } from "./anchored-to-bottom";
import CategoryHeader from "./category-header";
import {
  EditorAnimation,
  EditorKeyframe,
  ShowOutputClassAnimation,
  TerminalAnimation,
  TypingAnimation,
} from "./explainer/animation";

export default function ExplainerSection() {
  let timeline: EditorKeyframe[] = [
    {
      terminal: [
        <React.Fragment key="1">
          <span className="text-purple-300" aria-hidden="true">
            ≈
          </span>
          <span aria-label="Tailwind CSS"> tailwindcss </span>
          <span className="text-purple-300">v4.0.0</span>
        </React.Fragment>,
        <span key="2"></span>,
        <React.Fragment key="3">
          <span>Done in </span>
          <span className="text-oatmeal-stone">12ms</span>
        </React.Fragment>,
      ],
    },
    {
      class: "flex",
      terminal: [
        <React.Fragment key="4">
          <span>Done in </span>
          <span className="text-oatmeal-stone">668µs</span>
        </React.Fragment>,
      ],
    },
    {
      class: "items-center",
      terminal: [
        <React.Fragment key="5">
          <span>Done in </span>
          <span className="text-oatmeal-stone">425µs</span>
        </React.Fragment>,
      ],
    },
    {
      class: "bg-blue-500",
      terminal: [
        <React.Fragment key="6">
          <span>Done in </span>
          <span className="text-oatmeal-stone">451µs</span>
        </React.Fragment>,
      ],
    },
    {
      class: "px-4",
      terminal: [
        <React.Fragment key="7">
          <span>Done in </span>
          <span className="text-oatmeal-stone">940µs</span>
        </React.Fragment>,
      ],
    },
    {
      class: "py-3",
      terminal: [
        <React.Fragment key="7">
          <span>Done in </span>
          <span className="text-oatmeal-stone">2ms</span>
        </React.Fragment>,
      ],
    },
    {
      class: "text-white",
      terminal: [
        <React.Fragment key="8">
          <span>Done in </span>
          <span className="text-oatmeal-stone">1ms</span>
        </React.Fragment>,
      ],
    },
    {
      class: "hover:bg-blue-400",
      terminal: [
        <React.Fragment key="9">
          <span>Done in </span>
          <span className="text-oatmeal-stone">993µs</span>
        </React.Fragment>,
      ],
    },
  ];

  return (
    <div className="relative max-w-full" id="projects">
      <div
        aria-hidden="true"
        className="hidden h-4 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/25"
      >
        text-4xl <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> tracking-tighter text-balance
      </div>

      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-oatmeal-stone dark:text-oatmeal-stone">Featured Project</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="mt-4 px-2 text-[2.5rem]/10 font-medium tracking-tighter max-sm:px-4 2xl:mt-0">
          YakaJS: More powerful than jQuery, simpler to write.
        </h2>
      </GridContainer>

      <div className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25">
        text-base <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-oatmeal-stone max-sm:px-4 dark:text-oatmeal-white">
          YakaJS is my flagship open-source project—a lightweight, zero-dependency JavaScript library that combines power with simplicity. 
          Built from the ground up with security and performance in mind, it represents my commitment to creating tools that developers can trust.
        </p>
      </GridContainer>

      <GridContainer className="mt-8">
        <div className="px-2 max-sm:px-4">
          <h3 className="text-xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-4">Key Features:</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <MicrophoneIcon className="w-6 h-6 text-oatmeal-stone dark:text-oatmeal-stone flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white">Voice Commands</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">Native integration for voice-controlled web applications</p>
              </div>
            </div>
            <div className="flex gap-3">
              <BoltIcon className="w-6 h-6 text-oatmeal-stone dark:text-oatmeal-stone flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white">Reactive State</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">Built-in reactive state management with zero boilerplate</p>
              </div>
            </div>
            <div className="flex gap-3">
              <LockClosedIcon className="w-6 h-6 text-oatmeal-stone dark:text-oatmeal-stone flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white">100% Secure</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">Every commit GPG-verified for complete code integrity</p>
              </div>
            </div>
            <div className="flex gap-3">
              <RocketLaunchIcon className="w-6 h-6 text-oatmeal-stone dark:text-oatmeal-stone flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-oatmeal-black dark:text-oatmeal-white">Performance Optimized</h4>
                <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white">Modern web standards with zero plugin dependencies</p>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>

      <GridContainer className="mt-8">
        <div className="px-2 max-sm:px-4">
          <p className="text-base text-oatmeal-stone dark:text-oatmeal-white">
            <span className="font-semibold">Technical Highlights:</span> More powerful than jQuery in functionality, yet simpler to write. 
            YakaJS demonstrates my ability to analyze existing solutions, identify pain points, and create better alternatives 
            that prioritize developer experience without compromising on capability.
          </p>
        </div>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="px-2 max-sm:px-4">
          <h3 className="text-xl font-semibold text-oatmeal-black dark:text-oatmeal-white mb-6">Other Notable Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            
            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 border border-oatmeal-stone/20">
              <h4 className="text-lg font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">SecureAuth System</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white mb-3">
                A robust authentication system with GPG-encrypted sessions, 2FA support, and JWT tokens. Built with security-first principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">JavaScript</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Node.js</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Cryptography</span>
              </div>
              <p className="text-xs text-oatmeal-stone dark:text-oatmeal-white">
                <span className="font-semibold">Status:</span> Active Development
              </p>
            </div>

            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 border border-oatmeal-stone/20">
              <h4 className="text-lg font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">DevTools CLI Suite</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white mb-3">
                Collection of command-line tools for developers including code analyzers, automated testing utilities, and deployment helpers.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Node.js</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">CLI</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Automation</span>
              </div>
              <p className="text-xs text-oatmeal-stone dark:text-oatmeal-white">
                <span className="font-semibold">Status:</span> Open Source
              </p>
            </div>

            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 border border-oatmeal-stone/20">
              <h4 className="text-lg font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">WebSec Scanner</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white mb-3">
                Automated web vulnerability scanner that detects XSS, SQL injection, CSRF, and other common security issues in web applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Python</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Security</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Pentesting</span>
              </div>
              <p className="text-xs text-oatmeal-stone dark:text-oatmeal-white">
                <span className="font-semibold">Status:</span> Beta Testing
              </p>
            </div>

            <div className="p-6 rounded-lg bg-oatmeal-card/10 dark:bg-oatmeal-olive/30 border border-oatmeal-stone/20">
              <h4 className="text-lg font-semibold text-oatmeal-black dark:text-oatmeal-white mb-2">Portfolio Builder</h4>
              <p className="text-sm text-oatmeal-stone dark:text-oatmeal-white mb-3">
                A customizable portfolio template system with dark mode, responsive design, and easy content management for developers.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">React</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Next.js</span>
                <span className="text-xs px-2 py-1 rounded bg-oatmeal-olive/50 text-oatmeal-white dark:text-oatmeal-white">Tailwind</span>
              </div>
              <p className="text-xs text-oatmeal-stone dark:text-oatmeal-white">
                <span className="font-semibold">Status:</span> Completed
              </p>
            </div>

          </div>
        </div>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="w-full bg-oatmeal-card p-2 dark:bg-oatmeal-olive">
          <div className="not-prose">
            <div className="@container rounded-xl bg-oatmeal-black in-[figure]:-mx-1 in-[figure]:-mb-1">
              <div
                className={clsx(
                  "rounded-xl p-1 text-sm scheme-dark dark:bg-oatmeal-card dark:inset-ring dark:inset-ring-oatmeal-stone/10",
                )}
              >
                <EditorAnimation timeline={timeline}>
                  <div className="flex w-fit gap-2 p-1 pb-2">
                    <span className="inline-flex size-3 items-center justify-center rounded-full bg-white/20">
                      <span
                        className={clsx(
                          "inline-flex size-1.5 items-center justify-center rounded-full bg-white/20",
                          "transition-opacity duration-300 ease-in",
                          "opacity-0 group-data-modified:opacity-100 group-data-modified:duration-100 group-data-modified:ease-linear",
                        )}
                      ></span>
                    </span>
                    <span className="size-3 rounded-full bg-white/20"></span>
                    <span className="size-3 rounded-full bg-white/20"></span>
                  </div>
                  <div className="flex w-full flex-col gap-1 lg:h-132.5 lg:flex-row">
                    <div className="flex flex-col gap-1 lg:w-1/2 xl:w-5/8">
                      <Panel className="min-h-0 flex-1 max-lg:max-h-76" aria-label="panel, HTML editor, animated">
                        <Tabs>
                          <Tab selected className="group-data-modified:italic">
                            index.html
                          </Tab>
                          <Tab>app.css</Tab>
                          <Tab className="italic">package.json</Tab>
                        </Tabs>
                        <HtmlFile className="with-line-numbers" />
                      </Panel>
                      <Panel className="h-32 shrink-0 lg:h-46" aria-label="panel, terminal, animated">
                        <Tabs>
                          <Tab selected>Terminal</Tab>
                        </Tabs>
                        <Terminal />
                      </Panel>
                    </div>
                    <div className="flex h-66 flex-col gap-2.5 lg:h-auto lg:w-1/2 xl:w-3/8">
                      <Panel className="h-full" aria-label="panel, built CSS, animated">
                        <Tabs>
                          <Tab selected>build.css</Tab>
                        </Tabs>
                        <BuiltCss className="with-line-numbers" timeline={timeline} />
                      </Panel>
                    </div>
                  </div>
                </EditorAnimation>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}

function HtmlFile({ className }: { className?: string }) {
  return (
    <HighlightedCode
      aria-label="editor, readonly, html file"
      className={clsx(
        "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:rounded-lg *:px-3 *:py-2",
        "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
        "**:[code]:pr-4",
        "**:[code]:w-full **:[pre]:w-full **:[pre]:whitespace-pre-wrap",
        "text-[0.8125rem]/[1.5rem]",
        className,
      )}
      example={html`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tailwind CSS</title>
            <link rel="stylesheet" href="/build.css" />
          </head>
          <body>
            <button class="__CLASSES__"></button>
          </body>
        </html>
      `}
      components={{
        span: (props) => {
          if (props.children === '"__CLASSES__"') {
            return (
              <span {...props}>
                {'"'}
                <TypingAnimation />
                <span className="transition-opacity duration-300 group-data-finished:opacity-0 after:absolute after:mt-1.5 after:inline-block after:h-[1.2em] after:w-px after:border-r-2 after:border-oatmeal-stone after:bg-transparent after:content-['']"></span>
                {'"'}
              </span>
            );
          }

          return <span {...props} />;
        },
      }}
    />
  );
}

function Terminal() {
  return (
    <div
      className={clsx(
        "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:rounded-lg *:px-4 *:py-2",
        "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
        "**:[code]:pr-4",
        "text-[0.8125rem]/[1.5rem]",
      )}
    >
      <pre className="text-slate-50">
        <code>
          <TerminalAnimation />
        </code>
      </pre>
    </div>
  );
}

async function BuiltCss({ className, timeline }: { className?: string; timeline: EditorKeyframe[] }) {
  let candidates = timeline.map((frame) => frame.class).filter((className) => className !== undefined);
  let code = await generateCss({ license: false, candidates });

  return (
    <HighlightedCode
      aria-label="editor, readonly, built CSS"
      className={clsx(
        "opacity-0 group-data-finished:opacity-100 group-data-running:opacity-100",
        "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:rounded-lg *:px-4 *:py-2",
        "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
        "**:[code]:pr-4",
        "**:[code]:w-full **:[pre]:w-full **:[pre]:whitespace-pre-wrap",
        "text-[0.8125rem]/[1.5rem]",
        className,
      )}
      example={{ lang: "css", code }}
      transformers={[separateIndentationTokens(), wrapClassesInOutput()]}
      components={{
        span: (props) => {
          return <span {...props} />;
        },
        div: (props) => {
          return <ShowOutputClassAnimation {...props} />;
        },
      }}
    />
  );
}

function separateIndentationTokens(): ShikiTransformer {
  let leadingWhitespace = /^\s*/;

  return {
    tokens(lines) {
      return lines.map((line) => {
        if (!line[0]) return line;

        // Take the indentation from the first token
        let indent = line[0].content.match(leadingWhitespace)?.[0];
        if (!indent) return line;

        line[0].content = line[0].content.slice(indent.length);
        line[0].offset += indent.length;

        return [
          {
            type: "text",
            content: indent,
            scopes: ["indent"],
            offset: 0,
            htmlAttrs: {
              "data-indent": "",
            },
          },
          ...line,
        ];
      });
    },
  };
}

function wrapClassesInOutput(): ShikiTransformer {
  return {
    root(node) {
      let pre = node.children[0] as Element;
      let code = pre.children[0] as Element;

      // Wrap the lines for each class in a div
      let children: ElementContent[] = [];

      let inClass = false;
      let depth = 0;
      let nodes: ElementContent[] = [];
      let classIndex = 0;

      for (let i = 0; i < code.children.length; ++i) {
        let child = code.children[i];

        if (child.type !== "element") continue;
        if (child.tagName !== "span") continue;
        if (child.properties.class !== "line") continue;

        let text = getTextContent(child).trim();

        let isClassStart = text.startsWith(".");
        let isBlockStart = text.endsWith("{");
        let isBlockEnd = text.endsWith("}");

        if (isClassStart) {
          inClass = true;

          nodes = [];
          children.push({
            type: "element",
            tagName: "div",
            properties: {
              index: classIndex++,
            },
            children: nodes,
          });
        }

        if (inClass) {
          nodes.push(child);

          if (isBlockStart) {
            depth++;
          } else if (isBlockEnd) {
            depth--;
          }
        } else {
          children.push(child);
        }

        if (depth === 0) {
          inClass = false;
        }
      }

      code.children = children;

      return node;
    },
  };
}

function Panel({
  className,
  numbered,
  children,
  ...props
}: {
  className?: string;
  numbered?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  return (
    // We *want* the sticky positioning because that means the scrollbar handles
    // appear over the tab bar instead of under it. However, this presents a
    // problem. We are no longer able to use `flex-col-reverse` for the terminal
    // because it puts the tab bar at the bottom of the container. Wrapping an
    // element around everything fixes it but breaks horizontal sticky
    // positioning — vertical keeps working.
    //
    // As a workaround we use a client component to scroll things instead
    <AnchoredToBottom
      {...props}
      enabled={true}
      className={clsx(
        "isolate",
        "flex flex-col overflow-hidden rounded-lg bg-white/10 dark:bg-white/5",
        "inset-ring inset-ring-white/5",
        numbered && "with-line-numbers",
        className,
      )}
    >
      {children}
    </AnchoredToBottom>
  );
}

function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="sticky top-0 left-0 z-10 col-start-1 row-start-1 mb-px flex items-center gap-2 border-b border-b-white/5 bg-white/2.5 bg-clip-padding p-1 text-white backdrop-blur-lg"
      role="presentation"
      aria-label="Tab Bar"
    >
      {children}
    </div>
  );
}

function Tab({ className, selected, children }: { className?: string; selected?: boolean; children: React.ReactNode }) {
  return (
    <button
      className={clsx(
        "isolate rounded-sm px-2 py-1 text-xs/5 text-white inset-ring-white/5 hover:bg-white/10 aria-selected:bg-white/10 aria-selected:inset-ring",
        className,
      )}
      role="presentation"
      aria-selected={selected}
    >
      {children}
    </button>
  );
}
