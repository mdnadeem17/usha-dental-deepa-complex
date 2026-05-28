import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import clinicIntroVideo from "@/assets/clinic/clinic-intro.mp4";

export function ClinicVideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Initialize muted state to match video tag
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FBFBFF] py-20 lg:py-28 border-b border-[rgba(75,18,72,0.05)]">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] rounded-full mix-blend-multiply blur-[120px] bg-[#8E44AD]/20"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[0%] right-[10%] w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[150px] bg-[#4B1248]/15"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="mx-auto flex flex-col items-center text-center max-w-3xl mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#8E44AD]/20 bg-white/60 backdrop-blur-md px-5 py-2 mb-6 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-[#8E44AD]" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0B132B]">Discover</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#0B132B]"
          >
            Welcome to <span className="bg-gradient-to-r from-[#4B1248] to-[#8E44AD] bg-clip-text text-transparent">Usha Dental</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[#6B7280] font-medium"
          >
            Take a glimpse into our modern facilities, expert team, and the premium care that awaits you.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(75,18,72,0.2)] group bg-black aspect-video max-w-5xl mx-auto ring-4 ring-white/50 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={togglePlay}
        >
          {/* Subtle animated border glow behind the video */}
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#4B1248] via-[#8E44AD] to-[#C373EE] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
          
          <video
            ref={videoRef}
            src={clinicIntroVideo}
            className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loop
            playsInline
            autoPlay
            muted
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Overlay Controls */}
          <div className={`absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 ${isPlaying && !isHovering ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Play/Pause Center Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:bg-white/30"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 md:w-14 md:h-14 fill-white" />
              ) : (
                <Play className="w-10 h-10 md:w-14 md:h-14 fill-white ml-2" />
              )}
            </motion.div>
            
            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-end bg-gradient-to-t from-black/50 to-transparent">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
