import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="mb-12 relative group">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-[2px] w-8 bg-[#39ff14] opacity-50"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#39ff14] text-glow uppercase tracking-wider">
          {title}
        </h2>
        <div className="h-[2px] flex-1 bg-[#39ff14] opacity-50 relative overflow-hidden">
             <div className="absolute inset-0 bg-[#39ff14] w-[20%] animate-[scanline_2s_linear_infinite] opacity-50 transform -translate-x-full"></div>
        </div>
      </div>
      <div className="pl-4 border-l border-[#39ff14]/30 space-y-6">
        {children}
      </div>
    </section>
  );
};

export default Section;