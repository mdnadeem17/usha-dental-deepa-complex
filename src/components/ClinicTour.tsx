import { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import reception from "@/assets/clinic/reception.jpg";

// ─── Custom hand-crafted premium clinic icons ──────────────────────────────

const SterilisedIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Shield backdrop */}
    <path d="M12 22 C12 22 20 18 20 10 V5 L12 2 L4 5 V10 C4 18 12 22 12 22Z" opacity="0.3" strokeWidth="1.2" />
    {/* Central Tooth representing clinical cleanliness */}
    <path d="M12 5.5 C10 5.5 9 6.5 9 8 C9 9.5 9.5 10.5 9.5 11.5 Q9.5 13 8.5 14 Q9.5 14 10.5 13 L12 11.5 L13.5 13 Q14.5 14 15.5 14 Q14.5 13 14.5 11.5 C14.5 10.5 15 9.5 15 8 C15 6.5 14 5.5 12 5.5Z" />
    {/* Sparkle detailing for absolute clean shine */}
    <path d="M18 4.5 L18.5 5.5 L19.5 5.5 L18.8 6 L19 7 L18 6.5 L17 7 L17.2 6 L16.5 5.5 L17.5 5.5 Z" fill="currentColor" stroke="none" />
    {/* Checkmark inside */}
    <path d="M10 9 L11.5 10.5 L14 7.5" strokeWidth="2.2" />
  </svg>
);

const AdvancedTechIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Concentric high-tech laser scan rings */}
    <circle cx="12" cy="12" r="9" opacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
    {/* Central Tooth */}
    <path d="M12 6 C10 6 9 7.2 9 9 C9 10.5 9.5 11.5 9.5 12.5 Q9.5 14.5 8.5 15.5 C10 15.5 11.5 14.5 12 13.5 C12.5 14.5 14 15.5 15.5 15.5 C14.5 14.5 14.5 13.5 14.5 12.5 C14.5 11.5 15 10.5 15 9 C15 7.2 14 6 12 6Z" />
    {/* Lightning bolt integrated vertically */}
    <path d="M12 4 L10 10.5 H13.5 L11.5 17.5 L16.5 10 H13 L14.5 4" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

const BoutiqueCareIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Outer soft heart ring */}
    <path d="M12 21 C12 21 3 16 3 9.5 C3 5.5 6 3 9.5 3 C11.5 3 12 4.5 12 4.5 C12 4.5 12.5 3 14.5 3 C18 3 21 5.5 21 9.5 C21 16 12 21 12 21Z" strokeWidth="1.5" />
    {/* Central Tooth nested lovingly inside the heart */}
    <path d="M12 7 C10.5 7 9.5 8 9.5 9.5 C9.5 10.8 10 11.5 10 12.2 Q10 13.5 9 14.2 Q10 14.2 10.8 13.5 L12 12.2 L13.2 13.5 Q14 14.2 15 14.2 Q14 13.5 14 12.2 C14 11.5 14.5 10.8 14.5 9.5 C14.5 8 13.5 7 12 7Z" fill="currentColor" fillOpacity="0.25" />
  </svg>
);
import operatory1 from "@/assets/clinic/operatory-1.jpg";
import operatory2 from "@/assets/clinic/operatory-2.jpg";
import surgery from "@/assets/clinic/surgery-room.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import procedure from "@/assets/clinic/procedure.jpg";

type Tile = {
  src: string;
  title: string;
  caption: string;
  span: string;
  ratio: string;
};

const tiles: Tile[] = [
  { src: reception, title: "Lounge & Reception", caption: "A serene, light-filled entryway designed to put every patient at ease.", span: "md:col-span-7 md:row-span-2", ratio: "4/3" },
  { src: operatory1, title: "Primary Operatory", caption: "Marble-finished suite equipped with modern dental chair, UV sterilisation.", span: "md:col-span-5", ratio: "4/3" },
  { src: operatory2, title: "Consultation Suite", caption: "Dedicated diagnostic bay with HD monitor for transparent planning.", span: "md:col-span-5", ratio: "4/3" },
  { src: surgery, title: "Surgical Theatre", caption: "Sterile, fully isolated theatre for implant and oral surgical procedures.", span: "md:col-span-6", ratio: "16/10" },
  { src: consult, title: "Personalised Care", caption: "One-on-one consultations with meticulous attention to detail.", span: "md:col-span-6", ratio: "16/10" },
  { src: procedure, title: "Clinical Precision", caption: "Advanced equipment and trained staff supporting every procedure end-to-end.", span: "md:col-span-12", ratio: "21/9" },
];

