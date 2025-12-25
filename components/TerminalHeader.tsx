import React, { useEffect, useState } from "react";
import { Terminal, Cpu, Thermometer, Activity, Zap, Disc } from "lucide-react";
import { SOCIALS } from "../constants";

const TerminalHeader: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = `> INITIALIZING SYSTEM...\n> LOADING PROFILE: ELI CAMPOS\n> ROLE: FIRMWARE ENGINEER\n> STATUS: ONLINE`;

  const [stats, setStats] = useState({
    cpuUsage: 12,
    cpuTemp: 45,
    gpuUsage: 4,
    gpuTemp: 42,
    ramUsage: 32,
    vramUsage: 15,
  });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateStats = () => {
      setStats((prev) => {
        // Logic for Percentage Usage (0% - 100%)
        const fluctuateUsage = (val: number) => {
          const delta = Math.floor(Math.random() * 21) - 10; // Fluctuate +/- 10
          let next = val + delta;
          if (next > 100) next = 100;
          if (next < 0) next = 0;
          return next;
        };

        // Logic for Temperatures (Min 40°C - Max 99°C)
        const fluctuateTemp = (val: number) => {
          const delta = Math.floor(Math.random() * 15) - 5; // Fluctuate differently for temp
          let next = val + delta;
          if (next > 99) next = 99; // Cap at 99
          if (next < 40) next = 40; // Hard floor at 40
          return next;
        };

        return {
          cpuUsage: fluctuateUsage(prev.cpuUsage),
          cpuTemp: fluctuateTemp(prev.cpuTemp),
          gpuUsage: fluctuateUsage(prev.gpuUsage),
          gpuTemp: fluctuateTemp(prev.gpuTemp),
          ramUsage: fluctuateUsage(prev.ramUsage),
          vramUsage: fluctuateUsage(prev.vramUsage),
        };
      });
    };

    const interval = setInterval(updateStats, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b-2 border-[#39ff14] pb-6 mb-8 relative">
      {/* Top Bar with System Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 opacity-80 text-xs sm:text-sm font-mono bg-black/40 p-2 border border-[#39ff14]/20 w-full">
        <div className="flex items-center gap-2 text-[#39ff14]/70 min-w-fit mb-2 md:mb-0">
          <Terminal size={14} />
          <span>SYS.V.2.0.26</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-6 gap-y-2 w-full md:w-auto text-center md:text-left">
          {/* CPU */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[#39ff14] flex items-center justify-center md:justify-start gap-1 font-bold text-[10px] sm:text-xs">
              <Cpu size={12} /> CPU
            </span>
            <span className="text-gray-400">{stats.cpuUsage}%</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-yellow-500 flex items-center justify-center md:justify-start gap-1 font-bold text-[10px] sm:text-xs">
              <Thermometer size={12} /> C.TMP
            </span>
            <span className="text-gray-400">{stats.cpuTemp}°C</span>
          </div>

          {/* GPU */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[#39ff14] flex items-center justify-center md:justify-start gap-1 font-bold text-[10px] sm:text-xs">
              <Activity size={12} /> GPU
            </span>
            <span className="text-gray-400">{stats.gpuUsage}%</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-yellow-500 flex items-center justify-center md:justify-start gap-1 font-bold text-[10px] sm:text-xs">
              <Thermometer size={12} /> G.TMP
            </span>
            <span className="text-gray-400">{stats.gpuTemp}°C</span>
          </div>

          {/* RAM */}
          <div className="flex flex-col gap-0.5">
            <span className="text-blue-400 flex items-center justify-center md:justify-start gap-1 font-bold text-[10px] sm:text-xs">
              <Disc size={12} /> RAM
            </span>
            <span className="text-gray-400">{stats.ramUsage}%</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-blue-400 flex items-center justify-center md:justify-start gap-1 font-bold text-[10px] sm:text-xs">
              <Zap size={12} /> VRAM
            </span>
            <span className="text-gray-400">{stats.vramUsage}%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative flex justify-center items-center">
          {/* 
                Manually ordered filters to ensure correct colorization:
                1. grayscale: clear colors
                2. brightness/contrast: crush blacks (make dark grey black)
                3. sepia: add brown tint
                4. hue-rotate: shift brown to green
                5. saturate: boost the green
                6. drop-shadow: outer glow
             */}
          <img
            src="/images/sheepy.png"
            alt="Eli Campos"
            style={{
              filter:
                "grayscale(100%) brightness(0.7) contrast(2.5) sepia(100%) hue-rotate(90deg) saturate(3.5) drop-shadow(0 0 5px rgba(57,255,20,0.8))",
            }}
            className="w-full h-full object-contain transition-all duration-300 hover:brightness-100 hover:contrast-100 hover:filter-none hover:grayscale-0"
          />
        </div>

        <div className="flex-1 w-full">
          <pre className="whitespace-pre-wrap font-[VT323] text-lg sm:text-2xl text-[#39ff14] text-glow leading-tight min-h-[120px]">
            {text}
            <span className="animate-pulse">_</span>
          </pre>

          <div className="mt-4 flex flex-wrap gap-4 text-sm sm:text-base">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="hover:bg-[#39ff14] hover:text-black px-2 border border-[#39ff14] transition-colors duration-200"
            >
              [ EMAIL ]
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-[#39ff14] hover:text-black px-2 border border-[#39ff14] transition-colors duration-200"
            >
              [ LINKEDIN ]
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-[#39ff14] hover:text-black px-2 border border-[#39ff14] transition-colors duration-200"
            >
              [ GITHUB ]
            </a>
            <a
              href={SOCIALS.devpost}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-[#39ff14] hover:text-black px-2 border border-[#39ff14] transition-colors duration-200"
            >
              [ DEVPOST ]
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
