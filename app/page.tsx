import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileSpreadsheet,
  Headphones,
  Mail,
  MapPin,
  MessagesSquare,
  PanelsTopLeft,
  Search,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";
import { MobileNav } from "./mobile-nav";
import { SampleDialog } from "./sample-dialog";

const services = [
  {
    icon: FileSpreadsheet,
    number: "01",
    title: "Data & records",
    text: "Accurate data entry, spreadsheet updates, file organization, and structured digital records.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Admin support",
    text: "Reports, document preparation, task tracking, and dependable day-to-day operational support.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "Customer support",
    text: "Professional issue handling, inquiry resolution, escalation support, and clear communication.",
  },
  {
    icon: Search,
    number: "04",
    title: "Research & coordination",
    text: "Online research, inventory monitoring, workflow coordination, and careful follow-through.",
  },
];

const samples = [
  {
    kind: "sheet",
    label: "Practice sample 01",
    title: "Inventory Tracker",
    text: "A structured spreadsheet concept for monitoring stock, movement, status, and follow-up actions.",
    tools: "Excel · Google Sheets",
  },
  {
    kind: "research",
    label: "Practice sample 02",
    title: "Research Comparison Sheet",
    text: "A clear research format that organizes sources, options, notes, and recommendations for faster decisions.",
    tools: "Google Search · Sheets",
  },
  {
    kind: "support",
    label: "Practice sample 03",
    title: "Customer Response Library",
    text: "Reusable response templates for common questions, issue escalation, and professional follow-up.",
    tools: "Google Docs · Gmail-ready",
  },
] as const;

const experience = [
  {
    years: "2022 - 2026",
    role: "Quality Assurance / Logistics Staff",
    company: "PH Global J&T Express",
    detail:
      "Managed inventory records, precise data entry, warehouse documentation, cross-team coordination, customer escalations, and management reports.",
  },
  {
    years: "2019 - 2022",
    role: "Barista / Kitchen Staff",
    company: "Ameny Tea House",
    detail:
      "Delivered customer service in a fast-paced setting while handling cash reconciliation and maintaining organized work areas.",
  },
  {
    years: "2018",
    role: "Housekeeping / Dining / Kitchen Staff",
    company: "Pamulinawen Hotel",
    detail:
      "Maintained high cleanliness and safety standards while supporting direct guest services.",
  },
];

const tools = [
  "Microsoft Excel",
  "Microsoft Word",
  "PowerPoint",
  "Google Sheets",
  "Google Docs",
  "Google Drive",
];

