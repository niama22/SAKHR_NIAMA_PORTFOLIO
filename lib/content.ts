// lib/content.ts
// Source de vérité unique pour TOUT le texte du site, en français et en anglais.
// Les noms propres, technologies, entreprises et écoles restent identiques dans
// les deux langues. Modifie ce fichier pour changer le contenu du portfolio.

export type Locale = "fr" | "en";

export const profile = {
  name: "Niama Sakhr",
  email: "niamasakhr@gmail.com",
  phone: "+212 6 16 56 95 99",
  github: "https://github.com/niama22",
  linkedin: "https://linkedin.com/in/niama-sakhr-4672572a2",
  website: "https://niama-sakhr-portfolio.vercel.app",
};

export type SkillCategory = {
  title: string;
  level: number;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export type Project = {
  slug: string;
  title: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  categories?: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  articleUrl?: string;
  featured: boolean;
};

// NOTE: `url` should point to the badge/certificate PDF (e.g. a file in /public/certs/...
// or a Credly badge link). Leave it undefined if you don't have one yet — the UI will
// simply render the certification without a link.
export type Certification = {
  name: string;
  url?: string;
};

export type Publication = {
  title: string;
  venue: string;
  description: string;
  // Link to the published article (journal page, DOI, PDF, etc.)
  url?: string;
};

export type NavLink = { href: string; label: string };

export type ContentShape = {
  meta: {
    role: string;
    intro: string;
    keywords: string[];
  };
  nav: NavLink[];
  hero: {
    greeting: string;
    typingWords: string[];
    tagline: string;
    downloadCv: string;
    contactMe: string;
    viewProjects: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    points: string[];
    stats: { label: string; value: number }[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    categories: SkillCategory[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    heading: string;
    items: EducationItem[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    demoLabel: string;
    codeLabel: string;
    articleLabel: string;
    items: Project[];
  };
  certifications: {
    eyebrow: string;
    heading: string;
    viewBadgeLabel: string;
    items: Certification[];
  };
  publications: {
    eyebrow: string;
    heading: string;
    viewLabel: string;
    items: Publication[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    location: string;
    mapTitle: string;
    labels: {
      linkedin: string;
      github: string;
      portfolio: string;
    };
  };
  footer: {
    rights: string;
  };
};

const fr: ContentShape = {
  meta: {
    role: "Software Engineer",
    intro:
      "Ingénieure logicielle spécialisée en architectures cloud-native, microservices scalables, DevOps et intelligence artificielle. Passionnée par la conception de solutions fiables, sécurisées et performantes.",

    keywords: [
      "Ingénieure logiciel",
      "Développeuse Full Stack",
      "Cloud Native",
      "Microservices",
      "DevOps",
      "Spring Boot",
      "Next.js",
      "Maroc",
    ],
  },
  nav: [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#experience", label: "Expérience" },
    { href: "#projects", label: "Projets" },
    { href: "#education", label: "Formation" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    greeting: "Bonjour, je suis",
    typingWords: ["Software Engineer", "Cloud-Native Developer", "Full-Stack Developer"],
    tagline: "Cloud-Native & Full-Stack Developer",
    downloadCv: "Télécharger le CV",
    contactMe: "Me contacter",
    viewProjects: "Voir les projets",
  },
  about: {
    eyebrow: "À propos",
    heading: "Ce qui me définit en tant qu'ingénieure",
    points: [
      "Diplômée Ingénieure en Informatique — ENSA El Jadida",
      "Passionnée par le Cloud Computing & les architectures distribuées",
      "Conception de microservices robustes et scalables",
      "Pratique du DevOps: CI/CD, conteneurisation, infra-as-code",
      "Intérêt pour l'Intelligence Artificielle appliquée",
      "Goût pour la résolution de problèmes et le travail d'équipe",
    ],
    stats: [
      { label: "Projets techniques", value: 8 },
      { label: "Stages", value: 3 },
      { label: "Technologies", value: 28 },
      { label: "Certifications", value: 4 },
    ],
  },
  skills: {
    eyebrow: "Compétences",
    heading: "Ma boîte à outils technique",
    categories: [
      { title: "Programmation", level: 90, skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
      { title: "Frontend", level: 85, skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
      { title: "Backend", level: 88, skills: ["Spring Boot", "NestJS", "REST API", "Keycloak"] },
      {
        title: "Cloud & DevOps",
        level: 82,
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Git", "NGINX"],
      },
      { title: "Bases de données", level: 80, skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
      { title: "Architecture", level: 78, skills: ["Microservices", "Apache Kafka", "Kong API Gateway", "Eureka"] },
      { title: "IA & Data", level: 75, skills: ["Transformers", "Scikit-learn", "OpenCV", "Rasa", "NumPy", "Pandas"] },
    ],
  },
  experience: {
    eyebrow: "Parcours",
    heading: "Expérience professionnelle",
    items: [
      {
        role: "Stage — Ingénieure Logiciel",
        company: "Renault Group",
        location: "Tanger, Maroc",
        period: "2026 (6 mois)",
        description:
          "Développement d'une plateforme cloud-native d'optimisation du transport de véhicules, bâtie sur une architecture microservices.",
        achievements: [
          "Conception d'une architecture microservices distribuée avec API Gateway et service discovery",
          "Mise en place de l'authentification centralisée avec Keycloak",
          "Communication asynchrone entre services via Apache Kafka",
          "Déploiement conteneurisé sur Azure avec Docker",
        ],
        technologies: ["React.js", "Spring Boot", "NestJS", "Kong API Gateway", "Keycloak", "Kafka", "PostgreSQL", "Azure", "Docker"],
      },
      {
        role: "Stage — Développeuse Web",
        company: "GMD",
        location: "Tanger, Maroc",
        period: "2025 (2 mois)",
        description:
          "Développement d'une plateforme de gestion de stages intégrant un matching de CV par IA et un chatbot conversationnel.",
        achievements: [
          "Implémentation d'un moteur de matching CV / offres basé sur le NLP",
          "Développement d'un chatbot d'assistance avec Rasa",
          "Conception de l'API backend et du modèle de données",
        ],
        technologies: ["React.js", "Spring Boot", "MySQL", "Python", "Rasa"],
      },
      {
        role: "Stage — Développeuse Web",
        company: "GMD",
        location: "Tanger, Maroc",
        period: "Été 2024 (2 mois)",
        description:
          "Application web de gestion de stock avec tableaux de bord automatisés et reporting.",
        achievements: [
          "Développement d'une application web de gestion de stock",
          "Mise en place de tableaux de bord automatisés pour le suivi des stocks",
          "Génération de rapports automatisés destinés aux équipes métier",
        ],
        technologies: ["React.js", "C# .NET", "SQL Server"],
      },
    ],
  },
  education: {
    eyebrow: "Formation",
    heading: "Éducation",
    items: [
      {
        degree: "Diplôme d'Ingénieure — Informatique & Technologies Émergentes",
        school: "ENSA El Jadida",
        period: "2023 — 2026",
      },
      {
        degree: "Classes Préparatoires aux Grandes Écoles d'Ingénieurs",
        school: "CPGE Moulay Al Hassan, Tanger",
        period: "2021 — 2023",
      },
    ],
  },
  projects: {
    eyebrow: "Réalisations",
    heading: "Projets techniques",
    demoLabel: "Démo",
    codeLabel: "Code source",
    articleLabel: "Article",
    items: [
      {
        slug: "mooditor",
        title: "Emotion Detection Mobile App with Chatbot",
        longDescription:
          "Suite mobile complète avec reconnaissance d'émotions en temps réel, coaching gamifié, journal d'humeur et historique des sentiments, accompagnée d'un chatbot de soutien. Publié dans l'International Journal of Computing, Engineering, Data Science and Systems.",
        technologies: ["Android (Java)", "Python", "Spring Boot", "ML APIs"],
        categories: ["Mobile", "ML"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/emotion-app-demo.mp4",
        articleUrl: "https://www.ijceds.com/ijceds/article/view/89",
        featured: true,
      },
      {
        slug: "excelliabourse",
        title: "ExcelliaBourse - DevOps Scholarships",
        longDescription:
          "CI/CD, conteneurisation et infrastructure-as-code pour une plateforme de bourses scolaires scalable.",
        technologies: ["Next.js", "Spring Boot", "Jenkins", "Kubernetes", "AWS", "Terraform", "Ansible"],
        categories: ["Web", "DevOps"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/excellia-demo.mp4",
        featured: true,
      },
      {
        slug: "stagelink",
        title: "StageLink - Internship Management Platform",
        longDescription:
          "Plateforme de bout en bout pour la gestion des offres de stage, des candidatures, de la sélection et du suivi. Intègre une compatibilité CV/offre basée sur le NLP et un chatbot.",
        technologies: ["React.js", "Spring Boot", "MySQL", "Python (NLP)", "Rasa"],
        categories: ["Web", "ML"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/Demo_stage.mp4",
        featured: true,
      },
      {
        slug: "webnavigator",
        title: "WebNavigator (Mobile/TV)",
        longDescription:
          "Application multiplateforme React Native + Expo pour centraliser et naviguer facilement entre les applications web et services de l'entreprise, sur mobile et TV.",
        technologies: ["React Native", "Expo"],
        categories: ["Mobile", "Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/app_tv.mp4",
        featured: true,
      },
      {
        slug: "exam-facial-recognition",
        title: "Exam Management with Facial Recognition",
        longDescription:
          "Connexion sécurisée par reconnaissance faciale, tableaux de bord de présence et planification automatisée.",
        technologies: ["Python", "PHP/Laravel", "OpenCV"],
        categories: ["ML", "Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/facial.mp4",
        featured: true,
      },
      {
        slug: "exammaster",
        title: "ExamMaster - Intelligent Exam Platform",
        longDescription:
          "Couverture de bout en bout du cycle de vie des examens : planification sous contraintes, répartition des surveillants, suivi des présences, surveillance sécurisée et tableaux de bord administrateur riches.",
        technologies: ["Java", "Spring Boot (MVC)", "Spring Security", "MySQL"],
        categories: ["Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/examMaster.mp4",
        featured: true,
      },
      {
        slug: "automotive-bi",
        title: "Automotive BI Project",
        longDescription:
          "Pipelines ETL, indicateurs clés de performance et tableaux de bord interactifs sur un jeu de données automobile réel.",
        technologies: ["Pentaho", "Talend", "Qlik", "SQL"],
        categories: ["BI"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/bi_vid.mp4",
        featured: true,
      },
      {
        slug: "sentiment-analysis-bert",
        title: "Sentiment Analysis with BERT",
        longDescription:
          "BERT affiné sur des avis Amazon pour classifier les sentiments (très positif → très négatif), avec un tableau de bord interactif Streamlit.",
        technologies: ["Python", "Transformers", "PyTorch", "Streamlit"],
        categories: ["ML", "AI"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/demo_bert.mp4",
        featured: true,
      },
      {
        slug: "realtime-weather-bigdata",
        title: "Real-Time Weather Prediction — Big Data Architecture",
        longDescription:
          "Pipeline Big Data de bout en bout pour la prévision météo en temps réel, combinant un pipeline batch pour l'entraînement du modèle ML et un pipeline streaming pour des prédictions quasi instantanées. Un Random Forest Regressor est entraîné sur des données météo historiques issues de l'API Open-Meteo, puis déployé en environnement streaming pour des prévisions de température à faible latence et à grande échelle.",
        technologies: ["Kafka", "HBase", "Spark", "Spark Streaming", "Spark ML", "Zeppelin"],
        categories: ["Big Data", "ML"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/weather-bigdata-demo.mp4",
        featured: true,
      },
      {
        slug: "inventoryflow-dashboard",
        title: "InventoryFlow Dashboard",
        longDescription:
          "Plateforme full-stack de gestion des stocks et des inventaires avec tableaux de bord en temps réel, règles de réapprovisionnement automatisées et fiches d'évaluation des fournisseurs.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL"],
        categories: ["Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/inventoryflow-demo.mp4",
        featured: true,
      },
    ],
  },
  certifications: {
    eyebrow: "Certifications",
    heading: "Certifications AWS Academy",
    viewBadgeLabel: "Voir le badge",
    items: [
      { name: "AWS Academy Cloud Foundations", url: "/aws-cloud-foundations.pdf" },
      { name: "AWS Academy Cloud Developing", url: "/aws-cloud-developer.pdf" },
      { name: "AWS Academy Cloud Architecting", url: "/aws-cloud-architect.pdf" },
      { name: "AWS Academy Cloud Security Foundations", url: "/aws_security.pdf" },
    ],
  },
  publications: {
    eyebrow: "Recherche",
    heading: "Publications",
    viewLabel: "Voir la publication",
    items: [
      {
        title: "Mooditor: a mobile mental-health assistant",
        venue: "IJCEDS 2025",
        description:
          "Publication décrivant l'approche de reconnaissance d'émotions faciales et de suivi de l'humeur intégrée à l'application Mooditor.",
        url: "https://www.ijceds.com/ijceds/article/view/89",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Discutons de votre prochain projet",
    location: "Tanger, Maroc",
    mapTitle: "Localisation Tanger, Maroc",
    labels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      portfolio: "Portfolio",
    },
  },
  footer: {
    rights: "Tous droits réservés.",
  },
};

const en: ContentShape = {
  meta: {
    role: "Software Engineer",
    intro:
     "Software Engineer specializing in cloud-native architectures, scalable microservices, DevOps, and artificial intelligence. Passionate about designing reliable, secure, and high-performance software solutions.",
    keywords: [
      "Software Engineer",
      "Full Stack Developer",
      "Cloud Native",
      "Microservices",
      "DevOps",
      "Spring Boot",
      "Next.js",
      "Morocco",
    ],
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    greeting: "Hi, I'm",
    typingWords: ["Software Engineer", "Cloud-Native Developer", "Full-Stack Developer"],
    tagline: "Cloud-Native & Full-Stack Developer",
    downloadCv: "Download CV",
    contactMe: "Contact me",
    viewProjects: "View projects",
  },
  about: {
    eyebrow: "About",
    heading: "What defines me as an engineer",
    points: [
      "Engineering degree in Computer Science — ENSA El Jadida",
      "Passionate about Cloud Computing & distributed architectures",
      "Designing robust, scalable microservices",
      "Hands-on DevOps practice: CI/CD, containerization, infra-as-code",
      "Strong interest in applied Artificial Intelligence",
      "Enjoys problem-solving and teamwork",
    ],
    stats: [
      { label: "Technical projects", value: 8 },
      { label: "Internships", value: 3 },
      { label: "Technologies", value: 28 },
      { label: "Certifications", value: 4 },
    ],
  },
  skills: {
    eyebrow: "Skills",
    heading: "My technical toolbox",
    categories: [
      { title: "Programming", level: 90, skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
      { title: "Frontend", level: 85, skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
      { title: "Backend", level: 88, skills: ["Spring Boot", "NestJS", "REST API", "Keycloak"] },
      {
        title: "Cloud & DevOps",
        level: 82,
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Git", "NGINX"],
      },
      { title: "Databases", level: 80, skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
      { title: "Architecture", level: 78, skills: ["Microservices", "Apache Kafka", "Kong API Gateway", "Eureka"] },
      { title: "AI & Data", level: 75, skills: ["Transformers", "Scikit-learn", "OpenCV", "Rasa", "NumPy", "Pandas"] },
    ],
  },
  experience: {
    eyebrow: "Experience",
    heading: "Professional Experience",
    items: [
      {
        role: "Software Engineer Intern",
        company: "Renault Group",
        location: "Tangier, Morocco",
        period: "2026 (6 months)",
        description:
          "Developed a cloud-native vehicle transport optimization platform built on a microservices architecture.",
        achievements: [
          "Designed a distributed microservices architecture with API Gateway and service discovery",
          "Implemented centralized authentication with Keycloak",
          "Enabled asynchronous communication between services via Apache Kafka",
          "Deployed containerized services on Azure with Docker",
        ],
        technologies: ["React.js", "Spring Boot", "NestJS", "Kong API Gateway", "Keycloak", "Kafka", "PostgreSQL", "Azure", "Docker"],
      },
      {
        role: "Web Developer Intern",
        company: "GMD",
        location: "Tangier, Morocco",
        period: "2025 (2 months)",
        description:
          "Built an internship management platform featuring AI-based CV matching and a conversational chatbot.",
        achievements: [
          "Implemented an NLP-based CV / job matching engine",
          "Developed an assistance chatbot with Rasa",
          "Designed the backend API and data model",
        ],
        technologies: ["React.js", "Spring Boot", "MySQL", "Python", "Rasa"],
      },
      {
        role: "Web Developer Intern",
        company: "GMD",
        location: "Tangier, Morocco",
        period: "Summer 2024 (2 months)",
        description:
          "Stock management web app with automated dashboards and reporting.",
        achievements: [
          "Built a web application for stock management",
          "Set up automated dashboards for stock tracking",
          "Generated automated reports for business teams",
        ],
        technologies: ["React.js", "C# .NET", "SQL Server"],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    heading: "Education",
    items: [
      {
        degree: "Engineering Degree — Computer Science & Emerging Technologies",
        school: "ENSA El Jadida",
        period: "2023 — 2026",
      },
      {
        degree: "Preparatory Classes for Engineering Schools",
        school: "CPGE Moulay Al Hassan, Tangier",
        period: "2021 — 2023",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    heading: "Technical projects",
    demoLabel: "Demo",
    codeLabel: "Source code",
    articleLabel: "Article",
    items: [
      {
        slug: "mooditor",
        title: "Emotion Detection Mobile App with Chatbot",
        longDescription:
          "Comprehensive mobile suite with real-time emotion recognition, gamified coaching, mood journal, and sentiment history alongside a supportive chatbot. Published in the International Journal of Computing, Engineering, Data Science and Systems.",
        technologies: ["Android (Java)", "Python", "Spring Boot", "ML APIs"],
        categories: ["Mobile", "ML"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/emotion-app-demo.mp4",
        articleUrl: "https://www.ijceds.com/ijceds/article/view/89",
        featured: true,
      },
      {
        slug: "excelliabourse",
        title: "ExcelliaBourse - DevOps Scholarships",
        longDescription:
          "CI/CD, containerization and IaC for a scalable scholarships platform.",
        technologies: ["Next.js", "Spring Boot", "Jenkins", "Kubernetes", "AWS", "Terraform", "Ansible"],
        categories: ["Web", "DevOps"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/excellia-demo.mp4",
        featured: true,
      },
      {
        slug: "stagelink",
        title: "StageLink - Internship Management Platform",
        longDescription:
          "End-to-end platform for managing internship offers, applications, selection and monitoring. Added NLP-based CV/offer compatibility and a chatbot.",
        technologies: ["React.js", "Spring Boot", "MySQL", "Python (NLP)", "Rasa"],
        categories: ["Web", "ML"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/Demo_stage.mp4",
        featured: true,
      },
      {
        slug: "webnavigator",
        title: "WebNavigator (Mobile/TV)",
        longDescription:
          "Cross-platform React Native + Expo app to centralize and smoothly navigate company web apps and services on mobile and TV.",
        technologies: ["React Native", "Expo"],
        categories: ["Mobile", "Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/app_tv.mp4",
        featured: true,
      },
      {
        slug: "exam-facial-recognition",
        title: "Exam Management with Facial Recognition",
        longDescription:
          "Secure login via face recognition, attendance dashboards and automated scheduling.",
        technologies: ["Python", "PHP/Laravel", "OpenCV"],
        categories: ["ML", "Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/facial.mp4",
        featured: true,
      },
      {
        slug: "exammaster",
        title: "ExamMaster - Intelligent Exam Platform",
        longDescription:
          "End-to-end exam lifecycle coverage: constraint-based scheduling, invigilation rosters, attendance tracking, secure proctoring, and rich admin dashboards.",
        technologies: ["Java", "Spring Boot (MVC)", "Spring Security", "MySQL"],
        categories: ["Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/examMaster.mp4",
        featured: true,
      },
      {
        slug: "automotive-bi",
        title: "Automotive BI Project",
        longDescription:
          "ETL pipelines, KPIs and interactive dashboards on a real automotive dataset.",
        technologies: ["Pentaho", "Talend", "Qlik", "SQL"],
        categories: ["BI"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/bi_vid.mp4",
        featured: true,
      },
      {
        slug: "sentiment-analysis-bert",
        title: "Sentiment Analysis with BERT",
        longDescription:
          "Fine-tuned BERT on Amazon Reviews to classify sentiments (very positive → very negative) with an interactive Streamlit dashboard.",
        technologies: ["Python", "Transformers", "PyTorch", "Streamlit"],
        categories: ["ML", "AI"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/demo_bert.mp4",
        featured: true,
      },
      {
        slug: "realtime-weather-bigdata",
        title: "Real-Time Weather Prediction — Big Data Architecture",
        longDescription:
          "End-to-end Big Data pipeline for real-time weather forecasting, combining a batch pipeline for ML model training with a streaming pipeline for near-instant predictions. A Random Forest Regressor is trained on historical weather data from the Open-Meteo API and deployed in a streaming environment for low-latency temperature forecasts at scale.",
        technologies: ["Kafka", "HBase", "Spark", "Spark Streaming", "Spark ML", "Zeppelin"],
        categories: ["Big Data", "ML"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/weather-bigdata-demo.mp4",
        featured: true,
      },
      {
        slug: "inventoryflow-dashboard",
        title: "InventoryFlow Dashboard",
        longDescription:
          "Full-stack inventory and stock management platform with live dashboards, automated replenishment rules, and supplier scorecards.",
        technologies: ["React.js", "Spring Boot", "PostgreSQL"],
        categories: ["Web"],
        githubUrl: "https://github.com/niama22",
        demoUrl: "/inventory.mp4",
        featured: true,
      },
    ],
  },
  certifications: {
    eyebrow: "Certifications",
    heading: "AWS Academy Certifications",
    viewBadgeLabel: "View badge",
    items: [
      { name: "AWS Academy Cloud Foundations", url: "/aws-cloud-foundations.pdf" },
      { name: "AWS Academy Cloud Developing", url: "/aws-cloud-developer.pdf" },
      { name: "AWS Academy Cloud Architecting", url: "/aws-cloud-architect.pdf" },
      { name: "AWS Academy Cloud Security Foundations", url: "/aws_security.pdf" },
    ],
  },
  publications: {
    eyebrow: "Research",
    heading: "Publications",
    viewLabel: "View publication",
    items: [
      {
        title: "Mooditor: a mobile mental-health assistant",
        venue: "IJCEDS 2025",
        description:
          "Publication describing the facial emotion recognition approach and mood-tracking feature integrated into the Mooditor app.",
        url: "https://www.ijceds.com/ijceds/article/view/89",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's talk about your next project",
    location: "Tangier, Morocco",
    mapTitle: "Location: Tangier, Morocco",
    labels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      portfolio: "Portfolio",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export const content: Record<Locale, ContentShape> = { fr, en };