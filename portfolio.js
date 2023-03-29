import emoji from "react-easy-emoji";

export const greetings = {
  name: "Eli Campos",
  title: "Hello, my name is Eli!",
  description:
    "I am a Computer Science student who is actively pursuing a career in full-stack development, algorithm design and PCB design to bring my innovative ideas to fruition.",
  resumeLink: "https://elicampos.github.io/resume/",
};

export const openSource = {
  githubUserName: "elicampos",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/elicampos",
  linkedin: "https://www.linkedin.com/in/eli-campos-9556b020b/",
};

export const skillsSection = {
  title: "What I do",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Proficient in developing robust and scalable back-end systems utilizing Django framework and JavaScript technologies"
        ),
        emoji(
          "⚡ Skilled in prototyping hardware solutions using Arduino and designing custom PCBs for enhanced functionality and performance."
        ),
        emoji(
          "⚡Actively participating in coding competitions, including training for the International Collegiate Programming Contest, and consistently competing in university hackathons, with one notable win in a specific category"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "ReactJs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "cpp",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "Ardunio",
          fontAwesomeClassname: "vscode-icons:file-type-c",
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "vscode-icons:file-type-swift",
        }
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Florida",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2021 - December 2025",
    grade: "3.64 GPA",
    desc: "Engineering programming degree with a minor in Electrical Enginnering",
    descBullets: [
      "Completed a wide range of coursework in computer science, including topics such as programming languages, data structures and algorithms, software engineering and computer architecture soon. I am also planning to take other classes that revolve around mathematics, statistics, and electrical engineering.",
      "Participated in extracurricular activities related to computer science, such as coding competitions, hackathons, and tech clubs. The University of Florida has several student organizations dedicated to technology and programming, which provide opportunities to network with peers and industry professionals, and work on real-world projects.",
    ],
    github: "https://github.com/elicampos",
  },
  {
    schoolName: "Coral Reef Senior High School",
    grade: "4.7 GPA",
    subHeader: "Engineering Student",
    duration: "August 2017 - May 2021",
    desc: "Programming Bootcamp to learn Full Stack Development",
    descBullets: [
      "  Studied a specialized curriculum in math, science, and engineering, including coursework in areas such as computer science, physics, calculus, and electronics",
      "  Participated in hands-on projects and activities that focused on practical problem-solving skills, such as building robots, designing circuits, and constructing bridges or other structures",
      "  Worked with other students in collaborative teams to tackle complex engineering challenges, developing communication, leadership, and project management skills",
      "  Participated in extracurricular activities related to engineering, such as robotics competitions, coding clubs, or engineering-focused volunteer work in the community",
    ],
    github: "https://github.com/elicampos",
  },
];

export const experience = [
  {
    role: "Hackabull Hackathon Competitior(Winner)",
    company: "University of South Florida",
    companylogo: "/img/icons/common/usflogo.jpeg",
    date: "March 2023 – Present",
    descBullets: [" Created an application called Chownow that provides users with information about food places nearby with certain preferences of food type, distance, and budget resulting in a much more time-efficient method to find food, unlike general map applications.",
    "I utilized Django and Python programming languages to construct the backend infrastructure, which was subsequently integrated with the React frontend.",
  ],
  },
  {
    role: "Researcher",
    company: "University of Florida",
    companylogo: "/img/icons/common/uflogo.png",
    date: "August 2022-Present",
    descBullets: [
      "  Built an application that allows surgeons to conduct the patient’s surgery in a simulated environment to mitigate the chances of human error occurring during the real operation.",
      "  Focused on transitioning our changes to the new version of the open-source physics engine it was built on top of and organizing the repository from changes of the new research assistants that I trained.",
    ],
  },
  {
    role: "Student Assistant",
    company: "University of Florida",
    companylogo: "/img/icons/common/uflogo.png",
    date: "March 2023-Present",
    descBullets: [
      "  Developed professional relationships with professors, researchers, and other professionals in the physics department through networking opportunities.",
      "  Improved skills in data entry and management, customer service, and project coordination through work as a student office assistant in the physics department with intelligent and professional colleagues.",
    ],
  },
  {
    role: "Co-Founder",
    company: "Formy",
    companylogo: "/img/icons/common/arduniouno.png",
    date: "December 2021-Present",
    descBullets: [
      "  Built an application that allows surgeons to conduct the patient’s surgery in a simulated environment to mitigate the chances of human error occurring during the real operation.",
      "  Focused on transitioning our changes to the new version of the open-source physics engine it was built on top of and organizing the repository from changes of the new research assistants that I trained.",
    ],
  },
];

