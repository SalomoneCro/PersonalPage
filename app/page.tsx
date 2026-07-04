"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, Code2, Compass, FileText, Sparkles, Mountain, Route, GraduationCap } from "lucide-react"

const X_URL = "https://x.com/pedrosalomonear"
const GITHUB_URL = "https://github.com/SalomoneCro"
const LINKEDIN_URL = "https://www.linkedin.com/in/pedrosalomone/"
const EMAIL = "pedrosalomonee@gmail.com"

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

type Job = {
  role: string
  company: string
  meta: string
  period: string
  description: string
  href?: string
}

// Site copy — English only for now.
const en = {
  nav: { whoiam: "Who I am", projects: "Projects", experience: "Experience" },
  hero: {
    eyebrow: "AI Lead & Builder",
    headline: "Hey, I'm Pedro 🧉",
    subhead:
      "I build with AI and math. Currently AI Lead at Vera AI, an early-stage startup — and chasing something of my own on the side.",
    ctaLine: "I write about what I learn along the way.",
  },
  followX: "Follow",
  sections: {
    whoiam: "Who I am",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
  },
  whoiam: {
    builder:
      "I'm an entrepreneur at heart who happens to love math and get obsessed with AI. I started out doing quantitative finance — applying math to markets — and now I work with LLMs and natural language at scale as AI Lead at Vera AI, an early-stage startup, where we ship fast and I learn a ton every week: RAG, LLM evals, and the messy reality of building AI that works. My dream isn't a unicorn or raising millions. It's building something of my own that pays the bills and gives me the freedom to live on my terms.",
    adventurer:
      "Outside the screen, I'm happiest a little out of my comfort zone. I've taught snowboarding, I ran a marathon, and I chase adrenaline where I can find it. I travel every time I get the chance — nothing opens my head like landing somewhere new and figuring it out. I'm also learning guitar, slowly and badly.",
  },
  projects: [
    {
      title: "AI Legal Document Summarization",
      description:
        "An automated system for generating judicial case summaries using Large Language Models, built for the Córdoba Provincial Courts. Applied LLMs to a real, high-stakes domain problem.",
    },
    {
      title: "AI Recommendation System for E-commerce Sellers",
      description:
        "My ongoing thesis: a recommendation system using Reinforcement Learning and Transformers that suggests actionable strategies for e-commerce sellers.",
    },
    {
      title: "Outsiders",
      description:
        "A progress-tracking app for professional snowboarders. I launched an MVP, but it never found product-market fit, so I closed it.",
    },
    {
      title: "Lugarcito",
      description:
        "A carpooling platform I co-founded and launched. I built all the backend logic using graph algorithms to match drivers and passengers by route. We got hundreds of ride searches and dozens of trips registered, but never reached the driver density it needed, so we closed it.",
    },
  ],
  experience: [
    {
      role: "AI Lead",
      company: "Vera AI",
      href: "https://www.heyvera.ai/",
      meta: "Remote",
      period: "Present",
      description:
        "Leading AI/data at an early-stage startup that analyzes retail conversations to coach salespeople and give managers insights. Work spans RAG architectures, LLM evaluation, prompt engineering, and shipping AI features fast.",
    },
    {
      role: "Data Scientist / Quant",
      company: "Lightstorm.ai",
      href: "https://www.lightstorm.ai/",
      meta: "Madrid (Remote)",
      period: "2024",
      description:
        "Quantitative finance work — applying math to markets. Built a data-driven solution from scratch to address a core startup problem, and developed an internal library following software-engineering best practices.",
    },
    {
      role: "Snowboard & Ski Instructor",
      company: "Windham Mountain Club",
      meta: "New York, USA",
      period: "2 seasons",
      description:
        "Taught snowboarding and skiing to groups in English, adapting to every skill level. Built interpersonal and leadership skills in a high-pressure, safety-critical environment.",
    },
  ] as Job[],
  education: {
    degree: "Bachelor's Degree in Applied Mathematics",
    school: "Universidad Nacional de Córdoba (2021–Present)",
    description:
      "Focus on data science, computer science, and AI. Coursework includes neural networks & deep learning, algorithms & complexity, probability & statistics, Bayesian methods, numerical analysis, operations research, quantitative finance, and machine learning.",
  },
  footer: {
    headline: "Building in public. Follow along on X.",
    copyright: "© 2025 Pedro Salomone",
  },
}

const projectIcons = [FileText, Sparkles, Mountain, Route]

function FollowOnX({ label }: { label: string }) {
  return (
    <Button asChild size="lg" className="group h-12 rounded-lg px-7 text-base font-semibold shadow-lg shadow-black/25">
      <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label={`${label} on X (opens in a new tab)`}>
        <XLogo className="size-[18px]" />
        {label}
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    </Button>
  )
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-10 font-heading text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>
}

