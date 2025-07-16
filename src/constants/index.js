import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mongodb,
    git,
    figma,
    Oracle,
    Python,
    github,
    OncoCura,
    Vision,
    StreamEase,
    nodejs,
    redis,
    socket,
    bootstrap,
    CPP,
    Connexify,
    docker,
    express,
    nextjs,
    mysql,
    postgresql,
    typescript,
    nestjs
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "NodeJs Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "NodeJs",
      icon: nodejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MongoDb",
      icon: mongodb,
    },
    {
      name: "Oracle",
      icon: Oracle,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "redis",
      icon: redis
    },
    {
      name:"socket.io",
      icon:socket
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "GitHub",
      icon: github,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "NestJS",
      icon: nestjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "C++",
      icon: CPP,
    },
    {
      name: "Python",
      icon: Python,
    },
        {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "NED University",
      icon: Python,
      iconBg: "#383E56",
      date: "October 2022 - December 2023",
      points: [
        "Developed innovative applications using Python and related technologies for academic and personal projects.",
        "Collaborated with classmates to develop problem-solving, visually appealing projects, emphasizing functionality and user experience.",
        "Developed backend for a virtual assistant VISION, integrating web scraping, BardAI for Q/A, and desktop task automation.",
        "Achieved 1st Prize in 'Application Development' at CodeSphere, organized by the Software Department of NED University, Karachi.",
      ],
    },
    {
        title: "Web Development Intern",
        company_name: "Codsoft",
        icon: javascript,
        iconBg: "#383E56",
        date: "February 2024 - March 2024",
        points: [
          "Developed the user interface and landing pages for a travel website and a portfolio website.",
          "Collaborated with the team to ensure responsive and visually appealing designs using modern web technologies.",
          "Enhanced coding proficiency by implementing front-end best practices and optimizing page performance."
        ]
    },     
    {
      title: "Node.js Developer",
      company_name: "NED University",
      icon: nodejs,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Develop backend systems using Node.js, Express, and MongoDB, ensuring secure and scalable architectures for web applications.",
        "Built 'OncoCura,' an AI-driven cancer treatment platform, integrating authentication, data security, and real-time analytics for personalized treatment planning.",
        "Developed 'StreamEase,' a movie streaming platform, implementing user authentication, content management, and optimized database queries for seamless performance.",
        "Collaborate with developers and designers to build robust, high-performance applications, focusing on RESTful API development and efficient database structuring.",
        "Participate in competitions and hackathons, securing Second Prize in 'Full Stack Frenzy' at Teknofest Pakistan, held at the Expo Center, Karachi.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "NED University",
      icon: reactjs,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Develop web applications using MERN Stack, SQL and related technologies, including Redux etc, for university and learning projects.",
        "Collaborate with classmates, including designers and developers, to create scalable and visually appealing projects.",
        "Implement responsive, interactive user interfaces, prioritizing user experience seamless integration with efficient, scalable backend systems.",
        "Participate in competitions and hackathons, and secured Second Prize in 'Full Stack Frenzy' at Teknofest Pakistan, held at the Expo Center, Karachi.",
      ],
    },
   
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Collaborating with Ahad has always been a pleasure. His backend expertise and problem-solving skills consistently bring our projects to life.",
      name: "Engr Simrah",
      designation: "Student",
      company: "NEDUET",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFvlg9pa0uWZw/profile-displayphoto-shrink_800_800/B4DZb3XJYiG0Ak-/0/1747906762784?e=1758153600&v=beta&t=xkfriXlCY-_t99dhAxYdRPoTbScESO1w_VQiDugbxro",
    },
    {
      testimonial:
        "Working with Ahad has always been inspiring. His creativity and attention to detail in frontend development consistently push our projects to new heights.",
      name: "Arham Hasan",
      designation: "Student",
      company: "NEDUET",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHgWCEF86lPLw/profile-displayphoto-shrink_800_800/B4EZa1xXhiHoAg-/0/1746806340992?e=1758153600&v=beta&t=LZYQLbbgs1mBXUYaSpzkIJPGPkqEhNmMzA9jIuU5tY4",
    },
    {
      testimonial:
        "I collaborated with Ahad on a freelancing project, and he truly brought our website to life with his innovative ideas. I would love to work with him again.",
      name: "Sabeeh Ahmed",
      designation: "Freelancer",
      company: "Fiverr",
      image: javascript,
    },
  ];

  const projects = [
    {
      name: "VISION",
      description:
        "As the Back-End Developer for Vision, a Python-based Virtual Assistant inspired by Iron Man's Jarvis, I developed robust functionalities using Python, ensuring seamless integration with Bard AI, speech recognition, geolocation, and automation libraries for enhanced performance and advanced capabilities. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pyqt5",
          color: "green-text-gradient",
        },
        {
          name: "vitualassistant",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: Vision,
      source_code_link: "https://github.com/SimrahFalak/Vision",
    },
    {
      name: "OncoCura",
      description:
        "Worked as a Back-End Developer on OncoCura, utilizing Node.js to build a powerful server-side infrastructure for an AI-driven platform that analyzes cancer patients' medical records and generates personalized treatment plans. The platform also integrates a secure e-Store for ethical access to cancer medications.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: OncoCura,
      source_code_link: "https://github.com/Syed-Abdul-Ahad/OncoCura.git",
    },
    {
      name: "Stream Ease",
      description:
        "As a Front-End Developer for StreamEase, a movie streaming platform, I contributed to creating a seamless viewing experience by designing an intuitive and visually appealing user interface. The platform was built using HTML, CSS, JavaScript, Node.js, Express, MySQL, and leveraged cloud services for movie storage.",
      tags: [
        {
          name: "Js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: StreamEase,
      source_code_link: "https://github.com/Syed-Abdul-Ahad/StreamEase.git",
    },
    {
      name: "Connexify",
      description:
        "Connexify is a real-time chat application that is developed using the MERN stack, Socket.io, Tailwind CSS, DaisyUI, and Redux. It offers seamless one-on-one messaging with real-time updates, user authentication, and online user tracking. With an elegant and responsive UI, Connexify ensures a smooth user experience across devices, making instant communication effortless and engaging.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Websockets",
          color: "green-text-gradient",
        },
        {
          name: "Real time",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: Connexify,
      source_code_link: "https://github.com/Syed-Abdul-Ahad/Connexify-Real-time-chat-app.git",
    },
    {
      name: "Connexify",
      description:
        "Connexify is a real-time chat application that is developed using the MERN stack, Socket.io, Tailwind CSS, DaisyUI, and Redux. It offers seamless one-on-one messaging with real-time updates, user authentication, and online user tracking. With an elegant and responsive UI, Connexify ensures a smooth user experience across devices, making instant communication effortless and engaging.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Websockets",
          color: "green-text-gradient",
        },
        {
          name: "Real time",
          color: "pink-text-gradient",
        },
      ],
      linkLogo: github,
      image: Connexify,
      source_code_link: "https://github.com/Syed-Abdul-Ahad/Connexify-Real-time-chat-app.git",
    },
  ];



  const achievements = [
    {
      title: "2nd Place - Full Stack Frenzy Hackathon",
      description: "Secured 2nd place in the Full Stack Frenzy Hackathon at Teknofest Pakistan 2024, competing among top developers, showcasing innovation in full-stack development.",
      place: "Teknofest Pakistan 2024",
      position: "2nd Place",
      role: "Lead Developer, Backend & Frontend",
      pic:reactjs,
      technologies: ["Node.js", "Express", "MongoDB", "ReactJS", "JavaScript", "Tailwind CSS"],
      contributions: "Developed a seamless movie streaming platform with real-time features, ensuring smooth video streaming, user authentication, and scalable architecture.",
    },
    {
      title: "2nd Runner-up - IBA Pro Battle (UI/UX Category)",
      description: "Achieved 2nd Runner-up position at IBA Pro Battle 2024 in the UI/UX category, designing an intuitive food delivery application.",
      place: "IBA Pro Battle 2024",
      position: "2nd Runner-up",
      role: "UI/UX Designer",
      pic: figma,
      technologies: ["Figma", "Sketch", "Adobe XD"],
      contributions: "Created user-friendly and visually appealing designs, focusing on seamless navigation and optimal user experience for the food delivery platform.",
    },
    {
      title: "1st Prize - CodeSphere (NED University)",
      description: "Won 1st Prize at CodeSphere (NED University) in the Software Development category for innovative problem-solving and design approach.",
      place: "NED University",
      position: "1st Prize",
      role: "Lead Developer",
      pic:Python,
      technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "JavaScript"],
      contributions: "Developed a robust e-commerce platform, focusing on scalability, security, and real-time updates for users.",
    },
    {
      title: "Hackathon Participation - Mavericks",
      description: "Represented Mavericks team in various hackathons, gaining experience in fast-paced, competitive environments and further honing problem-solving skills.",
      place: "Various Hackathons",
      position: "Participant",
      role: "Full Stack Developer",
      pic:nodejs,
      technologies: ["Node.js", "Express", "MongoDB", "ReactJS", "JavaScript", "Git"],
      contributions: "Collaborated on multiple hackathon projects, focusing on both frontend and backend development, ensuring project deadlines were met with quality results.",
    },
  ];
  
  

  export { services, technologies, experiences, testimonials, projects, navLinks, achievements};