export function ClinicTour() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % tiles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section id="clinic-tour" className="relative overflow-hidden bg-[#FBFBFF] py-24 lg:py-32">
      
      {/* ── LIVE ANIMATED BACKGROUND & LIGHTING ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#8E44AD 1px, transparent 1px), linear-gradient(90deg, #8E44AD 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        
        {/* Animated Orb 1 - Top Left */}
        <motion.div
          animate={{
            x: [0, 100, 0, -50, 0],
            y: [0, 50, 100, 0, 0],
            scale: [1, 1.2, 1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full mix-blend-multiply opacity-40 filter blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(142,68,173,0.3) 0%, rgba(255,255,255,0) 70%)" }}
        />

        {/* Animated Orb 2 - Bottom Right */}
        <motion.div
          animate={{
            x: [0, -100, 0, 100, 0],
            y: [0, -50, -100, 0, 0],
            scale: [1, 1.3, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] rounded-full mix-blend-multiply opacity-50 filter blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(75,18,72,0.2) 0%, rgba(255,255,255,0) 70%)" }}
        />

        {/* Center Key Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[500px] bg-white/60 blur-[100px] rounded-[100%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* ── SECTION HEADER ── */}
        <div className="mx-auto flex flex-col items-center text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(142,68,173,0.2)] bg-white/80 backdrop-blur-md px-5 py-2 mb-8 shadow-[0_8px_16px_rgba(75,18,72,0.06)]"
          >
            <Sparkles className="h-4 w-4 text-[#8E44AD] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0B132B]">Clinic Hub</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl text-[#0B132B]"
          >
            A calm space,<br />
            <span className="bg-gradient-to-r from-[#4B1248] via-[#8E44AD] to-[#C373EE] bg-clip-text text-transparent">engineered for care.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[#6B7280] font-medium"
          >
            Experience a healing environment that merges clinical precision with luxury hospitality. Every operatory is a private oasis designed for your comfort.
          </motion.p>
        </div>

        {/* ── PHOTO CAROUSEL ── */}
        <div className="mt-20 relative w-full">
          {/* Subtle glowing backdrop behind the carousel */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent blur-3xl pointer-events-none rounded-[4rem]" />
          
          {/* Main Active Image Display */}
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] bg-white shadow-2xl p-2 md:p-3 border border-[#8E44AD]/40">
            
            {/* Animated Glowing Snake Border */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="snake-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4B1248" />
                    <stop offset="35%" stopColor="#8E44AD" />
                    <stop offset="70%" stopColor="#0072B5" />
                    <stop offset="100%" stopColor="#F08080" />
                  </linearGradient>
                </defs>
                
                {/* Blurry volumetric outer glow snake layer */}
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="40"
                  fill="none"
                  stroke="url(#snake-glow-gradient)"
                  strokeWidth="8"
                  pathLength="100"
                  strokeDasharray="25 75"
                  strokeLinecap="round"
                  className="animate-[snake-flow_8s_linear_infinite]"
                  style={{ filter: "blur(8px)", opacity: 0.8 }}
                />
                
                {/* Sharp high-contrast overlay snake layer */}
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="40"
                  fill="none"
                  stroke="url(#snake-glow-gradient)"
                  strokeWidth="3.5"
                  pathLength="100"
                  strokeDasharray="25 75"
                  strokeLinecap="round"
                  className="animate-[snake-flow_8s_linear_infinite]"
                />
              </svg>
            </div>

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-100">
              <AnimatePresence>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={tiles[activeIndex].src}
                    alt={tiles[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Premium Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/20 to-transparent opacity-80 mix-blend-multiply" />
                  
                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-white z-10 flex flex-col justify-end h-full pointer-events-none">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
                          {tiles[activeIndex].title}
                        </h3>
                        <p className="mt-3 md:mt-4 max-w-lg text-base md:text-lg leading-relaxed text-white/90 drop-shadow-md">
                          {tiles[activeIndex].caption}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Horizontal Thumbnails / Indicators */}
          <div className="mt-6 flex overflow-x-auto pb-4 gap-4 hide-scrollbar snap-x snap-mandatory">
            {tiles.map((t, idx) => (
              <button
                key={t.title}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(idx);
                }}
                className={`relative shrink-0 w-32 h-20 md:w-48 md:h-28 rounded-2xl overflow-hidden transition-all duration-300 snap-center ${
                  activeIndex === idx 
                    ? "ring-2 ring-[#8E44AD] ring-offset-2 ring-offset-[#FBFBFF] opacity-100 shadow-xl scale-105" 
                    : "opacity-50 hover:opacity-80 scale-100"
                }`}
              >
                <img src={t.src} alt={t.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                {activeIndex === idx && (
                  <motion.div 
                    layoutId="activeThumb"
                    className="absolute inset-0 border-4 border-white/20 rounded-2xl"
                  />
                )}
              </button>
            ))}
          </div>
        </div>


      </div>
      
      {/* Required for the sweep animation to work */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
        }
        @keyframes snake-flow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
      `}} />
    </section>
  );
}

