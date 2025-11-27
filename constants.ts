import { Project, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  en: {
    name: "David Cequea",
    role: "Android Developer",
    bio: "I am a passionate Android Developer with over 6 years of experience building high-quality mobile applications. I specialize in modern Android development using Kotlin, Jetpack Compose, and Clean Architecture. I love solving complex problems and optimizing app performance to ensure a buttery smooth user experience."
  },
  es: {
    name: "David Cequea",
    role: "Desarrollador Android",
    bio: "Soy un desarrollador de Android apasionado con más de 6 años de experiencia creando aplicaciones móviles de alta calidad. Me especializo en el desarrollo moderno de Android utilizando Kotlin, Jetpack Compose y Clean Architecture. Me encanta resolver problemas complejos y optimizar el rendimiento de las aplicaciones para garantizar una experiencia de usuario fluida."
  }
};

export const SKILLS: { en: SkillCategory[], es: SkillCategory[] } = {
  en: [
    {
      title: "Core Android",
      icon: "fa-mobile-screen",
      skills: ["Kotlin", "Java", "Jetpack Compose", "XML Layouts", "Android SDK", "Material Design 3"]
    },
    {
      title: "Architecture & Patterns",
      icon: "fa-layer-group",
      skills: ["MVVM", "MVI", "Clean Architecture", "Dependency Injection (Hilt/Koin)", "Coroutines", "Flow"]
    },
    {
      title: "Tools & Libraries",
      icon: "fa-toolbox",
      skills: ["Retrofit", "Room", "Firebase", "Git", "CI/CD (GitHub Actions)", "Gradle", "JUnit/Espresso"]
    }
  ],
  es: [
    {
      title: "Android Core",
      icon: "fa-mobile-screen",
      skills: ["Kotlin", "Java", "Jetpack Compose", "XML Layouts", "Android SDK", "Material Design 3"]
    },
    {
      title: "Arquitectura y Patrones",
      icon: "fa-layer-group",
      skills: ["MVVM", "MVI", "Clean Architecture", "Dependency Injection (Hilt/Koin)", "Coroutines", "Flow"]
    },
    {
      title: "Herramientas y Librerías",
      icon: "fa-toolbox",
      skills: ["Retrofit", "Room", "Firebase", "Git", "CI/CD (GitHub Actions)", "Gradle", "JUnit/Espresso"]
    }
  ]
};

