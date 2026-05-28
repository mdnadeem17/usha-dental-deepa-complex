import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone, Mail, MapPin, Clock, Sparkles,
  GraduationCap, Calendar, ArrowRight, MessageCircle, Star,
  Instagram, Facebook, Twitter, ShieldCheck,
  Smile, Heart, Award
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import receptionImg from "@/assets/clinic/reception.jpg";
import heroImg from "@/assets/clinic-hero-new.jpg";
import doctorImg from "@/assets/doctor.jpg";
import logoImg from "@/assets/clinic/logo.png";
import toothImg from "@/assets/tooth-3d.png";
import { ClinicTour } from "@/components/ClinicTour";
import { ClinicVideoIntro } from "@/components/ClinicVideoIntro";

// ─── Custom hand-crafted dental icons (not generic Lucide icons) ─────────────

const ToothImplantIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2 C9 2 7 4 7 6.5 C7 9 8 11 8 13 L16 13 C16 11 17 9 17 6.5 C17 4 15 2 12 2Z" />
    <path d="M9 13 L9 20 Q9 22 12 22 Q15 22 15 20 L15 13" />
    <path d="M10 17 L14 17" />
    <path d="M10 19.5 L14 19.5" />
  </svg>
);

const TeethWhiteningIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 8 Q6 5 9 5 Q12 5 12 8 Q12 5 15 5 Q18 5 18 8 Q18 12 15 18 Q13.5 21 12 21 Q10.5 21 9 18 Q6 12 6 8Z" />
    <line x1="19" y1="3" x2="21" y2="1" />
    <line x1="21" y1="3" x2="21" y2="1" strokeWidth="1.5" />
    <circle cx="20" cy="4" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const CrownIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 17 L4 10 L8 14 L12 6 L16 14 L20 10 L20 17 Z" />
    <rect x="4" y="17" width="16" height="3" rx="1" />
  </svg>
);

const RootCanalIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3 C9.5 3 8 5 8 7.5 C8 9.5 9 11 9 13 L15 13 C15 11 16 9.5 16 7.5 C16 5 14.5 3 12 3Z" />
    <path d="M10 13 L10 19" />
    <path d="M14 13 L14 19" />
    <path d="M12 13 L12 21" />
  </svg>
);

const ScalingIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 20 L8 10 L12 16 L16 6 L20 14" />
    <path d="M3 20 L21 20" />
    <circle cx="16" cy="6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const VeneerIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 8 Q7 5 10 5 Q12 5 12 8 Q12 5 14 5 Q17 5 17 8 Q17 12 14 18 Q13 20 12 20 Q11 20 10 18 Q7 12 7 8Z" />
    <path d="M5 7 Q5 4 12 4 Q19 4 19 7" strokeWidth="2.5" />
  </svg>
);

const BracesIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 8 Q5 5 8 5 Q10 5 10 8 Q10 5 12 5 Q14 5 14 8 Q14 5 16 5 Q19 5 19 8" />
    <line x1="4" y1="11" x2="20" y2="11" strokeWidth="2" />
    <circle cx="8" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <path d="M5 14 Q5 17 8 17 Q10 17 10 14 Q10 17 12 17 Q14 17 14 14 Q14 17 16 17 Q19 17 19 14" />
  </svg>
);

const KidsToothIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3 C9 3 7 5.5 7 8 C7 10 8 12 8 14 L16 14 C16 12 17 10 17 8 C17 5.5 15 3 12 3Z" />
    <path d="M10 9.5 Q10 11 12 11 Q14 11 14 9.5" />
    <circle cx="10" cy="8" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14" cy="8" r="0.8" fill="currentColor" stroke="none" />
    <path d="M10 14 L10 20 L14 20 L14 14" />
  </svg>
);

const JewelIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3 L15 7 L21 7 L17 12 L19 18 L12 15 L5 18 L7 12 L3 7 L9 7 Z" />
    <line x1="12" y1="3" x2="12" y2="15" strokeWidth="1" opacity="0.4" />
  </svg>
);

const ExtractionIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 3 C8 3 7 5 7 7 C7 9 8 11 8 13 L12 13 L16 13 C16 11 17 9 17 7 C17 5 16 3 14 3 C13 3 12 4 12 4 C12 4 11 3 10 3Z" />
    <path d="M12 13 L12 20" />
    <path d="M9 17 L15 17" />
    <path d="M10 20 L14 20" />
  </svg>
);

const ProsthoIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 5 Q6 3 9 3 Q12 3 12 5 Q12 3 15 3 Q18 3 18 5 Q18 8.5 15 15 Q13.5 18 12 18 Q10.5 18 9 15 Q6 8.5 6 5Z" />
    <path d="M5 19 Q12 16 19 19" strokeWidth="2" />
    <path d="M5 21 Q12 18 19 21" strokeWidth="1.5" />
  </svg>
);

const CheckupIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="6" />
    <path d="M9 10 L11 12 L15 8" strokeWidth="2" />
    <path d="M12 16 L12 21" />
    <path d="M9 21 L15 21" />
  </svg>
);

const MaxilloIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="9" rx="7" ry="6" />
    <path d="M8 9 Q8 13 12 14 Q16 13 16 9" fill="currentColor" fillOpacity="0.1" />
    <path d="M8 9 L16 9" />
    <path d="M9 11 L15 11" />
    <path d="M10 13 L14 13" />
    <path d="M7 4 Q12 2 17 4" />
  </svg>
);

const OralSurgeryIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12 L9 8 L13 12 L17 6 L21 10" />
    <circle cx="9" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="17" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <path d="M3 19 L10 14 L14 17 L21 12" />
    <line x1="3" y1="22" x2="21" y2="22" strokeWidth="1" opacity="0.3" />
  </svg>
);

const AlignerIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14 a8 8 0 0 1 16 0" />
    <path d="M7 14 a5 5 0 0 1 10 0" />
    <path d="M4 14 h3" />
    <path d="M17 14 h3" />
    <line x1="12" y1="6" x2="12" y2="9" />
    <line x1="8" y1="7" x2="9.5" y2="9.7" />
    <line x1="16" y1="7" x2="14.5" y2="9.7" />
  </svg>
);

const GentleCareIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Elegant tooth outline */}
    <path d="M12 4 C9.5 4 8 6 8 8.5 C8 10.5 9 12 9 14 C9 17 6 18 6 20 C6 20.5 6.5 21 7 21 C9 21 11 19.5 12 18 C13 19.5 15 21 17 21 C17.5 21 18 20.5 18 20 C18 18 15 17 15 14 C15 12 16 10.5 16 8.5 C16 6 14.5 4 12 4Z" />
    {/* A soft surrounding heart shape to represent gentle care */}
    <path d="M12 6.5 C10 4.5 4.5 4 4.5 10 C4.5 15.5 10.5 20.5 12 21 C13.5 20.5 19.5 15.5 19.5 10 C19.5 4 14 4.5 12 6.5Z" opacity="0.4" strokeWidth="1.2" />
  </svg>
);

const ModernTechIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Tooth shape */}
    <path d="M12 3 C9.5 3 8 5 8 7.5 C8 9.5 9 11 9 13 C9 15.5 7.5 17 6.5 18.5 C6.2 19 6.5 19.5 7 19.5 C9 19.5 11 18.5 12 17 C13 18.5 15 19.5 17 19.5 C17.5 19.5 17.8 19 17.5 18.5 C16.5 17 15 15.5 15 13 C15 11 16 9.5 16 7.5 C16 5 14.5 3 12 3Z" />
    {/* Horizontal scanning laser beam */}
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2.2" strokeDasharray="1.5 2" />
    {/* Scan corner brackets */}
    <path d="M5 5 H3 V7" strokeWidth="1.5" />
    <path d="M19 5 H21 V7" strokeWidth="1.5" />
    <path d="M5 19 H3 V17" strokeWidth="1.5" />
    <path d="M19 19 H21 V17" strokeWidth="1.5" />
  </svg>
);

const EthicalArtIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Perfect shield background */}
    <path d="M12 22 C12 22 20 18 20 10 V5 L12 2 L4 5 V10 C4 18 12 22 12 22Z" strokeWidth="1.5" />
    {/* Central Tooth */}
    <path d="M12 6 C10.5 6 9.5 7 9.5 8.5 C9.5 10 10 11 10 12 Q10 14 8.5 15.5 Q10 15.5 11 14.5 L12 13 L13 14.5 Q14 15.5 15.5 15.5 Q14 14 14 12 C14 11 14.5 10 14.5 8.5 C14.5 7 13.5 6 12 6Z" fill="currentColor" fillOpacity="0.15" />
    {/* Checkmark sweep */}
    <path d="M9 11.5 L11 13.5 L15 9" strokeWidth="2" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
} as const;

const services = [
  { icon: ProsthoIcon, title: "Fixed Prosthodontics", desc: "Crowns and bridges that fit so naturally, you'll forget they're there. Designed for life." },
  { icon: CheckupIcon, title: "General Checkup", desc: "We catch problems before they catch you. A thorough look that goes beyond counting teeth." },
  { icon: MaxilloIcon, title: "Maxillofacial Prosthetics", desc: "Restoring faces and smiles after complex conditions — every case treated as unique." },
  { icon: OralSurgeryIcon, title: "Oral Surgery", desc: "Calm hands, sharp precision. Extractions and procedures done right the first time." },
];

const expertise = [
  {
    name: "Dental Implants",
    description: "Missing a tooth? We place titanium roots that feel completely natural — no slipping, no hassle, just your smile back.",
    icon: ToothImplantIcon,
    tag: "Restorative",
    isFeatured: true,
  },
  {
    name: "Teeth Whitening",
    description: "A brighter smile in a single visit. We customise the shade to your face — not just the whitest we can go.",
    icon: TeethWhiteningIcon,
    tag: "Aesthetic",
    isFeatured: false,
  },
  {
    name: "Invisible Aligners",
    description: "Straight teeth without the metal mouth. Clear, comfortable, and nobody needs to know you're wearing them.",
    icon: AlignerIcon,
    tag: "Aesthetic",
    isFeatured: true,
  },
  {
    name: "Root Canal Treatment",
    description: "The procedure everyone fears, done painlessly here. We save your tooth so you don't have to lose it.",
    icon: RootCanalIcon,
    tag: "Restorative",
    isFeatured: false,
  },
  {
    name: "Scaling & Polishing",
    description: "That fresh-clean feeling, professionally done. Removes the buildup that brushing alone can't reach.",
    icon: ScalingIcon,
    tag: "Preventative",
    isFeatured: false,
  },
  {
    name: "Veneers & Laminates",
    description: "Thin ceramic shells that completely transform your smile. Like a new coat of paint — but permanent and beautiful.",
    icon: VeneerIcon,
    tag: "Aesthetic",
    isFeatured: false,
  },
  {
    name: "Ceramic Crowns",
    description: "No dark lines, no metal. Our Zirconia crowns match your natural teeth so well, even you'll be surprised.",
    icon: CrownIcon,
    tag: "Restorative",
    isFeatured: false,
  },
  {
    name: "Tooth Restoration",
    description: "Cavities filled with composite that blends in seamlessly. You'll have a hard time finding it yourself.",
    icon: ToothImplantIcon,
    tag: "Restorative",
    isFeatured: false,
  },
  {
    name: "Extractions & Impactions",
    description: "When a tooth has to go, we make it as gentle as possible — including those stubborn wisdom teeth.",
    icon: ExtractionIcon,
    tag: "Specialised",
    isFeatured: false,
  },
  {
    name: "Braces & Orthodontics",
    description: "Ceramic brackets that are discreet and effective. Proper alignment done patiently and precisely.",
    icon: BracesIcon,
    tag: "Specialised",
    isFeatured: true,
  },
  {
    name: "Paediatric Dentistry",
    description: "We make kids actually like coming to the dentist. Early care that builds good habits for life.",
    icon: KidsToothIcon,
    tag: "Preventative",
    isFeatured: false,
  },
  {
    name: "Tooth Jewellery",
    description: "A tiny crystal, placed safely on your tooth. It's subtle, it's stylish, and it's completely reversible.",
    icon: JewelIcon,
    tag: "Aesthetic",
    isFeatured: false,
  }
];


const reviews = [
  {
    name: "Vikram Sharma",
    role: "Local Guide",
    rating: 5,
    text: "Dr. Prashanth removed my wisdom tooth and I genuinely felt nothing. I was so nervous before but he kept me calm the whole time. Very clean clinic too.",
    date: "1 month ago"
  },
  {
    name: "Priyanka N.",
    role: "Verified Patient",
    rating: 5,
    text: "I've been to a lot of dentists and this one actually explains what's happening before doing anything. That alone makes it a 5-star clinic for me.",
    date: "2 weeks ago"
  },
  {
    name: "Arjun Reddy",
    role: "Verified Patient",
    rating: 5,
    text: "Root canal done painlessly. I was expecting the worst but walked out fine. Doctor is patient and doesn't rush you.",
    date: "3 months ago"
  },
  {
    name: "Sneha Kapur",
    role: "Patient",
    rating: 5,
    text: "Got my teeth whitened here and the results were genuinely stunning. They matched the shade to my face which I didn't expect!",
    date: "5 days ago"
  },
  {
    name: "Rohan Das",
    role: "Local Guide",
    rating: 5,
    text: "The clinic is calming, not clinical. You know what I mean? It doesn't feel sterile and scary — it feels like someone thought about your comfort.",
    date: "1 month ago"
  },
  {
    name: "Meera Iyer",
    role: "Verified Patient",
    rating: 5,
    text: "Been coming here for over a year now. Dr. Prashanth remembers your history, recommends the right things, and never oversells. Rare to find.",
    date: "2 months ago"
  }
];

