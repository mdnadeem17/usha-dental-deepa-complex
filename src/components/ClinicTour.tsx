import { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, ShieldCheck, Zap, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import reception from "@/assets/clinic/reception.jpg";
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

        {/* ── PREMIUM STATS/FEATURES BANNER ── */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(75,18,72,0.06)]"
        >
          {/* Banner Internal Lighting */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/80 to-transparent pointer-events-none" />
          <div className="absolute -bottom-[50px] -left-[50px] w-[200px] h-[200px] bg-pink-100/50 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative p-10 lg:p-14 grid gap-10 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {[
              { title: "Sterilised", desc: "AERB & KSDC certified protocols across all suites", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-50" },
              { title: "Advanced Tech", desc: "Intra-oral lasers & 3D digital imaging systems", icon: Zap, color: "text-purple-500", bg: "bg-purple-50" },
              { title: "Boutique Care", desc: "Private consultation zones for each patient", icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center sm:px-6 first:pt-0 first:sm:px-0 last:pb-0 last:sm:px-0 pt-10 sm:pt-0">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="font-display text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* Required for the sweep animation to work */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
        }
      `}} />
    </section>
  );
}