export default function Home() {
  const t = en

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8">
          <a
            href="#top"
            className={cn("rounded font-heading text-base font-bold tracking-tight transition-colors hover:text-primary md:text-lg", focusRing)}
          >
            Pedro Salomone
          </a>
          <div className="flex items-center gap-3 md:gap-6">
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a href="#whoiam" className={cn("rounded transition-colors hover:text-foreground", focusRing)}>
                {t.nav.whoiam}
              </a>
              <a href="#projects" className={cn("rounded transition-colors hover:text-foreground", focusRing)}>
                {t.nav.projects}
              </a>
              <a href="#experience" className={cn("rounded transition-colors hover:text-foreground", focusRing)}>
                {t.nav.experience}
              </a>
            </nav>
            <Button asChild size="sm" className="group gap-1.5 font-semibold">
              <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label={`${t.followX} on X (opens in a new tab)`}>
                <XLogo className="size-4" />
                <span className="hidden sm:inline">{t.followX}</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-glow px-6 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-14">
            <div className="reveal order-2 text-center md:order-1 md:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary md:text-sm">
                {t.hero.eyebrow}
              </p>
              <h1 className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {t.hero.headline}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/90 md:mx-0 md:text-xl">
                {t.hero.subhead}
              </p>
              <p className="mt-6 text-base text-muted-foreground">{t.hero.ctaLine}</p>
              <div className="mt-8 flex justify-center md:justify-start">
                <FollowOnX label={t.followX} />
              </div>
            </div>
            <div className="reveal order-1 flex justify-center md:order-2 md:justify-end">
              <Avatar className="size-44 border-4 border-primary/70 shadow-2xl shadow-black/40 ring-4 ring-secondary/50 ring-offset-4 ring-offset-background md:size-60">
                <AvatarImage src="/profile-picture.jpg" alt="Pedro Salomone" className="object-cover" />
                <AvatarFallback className="bg-card font-heading text-3xl font-bold text-primary">PS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Who I am */}
        <section id="whoiam" className="scroll-mt-24 px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto w-full max-w-5xl">
            <SectionHeading>{t.sections.whoiam}</SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="reveal rounded-xl border border-border bg-card/50 p-6 md:p-8">
                <Code2 className="mb-4 size-6 text-primary" aria-hidden />
                <p className="leading-relaxed text-foreground/90">{t.whoiam.builder}</p>
              </div>
              <div className="reveal rounded-xl border border-border bg-card/50 p-6 md:p-8">
                <Compass className="mb-4 size-6 text-primary" aria-hidden />
                <p className="leading-relaxed text-foreground/90">{t.whoiam.adventurer}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 bg-card/30 px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto w-full max-w-5xl">
            <SectionHeading>{t.sections.projects}</SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {t.projects.map((project, i) => {
                const Icon = projectIcons[i]
                return (
                  <Card
                    key={project.title}
                    className="reveal h-full border-border bg-card transition-colors duration-300 hover:border-primary/40"
                  >
                    <CardHeader>
                      <Icon className="mb-2 size-6 text-primary" aria-hidden />
                      <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-1 text-sm leading-relaxed text-foreground/75">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto w-full max-w-5xl">
            <SectionHeading>{t.sections.experience}</SectionHeading>
            <div className="space-y-4">
              {t.experience.map((job) => (
                <div key={job.role} className="reveal rounded-xl border border-border bg-card/50 p-6 md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2">
                    <h3 className="font-heading text-lg font-semibold">
                      {job.role}
                      <span className="font-normal text-muted-foreground">
                        {" — "}
                        {job.href ? (
                          <a
                            href={job.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "rounded text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary",
                              focusRing,
                            )}
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                        {` • ${job.meta}`}
                      </span>
                    </h3>
                    <Badge variant="secondary" className="shrink-0 font-medium">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 bg-card/30 px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto w-full max-w-5xl">
            <SectionHeading>{t.sections.education}</SectionHeading>
            <div className="reveal rounded-xl border border-border bg-card/50 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="font-heading text-lg font-semibold">{t.education.degree}</h3>
                  <p className="text-sm text-muted-foreground">{t.education.school}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{t.education.description}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40 px-6 py-14 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-heading text-2xl font-bold md:text-3xl">{t.footer.headline}</h2>
          <FollowOnX label={t.followX} />
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("inline-flex items-center gap-1.5 rounded transition-colors hover:text-primary", focusRing)}
            >
              <Github className="size-4" /> GitHub
            </a>
            <span aria-hidden className="text-border">
              ·
            </span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("inline-flex items-center gap-1.5 rounded transition-colors hover:text-primary", focusRing)}
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <span aria-hidden className="text-border">
              ·
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className={cn("inline-flex items-center gap-1.5 rounded transition-colors hover:text-primary", focusRing)}
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
