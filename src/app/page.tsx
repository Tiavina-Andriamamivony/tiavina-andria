import Image from "next/image";
import { Mail, MapPin, ArrowUpRight, ChevronDown, Phone, Trophy, ExternalLink } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { KineticText } from "@/components/ui/kinetic-text";
import { Marquee } from "@/components/ui/marquee";

const projects = [
  {
    index: "01",
    title: "UnFaked",
    description:
      "Misinformation-detection platform. Wired the Google Fact Check API for real-time claim verification and ran on-device image analysis (TensorFlow + COCO) to flag manipulated media. Shipped the full flow, from capture to verdict.",
    tags: ["Next.js", "TensorFlow", "Computer Vision", "Google API"],
    year: "2025",
    image: "/unFaked.png",
    badge: "2nd — DevFest '25",
    link: "https://un-faked-preprod.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/UnFaked",
  },
  {
    index: "02",
    title: "NeuraNote",
    description:
      "AI notebook that turns raw, messy notes into structured knowledge — summarize, rewrite, restructure. Built the model plumbing and a deliberately minimal capture-first interface.",
    tags: ["Next.js", "AI", "Vercel"],
    year: "2025",
    image: "/image.png",
    link: "https://neura-note.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/NeuraNote",
  },
  {
    index: "03",
    title: "Ilona",
    description:
      "Voice-first call-center agent. Speech synthesis over multi-turn conversation flows so the assistant handles customer interactions end to end, not just single prompts.",
    tags: ["Next.js", "ElevenLabs", "AI Agents"],
    year: "2025",
    image: "/ilona.png",
    subtitle: "AI Call Agent",
    link: "https://ilona-perfect-call-agent.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/Ilona-perfect-call-agent",
  },
  {
    index: "04",
    title: "Face-Me",
    description:
      "Facial-recognition tool running detection and feature analysis directly in the browser, behind a UI that stays out of the way. TensorFlow in the client, no round-trip to a server.",
    tags: ["Next.js", "TensorFlow"],
    year: "2025",
    image: "/face_me.png",
    subtitle: "Computer Vision",
    link: "https://face-me-dusky.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/face-me",
  },
];

const ticker = [
  "Java", "Spring Boot", "PostgreSQL", "TypeScript", "Next.js", "React",
  "Docker", "AWS", "Flyway", "JPA / Hibernate", "REST", "OpenAPI", "TDD",
  "CI/CD", "Prisma", "TailwindCSS", "TensorFlow", "ElevenLabs", "Linux",
];

const skills = {
  Languages: ["Java", "TypeScript", "JavaScript", "SQL", "Python"],
  Backend: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "OpenAPI"],
  Frontend: ["React", "Next.js", "TailwindCSS", "Shadcn UI"],
  Data: ["PostgreSQL", "JPA / Hibernate", "Flyway", "Prisma"],
  Practices: ["TDD", "CI/CD", "Docker", "Code Review", "Git"],
  "AI / CV": ["TensorFlow", "Computer Vision", "Ollama", "ElevenLabs"],
};

const experience = [
  {
    role: "Backend Developer — Apprenticeship",
    company: "Numer Madagascar",
    period: "Sep 2025 — Apr 2026",
    stack: "Java · Spring Boot · PostgreSQL · AWS · Docker",
    notes: [
      {
        head: "Disaster recovery for Vola",
        body: "Vola runs a daily cron that scrapes Orange Money and reconciles tuition payments. When it goes down, that day is never replayed. Built an idempotent recovery endpoint that re-runs verification for any chosen date via upserts — killing the manual, by-hand reconciliation on the admin account.",
      },
      {
        head: "Vola × HEI ADMIN integration",
        body: "Delegated all tuition-payment verification to Vola. Generated a typed client from Vola's OpenAPI spec, wrote a clean domain-mapping layer between the two systems, and moved the verification trigger upstream so a student's fees always reflect real payment state.",
      },
      {
        head: "How it shipped",
        body: "Production codebase under TDD with coverage, CI/CD, Docker and real code review. Single-responsibility services, granular error handling, errors surfaced in Sentry.",
      },
    ],
  },
  {
    role: "Full-Stack Developer — Consultant",
    company: "MA-ERI Consulting",
    period: "Mar 2025 — Present",
    stack: "Next.js · Resend · Vercel",
    notes: [
      {
        head: "Company site + growth plumbing",
        body: "Built and deployed the official site with Google indexing, and wired Resend to automate quotation-request workflows.",
      },
      {
        head: "Internal tools",
        body: "Shipped internal web tools supporting business productivity and digital visibility.",
      },
    ],
  },
];

