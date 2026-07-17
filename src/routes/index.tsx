import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/bytework-logo.png.asset.json";
import {
  Eye,
  Workflow,
  Boxes,
  UsersRound,
  LayoutGrid,
  LineChart,
  Smartphone,
  CloudCog,
  Bot,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Eye,
    tag: "AIVSS",
    title: "AI Vision Safety Solution",
    lead: "Real-time monitoring for a safer workplace",
    body: "Our AI continuously monitors PPE usage, vehicle movements, restricted zones and potential hazards to ensure workplace safety.",
  },
  {
    icon: Workflow,
    tag: "BPM",
    title: "Business Process Management",
    lead: "Take control of your business with clear visibility",
    body: "Streamline your workflows with BPM. Optimize processes, eliminate bottlenecks, and drive operational excellence.",
  },
  {
    icon: Boxes,
    tag: "ERP",
    title: "Enterprise Resource Planning",
    lead: "Your business command center",
    body: "Manage all your core business functions in one central location. Maximize efficiency and gain a holistic view of operations.",
  },
  {
    icon: UsersRound,
    tag: "RA",
    title: "Resource Augmentation",
    lead: "Add expertise to your team as needed",
    body: "Quickly scale your team with skilled professionals for projects, peak demands, or unique skill requirements.",
  },
  {
    icon: LayoutGrid,
    tag: "PC",
    title: "Portals & Collaboration",
    lead: "Unleash teamwork. Drive results.",
    body: "Break down barriers and foster teamwork with powerful collaboration tools. Connect your workforce anytime, anywhere.",
  },
  {
    icon: LineChart,
    tag: "BI",
    title: "Business Intelligence",
    lead: "Turn data into decisions",
    body: "Unlock business potential with BI solutions. Drive informed decisions and achieve sustainable growth.",
  },
  {
    icon: Smartphone,
    tag: "MAD",
    title: "Mobile App Development",
    lead: "Transforming ideas into impactful mobile experiences",
    body: "We craft bespoke mobile apps that deliver seamless user experiences combining intuitive design with high-performance functionality.",
  },
  {
    icon: CloudCog,
    tag: "CIM",
    title: "Cloud Integration & Migration",
    lead: "Smooth cloud integration & migration services",
    body: "Move your business to the cloud with our simple and secure integration and migration solutions tailored to your needs.",
  },
  {
    icon: Bot,
    tag: "RPA",
    title: "Robotic Process Automation",
    lead: "Streamlined automation for seamless efficiency",
    body: "Unlock the full potential of your business with our cutting-edge Robotic Process Automation solutions.",
  },
];

const technologies = [
  "React", "Node.js", "Python", "AWS", "Azure", "Kubernetes",
  "TensorFlow", "PostgreSQL", "Salesforce", "SAP", "Power BI", "Docker",
];

const stats = [
  { k: "120+", v: "Projects delivered" },
  { k: "40+", v: "Enterprise clients" },
  { k: "15+", v: "Countries served" },
  { k: "98%", v: "Client retention" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Bytework" className="h-8 w-8 rounded-md" />
            <span className="font-display font-semibold tracking-tight text-lg">bytework</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#tech" className="hover:text-foreground transition">Technologies</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.99 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(0.99 0 0 / 0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              IT Services & Consulting
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold text-white leading-[1.02]">
              Engineering the systems that run{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                modern business.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
              From AI vision safety to ERP, BPM, BI and cloud migration — Bytework designs, builds and operates the software backbone of ambitious enterprises.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
                Explore services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                Book a consultation
              </a>
            </div>
          </div>

          {/* stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl font-semibold text-white">{s.k}</div>
                <div className="mt-1 text-sm text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="text-sm font-medium text-primary uppercase tracking-widest">What we do</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-2xl">
                Nine practices. One team accountable for outcomes.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Every engagement is delivered by senior engineers, architects and analysts — no handoffs, no juniors on your critical path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.tag}
                  className="group relative rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-accent-foreground bg-accent/25 px-2.5 py-1 rounded-md">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">{s.lead}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="tech" className="py-24 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-medium text-primary uppercase tracking-widest">Technologies</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Fluent across the stack</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We pick tools that fit the problem, not the resume. Here's a slice of what we ship every day.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY US */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-medium text-primary uppercase tracking-widest">Why Bytework</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              A consulting partner that ships.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We combine strategic clarity with senior engineering to deliver software that measurably moves the needle — safety incidents down, cycle times down, revenue up.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Senior-only delivery teams, embedded with your people",
                "Fixed-scope discovery before any long-term commitment",
                "Production ownership from day one — not just prototypes",
                "Transparent weekly reporting with real KPIs",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-3xl p-10 flex items-center justify-center"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, oklch(0.78 0.16 75 / 0.4), transparent 50%)",
                }}
              />
              <img src={logoAsset.url} alt="Bytework" className="relative h-40 w-40 opacity-95" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card border border-border p-5 shadow-lg max-w-[220px]">
              <div className="font-display text-3xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground mt-1">Years engineering enterprise systems across MENA, EU and North America</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24 md:py-32" style={{ background: "var(--hero-dark)" }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            Let's build the next thing that runs your business.
          </h2>
          <p className="mt-6 text-white/70 max-w-xl mx-auto">
            Tell us the problem. We'll come back with a plan, a team, and a timeline within 5 business days.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <a href="mailto:hello@bytework.com" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <Mail className="h-5 w-5 text-accent" />
              <div className="mt-3 text-xs text-white/60">Email</div>
              <div className="text-sm text-white font-medium mt-0.5">hello@bytework.com</div>
            </a>
            <a href="tel:+10000000000" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <Phone className="h-5 w-5 text-accent" />
              <div className="mt-3 text-xs text-white/60">Phone</div>
              <div className="text-sm text-white font-medium mt-0.5">+1 (000) 000-0000</div>
            </a>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <MapPin className="h-5 w-5 text-accent" />
              <div className="mt-3 text-xs text-white/60">Office</div>
              <div className="text-sm text-white font-medium mt-0.5">Remote-first, global</div>
            </div>
          </div>

          <a
            href="mailto:hello@bytework.com"
            className="mt-12 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Bytework" className="h-6 w-6 rounded" />
            <span className="font-display font-semibold text-sm">bytework</span>
            <span className="text-xs text-muted-foreground ml-2">IT services & consulting</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bytework. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
