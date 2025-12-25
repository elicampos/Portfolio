import React from 'react';
import { Experience } from '../types';
import { MapPin, Calendar } from 'lucide-react';

const ExperienceCard: React.FC<{ data: Experience }> = ({ data }) => {
  return (
    <div className="relative p-4 border border-[#39ff14]/30 hover:border-[#39ff14] transition-all duration-300 bg-black/40 hover:bg-[#39ff14]/5 group">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#39ff14] opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#39ff14] opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
        <div>
          <h3 className="text-xl md:text-2xl text-white font-bold group-hover:text-[#39ff14] transition-colors">{data.role}</h3>
          <div className="text-lg text-[#39ff14]/80">{data.company}</div>
        </div>
        <div className="text-sm md:text-right space-y-1 text-gray-400 font-mono">
          <div className="flex items-center gap-2 md:justify-end">
            <Calendar size={14} />
            {data.duration}
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <MapPin size={14} />
            {data.location}
          </div>
        </div>
      </div>

      <ul className="list-none space-y-2 mb-4 text-gray-300 font-sans tracking-wide text-sm md:text-base opacity-90">
        {data.description.map((item, idx) => (
          <li key={idx} className="flex gap-2 items-start">
            <span className="text-[#39ff14] mt-1">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {data.skills && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#39ff14]/20">
          {data.skills.map((skill, idx) => (
            <span key={idx} className="text-xs border border-[#39ff14]/50 px-2 py-0.5 rounded text-[#39ff14]/80 bg-[#39ff14]/5">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;