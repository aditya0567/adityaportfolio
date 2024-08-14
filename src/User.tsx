import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Aditya kumar das",
    stack: [ "Full Stack Developer", "Competitive Programmer", "Freelancer",],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "My Portfolio",
        desc: "Developed a responsive and dynamic portfolio website using React.js and Tailwind CSS. Implemented modern design principles to showcase projects, skills, and professional experiences. The site features smooth navigation, optimized performance, and a mobile-first design approach.",
        image: "Portfolio.png",
        live: true,
        technologies: ["React", "Tailwind", ],
        link: "https://adityakumardas.vercel.app/",
        github: "https://github.com/aditya0567"
    },
    {
        title: "Unacademy Faculties Team",
        desc: "Designed and developed a static website for Unacademy faculties, focusing on a clean, professional layout. Utilized HTML, CSS, and Bootstrap to create a responsive and user-friendly interface, with JavaScript enhancing interactivity. The site effectively showcases faculty profiles and resources, ensuring a seamless user experience across devices.",
        image: "unacademy.png",
        live: true,
        technologies: ["HTML, CSS, JavaScript, Bootstrap"],
        link: "https://csitda.vercel.app/index.html",
        github: "https://github.com/aditya0567"
    },
    {
        title: "Website for College Fest",
        desc: "Designed and developed a dynamic website for the college fest Spree, utilized by students from both the hosting college and other institutions for event registration. Implemented a visually appealing UI with HTML, CSS, and Bootstrap. Integrated ChatGPT to provide AI-driven assistance, enhancing user interaction and experience.",
        image: "CollegeFest.png",
        live: true,
        technologies: ["HTML, CSS, JavaScript, Bootstrap"],
        link: "https://spreeofficial2k23.netlify.app/",
        github: "https://github.com/aditya0567"
    },
    {
        title: "Website for Intermediate Coaching Institute",
        desc: "Designed and developed a comprehensive website for an intermediate coaching institute, facilitating assignment updates and batch registrations for both students and faculty. Created an engaging and responsive UI using HTML, CSS, and Bootstrap. Implemented the backend with Node.js and MongoDB for efficient data handling. Integrated ChatGPT for AI-based assistance, enhancing user experience and support.",
        image: "Students career platform.png",
        live: false,
        technologies: ["HTML, CSS, JavaScript, Bootstrap, Node.js, MongoDB"],
        
    },
    {
        title: "Hoststar Clone",
        desc: "Designed and developed a fully functional Hotstar clone, replicating the streaming platform's user interface and features. Implemented a responsive frontend using HTML, CSS, JavaScript, and Bootstrap, ensuring a smooth and user-friendly experience across devices. Developed the backend with Node.js and MongoDB to handle user data, content management, and streaming functionality.",
        image: "hotstar.png",
        live: false,
        technologies: ["HTML, CSS, JavaScript, Bootstrap (Frontend)", "Node.js, MongoDB (Backend)"],
        
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "CodeX.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++",  "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", ]
    }
]
const socialLinks = [
    { link: "https://github.com/aditya0567", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/aditya-kumar-das-b13282228", icon: IconBrandLinkedin },
    { link: "https://www.geeksforgeeks.org/user/adityakd0567/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Frontend Developer (Intern)",
        company: "CampusMonk",
        date: "may 2024- july 2024 (3 months)",
        desc: "Contributed to the development of user-friendly and responsive web interfaces. Utilized TypeScript to enhance code quality and maintainability. Collaborated with the development team using Git and Bitbucket for version control and Linear for task management, ensuring smooth project workflow and timely delivery.",
        skills: ["TypeScript, VSCode, GitHub, Git, Bitbucket, Linear"]
    },
    
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };
