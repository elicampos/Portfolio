import React from "react";
import { Project } from "../types";
import { ExternalLink, Award } from "lucide-react";

const ProjectCard: React.FC<{ data: Project }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-[#39ff14]/30 bg-black/40 hover:border-[#39ff14] transition-all duration-300 group">
      <div className="md:col-span-1 relative h-52 md:h-60 overflow-hidden border border-[#39ff14]/20 shrink-0">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#39ff14] mix-blend-multiply opacity-20 pointer-events-none"></div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#39ff14] transition-colors">
                {data.title}
              </h3>
              {data.subtitle && (
                <p className="text-[#39ff14]/70 text-sm uppercase tracking-wider">
                  {data.subtitle}
                </p>
              )}
            </div>
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#39ff14] hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-90">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {data.award && (
            <div className="flex items-center gap-2 text-yellow-500 text-xs sm:text-sm border border-yellow-500/30 p-2 bg-yellow-500/5 w-fit">
              <Award size={14} />
              <span>{data.award}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-[#39ff14]/10 text-[#39ff14] px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
