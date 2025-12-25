import React from 'react';

const Scanlines: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-full w-full">
      {/* Heavy Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />

      {/* Moving scanline bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(57,255,20,0.08)] to-transparent h-[20%] w-full scanlines-anim opacity-50 z-20" />
      
      {/* Noise Grain */}
      <div className="absolute inset-0 opacity-[0.15] noise-bg animate-[noise-shift_0.2s_infinite] z-10 mix-blend-overlay pointer-events-none"></div>

      {/* Vignette - Stronger */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.9)_95%)] z-30 pointer-events-none" />
      
      {/* Screen tint & Color Grading */}
      <div className="absolute inset-0 bg-[#39ff14] mix-blend-overlay opacity-[0.05] z-20 pointer-events-none" />
      
      {/* Subtle screen reflection */}
      <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[50%] z-30 pointer-events-none filter blur-3xl"></div>
    </div>
  );
};

export default Scanlines;