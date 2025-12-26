import { Experience, Project, Education, SkillCategory } from "./types";

export const SOCIALS = {
  email: "elicamposbusiness@gmail.com",
  linkedin: "https://www.linkedin.com/in/eli-campos-9556b020b/",
  github: "https://www.github.com/elicampos",
  devpost: "https://www.devpost.com/elicamposbusiness",
  phone: "(305) 712-0314",
};

export const EDUCATION: Education = {
  school: "University of Florida",
  degree: "B.S. in Computer Engineering",
  gpa: "3.56/4.00",
  graduation: "Expected Spring 2026",
  coursework: [
    "Programming I & II",
    "Digital Logic",
    "Data Structures & Algorithms",
    "Computer Organization",
    "Microprocessor Applications",
    "Digital Design",
    "Intro to Software Engineering",
    "Operating Systems",
  ],
  inProgress: [
    "Circuits",
    "Advanced System Programming",
    "Senior Design (Echo Hand)",
    "Engineering Statistics",
  ],
  additionalClasses: [
    "Principles of Macroeconomics",
    "Expository and Argumentative Writing",
    "Argument and Persuasion",
    "Analytic Geometry and Calculus 1",
    "Discover the Universe",
    "Principles of Microeconomics",
    "Introduction to Philosophy",
    "Introduction to Information Systems",
    "Analytic Geometry and Calculus 2",
    "Introduction to Statistics 1",
    "Analytic Geometry and Calculus 3",
    "Applications of Discrete Structures",
    "Professional Communication for Engineers",
    "Physics with Calculus 1",
    "Computational Linear Algebra",
    "Elementary Differential Equations",
    "Introduction to Computer Programming",
    "Physics with Calculus 2",
    "Digital Logic and Computer Systems",
    "Applied Machine Learning Systems",
    "Introduction to Signals and Systems",
    "Computer Communications",
    "Fundamentals of Engineering Project Management",
    "Engineering Ethics and Professionalism",
    "Chemistry for Engineers 1",
    "Engineering Mechanics: Statics",
  ],
  memberships: ["HSF Scholar", "ColorStack", "IEEE"],
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++", "C", "Python", "VHDL", "Assembly"],
  },
  {
    category: "Embedded & Hardware",
    items: [
      "FreeRTOS",
      "STM32",
      "ESP32",
      "Arduino",
      "I2C",
      "SPI",
      "UART",
      "GPIO",
      "DMA",
      "DAC",
      "ADC",
      "EBI",
      "Bluetooth",
      "Oscilloscopes",
      "Logic Analyzers",
    ],
  },
  {
    category: "Tools & Frameworks",
    items: [
      "Git",
      "Docker",
      "CMake",
      "Meson",
      "GoogleTest",
      "Wireshark",
      "Intel Quartus",
      "KiCad",
      "Visual Studio",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Lenovo",
    role: "Part-Time Firmware Engineer",
    duration: "Aug 2025 - Present",
    location: "Remote",
    description: [
      "Creating scripts to protect and modify regions of ROM memory for previous and upcoming server architectures.",
      "Ensuring firmware security and integrity through rigorous validation.",
    ],
    skills: ["C++", "Python", "Digital Logic", "Git"],
  },
  {
    company: "Lenovo",
    role: "Firmware Engineer Intern",
    duration: "May 2025 - Aug 2025",
    location: "Durham, NC",
    description: [
      "Developed a C++ command-line testing application for Linux driver–level peripherals (GPIO, SPI, I2C, I3C, MCTP, RGMII, RMII).",
      "Implemented stack-based command history, custom test parsing, and reusable test modules.",
      "Used smart pointers for memory safety and GoogleTest for unit testing within a Meson build system.",
    ],
    skills: ["C++", "Linux Drivers", "Meson", "GoogleTest"],
  },
  {
    company: "Georgia Tech Research Institute",
    role: "Embedded System Intern",
    duration: "Aug 2024 - Dec 2024",
    location: "Atlanta, GA",
    description: [
      "Implemented I2C communication protocols in FreeRTOS environments on STM32 microcontrollers.",
      "Managed multi-threading tasks for real-time performance optimization using mutexes.",
      "Leveraged Wireshark, logic analyzers, and oscilloscopes to debug communication protocols and diagnose timing issues.",
    ],
    skills: ["Embedded C", "FreeRTOS", "STM32", "Debugging"],
  },
  {
    company: "University of Florida",
    role: "Undergraduate Research Assistant",
    duration: "Sep 2022 - June 2024",
    location: "Gainesville, FL",
    description: [
      "Contributed to a surgical simulation application built on the SOFA Engine.",
      "Used Git extensively to manage version control and integrate engine updates.",
    ],
    skills: ["C++", "SOFA Framework", "Simulation", "Git"],
  },
  {
    company: "InnoGators",
    role: "Co-Leader of Electrical Engineering Team",
    duration: "Jan 2022 - Jan 2023",
    location: "Gainesville, Florida",
    description: [
      "Helped fulfill technical tasks for University departments, such as creating a drone to water fields for the Dept of Agriculture. Collaborated with Mechanical, Business, and Software teams to solve real-world engineering hurdles, manage budgets, and handle manufacturing complications.",
    ],
    skills: ["C++", "Arduino", "Circuit Design", "Team Leadership"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Echo Hand",
    subtitle: "VR Haptic Glove",
    description:
      "Prototyping a VR glove using servo motors for haptic feedback, flex sensors for angle detection, and vibration motors for texture simulation. Integrated with ESP32 for Bluetooth/USB connectivity.",
    techStack: ["RTOS", "ESP32", "Serial Comm", "Hardware Design"],
    imageUrl: "/images/echohand.png",
    link: "https://github.com/elicampos/EchoHand",
  },
  {
    title: "Reflexion",
    subtitle: "PennApps Best Hardware Hack",
    description:
      "Wearable device utilizing ESP32, flex sensors, and EMG to track athlete movement for physical therapy. Transmits data via Bluetooth to a web interface for real-time analysis using Tune AI for personalized feedback.",
    techStack: ["ESP32", "C++", "Bluetooth", "Angular", "Python", "Circuits"],
    imageUrl: "/images/Gluecose Pic.png",
    link: "https://devpost.com/software/glucose",
  },
  {
    title: "RP2040 Orientation Display",
    subtitle: "Embedded Rust & Sensors",
    description:
      "Developed firmware in Rust for the Adafruit Feather RP2040 to control an 8x8 NeoPixel matrix. Integrated an LIS3DH accelerometer to trigger unique visual animations (e.g., Led Traversal, Heartbreak) based on real-time 4D device orientation.",
    techStack: ["Embedded Rust", "RP2040", "I2C"],
    imageUrl: "/images/rp2040_display.png",
  },
  {
    title: "x86 Real-Mode Drivers",
    subtitle: "Low-Level Driver Development",
    description:
      "Built generic drivers for Mouse input and VGA output targeting x86 Real Mode within DOSBox. Implemented inline assembly for hardware interrupts (INT) and register manipulation to handle TSR programs and video memory.",
    techStack: ["C", "x86 Assembly"],
    imageUrl: "/images/dos_drivers.png",
  },
  {
    title: "Lithium Battery Protection PCB",
    subtitle: "Power Electronics Design",
    description:
      "Designed a PCB to protect 3-cell lithium battery packs from undervoltage damage and excess current draw. Translated 'Elliott Sound Products Project 184' schematic into a custom PCB layout and generated Gerber files for manufacturing.",
    techStack: ["PCB Design", "Analog Circuits", "KiCad"],
    imageUrl: "/images/battery_pcb.png",
  },
  {
    title: "Custom CPU Design",
    subtitle: "FPGA Implementation",
    description:
      "Designed a custom CPU from scratch using Quartus and VHDL. Implemented controller logic with state machines, optimized with Karnaugh maps, and utilized ROM for instruction sets.",
    techStack: ["VHDL", "Intel Quartus", "Digital Logic", "FPGA"],
    imageUrl: "/images/8-bit cpu.jpg",
    link: "https://www.youtube.com/watch?v=ELPmNE3HXZk",
  },
  {
    title: "WAD File System",
    subtitle: "FUSE & Systems Programming",
    description:
      "Developed a userspace file system (FUSE) to parse and mount WAD files (Doom assets). Implemented a custom tree structure for file hierarchy, O(1) path lookups, and POSIX-compliant operations (read/write/mkdir) handling raw binary data offsets.",
    techStack: ["C++", "FUSE API", "Linux", "Data Structures"],
    imageUrl: "/images/wad_filesystem.png",
    link: "https://www.youtube.com/watch?v=L4Lxz4wpUUc",
  },
  {
    title: "External Bus Interface Expansion",
    subtitle: "Microcontroller Hardware Design",
    description:
      "Utilized the External Bus Interface (EBI) on an ATxmega128A1U to map external components to data memory. Designed and constructed a hardware expansion utilizing SRAM, input/output ports, and LED/switch circuits, validating memory mapping via Assembly.",
    techStack: ["Assembly", "EBI", "SRAM", "Circuit Design"],
    imageUrl: "/images/ebi_expansion.png",
  },
  {
    title: "DMA Synthesizer Keyboard",
    subtitle: "Embedded Audio System",
    description:
      "Created an interactive synthesizer piano controlled via PC keyboard over USART. Integrated DMA, DAC, and Timer/Counters (TC) to generate precise audio waveforms efficiently, offloading data transfer tasks from the CPU.",
    techStack: ["DMA", "USART", "DAC", "Timers", "Embedded C"],
    imageUrl: "/images/dma_piano.png",
  },
  {
    title: "StudyHedge",
    subtitle: "PennApps Overall 3rd Place",
    description:
      "Backend development using Flask and Docker. Integrated Twilio and Canvas APIs to aggregate assignments and generate tailored study schedules based on personal preferences using the Eisenhower Matrix.",
    techStack: ["Python", "Flask", "Docker", "Twilio API", "Canvas API"],
    imageUrl: "/images/studyhedge.png",
    link: "https://devpost.com/software/study-hedge",
  },
  {
    title: "Heap Management Simulator",
    subtitle: "Memory Simulator",
    description:
      "Implemented a custom heap memory manager in C++ simulating dynamic allocation (malloc/free). Tracks free/allocated blocks and supports best-fit/worst-fit strategies.",
    techStack: ["C++", "Makefiles", "Valgrind", "Memory Management"],
    imageUrl: "/images/heapmemory.png",
    link: "https://youtu.be/ZBB4eDdvJvk?si=BAMbkWfIul1pwOSI",
  },
  {
    title: "FPGA Parallel FIR Filter",
    subtitle: "Digital Signal Processing",
    description:
      "Designed an 8-tap Finite Impulse Response (FIR) filter using VHDL on a DE10-Lite FPGA. Implemented parallel processing via pipelined architecture  and functional decomposition. Integrated IEEE-754 floating-point IPs and validated performance using ModelSim and In-System Memory Content Editor.",
    techStack: ["VHDL", "Intel Quartus", "ModelSim", "FPGA", "DSP"],
    imageUrl: "/images/fpga_fir.png",
  },
  {
    title: "Digital Audio Synthesizer & Noise Reduction",
    subtitle: "MATLAB Signal Processing",
    description:
      "Engineered a suite of audio processing tools. Developed a synthesizer with ADSR envelopes  to model instrument acoustics from MIDI files. Designed and analyzed IIR/FIR Notch filters to isolate and remove interference frequencies from corrupted audio, validated via Z-plane and DTFT analysis.",
    techStack: ["MATLAB", "Signal Processing", "Filter Design", "Spectrograms"],
    imageUrl: "/images/matlab_audio.png",
  },
  {
    title: "Image Sampling & Reconstruction",
    subtitle: "Computer Vision Fundamentals",
    description:
      "Investigated sampling theorems and aliasing effects on high-resolution images. Implemented custom anti-aliasing low-pass filters and linear interpolation algorithms to reconstruct downsampled images, effectively reducing visual artifacts  and preserving texture data.",
    techStack: ["MATLAB", "Image Processing", "Anti-Aliasing"],
    imageUrl: "/images/image_processing.png",
  },
  {
    title: "Formy",
    subtitle: "Physical Fitness Product",
    description:
      "Physical fitness product using algorithms to detect exercise progression and form. Designed the product from schematic to manufacturing approval.",
    techStack: ["C++", "Arduino", "Circuit Design", "Product Design"],
    imageUrl: "/images/formy.jpg",
  },
  {
    title: "Examlytics",
    subtitle: "HackHarvard Project",
    description:
      "Transforms course practice exams into concise, streamlined overviews. Categorizes content into digestible sections containing frequency-ranked topics, key tips, and essential formulas. Built with a Python backend and React frontend using WebSockets.",
    techStack: ["React.js", "Python", "WebSocket", "Algorithms"],
    imageUrl: "/images/examlytics.png",
    link: "https://devpost.com/software/project-idotpj",
  },
  {
    title: "Chownow",
    subtitle: "Food Discovery App",
    description:
      "An application that provides users with information about nearby food places based on preferences like food type, distance, and budget, resulting in a time-efficient method to find food compared to general map apps.",
    techStack: ["React.js", "Next.js", "Django", "Python"],
    imageUrl: "/images/chownow.jpg",
    link: "https://devpost.com/software/chownow",
  },
];
