import Image from "next/image";
import { Mail, MapPin, ExternalLink, ArrowUpRight, ChevronDown, Phone, Trophy } from "lucide-react";

const projects = [
  {
    title: "UnFaked",
    description: "Deepfake Detection SaaS — Designed the UI/UX and contributed to the development of a platform detecting deepfake media. Integrated Google Fact Check API for misinformation verification. Awarded 2nd place at DevFest Hackathon 2025 (Axian University).",
    tags: ["React", "AI", "Google API", "UI/UX"],
    year: "2025",
    image: "/unFaked.png",
    badge: "2nd Place — DevFest 2025",
    link: "https://un-faked-preprod.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/UnFaked"
  },
  {
    title: "NeuraNote",
    description: "AI Productivity Tool — Designed and developed an AI-powered web application that transforms raw notes into structured knowledge. Created a minimalist UI/UX optimized for fast idea capture and readability. Implemented AI features including summarization, rewriting, and structured content generation.",
    tags: ["Next.js", "AI", "Vercel", "UI/UX"],
    year: "2025",
    image: "/image.png",
    subtitle: "MA-ERI Consulting",
    link: "https://neura-note.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/NeuraNote"
  },
  {
    title: "Face-Me",
    description: "AI Facial Recognition Tool — Designed and developed a web application that uses AI to recognize and analyze facial features. Created an intuitive UI/UX for easy user interaction. Implemented AI algorithms for accurate facial detection and analysis.",
    tags: ["Next.js", "TensorFlow"],
    year: "2025",
    image: "/face_me.png",
    subtitle: "Face-Me Project",
    link: "https://face-me-dusky.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/face-me"
  },
  {
    title: "Ilona",
    description: "AI-Powered Personal Assistant — Designed and developed a web application that uses AI to assist users with daily tasks. Created a user-friendly UI/UX for seamless interaction. Implemented AI algorithms for natural language processing and task management.",
    tags: ["Next.js", "ElevenLabs"],
    year: "2025",
    image: "/ilona.png",
    subtitle: "Ilona Project",
    link: "https://ilona-perfect-call-agent.vercel.app/",
    github: "https://github.com/Tiavina-Andriamamivony/Ilona-perfect-call-agent"
  },
];

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Python","Java"],
  "Frameworks": ["React", "Next.js", "Express.js", "Spring Boot"],
  "Design": ["Figma", "Shadcn UI", "UI/UX Prototyping","Canva"],
  "Tools": ["Git", "TailwindCSS", "Prisma", "PostgreSQL","Docker","Apache Airflow"],
  "AI": ["OpenAI", "Ollama", "ElevenLabs", "TensorFlow"],
};

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Numer",
    period: "Sep 2025 – Mar 2026",
    bullets: [
      "Developed a digital donation platform for students using modern web technologies.",
      "Built user interfaces with Spring Thymeleaf, focusing on usability and clean design.",
      "Designed and implemented APIs for platform functionality.",
    ],
  },
  {
    role: "Developer & Designer",
    company: "MA-ERI Consulting",
    period: "Volunteer",
    bullets: [
      "Designed and developed websites and digital tools for Malagasy businesses.",
      "Created marketing visuals, UI mockups, and user-centered interfaces.",
      "Participated in data analysis and digital transformation initiatives.",
    ],
  },
];

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "And?", href: "#and" },
  { label: "Resume", href: "/tiavina_resume.pdf" },
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
      {/* Navigation */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#">
            <Image src="/logo.png" alt="YUTA" width={40} height={40} className="h-8 w-8 object-contain" />
          </a>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient noise-bg relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          <div className="avatar-ring mb-8 rounded-full animate-fade-up" style={{ animationDelay: "0s" }}>
            <Image
              src="/tava.png"
              alt="Tiavintsoa Andriamamivony"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover"
              priority
            />
          </div>

          <p className="animate-fade-up mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground" style={{ animationDelay: "0.1s" }}>
            Full Stack Developer · UI/UX Designer · AI Integration
          </p>

          <h1 className="animate-fade-up text-5xl font-bold leading-tight tracking-tight sm:text-7xl" style={{ animationDelay: "0.2s" }}>
            Tiavintsoa
            <br />
            <span className="font-serif italic font-normal text-muted-foreground">Andriamamivony</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "0.35s" }}>
            Creative full stack developer combining engineering with design thinking to craft intuitive experiences and polished interfaces.
          </p>

          <div className="animate-fade-up mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800" style={{ animationDelay: "0.4s" }}>
            <Trophy className="h-3.5 w-3.5" />
            2nd Place — DevFest Hackathon 2025
          </div>

          <div className="animate-fade-up mt-8 flex items-center gap-4" style={{ animationDelay: "0.45s" }}>
            <a
              href="mailto:tiavina.andriamamivony.pro@gmail.com"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-all hover:bg-surface-hover"
            >
              View my work
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="animate-fade-up mt-6 flex items-center gap-6 text-sm text-muted-foreground" style={{ animationDelay: "0.55s" }}>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Antananarivo, Madagascar
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              +261 32 64 197 54
            </span>
          </div>
        </div>

        <a href="#projects" className="absolute bottom-10 animate-bounce text-muted-foreground">
          <ChevronDown className="h-5 w-5" />
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Portfolio</p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Selected <span className="font-serif italic font-normal text-muted-foreground">projects</span>
            </h2>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">{projects.length} projects</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {project.year}
                </div>
                {project.badge && (
                  <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-amber-100/90 px-2.5 py-1 text-xs font-medium text-amber-800 backdrop-blur-sm">
                    <Trophy className="h-3 w-3" />
                    {project.badge}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                {project.subtitle && (
                  <p className="mb-3 text-sm font-medium text-accent">{project.subtitle}</p>
                )}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
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

      {/* About Section — Narrative style */}
      <section id="about" className="border-t border-border">
        {/* Story */}
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h2 className="mb-10 text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
            I believe technology should <span className="font-serif italic font-normal text-muted-foreground">serve people</span> — not the other way around.
          </h2>
          <div className="space-y-6 text-base leading-[1.8] text-muted-foreground">
            <p>
              Growing up in Antananarivo, Madagascar, I was the kid who took things apart to understand how they worked — radios, old phones, anything I could get my hands on. That curiosity naturally extended to science: physics, astronomy, chemistry. But when I discovered programming, everything clicked. It was the most direct way to turn ideas into something real.
            </p>
            <p>
              I chose to study at <span className="font-medium text-foreground">HEI (Haute École d&apos;Informatique)</span> where I dove deep into full stack development. But I quickly realized that writing code wasn&apos;t enough — I wanted to design experiences that people actually enjoy using. That&apos;s when I started blending engineering with UI/UX design, and it changed everything about how I approach building software.
            </p>
            <p>
              Today, I work across the entire stack — from crafting pixel-perfect interfaces in React and Next.js to building robust APIs with Spring Boot. I&apos;m particularly drawn to <span className="font-medium text-foreground">AI-powered tools</span> that augment human capabilities, which led me to build projects like UnFaked (deepfake detection) and NeuraNote (AI-powered note transformation).
            </p>
            <p>
              I don&apos;t just want to ship features. I want my work to improve people&apos;s daily lives, solve real problems, and maybe even inspire them to build something of their own.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-border bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">What drives me</p>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background text-lg font-bold">1</div>
                <h3 className="mb-2 text-lg font-semibold">Build with purpose</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Every project should solve a real problem. I start with the user&apos;s needs — not the technology — and work backwards to find the simplest, most elegant solution.</p>
              </div>
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background text-lg font-bold">2</div>
                <h3 className="mb-2 text-lg font-semibold">Design is engineering</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Good design isn&apos;t decoration — it&apos;s problem solving. I treat interfaces as systems where every spacing choice, color, and interaction serves a function.</p>
              </div>
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background text-lg font-bold">3</div>
                <h3 className="mb-2 text-lg font-semibold">Never stop learning</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">From hackathons to volunteering, I put myself in positions where I&apos;m challenged. The best growth comes from building things that push you beyond what you already know.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Skills */}
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Experience */}
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
              <h2 className="mb-10 text-3xl font-bold tracking-tight">
                Where I&apos;ve <span className="font-serif italic font-normal text-muted-foreground">worked</span>
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.company} className="rounded-xl border border-border bg-surface p-6">
                    <div className="mb-1 flex items-start justify-between">
                      <h3 className="font-semibold">{exp.role}</h3>
                      <span className="shrink-0 text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="mb-4 text-sm font-medium text-accent">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="text-sm leading-relaxed text-muted-foreground">
                          <span className="mr-2 text-muted-foreground/40">—</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Toolkit</p>
              <h2 className="mb-10 text-3xl font-bold tracking-tight">
                What I <span className="font-serif italic font-normal text-muted-foreground">use</span>
              </h2>
              <div className="space-y-5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-surface-hover"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Education</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-semibold">HEI Madagascar</p>
                <p className="mt-1 text-sm text-muted-foreground">Licence 2 — Software Ecosystem · 2024–2025</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-semibold">HEI Madagascar</p>
                <p className="mt-1 text-sm text-muted-foreground">Licence 1 — Computer Science · 2023–2024</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-semibold">God&apos;s Titan School</p>
                <p className="mt-1 text-sm text-muted-foreground">Scientific Baccalaureate (Series D) · 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* And? Section */}
      <section id="and" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-10">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">And?</p>
          <h2 className="mb-6 text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
            When I&apos;m not <span className="font-serif italic font-normal text-muted-foreground">coding</span>
          </h2>
          <p className="text-base leading-[1.8] text-muted-foreground">
            I&apos;m a firm believer that what you do outside of work shapes who you are inside it. Here&apos;s what fuels me beyond the keyboard.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24">
          {/* Basketball */}
          <div className="mb-16 grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                <span>🏀</span> Competitive Basketball
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">DBC — Division 2 Player</h3>
              <p className="mb-4 text-sm leading-[1.8] text-muted-foreground">
                Basketball isn&apos;t just a hobby — it&apos;s a discipline. I train 3 times a week, 10 hours total, splitting between weight room sessions for physical conditioning and on-court drills to sharpen my technique. Playing at the competitive level in Division 2 with DBC has taught me about teamwork, resilience, and performing under pressure — skills that translate directly into how I approach engineering challenges.
              </p>
            </div>
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 text-6xl">
                🏀
              </div>
            </div>
          </div>

          {/* MIT Goal */}
          <div className="mb-16 grid items-center gap-10 lg:grid-cols-5">
            <div className="flex items-center justify-center lg:col-span-2 lg:order-first">
              <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 text-6xl">
                🎓
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <span>🌍</span> Languages & Ambition
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">On the road to MIT</h3>
              <p className="mb-4 text-sm leading-[1.8] text-muted-foreground">
                I&apos;m actively learning English and Latin — because broadening how you communicate broadens how you think. I&apos;ve reached a score of 115 on Duolingo in English, and I&apos;m putting every effort into making my profile strong enough to apply to MIT for a Master&apos;s degree. It&apos;s ambitious, but that&apos;s exactly the point.
              </p>
            </div>
          </div>

          {/* Anime, Manga, Games & Books */}
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
              <span>🎬</span> Culture & Stories
            </div>
            <h3 className="mb-6 text-2xl font-bold tracking-tight">The stories that shaped me</h3>
            <p className="mb-8 max-w-2xl text-sm leading-[1.8] text-muted-foreground">
              I&apos;m deeply into anime, manga, video games, and books. Stories about perseverance, identity, and pushing past limits resonate with how I see my own journey.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Anime */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Favorite Anime</p>
                <ul className="space-y-2">
                  <li className="text-sm font-medium">Vinland Saga</li>
                  <li className="text-sm font-medium">Tokyo Ghoul</li>
                  <li className="text-sm font-medium">Kuroko no Basket</li>
                </ul>
              </div>
              {/* Films */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Favorite Films</p>
                <ul className="space-y-2">
                  <li className="text-sm font-medium">Hereditary</li>
                  <li className="text-sm font-medium">Midsommar</li>
                </ul>
              </div>
              {/* Books */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Favorite Books</p>
                <ul className="space-y-2">
                  <li className="text-sm font-medium">The Prey of Shadows <span className="text-muted-foreground font-normal">— John Connolly</span></li>
                  <li className="text-sm font-medium">Inferno <span className="text-muted-foreground font-normal">— Dan Brown</span></li>
                  <li className="text-sm font-medium">Doom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
          <div>
            <p className="text-sm font-semibold">Tiavintsoa Andriamamivony</p>
            <p className="mt-1 text-xs text-muted-foreground">© {new Date().getFullYear()} · All rights reserved</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:tiavina.andriamamivony.pro@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/Tiavina-Andriamamivony" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/tiavintsoa-ulrich-andriamamivony-624673366/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
