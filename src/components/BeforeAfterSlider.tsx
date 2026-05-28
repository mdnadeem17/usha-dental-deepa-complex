import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import beforeImg from "@/assets/smile-before.png";
import afterImg from "@/assets/smile-after.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }
    
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#8E44AD]/10 to-[#4B1248]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-sm"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#4B1248] to-[#8E44AD] bg-clip-text text-transparent">
              Before & After Treatment
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0B132B] tracking-tight"
          >
            SUCCESS STORIES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-500 font-medium text-lg max-w-2xl mx-auto"
          >
            Witness the art of modern cosmetic dentistry. Drag the slider to reveal the stunning transformation.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-[28px] overflow-hidden bg-white shadow-[0_20px_50px_-12px_rgba(75,18,72,0.15)] border border-white/50 backdrop-blur-xl">
            {/* Aspect Ratio Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
              
              {/* After Image (Background) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={afterImg} 
                  alt="After Treatment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
                  <span className="text-xs font-bold text-gray-900 tracking-wider">AFTER</span>
                </div>
              </div>

              {/* Before Image (Foreground, clipped) */}
              <div 
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={beforeImg} 
                  alt="Before Treatment" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: '100%', maxWidth: 'none', objectPosition: 'left center' }}
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
                  <span className="text-xs font-bold text-gray-900 tracking-wider">BEFORE</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] cursor-ew-resize z-20 group"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Handle Button */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(75,18,72,0.3)] flex items-center justify-center cursor-ew-resize border border-gray-100 transition-transform group-hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400 -mr-1" />
                  <ChevronRight className="w-5 h-5 text-gray-400 -ml-1" />
                </div>
              </div>

              {/* Interaction Overlay */}
              <div 
                ref={containerRef}
                className="absolute inset-0 z-30 cursor-ew-resize"
                onMouseDown={handleInteractionStart}
                onMouseMove={handleMouseMove}
                onTouchStart={handleInteractionStart}
                onTouchMove={handleTouchMove}
              />
            </div>
            
            {/* Bottom Glow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-[#4B1248]/0 via-[#8E44AD]/30 to-[#4B1248]/0 blur-xl pointer-events-none" />
          </div>
          
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 bg-white/50 px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <ChevronLeft className="w-4 h-4" /> Drag to Compare <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
