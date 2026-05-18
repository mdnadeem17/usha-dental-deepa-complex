import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, MapPin, Clock, Sparkles, Stethoscope, Smile, ShieldCheck,
  Award, GraduationCap, ChevronRight, Calendar, ArrowRight, MessageCircle, Star, Quote, Heart,
  Instagram, Facebook, Twitter
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import receptionImg from "@/assets/clinic/reception.jpg";
import heroImg from "@/assets/clinic-hero-new.jpg";
import doctorImg from "@/assets/doctor.jpg";
import logoImg from "@/assets/clinic/logo.png";
import toothImg from "@/assets/tooth-3d.png";
import { ClinicTour } from "@/components/ClinicTour";

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
  { icon: Stethoscope, title: "Fixed Prosthodontics", desc: "High-quality crowns, bridges and implants crafted for durability and a natural appearance." },
  { icon: ShieldCheck, title: "General Dental Checkup", desc: "Comprehensive oral examinations to detect and treat issues early — the foundation of healthy teeth." },
  { icon: Sparkles, title: "Maxillofacial Prosthetics", desc: "Customised prostheses that restore oral and facial structure for complex conditions." },
  { icon: Smile, title: "Oral Surgery", desc: "From extractions to cyst removal — surgical precision with full patient comfort." },
];

const expertise = [
  "Scaling & Polishing", "Teeth Whitening (Pola Office & Zoom)", "Tooth Restoration & Build-up",
  "Root Canal Treatment", "Paediatric Dentistry", "Extractions & Impactions",
  "Ceramic Crowns (Metal & Metal-Free)", "Veneers & Laminates", "Dental Implants",
  "Braces — Wire & Self-Ligating", "Invisible Aligners", "Tooth Jewellery",
];

const reviews = [
  {
    name: "Vikram Sharma",
    role: "Local Guide",
    rating: 5,
    text: "Dr. Prashanth is amazing! I had a complex wisdom tooth extraction and it was completely painless. The staff is very professional and the clinic is super clean.",
    date: "1 month ago"
  },
  {
    name: "Priyanka N.",
    role: "Verified Patient",
    rating: 5,
    text: "Best dental clinic in the area. They use very high-tech equipment and explain the procedure clearly. Highly recommend for any dental issues.",
    date: "2 weeks ago"
  },
  {
    name: "Arjun Reddy",
    role: "Verified Patient",
    rating: 5,
    text: "Very satisfied with my root canal treatment. The doctor is very experienced and gentle. Minimal waiting time as well.",
    date: "3 months ago"
  },
  {
    name: "Sneha Kapur",
    role: "Patient",
    rating: 5,
    text: "Extremely hygienic and professional clinic. Had a great experience with teeth whitening here. The results are fantastic!",
    date: "5 days ago"
  },
  {
    name: "Rohan Das",
    role: "Local Guide",
    rating: 5,
    text: "Most professional dentist I have ever visited. They really care about patient comfort. The clinic interior is very soothing too.",
    date: "1 month ago"
  },
  {
    name: "Meera Iyer",
    role: "Verified Patient",
    rating: 5,
    text: "Prompt service and excellent care. I've been coming here for a year and won't go anywhere else. Five stars for Dr. Prashanth!",
    date: "2 months ago"
  }
];