export const PROJECTS: { en: Project[], es: Project[] } = {
  en: [
    {
      title: "FitTrack Pro",
      description: "FitTrack Pro helps users monitor their daily activity, heart rate, and sleep patterns. Built with Jetpack Compose and Room Database.",
      image: "https://picsum.photos/id/192/600/400",
      tags: ["Kotlin", "Compose", "Room", "Bluetooth LE"],
      links: { playStore: "#", source: "#" }
    },
    {
      title: "CryptoWatcher",
      description: "Stay ahead of the market with CryptoWatcher. It uses WebSocket connections for live price updates and real-time charts.",
      image: "https://picsum.photos/id/122/600/400",
      tags: ["Kotlin", "WebSockets", "Retrofit", "Chart Library"],
      links: { github: "#" }
    },
    {
      title: "EcoTravel",
      description: "Sustainable travel guide app helping tourists find eco-friendly hotels and tours based on geolocation.",
      image: "https://picsum.photos/id/28/600/400",
      tags: ["Java", "Google Maps API", "Firebase"],
      links: { playStore: "#" }
    },
    {
      title: "TaskMaster",
      description: "A productivity app focusing on the Pomodoro technique with deep focus analytics and background workers.",
      image: "https://picsum.photos/id/180/600/400",
      tags: ["Kotlin", "WorkManager", "Notifications"],
      links: { playStore: "#" }
    }
  ],
  es: [
    {
      title: "FitTrack Pro",
      description: "FitTrack Pro ayuda a los usuarios a monitorear su actividad diaria, ritmo cardíaco y patrones de sueño. Construido con Jetpack Compose y Room Database.",
      image: "https://picsum.photos/id/192/600/400",
      tags: ["Kotlin", "Compose", "Room", "Bluetooth LE"],
      links: { playStore: "#", source: "#" }
    },
    {
      title: "CryptoWatcher",
      description: "Mantente adelante del mercado con CryptoWatcher. Utiliza WebSockets para actualizaciones de precios y gráficos en tiempo real.",
      image: "https://picsum.photos/id/122/600/400",
      tags: ["Kotlin", "WebSockets", "Retrofit", "Chart Library"],
      links: { github: "#" }
    },
    {
      title: "EcoTravel",
      description: "Guía de viaje sostenible que ayuda a los turistas a encontrar hoteles y tours ecológicos basados en geolocalización.",
      image: "https://picsum.photos/id/28/600/400",
      tags: ["Java", "Google Maps API", "Firebase"],
      links: { playStore: "#" }
    },
    {
      title: "TaskMaster",
      description: "Una aplicación de productividad centrada en la técnica Pomodoro con análisis de enfoque profundo y trabajadores en segundo plano.",
      image: "https://picsum.photos/id/180/600/400",
      tags: ["Kotlin", "WorkManager", "Notificaciones"],
      links: { playStore: "#" }
    }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", icon: "fa-linkedin", url: "https://linkedin.com" }
];

export const EMAIL = "david.cequea@example.com";

export const NAV_LINKS = {
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  es: [
    { label: "Sobre Mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ]
};

export const UI_LABELS = {
  en: {
    hello: "HELLO, MY NAME IS",
    viewWork: "View My Work",
    contactMe: "Contact Me",
    techSkills: "Technical",
    techSkillsSuffix: "Skills",
    techStack: "My tech stack is focused on modern Android development practices. I prioritize clean, maintainable code and scalable architectures.",
    featuredProjects: "Featured",
    featuredProjectsSuffix: "Projects",
    projectsDesc: "A selection of apps I've built. From utility tools to full-scale social platforms, each project represents a unique challenge solved.",
    whatsNext: "What's Next?",
    letsWork: "Let's work together",
    available: "I'm currently available for freelance work and full-time positions. If you have a project that needs some creative Android touch, let's hear it.",
    sayHello: "Say Hello",
    footer: "Designed & Built with React, Tailwind, and Gemini AI.",
    edit: "Edit 'portfolioData.ts' to customize this portfolio.",
    aiGreeting: "Hi! I am David's AI assistant. Ask me about his skills, projects, or experience.",
    aiInputPlaceholder: "Ask about David..."
  },
  es: {
    hello: "HOLA, MI NOMBRE ES",
    viewWork: "Ver Mi Trabajo",
    contactMe: "Contáctame",
    techSkills: "Habilidades",
    techSkillsSuffix: "Técnicas",
    techStack: "Mi stack tecnológico se centra en prácticas modernas de desarrollo Android. Priorizo código limpio, mantenible y arquitecturas escalables.",
    featuredProjects: "Proyectos",
    featuredProjectsSuffix: "Destacados",
    projectsDesc: "Una selección de apps que he construido. Desde herramientas de utilidad hasta plataformas sociales a gran escala, cada proyecto representa un desafío único resuelto.",
    whatsNext: "¿Qué sigue?",
    letsWork: "Trabajemos Juntos",
    available: "Actualmente estoy disponible para trabajo freelance y posiciones a tiempo completo. Si tienes un proyecto que necesita un toque creativo de Android, hablemos.",
    sayHello: "Saludar",
    footer: "Diseñado y construido con React, Tailwind y Gemini AI.",
    edit: "Edita 'portfolioData.ts' para personalizar este portafolio.",
    aiGreeting: "¡Hola! Soy el asistente IA de David. Pregúntame sobre sus habilidades, proyectos o experiencia.",
    aiInputPlaceholder: "Pregunta sobre David..."
  }
};