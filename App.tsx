import React, { useEffect, useState } from 'react';
import Scanlines from './components/Scanlines';
import TerminalHeader from './components/TerminalHeader';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import { EXPERIENCE, EDUCATION, PROJECTS, SKILLS } from './constants';
import { Cpu, BookOpen, Wrench, Search } from 'lucide-react';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [courseSearch, setCourseSearch] = useState('');

  useEffect(() => {
    // Trigger the boot sequence slightly after mount
    const timer = setTimeout(() => {
      setBooted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredAdditionalCourses = EDUCATION.additionalClasses.filter(c => 
    c.toLowerCase().includes(courseSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#050505] relative overflow-hidden font-sans">
      
      {/* Global CRT Effects */}
      <Scanlines />
      
      {/* Main Content Container with Boot Animation */}
      <div 
        className={`relative z-10 h-screen overflow-y-auto overflow-x-hidden p-4 sm:p-8 md:p-12 text-[#e0e0e0] scrollbar-hide
          ${booted ? 'animate-[turn-on_1s_cubic-bezier(0.23,1,0.32,1)_forwards] crt-flicker chromatic-text' : 'opacity-0 scale-0'}`}
        style={{ transformOrigin: 'center center' }}
      >
        
        <div className="max-w-6xl mx-auto pb-20">
          <TerminalHeader />

          <Section title="Experience" id="experience">
            <div className="grid gap-6">
              {EXPERIENCE.map((job, idx) => (
                <ExperienceCard key={idx} data={job} />
              ))}
            </div>
          </Section>

          <Section title="Projects" id="projects">
            <div className="grid gap-6">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} data={project} />
              ))}
            </div>
          </Section>

          <div className="grid md:grid-cols-2 gap-8">
            <Section title="Skills" id="skills">
                <div className="bg-black/60 border border-[#39ff14]/30 p-6 relative backdrop-blur-sm hover:border-[#39ff14]/60 transition-colors">
                    {SKILLS.map((skillGroup, idx) => (
                        <div key={idx} className="mb-6 last:mb-0">
                            <h4 className="text-[#39ff14] border-b border-[#39ff14]/30 mb-3 pb-1 flex items-center gap-2 text-lg">
                                <Wrench size={16} />
                                {skillGroup.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <span key={sIdx} className="text-base text-gray-400 hover:text-white transition-colors cursor-default border border-[#39ff14]/10 bg-[#39ff14]/5 px-2 py-0.5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                     {/* Deco */}
                    <div className="absolute top-2 right-2 p-1">
                        <Cpu size={24} className="text-[#39ff14]/20" />
                    </div>
                </div>
            </Section>

            <Section title="Education" id="education">
              <div className="bg-black/60 border border-[#39ff14]/30 p-6 h-full relative group hover:border-[#39ff14]/60 transition-colors backdrop-blur-sm">
                 <div className="absolute top-4 right-4 opacity-50"><BookOpen size={24} className="text-[#39ff14]"/></div>
                 <h3 className="text-2xl font-bold text-white mb-2">{EDUCATION.school}</h3>
                 <p className="text-[#39ff14] text-xl mb-6">{EDUCATION.degree}</p>
                 
                 <div className="space-y-4 text-base text-gray-300">
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span>GPA:</span>
                        <span className="text-white font-mono">{EDUCATION.gpa}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span>Graduation:</span>
                        <span className="text-white font-mono">{EDUCATION.graduation}</span>
                    </div>
                    
                    <div className="pt-2">
                        <span className="text-[#39ff14]/80 block mb-2 uppercase text-xs tracking-wider">Relevant Coursework</span>
                        <p className="opacity-90 leading-relaxed text-sm">
                            {EDUCATION.coursework.join(" • ")}
                        </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-gray-800">
                         <span className="text-[#39ff14]/80 block mb-2 uppercase text-xs tracking-wider">In Progress</span>
                         <p className="opacity-90 leading-relaxed text-sm">
                            {EDUCATION.inProgress.join(" • ")}
                        </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-gray-800">
                        <div className="flex justify-between items-end mb-3">
                           <span className="text-[#39ff14]/80 block uppercase text-xs tracking-wider">Additional Coursework</span>
                           <div className="flex items-center gap-2 border-b border-[#39ff14]/30 focus-within:border-[#39ff14] transition-colors pb-0.5">
                              <Search size={12} className="text-[#39ff14]/50" />
                              <input 
                                type="text"
                                placeholder="SEARCH..."
                                value={courseSearch}
                                onChange={(e) => setCourseSearch(e.target.value)}
                                className="bg-transparent border-none outline-none text-[#39ff14] text-xs w-24 placeholder-[#39ff14]/30 font-mono uppercase"
                              />
                           </div>
                        </div>
                        <p className="opacity-70 text-xs leading-relaxed max-h-[150px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#39ff14]/30 scrollbar-track-black/20">
                            {filteredAdditionalCourses.length > 0 ? (
                                filteredAdditionalCourses.join(" • ")
                            ) : (
                                <span className="opacity-50 italic">No matching courses found.</span>
                            )}
                        </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-gray-800">
                        <span className="text-[#39ff14]/80 block mb-2 uppercase text-xs tracking-wider">Memberships</span>
                        <p className="opacity-90 text-sm">
                            {EDUCATION.memberships.join(", ")}
                        </p>
                    </div>
                 </div>
              </div>
            </Section>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-6 border-t-2 border-[#39ff14]/50 flex flex-col md:flex-row justify-between items-center text-sm text-[#39ff14]/60 uppercase font-mono">
            <div>System Status: OPERATIONAL</div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#39ff14] rounded-full animate-pulse"></div>
                ONLINE
            </div>
            <div>© {new Date().getFullYear()} Eli Campos</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;