function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global cursor light tracking
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);
  const springX = useSpring(cursorX, { stiffness: 80, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Scroll-based parallax for hero
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.08]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      {/* NAV */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-white/50 shadow-[0_15px_40px_-10px_rgba(142,68,173,0.15)] group overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated 3D Glass Sweeping Light */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none" />
        
        {/* Volumetric ambient glow inside the navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-[#8E44AD]/15 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Animated 3D edge light at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#8E44AD]/40 to-transparent transition-all duration-[800ms] ease-out pointer-events-none" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 group/logo relative">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1, z: 20 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-[#8E44AD]/20 blur-md rounded-full scale-75 group-hover/logo:scale-110 transition-transform duration-500" />
              <img 
                src={logoImg} 
                alt="Usha Dental Logo" 
                className="h-[44px] w-[44px] object-contain relative z-10 drop-shadow-md" 
              />
            </motion.div>
            <div className="leading-tight">
              <div className="font-display text-[17.5px] font-semibold group-hover/logo:text-[#8E44AD] transition-colors">Usha Dental</div>
              <div className="text-[12px] uppercase tracking-widest text-[#6B7280]">Clinic & Implant Centre</div>
            </div>
          </a>
          
          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-10 text-sm font-medium md:flex">
            {["About", "Meet the Doctor", "Clinic", "Services", "Reviews", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="relative text-[#6B7280] transition-colors hover:text-[#0B132B] group/link"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#8E44AD] rounded-full transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(142,68,173,0.5)]" 
                />
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px -5px rgba(142,68,173,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/booking" 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4B1248] to-[#6A2C70] px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_16px_rgba(75,18,72,0.2)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Button inner shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
              <Phone className="h-4 w-4 relative z-10" /> 
              <span className="relative z-10">Book Now</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[#0B132B] rounded-full origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-[2px] bg-[#0B132B] rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[#0B132B] rounded-full origin-center"
            />
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-xl z-40 px-6 pb-6 pt-4"
            >
              <div className="flex flex-col gap-4">
                {["About", "Meet the Doctor", "Clinic", "Services", "Reviews", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-semibold text-[#0B132B] py-2.5 border-b border-gray-100 last:border-0 hover:text-[#8E44AD] transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4B1248] to-[#6A2C70] px-6 py-3.5 text-base font-semibold text-white shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <section id="top" className="relative overflow-hidden bg-[#F7F4FB] min-h-screen flex items-center pt-10 font-sans" style={{ perspective: "1200px" }}>
        
        {/* Exact Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Base */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #EDEAF5 0%, #EDE9F5 50%, #EAE4F2 100%)" }} />

          {/* ── LUXURY LIGHT RAYS & 3D GLASS CRYSTALS ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center" style={{ perspective: "1000px" }}>
            {/* Soft Ambient Orbs */}
            <motion.div
              animate={{ 
                z: [-50, 50, -50],
                x: [-30, 30, -30],
                y: [-20, 20, -20]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full mix-blend-multiply blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, #D8CDE8, transparent)" }}
            />
            <motion.div
              animate={{ 
                z: [50, -50, 50],
                x: [30, -30, 30],
                y: [20, -20, 20]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full mix-blend-multiply blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, #E2D6F0, transparent)" }}
            />

            {/* Floating 3D Crystal / Glass Panels to catch attention */}
            <motion.div
              animate={{
                rotateX: [20, -20, 20],
                rotateY: [40, 60, 40],
                z: [0, 80, 0],
                y: [-30, 30, -30],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute left-[12%] top-[20%] w-[250px] h-[250px] rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05), inset 0 0 20px rgba(255,255,255,0.6)",
                transformStyle: "preserve-3d"
              }}
            />
            <motion.div
              animate={{
                rotateX: [-30, 10, -30],
                rotateY: [10, 50, 10],
                z: [-40, 40, -40],
                x: [0, -30, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute right-[28%] bottom-[12%] w-[180px] h-[180px] rounded-[40px]"
              style={{
                background: "linear-gradient(135deg, rgba(230,225,250,0.6) 0%, rgba(255,255,255,0.1) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.05), inset 0 0 15px rgba(255,255,255,0.7)",
                transformStyle: "preserve-3d"
              }}
            />

            {/* Majestic Volumetric Light Ray */}
            <motion.div
              animate={{
                opacity: [0.15, 0.4, 0.15],
                rotateZ: [42, 48, 42],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-30%] left-[-20%] w-[200%] h-[350px] pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                filter: "blur(50px)",
                transformOrigin: "center"
              }}
            />
          </div>

          {/* ── FULL BACKGROUND FLOATING DOTS (3D GRID EFFECT) ── */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
            <motion.div
              animate={{ 
                rotateX: [55, 60, 55],
                rotateZ: [-2, 2, -2],
                y: [0, -30, 0]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute pointer-events-none"
              style={{
                width: "250vw",
                height: "250vh",
                backgroundImage: "radial-gradient(circle, #A088C2 2.5px, transparent 3px)",
                backgroundSize: "40px 40px",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 65%)",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 65%)",
                transformStyle: "preserve-3d",
                opacity: 0.35,
              }}
            />
          </div>

          {/* ── CENTRALIZED CIRCLE GROUP ── */}
          {/* Positioned slightly offset from the right to bring the left arc into the center of the screen */}
          <div className="absolute top-1/2 right-[5%] lg:right-[16%] w-0 h-0 flex items-center justify-center pointer-events-none opacity-25 lg:opacity-100">
            
            {/* ── CONCENTRIC ANIMATED OUTLINES ── */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`outline-${i}`}
                className="absolute rounded-full border-[1.5px] border-primary"
                style={{
                  width: `calc(min(130vh, 1200px) + ${80 + i * 120}px)`,
                  height: `calc(min(130vh, 1200px) + ${80 + i * 120}px)`,
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.08, 0.25, 0.08],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* ── MAIN IMAGE CIRCLE (Outer Ring) ── */}
            <motion.div
              animate={{ scale: [1, 1.012, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: "min(130vh, 1200px)",
                height: "min(130vh, 1200px)",
                borderRadius: "50%",
                background: "#f0f0f0",
                boxShadow: [
                  "0 0 0 24px rgba(255,255,255,0.6)",
                  "0 0 0 28px rgba(240,235,255,0.4)",
                  "0 0 120px 40px rgba(142,68,173,0.12)"
                ].join(", "),
                border: "2px solid rgba(255,255,255,0.85)",
                y: heroParallax,
                scale: heroScale,
                overflow: "hidden",
              }}
            >
              {/* Animated shimmer overlay on the hero image */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                animate={{ x: ["-150%", "150%"] }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                  skewX: "-15deg",
                }}
              />
              <img 
                src={heroImg} 
                alt="Clinic Hero"
                className="w-full h-full object-cover"
                style={{ objectPosition: "72% center" }}
              />
            </motion.div>


          </div>

          {/* ── SOFT BOTTOM-LEFT BLEED ── */}
          <div
            className="absolute"
            style={{
              width: "360px",
              height: "360px",
              bottom: "-80px",
              left: "-60px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(175,155,225,0.22) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

        </div>

        {/* MAIN CONTENT */}
        <motion.div
          className="relative z-30 w-full max-w-[1600px] px-5 lg:px-16 mx-auto min-h-screen flex items-center pt-20 pb-10 lg:pt-0 lg:pb-0"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-full lg:w-[52%]">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-white shadow-[0_8px_30px_rgba(75,18,72,0.10)] rounded-full px-5 py-2.5 mb-8 border border-purple-100/60"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </motion.div>
                <span className="font-bold text-[13px] text-[#0B132B]">
                  5.0 Rating — 108 Verified Reviews
                </span>
              </motion.div>

              {/* Heading — staggered word reveal */}
              <div className="text-[2.8rem] sm:text-[3.5rem] lg:text-[88px] font-[900] leading-[0.9] tracking-[-2px] lg:tracking-[-4px] text-[#0B132B] max-w-[650px]">
                <motion.div
                  initial={{ opacity: 0, y: 60, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 120 }}
                  style={{ transformOrigin: "top center" }}
                >
                  <h1>Usha Dental</h1>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
                  className="block bg-gradient-to-r from-[#4B1248] to-[#8E44AD] bg-clip-text text-transparent"
                >
                  Multi-speciality
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="block"
                >
                  Clinic
                </motion.span>
              </div>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="mt-6 lg:mt-10 text-base lg:text-[20px] leading-[1.7] lg:leading-[38px] text-[#6B7280] max-w-[520px] font-medium"
              >
                World-class dental treatments with personalized care and advanced technology.
                Experience dentistry like never before in a luxury clinical environment.
              </motion.p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mt-8 lg:mt-10">
                <a
                  href="/booking"
                  className="w-full sm:w-auto h-[60px] lg:h-[72px] px-7 lg:px-[38px] rounded-full bg-gradient-to-r from-[#4B1248] to-[#6A2C70] text-white font-semibold shadow-[0_15px_30px_rgba(75,18,72,0.2)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-base lg:text-lg">Book Your Visit</span>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto h-[60px] lg:h-[72px] px-7 lg:px-[38px] rounded-full border border-[rgba(75,18,72,0.15)] bg-white/60 backdrop-blur-[20px] text-[#0B132B] font-semibold shadow-[0_8px_20px_rgba(75,18,72,0.04)] hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-[#8E44AD]" />
                  <span className="text-base lg:text-lg">Talk to Specialist</span>
                </a>
              </div>

              {/* Stats Section - Live Animated */}
              <div className="flex overflow-x-auto hide-scrollbar items-center gap-4 lg:gap-8 mt-10 lg:mt-16 pt-6 lg:pt-8 w-full border-t border-[rgba(75,18,72,0.08)] perspective-[1000px] pb-2">
                {/* 15+ Years */}
                <motion.div 
                  initial={{ opacity: 0, rotateX: 20, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05, rotateX: 10, rotateY: -10 }}
                  className="group relative flex items-center gap-4 bg-white/60 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/80 shadow-[0_10px_30px_-5px_rgba(59,130,246,0.15)] transform-style-3d overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] pointer-events-none" />
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div animate={{ rotateZ: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 relative z-10 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
                      <ShieldCheck className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-[2rem] font-black text-[#0B132B] leading-none tracking-tight drop-shadow-sm">15+</h3>
                    <p className="text-[#6B7280] uppercase tracking-widest font-bold text-[11px] mt-1.5 group-hover:text-blue-600 transition-colors">Years</p>
                  </div>
                </motion.div>

                {/* 5K+ Patients */}
                <motion.div 
                  initial={{ opacity: 0, rotateX: 20, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05, rotateX: 10, rotateY: -10 }}
                  className="group relative flex items-center gap-4 bg-white/60 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/80 shadow-[0_10px_30px_-5px_rgba(142,68,173,0.15)] transform-style-3d overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] pointer-events-none" />
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-purple-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div animate={{ rotateZ: [0, -5, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 relative z-10 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
                      <Smile className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-[2rem] font-black text-[#0B132B] leading-none tracking-tight drop-shadow-sm">5K+</h3>
                    <p className="text-[#6B7280] uppercase tracking-widest font-bold text-[11px] mt-1.5 group-hover:text-purple-600 transition-colors">Patients</p>
                  </div>
                </motion.div>

                {/* 99% Happy */}
                <motion.div 
                  initial={{ opacity: 0, rotateX: 20, y: 30 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05, rotateX: 10, rotateY: -10 }}
                  className="group relative flex items-center gap-4 bg-white/60 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/80 shadow-[0_10px_30px_-5px_rgba(236,72,153,0.15)] transform-style-3d overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] pointer-events-none" />
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-pink-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 border border-pink-100 relative z-10 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all">
                      <Heart className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-[2rem] font-black text-[#0B132B] leading-none tracking-tight drop-shadow-sm">99%</h3>
                    <p className="text-[#6B7280] uppercase tracking-widest font-bold text-[11px] mt-1.5 group-hover:text-pink-600 transition-colors">Happy</p>
                  </div>
                </motion.div>
              </div>

            </motion.div>

          </div>
        </motion.div>




        {/* ── BOTTOM FADE BLEND ── */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#F7F4FB] z-20 pointer-events-none" />
      </section>


      {/* ABOUT (OUR ETHOS) - INNOVATIVE 3D LAYOUT */}
      <section id="about" className="relative z-10 py-20 lg:py-32 overflow-hidden bg-[#F8F7FA]" style={{ perspective: "1500px" }}>
        {/* ── INNOVATIVE 3D AMBIENT LIGHTING ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center" style={{ perspective: "1000px" }}>
          {/* Moving 3D Grid Floor */}
          <motion.div
            animate={{ rotateX: [70, 75, 70], y: [40, 50, 40] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] w-[200vw] h-[100vh] opacity-15"
            style={{
              backgroundImage: "linear-gradient(rgba(142,68,173,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(142,68,173,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 60%)",
              maskImage: "radial-gradient(ellipse at top, black 15%, transparent 60%)",
              transformStyle: "preserve-3d",
            }}
          />
          {/* Volumetric Spotlights */}
          <div className="absolute top-[-10%] left-[-10%] size-[500px] rounded-full blur-[120px] opacity-40 mix-blend-multiply" style={{ background: "radial-gradient(circle, #E1D5F2, transparent)" }} />
          <div className="absolute bottom-[-10%] right-[-10%] size-[400px] rounded-full blur-[100px] opacity-30 mix-blend-multiply" style={{ background: "radial-gradient(circle, #D4C5E8, transparent)" }} />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            
            {/* LEFT: TEXT & HEADINGS */}
            <motion.div 
              initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[rgba(142,68,173,0.15)] shadow-sm mb-6"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-4 h-4 text-[#8E44AD]" />
                </motion.div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E44AD]">Our Ethos</span>
              </motion.div>
              
              <h2 className="font-display text-5xl font-bold leading-[1.1] md:text-6xl lg:text-[72px] tracking-tight text-[#0B132B]">
                Precision care,<br/>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#4B1248] via-[#8E44AD] to-[#4B1248] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    personal touch.
                  </span>
                  {/* 3D Underline Glow */}
                  <div className="absolute bottom-[10%] left-0 w-full h-[30%] bg-[#8E44AD]/20 blur-md -z-10 rounded-full" />
                </span>
              </h2>
              
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-[#6B7280] font-medium max-w-[500px]">
                Usha Dental Clinic and Implant Centre stands as a beacon of advanced dentistry in Nagarbhavi, Bangalore. We believe in <span className="text-[#0B132B] font-semibold">"Biological Dentistry"</span> — preserving as much natural tooth structure as possible.
              </p>
              
              <p className="mt-4 text-lg md:text-xl leading-relaxed text-[#6B7280] font-medium max-w-[500px]">
                Under the leadership of Dr. Prashanth L, our clinic has spent nearly two decades refining aesthetic and functional restoration techniques.
              </p>
            </motion.div>

            {/* RIGHT: 3D INTERACTIVE CARDS */}
            <div className="lg:col-span-7 relative z-10">
              <div className="grid gap-6 sm:grid-cols-3" style={{ perspective: "1500px" }}>
                {[
                  { 
                    t: "Gentle Care", 
                    s: "Comfort-first approach to ensure anxiety-free visits.", 
                    i: GentleCareIcon,
                    bg: "bg-[#8E44AD]/6 border border-[#8E44AD]/15 text-[#8E44AD] shadow-[0_8px_20px_rgba(142,68,173,0.05)] hover:bg-[#8E44AD]/10",
                    pingGlow: "bg-[#8E44AD]/20"
                  },
                  { 
                    t: "Modern Tech", 
                    s: "Latest oral diagnostics & 3D imaging tools.", 
                    i: ModernTechIcon,
                    bg: "bg-[#0072B5]/6 border border-[#0072B5]/15 text-[#0072B5] shadow-[0_8px_20px_rgba(0,114,181,0.05)] hover:bg-[#0072B5]/10",
                    pingGlow: "bg-[#0072B5]/20"
                  },
                  { 
                    t: "Ethical Art", 
                    s: "Evidence-based, honest treatment plans.", 
                    i: EthicalArtIcon,
                    bg: "bg-[#F08080]/6 border border-[#F08080]/15 text-[#F08080] shadow-[0_8px_20px_rgba(240,128,128,0.05)] hover:bg-[#F08080]/10",
                    pingGlow: "bg-[#F08080]/20"
                  },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.t} 
                    initial={{ opacity: 0, y: 70, rotateX: 25, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                    whileHover={{ 
                      rotateX: 14, 
                      rotateY: -14, 
                      z: 60, 
                      scale: 1.05,
                      boxShadow: "0 40px 80px -15px rgba(142,68,173,0.2)"
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: idx * 0.2, type: "spring", stiffness: 90 }}
                    className="relative overflow-hidden rounded-[2rem] p-8 bg-white/70 backdrop-blur-2xl border border-white/80 group cursor-pointer"
                    style={{ transformStyle: "preserve-3d", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
                  >           
                    {/* Animated radial glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(142,68,173,0.10) 0%, transparent 70%)" }} />
                    {/* Glowing core behind the icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8E44AD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating 3D Icon */}
                    <motion.div 
                      className={`relative z-10 size-14 mb-8 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 ${item.bg}`}
                      whileHover={{ z: 50, rotateZ: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className={`absolute inset-0 rounded-[1.25rem] ${item.pingGlow} animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <item.i className="h-6 w-6 relative z-10" />
                    </motion.div>
                    
                    {/* Floating Text */}
                    <motion.div 
                      whileHover={{ z: 30 }} 
                      className="relative z-10"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <h3 className="font-display text-xl font-bold text-[#0B132B]">{item.t}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#6B7280]">{item.s}</p>
                    </motion.div>

                    {/* Animated Edge Light */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#8E44AD] to-transparent transition-all duration-700 ease-out" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MEET THE DOCTOR */}
      <section id="meet-the-doctor" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-[3.5rem] bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20" />
            
            {/* Pro Effect Framing */}
            <div className="relative aspect-[4/5] p-2.5">
              {/* Outer thin line */}
              <div className="absolute inset-0 border border-primary/30 rounded-[3.5rem] transition-colors duration-500 group-hover:border-primary/50" />
              
              {/* Double corners (Thick brackets) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-primary rounded-tl-[3.5rem] transition-all duration-500 group-hover:w-20 group-hover:h-20" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-primary rounded-tr-[3.5rem] transition-all duration-500 group-hover:w-20 group-hover:h-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-primary rounded-bl-[3.5rem] transition-all duration-500 group-hover:w-20 group-hover:h-20" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-primary rounded-br-[3.5rem] transition-all duration-500 group-hover:w-20 group-hover:h-20" />
              </div>

              {/* Inner Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[3rem] shadow-elegant">
                <img
                  src={doctorImg}
                  alt="Dr. Prashanth L - Chief Surgeon"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
                {/* Subtle sweeping light beam */}
                <motion.div 
                  animate={{
                    x: ["-200%", "200%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 z-10 w-[50%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </div>
            <motion.div 
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="absolute -right-4 -top-4 flex flex-col items-center rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-2xl ring-2 ring-background"
            >
              <div className="font-display text-2xl font-bold leading-none">18+</div>
              <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] opacity-80">Years Exp</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">Chief Surgeon</span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-glow md:text-5xl">Dr. Prashanth L</h2>
            <p className="mt-4 text-base font-bold italic tracking-wide text-muted-foreground">MDS (Oral & Maxillofacial Surgery) · BDS</p>

            <div className="mt-10 space-y-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              <p>
                A master of his craft with nearly two decades of clinical mastery. Dr. Prashanth is renowned across Bangalore for his surgical precision in facial trauma, complex implants, and conservative restorations.
              </p>
              <p className="text-foreground/80 font-medium italic border-l-2 border-primary pl-6 py-1">
                "Biological dentistry isn't just a practice—it's a philosophy of preserving what nature built while restoring what life took away."
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {[
                { icon: GraduationCap, text: "MDS - MS Ramaiah Dental College" },
                { icon: Award, text: "Certified Oral & Maxillofacial Surgeon" },
                { icon: ShieldCheck, text: "Member - KSDC (Karnataka State Dental Council)" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLINIC INTRO VIDEO */}
      <ClinicVideoIntro />

      {/* RECEPTION & TOUR */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="clinic-tour" 
        className="pb-16 lg:pb-24"
      >
        <ClinicTour />
      </motion.section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border/60 bg-muted/30 py-16 lg:py-24 relative overflow-hidden">
        {/* Section ambient lighting — animated spotlights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-16 -right-16 size-[600px] rounded-full blur-[140px]"
            style={{ background: "radial-gradient(circle, rgba(142,68,173,0.18) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.18, 0.28, 0.18], x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-16 size-[450px] rounded-full blur-[110px]"
            style={{ background: "radial-gradient(circle, rgba(75,18,72,0.12) 0%, transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.20, 0.12], x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {/* Scanning horizontal light ray */}
          <motion.div
            className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-[#8E44AD]/20 to-transparent pointer-events-none"
            animate={{ x: ["-10vw", "110vw"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center justify-center text-center gap-4"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[10px] font-bold uppercase text-primary"
            >Clinical Services</motion.span>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
              Advanced dental care,<br/>under one roof.
            </h2>
            <p className="max-w-2xl text-muted-foreground mt-2 text-lg">
              Expert solutions for everything from root canals to full-mouth rehabilitation, crafted for long-term health and aesthetics.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }, idx) => (
              <motion.article 
                key={title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative flex flex-col rounded-[2.5rem] bg-card/60 backdrop-blur-xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_oklch(0.28_0.08_335_/_0.2)] ring-1 ring-border/60 hover:ring-primary/40 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(120% 120% at 50% 0%, oklch(0.28 0.08 335 / 0.08) 0%, transparent 70%)" }} />
                
                {/* Scan sheen */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)" }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 ease-out group-hover:w-full shadow-[0_0_12px_oklch(0.28_0.08_335_/_0.6)]" />
                
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_oklch(0.28_0.08_335_/_0.4)]">
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-foreground relative z-10 transition-colors group-hover:text-primary">{title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed relative z-10 flex-grow">{desc}</p>
                
                <div className="mt-8 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Specialized Treatment <ArrowRight className="h-3 w-3" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE LIST */}
      <section id="expertise" className="relative py-24 lg:py-36 overflow-hidden lighting-bg grain-overlay bg-[#FDFBFD]/80">
        
        {/* Cinematic Backdrop Spotlights & Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Volumetric Spotlights */}
          <div 
            className="absolute top-1/4 -left-1/4 size-[700px] rounded-full blur-[150px] opacity-[0.25]"
            style={{ background: "radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)" }}
          />
          <div 
            className="absolute bottom-1/4 -right-1/4 size-[700px] rounded-full blur-[150px] opacity-[0.2]"
            style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
          />
          
          {/* Grid lines */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          
          {/* Floating light particles */}
          <motion.div
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 size-56 rounded-full bg-[#AF9BE1]/6 blur-[60px]"
          />
          <motion.div
            animate={{
              y: [30, -30, 30],
              x: [20, -20, 20],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/3 size-72 rounded-full bg-blue-300/6 blur-[80px]"
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-16 z-10">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            
            {/* LEFT SIDE: Sticky Editorial Panel + Floating Badges */}
            <motion.div 
              {...fadeInUp} 
              className="lg:col-span-5 lg:sticky lg:top-28 space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[rgba(142,68,173,0.15)] shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#8E44AD]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E44AD]">Our Expertise</span>
                </div>
                
                <h2 className="font-display text-5xl font-bold leading-[1.08] md:text-6xl lg:text-[76px] tracking-tight text-[#0B132B]">
                  Treatments<br/>
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 bg-gradient-to-r from-[#4B1248] via-[#8E44AD] to-[#4B1248] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      tailored
                    </span>
                    {/* Glowing underline */}
                    <div className="absolute bottom-[12%] left-0 w-full h-[25%] bg-[#8E44AD]/20 blur-md -z-10 rounded-full" />
                  </span>
                  <br/>to your smile.
                </h2>
                
                <p className="text-lg md:text-xl leading-relaxed text-[#6B7280] font-medium max-w-[460px]">
                  We practice <span className="text-[#0B132B] font-semibold">"Slow Dentistry"</span> — dedicating extensive precision time and medical craftsmanship to every restoration for clean, lifelong success.
                </p>
              </div>

              {/* Luxury Floating Trust Badges */}
              <div className="grid gap-4 grid-cols-3 max-w-[480px]">
                {[
                  { value: "18+", label: "Yrs Exp", desc: "Chief MDS Surgeon" },
                  { value: "10K+", label: "Smiles", desc: "Restored in Blr" },
                  { value: "99%", label: "Happy", desc: "Patient Rating" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, rotateY: 5, scale: 1.02 }}
                    className="group relative rounded-2xl p-4 bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(75,18,72,0.02)] flex flex-col justify-between"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                    <div className="font-display text-2xl font-bold bg-gradient-to-br from-[#4B1248] to-[#8E44AD] bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-[11px] font-bold text-gray-900 mt-2">{stat.label}</div>
                    <div className="text-[9px] text-gray-400 font-medium mt-0.5">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Premium CTA Button */}
              <div>
                <motion.a
                  href="/booking"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 25px 50px -12px color-mix(in oklab, var(--primary) 35%, transparent)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="group inline-flex items-center gap-3.5 h-[68px] px-8 rounded-full bg-gradient-to-r from-[#4B1248] to-[#8E44AD] text-white font-semibold shadow-[0_15px_30px_rgba(75,18,72,0.18)] border border-white/20 transition-all cursor-pointer relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] pointer-events-none" />
                  <span className="text-lg relative z-10">Book Consultation</span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white relative z-10 group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Dynamic Bento Grid + Tabs + Secondary Pills */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Luxury Tabs Selector (Apple Segmented Control Style) */}
              <div className="flex overflow-x-auto hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                <div className="inline-flex bg-gray-100/80 p-1.5 rounded-full relative z-30 shadow-inner min-w-max">
                  {["All", "Aesthetic", "Restorative", "Preventative"].map((tab) => {
                    const label = tab === "Preventative" ? "Preventative & Special" : tab;
                    const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                        isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabSegment"
                          className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/50 -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </button>
                  );
                })}
                </div>
              </div>

              {/* Bento Grid layout builder */}
              {(() => {
                const filtered = expertise.filter((item) => {
                  if (activeTab === "All") return true;
                  if (activeTab === "Aesthetic") return item.tag === "Aesthetic";
                  if (activeTab === "Restorative") return item.tag === "Restorative";
                  if (activeTab === "Preventative") return item.tag === "Preventative" || item.tag === "Specialised";
                  return true;
                });

                let gridItems = [];
                let pillItems = [];

                if (activeTab === "All") {
                  const curatedNames = [
                    "Dental Implants", 
                    "Invisible Aligners", 
                    "Root Canal Treatment", 
                    "Teeth Whitening"
                  ];
                  gridItems = filtered.filter(item => curatedNames.includes(item.name));
                  pillItems = filtered.filter(item => !curatedNames.includes(item.name));
                } else {
                  gridItems = [...filtered];
                  pillItems = [];
                }

                gridItems.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

                return (
                  <div className="space-y-12">
                    <motion.div
                      layout
                      className="grid gap-6 grid-cols-1 md:grid-cols-2 relative z-10"
                    >
                      <AnimatePresence mode="popLayout">
                        {gridItems.map((item, index) => {
                          const Icon = item.icon;
                          const isFeaturedLayout = index === 0 && item.isFeatured && activeTab === "All";

                          return (
                            <motion.div
                              layout
                              key={item.name}
                              initial={{ opacity: 0, scale: 0.96, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.96, y: 20 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className={`group relative rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 border backdrop-blur-xl ${
                                isFeaturedLayout ? "md:col-span-2" : "md:col-span-1"
                              } ${
                                item.isFeatured
                                  ? "bg-white/80 border-primary/20 shadow-[0_8px_30px_rgba(142,68,173,0.06)] hover:shadow-[0_12px_40px_rgba(142,68,173,0.12)]"
                                  : "bg-white/50 border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:bg-white/70"
                              }`}
                            >
                              {/* Background hover effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                              {item.isFeatured && (
                                <div className="absolute top-6 right-6 z-20">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                                    Signature Service
                                  </span>
                                </div>
                              )}

                              <div className={`relative z-10 flex ${isFeaturedLayout ? "flex-col md:flex-row md:items-center gap-6 md:gap-10" : "flex-col gap-6"}`}>
                                <div className={`flex shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 ${
                                  item.isFeatured ? "h-16 w-16 bg-gradient-to-br from-[#4B1248] to-[#8E44AD] text-white" : "h-14 w-14 bg-primary/5 text-primary border border-primary/10"
                                }`}>
                                  <Icon className={item.isFeatured ? "h-7 w-7" : "h-6 w-6"} />
                                </div>

                                <div className={`space-y-3 flex-1 ${isFeaturedLayout ? "md:pr-24" : "pr-6"}`}>
                                  <div>
                                    <h3 className={`font-display font-bold tracking-tight text-foreground transition-colors group-hover:text-primary ${
                                      isFeaturedLayout ? "text-2xl md:text-3xl" : "text-xl"
                                    }`}>
                                      {item.name}
                                    </h3>
                                  </div>
                                  <p className={`text-[#6B7280] font-medium leading-relaxed ${
                                    isFeaturedLayout ? "text-[15px] md:max-w-[400px]" : "text-[13px]"
                                  }`}>
                                    {item.description}
                                  </p>
                                </div>
                              </div>

                              <div className="mt-8 flex items-center justify-between border-t border-gray-100/50 pt-4 relative z-10">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-primary/60">
                                  {item.tag}
                                </span>
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-sm text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 border border-gray-100">
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </motion.div>


                  </div>
                );
              })()}
            </div>
            
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           PATIENT STORIES — World-Class Redesign
      ════════════════════════════════════════════════════════════ */}
      <section id="reviews" className="relative z-10 overflow-hidden py-16 lg:py-20">

        {/* ── Deep cinematic ambient backdrop ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-soft)" }} />
        <motion.div
          className="absolute -top-40 -left-40 size-[900px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(75,18,72,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.10, 0.18, 0.10], x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 size-[700px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(142,68,173,0.10) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.15, 0.08], x: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Diagonal cinematic light ray */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.04) 50%, transparent 80%)" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 7 }}
        />
        {/* Top & bottom hairlines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* ── Section header ── */}
          <div
            className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div className="flex flex-col relative z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 self-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">Testimonials</span>
              </div>
              <div className="flex gap-4">
                <div className="hidden md:flex text-primary opacity-20">
                  <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <h2 className="font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px] text-foreground max-w-2xl">
                  What patients say<br />
                  <span className="bg-gradient-to-br from-primary via-primary to-primary-glow bg-clip-text text-transparent">
                    about Usha.
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* ── Main testimonial card ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-start mt-8">

            {/* Left: Active testimonial card */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/70 backdrop-blur-2xl p-8 lg:p-12 shadow-[0_30px_80px_-20px_oklch(0.28_0.08_335_/_0.15)]"
                >
                  {/* Radial key-light top-left */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 80% at 0% 0%, oklch(0.28 0.08 335 / 0.06) 0%, transparent 65%)" }} />

                  {/* Decorative huge quote mark */}
                  <div className="absolute -top-4 -right-2 text-[10rem] font-serif leading-none text-primary/5 select-none pointer-events-none">"</div>

                  {/* Progress bar — auto ticks every 3s */}
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-border/30 rounded-t-[2.5rem] overflow-hidden">
                    <motion.div
                      key={`bar-${activeReview}`}
                      className="h-full bg-gradient-to-r from-primary to-primary-glow"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear" }}
                    />
                  </div>

                  {/* Stars + index counter */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex text-yellow-400 gap-1">
                      {[...Array(reviews[activeReview].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current drop-shadow-[0_0_4px_rgba(250,204,21,0.5)]" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-muted-foreground/50 tabular-nums">
                      {String(activeReview + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-2xl font-medium leading-[1.6] text-foreground/80 italic">
                    &ldquo;{reviews[activeReview].text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/40">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg shadow-primary/20">
                          {reviews[activeReview].name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                          <svg className="h-3 w-3 text-white fill-current" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground leading-tight">{reviews[activeReview].name}</h4>
                        <p className="text-[12px] uppercase tracking-widest text-muted-foreground mt-1">{reviews[activeReview].role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground/60 bg-muted/40 rounded-full px-4 py-2">{reviews[activeReview].date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination dots */}
              <div className="mt-8 flex justify-center items-center gap-3">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReview(idx)}
                    aria-label={`Review ${idx + 1}`}
                    className={`rounded-full transition-all duration-500 ${
                      idx === activeReview ? "w-10 h-2.5 bg-primary shadow-[0_0_10px_oklch(0.28_0.08_335_/_0.6)]" : "w-2.5 h-2.5 bg-muted-foreground/25 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Highlighted numbers / trust signals */}
            <div className="flex flex-col gap-5">
              {[
                { value: "18+", label: "Years of expertise", sub: "Since 2008 in Nagarbhavi" },
                { value: "10k+", label: "Smiles restored", sub: "Across Bengaluru" },
                { value: "100%", label: "Painless procedures", sub: "With latest technology" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 0% 0%, oklch(0.28 0.08 335 / 0.05) 0%, transparent 70%)" }} />
                  <div className="relative">
                    <div className="font-display text-4xl font-black bg-gradient-to-br from-primary to-primary-glow bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-base font-bold text-foreground/80">{stat.label}</div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground/60">{stat.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ── NEW CONTACT SECTION ── */}
      <section id="contact" className="relative bg-[#F8F9FA] py-20 lg:py-28 overflow-hidden">
        {/* Ambient lighting for contact */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(142,68,173,0.08) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(75,18,72,0.06) 0%, transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Visit Us</h4>
            <h2 className="mt-2 text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-display">
              Let's <span className="text-primary">Connect</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-between overflow-hidden"
            >
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px] opacity-30" style={{ background: "radial-gradient(circle, rgba(142,68,173,0.15) 0%, transparent 70%)" }} />
              <div className="space-y-8">
                {[
                  { i: MapPin, l: "ADDRESS", v: "#19/12, 1st Floor, Near Deepak Complex, Outer Ring Road, Nagarbhavi 2nd Stage, Bengaluru, Karnataka 560072" },
                  { i: Phone, l: "PHONE", v: "+91 99806 09894" },
                  { i: Mail, l: "EMAIL", v: "info@ushadentalclinic.com" },
                  { i: Clock, l: "CLINIC HOURS", v: "Mon – Sat: 10 AM – 8 PM · Sun: By Appt Only" },
                ].map((item, i) => (
                  <motion.div
                    key={item.l}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-5 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md mt-1 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow"
                    >
                      <item.i className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{item.l}</div>
                      <div className="mt-1.5 text-[15px] font-medium text-gray-800 leading-relaxed max-w-sm">{item.v}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Icons */}
              <div className="mt-12 flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.15, y: -4, boxShadow: "0 10px 20px rgba(142,68,173,0.2)" }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[500px] lg:h-auto min-h-[400px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=USHA+DENTAL+CLINIC+AND+IMPLANT+CENTRE,+Nagarbhavi,+Bengaluru&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEW FOOTER ── */}
      <footer className="relative bg-white border-t border-gray-100 pt-16 pb-8 overflow-hidden">
        {/* Footer ambient glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px] opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(142,68,173,0.3) 0%, transparent 70%)" }}
          animate={{ opacity: [0.10, 0.20, 0.10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
            className="grid gap-12 lg:grid-cols-4 lg:gap-8 mb-16"
          >
            
            {/* Col 1 */}
            <div className="lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3"
              >
                <img src={logoImg} alt="Usha Dental Logo" className="h-10 object-contain" />
                <span className="text-xl font-extrabold text-[#111] tracking-wide">
                  Usha <span className="text-primary">Dental</span>
                </span>
              </motion.div>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed pr-4 font-medium">
                Expert dental care in Nagarbhavi, Bengaluru — delivered with warmth, precision and the latest technology.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-[15px] font-bold text-gray-900 mb-6 font-display">Quick Links</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                {["Home", "About", "Services", "Smiles"].map((link, i) => (
                  <motion.li key={link} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-[15px] font-bold text-gray-900 mb-6 font-display">Services</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                {["Root Canal", "Implants", "Maxillo", "Braces"].map((link, i) => (
                  <motion.li key={link} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <a href="#" className="hover:text-primary transition-colors">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-[15px] font-bold text-gray-900 mb-6 font-display">Contact</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                <li>+91 99806 09894</li>
                <li>info@ushadentalclinic.com</li>
                <li>Mallathalli, Nagarbhavi, BLR - 56</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-100 flex flex-col items-center justify-center text-center gap-2"
          >
            <p className="text-[13px] font-medium text-gray-500">© 2026 Usha Dental Clinic.</p>
            <p className="text-[13px] font-medium text-gray-400">Crafted with care for healthier smiles.</p>
          </motion.div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
        {/* Book Now Button */}
        <motion.a 
          href="/booking"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto group relative flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-2xl hover:bg-primary/90 transition-all"
        >
          <Calendar className="h-5 w-5" />
          <span className="relative">Book</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a 
          href="https://wa.me/919980609894"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.15, y: -5, rotateZ: 5, boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.6)" }}
          whileTap={{ scale: 0.9 }}
          className="pointer-events-auto group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#40DF7A] to-[#128C7E] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Continuous "Live Lighting" Sweep */}
          <motion.div
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            className="absolute inset-0 w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0"
          />
          
          {/* Constant breathing glow inside */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse pointer-events-none mix-blend-screen" />
          
          <MessageCircle className="relative z-10 h-8 w-8 fill-current drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300" />
          
          {/* Outer Ping Ring */}
          <span className="absolute inset-0 -z-10 rounded-full border-2 border-[#25D366] animate-ping opacity-40 group-hover:opacity-100 transition-opacity"></span>
        </motion.a>
      </div>
    </div>
  );
}