const achievements = [
  {
    title: "Best Team in Madagascar",
    event: "picoCTF 2026 · Carnegie Mellon University Africa",
    href: "/madagascar-best-team.pdf",
    featured: true,
  },
  {
    title: "2nd Place — DevFest Hackathon 2025",
    event: "UnFaked · AI misinformation detection · Google Developer Group",
  },
  {
    title: "2nd Place — HEI Hackathon",
    event: "Skill AI · AI learning platform · Solo build",
  },
];

const education = [
  { school: "HEI Madagascar", detail: "Licence 3 — Software Ecosystem", years: "2025–2026", current: true, sub: "B.S. Computer Science · Graduating June 2027" },
  { school: "HEI Madagascar", detail: "Licence 2 — Software Ecosystem", years: "2024–2025" },
  { school: "HEI Madagascar", detail: "Licence 1 — Computer Science", years: "2023–2024" },
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#dossier" },
  { label: "Beyond", href: "#beyond" },
  { label: "Résumé", href: "/tiavina_resume.pdf" },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ─────────────────────────────────── */}
      <nav className="nav-glass fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="font-mono text-sm font-medium tracking-tight">T.ANDRIAMAMIVONY</span>
          </a>
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────── */}
      <section className="hero-vignette dotgrid relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
        <RetroGrid
          className="!absolute inset-0 z-0 [mask-image:linear-gradient(to_top,black_10%,transparent_75%)]"
          angle={72}
          cellSize={52}
          opacity={0.5}
          darkLineColor="#8f240d"
          lightLineColor="#8f240d"
        />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <div className="animate-fade-up mb-8 flex items-center gap-3 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur" style={{ animationDelay: "0s" }}>
            <Image src="/tava.png" alt="Tiavintsoa Andriamamivony" width={28} height={28} className="h-7 w-7 rounded-full object-cover" priority />
            <span className="font-mono text-xs tracking-wide text-muted-foreground">
              Antananarivo, MG — available for work
            </span>
          </div>

          <div className="animate-fade-up mb-8" style={{ animationDelay: "0.08s" }}>
            <Image
              src="/titi.png"
              alt="Tiavintsoa Andriamamivony"
              width={200}
              height={200}
              className="mx-auto h-44 w-44 rounded-2xl object-cover shadow-lg ring-2 ring-accent/10 sm:h-52 sm:w-52"
              priority
            />
          </div>

          <p className="animate-fade-up mono-label mb-6" style={{ animationDelay: "0.1s" }}>
            Backend Engineer / Full-Stack / AI Integration
          </p>

          <KineticText
            as="h1"
            text="Tiavintsoa"
            className="animate-fade-up justify-center text-6xl font-display font-medium leading-[0.92] tracking-tight sm:text-8xl"
            style={{ animationDelay: "0.18s" }}
          />
          <h1 className="animate-fade-up -mt-1 font-serif text-6xl italic text-muted-foreground sm:text-8xl" style={{ animationDelay: "0.24s" }}>
            Andriamamivony
          </h1>

          <p className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "0.4s" }}>
            Creative full stack developer combining engineering with design thinking to craft intuitive experiences and polished interfaces.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.5s" }}>
            <a href="/madagascar-best-team.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent-soft px-4 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/15">
              <Trophy className="h-3.5 w-3.5" />
              Best Team in Madagascar — picoCTF 2026
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-muted-foreground">
              <Trophy className="h-3.5 w-3.5" />
              2× Hackathon Runner-Up
            </span>
          </div>

          <div className="animate-fade-up mt-9 flex items-center gap-4" style={{ animationDelay: "0.6s" }}>
            <a href="mailto:tiavina.andriamamivony.pro@gmail.com" className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-background transition-transform hover:scale-[1.03]">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a href="#work" className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-6 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent">
              See the work
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <a href="#work" className="absolute bottom-8 z-10 animate-bounce text-muted-foreground/60">
          <ChevronDown className="h-5 w-5" />
        </a>
      </section>

      {/* ── Tech ticker ─────────────────────────── */}
      <div className="relative border-y border-border bg-surface/40 py-4">
        <Marquee className="[--duration:38s]" pauseOnHover>
          {ticker.map((t) => (
            <span key={t} className="mx-4 flex items-center gap-4 font-mono text-sm text-muted-foreground">
              {t} <span className="text-accent/60">/</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── Selected Work ───────────────────────── */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="mono-label mb-3">§ 01 — Selected Work</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Things I&apos;ve <span className="font-serif italic font-normal text-accent">shipped</span>
            </h2>
          </div>
          <p className="hidden font-mono text-xs text-muted-foreground sm:block">{String(projects.length).padStart(2, "0")} projects</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="project-card group overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="h-60 w-full object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-md bg-background/70 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
                  {project.year}
                </span>
                {project.badge && (
                  <span className="absolute left-4 top-4 flex items-center gap-1 rounded-md border border-accent/40 bg-background/70 px-2.5 py-1 font-mono text-xs text-accent backdrop-blur">
                    <Trophy className="h-3 w-3" />
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent/70">{project.index}</span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent" aria-label={`${project.title} repository`}>
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent" aria-label={`Visit ${project.title}`}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                {project.subtitle && <p className="mb-3 font-mono text-xs text-muted-foreground">{project.subtitle}</p>}
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Dossier: about + experience ─────────── */}
      <section id="dossier" className="border-t border-border">
        {/* About */}
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
          <p className="mono-label mb-6">§ 02 — About</p>
          <h2 className="mb-12 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-[2.75rem]">
            I believe technology should <span className="font-serif italic font-normal text-accent">serve people</span> — not the other way around.
          </h2>
          <div className="space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              Growing up in Antananarivo, Madagascar, I was the kid who took things apart to understand how they worked — radios, old phones, anything I could get my hands on. That curiosity naturally extended to science: physics, astronomy, chemistry. But when I discovered programming, everything clicked. It was the most direct way to turn ideas into something real.
            </p>
            <p>
              I chose to study at <span className="text-foreground">HEI (Haute École d&apos;Informatique)</span> where I dove deep into full stack development. But I quickly realized that writing code wasn&apos;t enough — I wanted to design experiences that people actually enjoy using. That&apos;s when I started blending engineering with UI/UX design, and it changed everything about how I approach building software.
            </p>
            <p>
              Today, I work across the entire stack — from crafting pixel-perfect interfaces in React and Next.js to building robust APIs with Spring Boot. I&apos;m particularly drawn to <span className="text-foreground">AI-powered tools</span> that augment human capabilities, which led me to build projects like UnFaked (deepfake detection) and NeuraNote (AI-powered note transformation).
            </p>
            <p>
              I don&apos;t just want to ship features. I want my work to improve people&apos;s daily lives, solve real problems, and maybe even inspire them to build something of their own.
            </p>
          </div>
        </div>

        {/* Experience log */}
        <div className="border-t border-border bg-surface/30">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <p className="mono-label mb-10">Experience Log</p>
            <div className="space-y-14">
              {experience.map((exp) => (
                <div key={exp.company} className="grid gap-6 md:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="font-mono text-xs text-accent">{exp.period}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                    <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted-foreground/70">{exp.stack}</p>
                  </div>
                  <div className="space-y-5 border-l border-border pl-6">
                    {exp.notes.map((note) => (
                      <div key={note.head}>
                        <p className="mb-1 flex items-center gap-2 text-sm font-medium">
                          <span className="text-accent">→</span> {note.head}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{note.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack */}
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mono-label mb-10">Toolkit</p>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border-t border-border pt-4">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent/70">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mx-auto max-w-6xl px-6 pb-8">
          <p className="mono-label mb-6">Recognition</p>
          <div className="space-y-3">
            {achievements.map((a) =>
              a.featured ? (
                <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-xl border border-accent/40 bg-accent-soft p-6 transition-colors hover:bg-accent/15">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-background">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold">{a.title}</p>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">{a.event}</p>
                    </div>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1 font-mono text-xs text-accent sm:inline-flex">
                    View certificate <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </a>
              ) : (
                <div key={a.title} className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
                  <Trophy className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">{a.event}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Education */}
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mono-label mb-6">Education</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {education.map((e) => (
              <div key={e.detail} className="rounded-xl border border-border bg-surface p-5">
                <div className="mb-2 flex items-center gap-2">
                  <p className="font-display font-semibold">{e.school}</p>
                  {e.current && <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">Now</span>}
                </div>
                <p className="text-sm text-muted-foreground">{e.detail}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/60">{e.years}</p>
                {e.sub && <p className="mt-2 text-xs text-muted-foreground/70">{e.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beyond ──────────────────────────────── */}
      <section id="beyond" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-14">
          <p className="mono-label mb-6">§ 03 — Beyond the terminal</p>
          <h2 className="mb-6 font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            What I do when I&apos;m <span className="font-serif italic font-normal text-accent">not shipping</span>
          </h2>
          <p className="text-base leading-[1.85] text-muted-foreground">
            What you do off the clock shapes how you show up on it. Here&apos;s what fuels the rest.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-28">
          {/* Basketball */}
          <div className="mb-6 grid items-stretch gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-2xl border border-border bg-surface p-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">🏀 Competitive Basketball</p>
              <h3 className="mb-4 font-display text-2xl font-semibold tracking-tight">DBC — Division 2</h3>
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Not a hobby, a discipline. Three sessions a week, ~10 hours split between the weight room and on-court drills. Division 2 with DBC taught me teamwork, resilience, and performing under pressure — the same things that decide whether code holds up when it matters.
              </p>
            </div>
            <div className="lg:col-span-2 flex items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-accent-soft to-transparent text-7xl">
              🏀
            </div>
          </div>

          {/* MIT */}
          <div className="mb-6 grid items-stretch gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 flex items-center justify-center rounded-2xl border border-border bg-surface text-7xl lg:order-first">
              🎓
            </div>
            <div className="lg:col-span-3 rounded-2xl border border-border bg-surface p-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">🌍 Languages &amp; Ambition</p>
              <h3 className="mb-4 font-display text-2xl font-semibold tracking-tight">On the road to MIT</h3>
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Actively learning English and Latin — broadening how you communicate broadens how you think. Hit a 115 streak on Duolingo in English, and building a profile strong enough to apply to MIT for a Master&apos;s. Ambitious on purpose.
              </p>
            </div>
          </div>

          {/* Culture */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">🎬 Culture &amp; Stories</p>
            <h3 className="mb-6 font-display text-2xl font-semibold tracking-tight">The stories that shaped me</h3>
            <p className="mb-8 max-w-2xl text-sm leading-[1.85] text-muted-foreground">
              Deep into anime, manga, games and books — stories about perseverance, identity, and pushing past limits. They read a lot like the way I see my own run.
            </p>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              <div className="bg-surface p-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">Anime</p>
                <ul className="space-y-2 text-sm">
                  <li>Vinland Saga</li><li>Tokyo Ghoul</li><li>Kuroko no Basket</li>
                </ul>
              </div>
              <div className="bg-surface p-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">Films</p>
                <ul className="space-y-2 text-sm">
                  <li>Hereditary</li><li>Midsommar</li>
                </ul>
              </div>
              <div className="bg-surface p-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">Books</p>
                <ul className="space-y-2 text-sm">
                  <li>The Prey of Shadows <span className="text-muted-foreground">— Connolly</span></li>
                  <li>Inferno <span className="text-muted-foreground">— Dan Brown</span></li>
                  <li>Doom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA + Footer ────────────────────────── */}
      <footer className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mono-label mb-6">Let&apos;s build</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Got something that <span className="font-serif italic font-normal text-accent">has to work?</span>
          </h2>
          <a href="mailto:tiavina.andriamamivony.pro@gmail.com" className="mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-background transition-transform hover:scale-[1.03]">
            <Mail className="h-4 w-4" /> tiavina.andriamamivony.pro@gmail.com
          </a>
          <div className="mt-6 flex items-center justify-center gap-6 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Antananarivo, MG</span>
            <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +261 32 64 197 54</span>
          </div>
        </div>

        <div className="rule-ticks" />

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Tiavintsoa Andriamamivony</p>
          <div className="flex items-center gap-5">
            <a href="mailto:tiavina.andriamamivony.pro@gmail.com" className="text-muted-foreground transition-colors hover:text-accent" aria-label="Email"><Mail className="h-4 w-4" /></a>
            <a href="https://github.com/Tiavina-Andriamamivony" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent" aria-label="GitHub"><GithubIcon className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/tiavintsoa-ulrich-andriamamivony-624673366/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent" aria-label="LinkedIn"><LinkedinIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