function SamplePreview({ kind }: { kind: string }) {
  if (kind === "research") {
    return (
      <div className="sample-preview research-preview" aria-hidden="true">
        <div className="preview-search"><Search /><span /></div>
        {[82, 68, 90].map((width) => <div className="research-row" key={width}><i /><span style={{ width: `${width}%` }} /></div>)}
      </div>
    );
  }
  if (kind === "support") {
    return (
      <div className="sample-preview support-preview" aria-hidden="true">
        <MessagesSquare />
        <div className="message left" /><div className="message right" /><div className="message left short" />
      </div>
    );
  }
  return (
    <div className="sample-preview sheet-preview" aria-hidden="true">
      <div className="sheet-head"><span /><span /><span /><span /></div>
      {[1, 2, 3, 4].map((row) => <div className="sheet-row" key={row}><span /><span /><span /><i /></div>)}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Marc Lex VA home">
          Marc Lex <span>VA</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Sample Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <Button asChild className="nav-cta">
            <a href="#contact">Let&apos;s talk <ArrowRight aria-hidden="true" /></a>
          </Button>
          <MobileNav />
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles aria-hidden="true" /> Virtual Assistant Portfolio</p>
          <h1>Reliable virtual support.<br /><em>Carefully handled.</em></h1>
          <p className="hero-intro">
            I&apos;m <strong>Marc Lex Mateo</strong>, a detail-oriented Virtual Assistant specializing in data entry, administrative support, customer service, and logistics coordination.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#contact">Discuss a role <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/Marc-Lex-Mateo-Resume.pdf" download>Download résumé <Download aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="trust-row" aria-label="Professional strengths">
            <span><CheckCircle2 aria-hidden="true" /> Detail-oriented</span>
            <span><CheckCircle2 aria-hidden="true" /> Organized</span>
            <span><CheckCircle2 aria-hidden="true" /> Dependable</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame portrait-frame">
            <Image
              src="/marc-lex-mateo.webp"
              alt="Professional portrait of Marc Lex Mateo wearing a black suit and tie"
              width={1000}
              height={1000}
              priority
              unoptimized
            />
          </div>
          <div className="photo-caption">
            <span>Marc Lex Mateo</span>
            <small>Virtual Assistant</small>
          </div>
          <div className="experience-badge">
            <strong>3+</strong>
            <span>years in quality &amp; logistics</span>
          </div>
        </div>
      </section>

      <section className="availability" aria-label="Availability">
        <div className="section-shell availability-inner">
          <div><i /><span><small>Current status</small>Open to remote VA opportunities</span></div>
          <div><MapPin aria-hidden="true" /><span><small>Location &amp; time zone</small>Philippines · UTC+8</span></div>
          <div><PanelsTopLeft aria-hidden="true" /><span><small>Work arrangement</small>Full-time or part-time roles welcome</span></div>
        </div>
      </section>

      <section id="services" className="services section-shell">
        <div className="section-heading">
          <p className="eyebrow">How I can help</p>
          <h2>Practical support that keeps work moving.</h2>
          <p>My operational background translates naturally into reliable virtual assistance for busy teams and business owners.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="card-top"><Icon aria-hidden="true" /><span>{service.number}</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="section-shell">
          <div className="section-heading portfolio-heading">
            <p className="eyebrow">Sample work</p>
            <h2>A clear look at how I organize information.</h2>
            <p>These practice demonstrations are based on the administrative, logistics, and customer-support tasks in my professional background.</p>
          </div>
          <div className="sample-grid">
            {samples.map((sample) => (
              <article className="sample-card" key={sample.title}>
                <SamplePreview kind={sample.kind} />
                <div className="sample-content">
                  <p className="sample-label">{sample.label}</p>
                  <h3>{sample.title}</h3>
                  <p>{sample.text}</p>
                  <span>{sample.tools}</span>
                  <SampleDialog kind={sample.kind} title={sample.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Key capabilities">
        <div className="section-shell proof-inner">
          <div><strong>Accuracy</strong><span>Quality-focused work</span></div>
          <div><strong>Coordination</strong><span>Cross-team experience</span></div>
          <div><strong>Service</strong><span>Professional issue resolution</span></div>
          <div><strong>Tools</strong><span>Microsoft &amp; Google suites</span></div>
        </div>
      </section>

      <section id="experience" className="experience section-shell">
        <div className="section-heading compact">
          <p className="eyebrow">Work history</p>
          <h2>Experience built in fast-moving environments.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <p className="timeline-years">{item.years}</p>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-shell">
        <div className="skills-panel">
          <div>
            <p className="eyebrow">Tools &amp; strengths</p>
            <h2>Ready for the details.</h2>
            <p className="skills-copy">Comfortable with the tools teams use to organize information and keep daily tasks on track.</p>
          </div>
          <div className="tool-list">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <div className="qualification">
            <p>Education</p>
            <strong>Bachelor of Science in Hospitality Management</strong>
            <span>Divine Word College of Laoag</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="contact-panel">
          <div className="contact-intro">
            <p className="eyebrow light">Let&apos;s connect</p>
            <h2>Need a reliable Virtual Assistant?</h2>
            <p>Tell me about the tasks you need help with. I&apos;d be glad to discuss how I can support your team.</p>
            <div className="direct-contact">
              <a href="mailto:lexarmatt@gmail.com"><Mail aria-hidden="true" /> lexarmatt@gmail.com</a>
              <span><MapPin aria-hidden="true" /> Valenzuela City, Philippines</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top">Marc Lex <span>VA</span></a>
        <p>Virtual Assistant Portfolio</p>
        <a href="/Marc-Lex-Mateo-Resume.pdf" download>Download résumé &darr;</a>
      </footer>
    </main>
  );
}
