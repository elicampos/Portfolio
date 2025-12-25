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
    items: [
      "C++",
      "C",
      "Python",
      "VHDL",
      "Assembly",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "Embedded & Hardware",
    items: [
      "RTOS (FreeRTOS)",
      "STM32",
      "ESP32",
      "Arduino",
      "I2C",
      "SPI",
      "UART",
      "GPIO",
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
];

export const PROJECTS: Project[] = [
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
    title: "Echo Hand",
    subtitle: "VR Haptic Glove",
    description:
      "Prototyping a VR glove using servo motors for haptic feedback, flex sensors for angle detection, and vibration motors for texture simulation. Integrated with ESP32 for Bluetooth/USB connectivity.",
    techStack: ["RTOS", "ESP32", "Serial Comm", "Hardware Design"],
    imageUrl: "/images/echohand.png",
    link: "https://github.com/elicampos/EchoHand",
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
    title: "Formy",
    subtitle: "Physical Fitness Product",
    description:
      "Physical fitness product using algorithms to detect exercise progression and form. Designed the product from schematic to manufacturing approval.",
    techStack: ["C++", "Arduino", "Circuit Design", "Product Design"],
    imageUrl: "/images/formy.jpg",
  },
];
