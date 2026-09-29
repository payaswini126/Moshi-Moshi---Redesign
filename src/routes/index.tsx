import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Instagram,
  Linkedin,
  Menu,
  MoveUpRight,
  Send,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type PointerEvent, type ReactNode } from "react";

import logoAsset from "@/assets/moshi-moshi-symbol.png";
import ayushLogo from "@/assets/clients/ayush.png";
import godrejLogo from "@/assets/clients/godrej.svg";
import increffLogo from "@/assets/clients/increff.svg";
import jewelsLogo from "@/assets/clients/jewels.webp";
import titanLogo from "@/assets/clients/titan.png";
import uberLogo from "@/assets/clients/uber.png";
import underneatLogo from "@/assets/clients/underneat.png";
import vijayanandLogo from "@/assets/clients/vijayanand.png";
import volvoLogo from "@/assets/clients/volvo.svg";
import godrejImage from "@/assets/work/godrej-lakeside-orchards.jpg";
import jewelsImage from "@/assets/work/jewels-of-india.jpg";
import ayushImage from "@/assets/work/ministry-of-ayush.png";
import titanImage from "@/assets/work/titan-watches.jpg";
import uberImage from "@/assets/work/uber.png";
import underneatImage from "@/assets/work/underneat.jpg";
import vijayanandImage from "@/assets/work/vijayanand-travels.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moshi Moshi | The Communication Company" },
      { name: "description", content: "Moshi Moshi creates brands, campaigns, digital products, films, animation and PR that earn attention." },
      { property: "og:title", content: "Moshi Moshi | The Communication Company" },
      { property: "og:description", content: "Expect the extra from an independent Indian advertising and communications agency." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = ["All", "BRAND CONSULTANCY", "WEBSITE UI/UX", "DM", "PR", "VIDEOS", "APPS", "3D"] as const;
type Category = (typeof categories)[number];

const services: Array<[string, string, string]> = [
  ["01", "Brand Consultancy", "Positioning, identity and systems made to move with culture."],
  ["02", "Website UI/UX", "Websites and digital products built around real human behaviour."],
  ["03", "Web/Mobile Application", "Useful, intuitive experiences designed from screen one."],
  ["04", "Digital Marketing", "Always-on strategy and campaigns that turn scrolling into action."],
  ["05", "Live Videos", "Live formats that put brands inside the moment, not outside it."],
  ["06", "2D/3D Animation", "Moving worlds, crafted frame by frame for stories that need more."],
  ["07", "PR (Public Relations)", "Narratives, conversations and earned attention that travel."],
];

const work: Array<{
  client: string;
  title: string;
  note: string;
  categories: Exclude<Category, "All">[];
  image: string;
  link: string;
  index: string;
}> = [
  {
    client: "Godrej Properties",
    title: "Live reimagined in every detail #BuiltForYou",
    note: "A compelling launch campaign for Godrej Lakeside Orchard, positioning it as a premium lakeside lifestyle destination in Bangalore.",
    categories: ["BRAND CONSULTANCY", "DM", "VIDEOS", "3D"],
    image: godrejImage,
    link: "https://www.moshimoshi.in/portfolio/godrej-lakeside-orchards",
    index: "01",
  },
  {
    client: "Uber for Business",
    title: "Business travel all set with Uber for Business",
    note: "A 360° campaign positioning Uber for Business as India's preferred corporate mobility partner.",
    categories: ["BRAND CONSULTANCY", "DM", "VIDEOS"],
    image: uberImage,
    link: "https://www.moshimoshi.in/portfolio/uber",
    index: "02",
  },
  {
    client: "India's largest watch manufacturer",
    title: "India's first Flying Tourbillon",
    note: "Marking 40 years with the launch of the country's first Flying Tourbillon, a feat once exclusive to the Swiss majors.",
    categories: ["BRAND CONSULTANCY", "VIDEOS", "3D"],
    image: titanImage,
    link: "https://www.moshimoshi.in/portfolio/titan-watches",
    index: "03",
  },
  {
    client: "UnderNeat by Kusha Kapila",
    title: "Shapewear for Indians by Kusha Kapila",
    note: "The official launch of Kusha Kapila's innerwear brand, after months of organically building anticipation on social media.",
    categories: ["BRAND CONSULTANCY", "DM", "PR", "WEBSITE UI/UX"],
    image: underneatImage,
    link: "https://www.moshimoshi.in/portfolio/underneat",
    index: "04",
  },
  {
    client: "Vijayanand Travels",
    title: "The legendary new age bus service.",
    note: "Rebranding the country's largest fleet of buses to help Vijayanand Travels conquer new spaces and experiences.",
    categories: ["BRAND CONSULTANCY", "DM", "WEBSITE UI/UX", "APPS"],
    image: vijayanandImage,
    link: "https://www.moshimoshi.in/portfolio/vijayanand-travels",
    index: "05",
  },
  {
    client: "Ministry of Ayush",
    title: "India's largest video vlogging contest",
    note: "A Social, Digital and PR campaign that reached over 350 million people and created a national vlogging record.",
    categories: ["DM", "PR", "VIDEOS"],
    image: ayushImage,
    link: "https://www.moshimoshi.in/portfolio/ministry-of-ayush",
    index: "06",
  },
  {
    client: "Jewels of India",
    title: "India's largest jewellery exhibition",
    note: "Launched with Tamannaah Bhatia as brand ambassador, powered by social buzz, influencer marketing and PR.",
    categories: ["DM", "PR", "VIDEOS"],
    image: jewelsImage,
    link: "https://www.moshimoshi.in/portfolio/jewels-of-india",
    index: "07",
  },
];

const cityOfferings = ["Brand Consultancy", "Website UI/UX", "Web/Mobile Application", "Digital Marketing", "Live Videos", "PR (Public Relations)"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [word, setWord] = useState(0);
  const [category, setCategory] = useState<Category>("All");
  const rotatingWords = ["LOUDER.", "WEIRDER.", "BETTER.", "EXTRA."];
  const filteredWork = category === "All" ? work : work.filter((item) => item.categories.includes(category));

  useEffect(() => {
    const id = window.setInterval(() => setWord((current) => (current + 1) % rotatingWords.length), 1500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Moshi Moshi home">
            <img src={logoAsset} alt="" className="size-11 bg-paper object-contain" />
            <div className="leading-none"><span className="block text-lg font-black">MOSHI MOSHI</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">The Communication Company</span></div>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase md:flex">
            <a className="nav-link" href="#work">Work</a><a className="nav-link" href="#services">What we do</a><a className="nav-link" href="#rumours">Rumours</a>
            <Button asChild><a href="#contact">Start something <ArrowUpRight size={16}/></a></Button>
          </nav>
          <Button variant="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
        </div>
        {menuOpen && <nav className="grid gap-4 border-t border-border bg-background p-6 text-3xl font-black uppercase md:hidden">{[["Work", "#work"], ["What we do", "#services"], ["Rumours", "#rumours"], ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <section id="top" className="relative flex min-h-[92svh] flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <div className="hero-stamp pointer-events-none absolute right-[8%] top-[16%] hidden size-48 rotate-12 border border-ink bg-spring lg:grid place-items-center"><span className="grid size-28 place-items-center bg-paper"><img src={logoAsset} alt="" className="size-24 mix-blend-multiply" /></span></div>
        <HeroSticker />
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"><span className="size-2 animate-pulse rounded-full bg-acid"/>Independent creative agency · India</p>
        <h1 className="max-w-[1400px] text-[clamp(4.1rem,12vw,11rem)] font-black uppercase leading-[0.78]">EXPECT<br/>THE <span key={word} className="word-pop inline-block text-primary">{rotatingWords[word]}</span></h1>
        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-border pt-6 md:flex-row md:items-end">
          <p className="max-w-xl text-xl leading-snug text-muted-foreground md:text-2xl">If it's extraordinary, extraverted and extra creative it's Moshi Moshi.</p>
          <a href="#work" className="group flex items-center gap-3 text-xs font-bold uppercase">See what we mean <span className="grid size-12 place-items-center border border-border transition group-hover:translate-y-1 group-hover:bg-acid group-hover:text-ink"><ArrowDownRight/></span></a>
        </div>
      </section>

      <div className="marquee border-y border-ink bg-acid py-4 text-ink" aria-hidden="true"><div className="marquee-track text-3xl font-black uppercase">Brand consultancy ✦ Website UI/UX ✦ Web/Mobile Application ✦ Digital marketing ✦ Live videos ✦ 2D/3D animation ✦ PR ✦ Brand consultancy ✦ Website UI/UX ✦ Web/Mobile Application ✦ Digital marketing ✦</div></div>

      <section id="work" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">Our work</p><h2 className="section-title">Made to<br/><span className="text-primary">be noticed.</span></h2></div><p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">Big launches. Sharp pivots. Ideas that refuse to sit quietly.</p></div>
        <div className="filter-rail mb-10 flex gap-2 overflow-x-auto pb-3" role="group" aria-label="Filter work by category">
          {categories.map((item) => <Button key={item} size="sm" variant={category === item ? "primary" : "outline"} aria-pressed={category === item} onClick={() => setCategory(item)} className="shrink-0">{item}</Button>)}
        </div>
        <div className="work-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWork.map((item) => <WorkCard key={item.client} item={item} />)}
        </div>
        {filteredWork.length === 0 && <p className="border border-border p-10 text-center text-muted-foreground">More work in this discipline is coming soon.</p>}
        <div className="mt-16 grid border border-border md:grid-cols-3">
          <AnimatedStat value={350} suffix="M+" label="people reached through India's largest video vlogging contest" />
          <AnimatedStat value={40} suffix=" years" label="marked with India's first Flying Tourbillon" />
          <div className="stat"><strong>ONE BIG SHOW</strong><span>India's largest jewellery exhibition with Tamannaah Bhatia</span></div>
        </div>
      </section>

      <section id="services" className="border-y border-border bg-paper px-5 py-24 text-ink md:px-10 md:py-36">
        <p className="eyebrow text-ink/60">What we do</p><h2 className="section-title max-w-5xl">ONE COMPANY.<br/><span className="text-electric">EVERY KIND OF</span> COMMUNICATION.</h2>
        <div className="mt-16 border-t border-ink/20">
          {services.map(([num, title, copy]) => <div key={num} className="service-row group grid gap-4 border-b border-ink/20 py-7 md:grid-cols-[60px_1fr_1fr_40px] md:items-center"><span className="text-xs font-bold">{num}</span><h3 className="text-2xl font-black uppercase md:text-4xl">{title}</h3><p className="max-w-md text-sm text-ink/60 md:text-base">{copy}</p><ArrowUpRight className="hidden transition-transform group-hover:rotate-45 md:block"/></div>)}
        </div>
      </section>

      <section id="rumours" className="px-5 py-24 md:px-10 md:py-36">
        <p className="eyebrow">Client testimonials</p><h2 className="section-title">RUMOURS:<br/><span className="text-pink">WHICH ONES</span> DID YOU HEAR?</h2>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <blockquote className="quote"><p>“The team understood the ambition behind our brief and translated it into communication that felt clear, confident and alive.”</p><footer>INCREFF · CLIENT PARTNER</footer></blockquote>
          <blockquote className="quote quote-alt"><p>“They bring infectious energy to the room, then match it with the craft and discipline to get the work out into the world.”</p><footer>VOLVO · CLIENT PARTNER</footer></blockquote>
        </div>
      </section>

      <ClientMarquee />

      <ElectricContact />
    </main>
  );
}

function HeroSticker() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--rx", `${y * -9}deg`);
    event.currentTarget.style.setProperty("--ry", `${x * 12}deg`);
  };
  const reset = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="hero-sticker-bob pointer-events-none absolute right-[7%] top-[42%] z-10 hidden w-44 md:block xl:w-52" aria-hidden="true">
      <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className="hero-sticker pointer-events-auto relative aspect-square">
        <svg viewBox="0 0 200 200" className="size-full">
          <circle cx="100" cy="100" r="97" fill="var(--grape)" stroke="var(--leaf)" strokeWidth="5" />
          <circle cx="100" cy="100" r="56" fill="var(--iris)" stroke="var(--leaf)" strokeWidth="3" />
          <defs><path id="sticker-ring" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" /></defs>
          <text fill="var(--leaf)" fontSize="16.5" fontWeight="900" letterSpacing="2">
            <textPath href="#sticker-ring" textLength="477" lengthAdjust="spacingAndGlyphs">THE COMMUNICATION COMPANY ✦ THE COMMUNICATION COMPANY ✦</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center"><img src={logoAsset} alt="" className="size-16 bg-iris object-contain p-1.5 xl:size-20" /></span>
      </div>
    </div>
  );
}

function WorkCard({ item }: { item: (typeof work)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--rx", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--ry", `${x * 7}deg`);
    event.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const reset = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return <article ref={ref} onPointerMove={onMove} onPointerLeave={reset} className="work-card group">
    <a href={item.link} target="_blank" rel="noreferrer" className="case-art relative block aspect-[4/5] overflow-hidden rounded-[2rem]">
      <img src={item.image} alt={`${item.client} campaign`} className="case-image absolute inset-0 size-full object-cover" />
      <div className="case-scrim absolute inset-0" />
      <span className="absolute left-5 top-5 z-20 rounded-full border border-foreground/40 bg-background/35 px-3 py-2 text-[10px] font-black backdrop-blur-md">{item.index} / CASE</span>
      <span className="absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full border border-foreground/40 bg-background/35 backdrop-blur-md"><ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45"/></span>
      <div className="absolute inset-x-6 bottom-6 z-20 text-foreground"><p className="text-lg font-black">{item.client}</p><h3 className="mt-2 text-3xl font-black leading-[.95] md:text-4xl">{item.title}</h3></div>
    </a>
    <div className="flex min-h-32 flex-col justify-between gap-5 px-1 py-5"><p className="text-sm text-muted-foreground">{item.note}</p><div className="flex flex-wrap gap-1">{item.categories.map((tag) => <span key={tag} className="border border-border px-2 py-1 text-[9px] font-bold uppercase text-muted-foreground">{tag}</span>)}</div></div>
  </article>;
}

const clients = [
  { name: "Godrej Properties", logo: godrejLogo },
  { name: "Uber for Business", logo: uberLogo },
  { name: "Titan", logo: titanLogo },
  { name: "UnderNeat", logo: underneatLogo },
  { name: "Vijayanand Travels", logo: vijayanandLogo },
  { name: "Ministry of Ayush", logo: ayushLogo },
  { name: "Jewels of India", logo: jewelsLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Increff", logo: increffLogo },
];
function ClientMarquee() {
  const repeated = [...clients, ...clients];
  return <section className="client-band border-y border-border" aria-label="Clients we've worked with">
    <p className="eyebrow px-5 pb-5 pt-7 md:px-10">Purple sheeps of the flock</p>
    <div className="client-marquee overflow-hidden"><div className="client-track flex w-max items-center">{repeated.map((client, index) => <span aria-hidden={index >= clients.length} key={`${client.name}-${index}`} className="client-logo flex shrink-0 items-center justify-center" title={client.name}><img src={client.logo} alt={index < clients.length ? client.name : ""} /></span>)}</div></div>
  </section>;
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(value); return; }
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / 900, 1);
        setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <div ref={ref} className="stat"><strong>{shown}{suffix}</strong><span>{label}</span></div>;
}

function ElectricContact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !phone || phone.length > 20 || !service || !city || !message || message.length > 1000) {
      setError("Please complete every field with a valid email and message.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    const subject = encodeURIComponent(`Business enquiry: ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:hello@moshimoshi.in?subject=${subject}&body=${body}`;
  };

  return <section id="contact" className="electric-footer relative overflow-hidden px-5 py-24 md:px-10 md:py-28">
    <div className="poster-grid" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-[1500px]">
      <div className="mb-16 flex items-end justify-between gap-8"><div><p className="eyebrow text-acid">Ring ring</p><h2 className="section-title max-w-5xl">BRING THE IDEA.<br/><span className="text-pink">OR THE PROBLEM.</span></h2></div><MoveUpRight className="hidden size-20 text-acid md:block"/></div>
      <div className="footer-grid grid gap-12 xl:grid-cols-[1fr_1fr_1.2fr]">
        <div className="grid content-start gap-10 sm:grid-cols-2 xl:grid-cols-1">
          <div><a href="#top" className="flex items-center gap-3"><img src={logoAsset} alt="" className="size-12 bg-paper object-contain"/><span className="text-3xl font-black">Moshi Moshi</span></a><p className="mt-3 text-sm uppercase text-muted-foreground">The Communication Company</p></div>
          <FooterList title="Agency" links={[["About Us", "https://www.moshimoshi.in/about-us"], ["Our Story", "https://www.moshimoshi.in/our-story"], ["Careers", "https://www.moshimoshi.in/careers"], ["Blogs", "https://www.moshimoshi.in/blog"]]} />
          <FooterList title="Services" links={services.map(([, title]) => [title, "#services"])} />
        </div>
        <div className="grid content-start gap-10">
          <AddressBlock city="Bengaluru" address="No.130, 33rd Cross, 4th T Block East, Next to Ibaco, Jayanagar, Bangalore, 560041" />
          <AddressBlock city="Gurugram" address="Vi-John Tower, 393, Udyog Vihar Phase 3 Rd, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana 122016" />
          <div className="grid gap-8 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">{["Bengaluru", "Delhi-NCR", "Mumbai"].map((city) => <div key={city}><h3 className="text-xl font-black uppercase">{city}</h3><ul className="mt-3 space-y-1 text-xs text-muted-foreground">{cityOfferings.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
        </div>
        <div className="contact-panel border border-foreground/20 bg-background p-6 md:p-8">
          <p className="eyebrow text-acid">Contact us!</p><h3 className="mt-3 text-3xl font-black uppercase md:text-5xl">Let's solve it.</h3>
          <p className="mt-5 text-sm text-muted-foreground">For Business Enquiries Only! For jobs, please visit the <a className="text-acid underline" href="https://www.moshimoshi.in/careers" target="_blank" rel="noreferrer">Careers page</a>.</p>
          <form className="mt-8 grid gap-3 sm:grid-cols-2" onSubmit={submit} noValidate>
            <input name="name" maxLength={100} required aria-label="Name" placeholder="Name" className="contact-input"/>
            <input name="email" maxLength={254} required type="email" aria-label="Email" placeholder="Enter your email" className="contact-input"/>
            <input name="phone" maxLength={20} required type="tel" aria-label="Phone" placeholder="Phone" className="contact-input"/>
            <select name="service" required aria-label="Choose Service" defaultValue="" className="contact-input"><option value="" disabled>Choose Service</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select>
            <select name="city" required aria-label="Choose City" defaultValue="" className="contact-input"><option value="" disabled>Choose City</option><option>Bengaluru</option><option>Delhi-NCR</option><option>Mumbai</option></select>
            <textarea name="message" maxLength={1000} required aria-label="Message" placeholder="Type your message here." className="contact-input min-h-28 resize-y sm:row-span-2"/>
            <Button type="submit" className="contact-submit rounded-full border-acid bg-acid text-ink hover:bg-pink sm:col-span-2">{sent ? <><Check/> Email ready</> : <><Send/> Submit</>}</Button>
            {error && <p role="alert" className="text-sm text-acid sm:col-span-2">{error}</p>}
          </form>
          <div className="mt-7 flex gap-3">
            <Social href="https://www.instagram.com/saymoshimoshi" label="Instagram"><Instagram/></Social>
            <Social href="https://www.linkedin.com/company/saymoshimoshi" label="LinkedIn"><Linkedin/></Social>
            <Social href="https://www.youtube.com/@moshimoshi748" label="YouTube"><Youtube/></Social>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-4 border-t border-foreground/20 pt-7 text-xs font-bold uppercase text-muted-foreground md:flex-row"><span>© {new Date().getFullYear()} Moshi Moshi</span><span>Some rights reserved, others left to the imagination.</span></div>
    </div>
  </section>;
}

function FooterList({ title, links }: { title: string; links: Array<[string, string]> }) {
  return <div><h3 className="text-xl font-black uppercase">{title}</h3><ul className="mt-3 space-y-1 text-sm text-muted-foreground">{links.map(([label, href]) => <li key={label}><a className="footer-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a></li>)}</ul></div>;
}

function AddressBlock({ city, address }: { city: string; address: string }) { return <address className="not-italic"><p className="eyebrow text-sun">Office</p><h3 className="mt-2 text-2xl font-black uppercase">{city}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{address}</p></address>; }

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-foreground/30 transition hover:-translate-y-1 hover:bg-sun hover:text-ink">{children}</a>; }