function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(0);

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
        </nav>
      </motion.header>

      <section id="top" className="relative overflow-hidden bg-[#F7F4FB] min-h-screen flex items-center pt-10 font-sans">
        
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
          <div className="absolute top-1/2 right-[5%] lg:right-[16%] w-0 h-0 flex items-center justify-center pointer-events-none">
            
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
              className="absolute overflow-hidden"
              style={{
                width: "min(130vh, 1200px)",
                height: "min(130vh, 1200px)",
                borderRadius: "50%",
                background: "#f0f0f0",
                /* thick white ring with glow */
                boxShadow: [
                  "0 0 0 24px rgba(255,255,255,0.6)",
                  "0 0 0 28px rgba(240,235,255,0.4)"
                ].join(", "),
                border: "2px solid rgba(255,255,255,0.85)",
              }}
            >
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
        <div className="relative z-30 w-full max-w-[1600px] px-6 lg:px-16 mx-auto min-h-screen flex items-center">
          <div className="w-full lg:w-[52%]">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-white shadow-[0_8px_30px_rgba(75,18,72,0.06)] rounded-full px-5 py-2.5 mb-8 border border-gray-100">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-[13px] text-[#0B132B]">
                  5.0 Rating — 108 Verified Reviews
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[4rem] lg:text-[88px] font-[900] leading-[0.9] tracking-[-4px] text-[#0B132B] max-w-[650px]">
                Usha Dental
                <span className="block bg-gradient-to-r from-[#4B1248] to-[#8E44AD] bg-clip-text text-transparent">
                  Multi-speciality
                </span>
                Clinic
              </h1>

              {/* Paragraph */}
              <p className="mt-10 text-[20px] leading-[38px] text-[#6B7280] max-w-[520px] font-medium">
                World-class dental treatments with personalized care and advanced technology.
                Experience dentistry like never before in a luxury clinical environment.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-[24px] mt-10">
                <a
                  href="/booking"
                  className="h-[72px] px-[38px] rounded-full bg-gradient-to-r from-[#4B1248] to-[#6A2C70] text-white font-semibold shadow-[0_15px_30px_rgba(75,18,72,0.2)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">Book Your Visit</span>
                </a>
                <a
                  href="#contact"
                  className="h-[72px] px-[38px] rounded-full border border-[rgba(75,18,72,0.15)] bg-white/60 backdrop-blur-[20px] text-[#0B132B] font-semibold shadow-[0_8px_20px_rgba(75,18,72,0.04)] hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-6 h-6 text-[#8E44AD]" />
                  <span className="text-lg">Talk to Specialist</span>
                </a>
              </div>

              {/* Stats Section - Live Animated */}
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 mt-16 pt-8 w-full border-t border-[rgba(75,18,72,0.08)] perspective-[1000px]">
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
        </div>




        {/* ── BOTTOM FADE BLEND ── */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#F7F4FB] z-20 pointer-events-none" />
      </section>


      {/* ABOUT (OUR ETHOS) - INNOVATIVE 3D LAYOUT */}
      <section id="about" className="relative z-10 py-20 lg:py-32 overflow-hidden bg-[#F8F7FA]">
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
              {...fadeInUp}
              className="lg:col-span-5 relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[rgba(142,68,173,0.15)] shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-[#8E44AD]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E44AD]">Our Ethos</span>
              </div>
              
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
                  { t: "Gentle Care", s: "Comfort-first approach to ensure anxiety-free visits.", i: Smile },
                  { t: "Modern Tech", s: "Latest oral diagnostics & 3D imaging tools.", i: Sparkles },
                  { t: "Ethical Art", s: "Evidence-based, honest treatment plans.", i: ShieldCheck },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.t} 
                    initial={{ opacity: 0, y: 50, rotateX: 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    whileHover={{ 
                      rotateX: 12, 
                      rotateY: -12, 
                      z: 40, 
                      scale: 1.03,
                      boxShadow: "0 35px 60px -15px rgba(142,68,173,0.15)"
                    }}
                    transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="relative overflow-hidden rounded-[2rem] p-8 bg-white/70 backdrop-blur-2xl border border-white/80 group cursor-pointer"
                    style={{ transformStyle: "preserve-3d", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
                  >
                    {/* Glowing core behind the icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8E44AD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating 3D Icon */}
                    <motion.div 
                      className="relative z-10 size-14 mb-8 rounded-[1.25rem] bg-gradient-to-br from-[#4B1248] to-[#8E44AD] flex items-center justify-center shadow-lg shadow-purple-500/20"
                      whileHover={{ z: 50, rotateZ: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <item.i className="h-6 w-6 text-white" />
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
        {/* Section ambient lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 size-[480px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, oklch(0.48 0.16 248) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-10 -left-16 size-[350px] rounded-full blur-[90px] opacity-15" style={{ background: "radial-gradient(circle, oklch(0.28 0.08 335) 0%, transparent 70%)" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col items-center justify-center text-center gap-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Clinical Services</span>
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
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 size-[360px] rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, oklch(0.68 0.14 25) 0%, transparent 70%)" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Our Expertise</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight lg:text-5xl">
              Treatments tailored<br/>to your unique smile.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              We focus on "Slow Dentistry" — giving each procedure the time and precision it deserves for lifelong success.
            </p>
          </motion.div>
          <motion.ul 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
          >
            {expertise.map(item => (
              <motion.li 
                key={item} 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="group relative flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/30 overflow-hidden"
              >
                {/* Hover key-light */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 100% at 0% 50%, oklch(0.48 0.16 248 / 0.07) 0%, transparent 70%)" }} />
                <div className="h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_8px_oklch(0.48_0.16_248_/_0.8)] flex-shrink-0" />
                <span className="text-[13px] font-bold tracking-tight text-foreground/80 relative z-10">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           PATIENT STORIES — World-Class Redesign
      ════════════════════════════════════════════════════════════ */}
      <section id="reviews" className="relative z-10 overflow-hidden py-16 lg:py-20">

        {/* ── Deep ambient backdrop ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-soft)" }} />
        <motion.div
          className="absolute -top-40 -left-40 size-[700px] rounded-full blur-[140px] opacity-10"
          style={{ background: "radial-gradient(circle, oklch(0.28 0.08 335) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 size-[600px] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, oklch(0.48 0.16 248) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Top & bottom hairlines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

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
      <section id="contact" className="bg-[#F8F9FA] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Visit Us</h4>
            <h2 className="mt-2 text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-display">
              Let's <span className="text-primary">Connect</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="space-y-8">
                {[
                  { i: MapPin, l: "ADDRESS", v: "19-02/19, Behind Royal Cottons, 80 Feet Road 1st Main Road. ITI Layout, Mallathalli, 2nd Stage, Nagarbhavi, Bengaluru 560056" },
                  { i: Phone, l: "PHONE", v: "+91 99806 09894" },
                  { i: Mail, l: "EMAIL", v: "info@ushadentalclinic.com" },
                  { i: Clock, l: "CLINIC HOURS", v: "Mon – Sat: 10 AM – 8 PM · Sun: By Appt Only" },
                ].map((item) => (
                  <div key={item.l} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm mt-1">
                      <item.i className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{item.l}</div>
                      <div className="mt-1.5 text-[15px] font-medium text-gray-800 leading-relaxed max-w-sm">{item.v}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Icons */}
              <div className="mt-12 flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[500px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=USHA%20DENTAL%20CLINIC%20AND%20IMPLANT%20CENTRE%2C%2019-02%2F19%2C%20Behind%20Royal%20Cottons%2C%2080%20Feet%20Road%201st%20Main%20Road.%20ITI%20Layout%2C%20Mallathalli%2C%202nd%20Stage%2C%20Nagarbhavi%2C%20Bengaluru%2C%20Karnataka%20560056&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW FOOTER ── */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8 mb-16">
            
            {/* Col 1 */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Usha Dental Logo" className="h-10 object-contain" />
                <span className="text-xl font-extrabold text-[#111] tracking-wide">
                  Usha <span className="text-primary">Dental</span>
                </span>
              </div>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed pr-4 font-medium">
                Expert dental care in Nagarbhavi, Bengaluru — delivered with warmth, precision and the latest technology.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-[15px] font-bold text-gray-900 mb-6 font-display">Quick Links</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Smiles</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-[15px] font-bold text-gray-900 mb-6 font-display">Services</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Root Canal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Implants</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Maxillo</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Braces</a></li>
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
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col items-center justify-center text-center gap-2">
            <p className="text-[13px] font-medium text-gray-500">© 2026 Usha Dental Clinic.</p>
            <p className="text-[13px] font-medium text-gray-400">Crafted with care for healthier smiles.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-[100] flex flex-col items-start md:items-end gap-4 pointer-events-none">
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