export const projects = [
  {
    name: "AVL Tree",
    descBullets: ["I developed an application that efficiently stores Gator IDs and names using an AVL tree, which was implemented from scratch in C++.",
    "Progress: Completed"],
    image : "/img/icons/common/avltree.jpeg",
    github: "https://github.com/elicampos/AVL-Tree",
    tags: ["HTML5", "CSS", "Javascript"],
  },
  {
    name: "VitaFinder",
    descBullets: ["Constructed a web application that uses an OCR scanner that scrapes websites that have two different nutrition facts and compares the two ingredients in terms of quality and amount.",
    "Progress: Back-End is completed and must be merged with Front-End. However, Front-End is avaliable for preview"],
    image : "/img/icons/common/vitafinderfront.png",
    link: "https://elis-blank-site-27ea58.webflow.io/",
    github: "https://github.com/elicampos",
    tags: ["HTML5", "CSS", "Javascript"],
  },
  {
    name: "Minesweeper",
    descBullets:[ "Using the C++ library SFML, I developed the popular game Minesweeper using various data structures and coding techniques.",
    "Progress: Completed",],
    image: "/img/icons/common/Minesweeper.png",
    github: "https://github.com/elicampos/Minesweeper",
    tags: ["C++"],
  },
  {
    name: "Amazon Inventory Predictor",
    descBullets: ["Created an app that scraped my Amazon order database and used statistics to predict the inventory I would need to buy the following week.",
    "Progress: Completed"],
    image: "/img/icons/common/sele.png",
    github: "https://github.com/elicampos",
    tags: ["Python", "Selenium"],
  },
];

export const feedbacks = [
  {
    name: "Chui, Kawi-Lee (Calculus 2 Professor)",
    feedback:
      "Please always keep this positive attitude towards the world, no matter what you are facing, you can always overcome any difficulties with your positive attitude, honest hard work, and you shall go far!  Be a positive force, do great things for the community!  I can't tell you enough how proud I am of you, no matter whatever you decide to do!.",
  },
  {
    name: "Jorg, Peters (Professor of Computer Graphics and Data Science)",
    feedback:
      "Eli Campos came to my office, having heard that my lab specializes in interactive simulation based on complex geometry. Eli made clear that he did not just want to look over our shoulders for a CV entry, but wanted to actively get involved and contribute. Remarkably, Eli chose to immerse himself in one of the most technically challenging aspects of the work, a major software upgrade, called re-basing. This requires deep immersion into programming techniques, languages and the coding strategies underlying real time interactive simulation, i.e. software that enables solving partial differential equations where the finite elements change potentially in each time step (due to cauterizing or suturing). Eli has shown himself to be a quick learner, and has demonstrated perseverance, and independence in his work. With his attitude, Eli is an asset and will advertise HWCoE education in engineering. The University Scholar Program is appropriate and will provide an additional push for Eli to set his sights higher and consider a postgraduate engineering education. In summary, I highly recommend Eli for University Scholar",
  },
];

export const seoData = {
  title: "Eli's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "/img/icons/common/about.png",
  url: "https://brendanglancy.software/",
  keywords: [
    "Eli",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Developer",
    "web developer",
    "Campos",
    "Eli Campos",
    "Coders",
  ],
};
