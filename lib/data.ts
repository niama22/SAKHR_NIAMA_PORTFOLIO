// lib/data.ts
// Contenu basé sur le CV réel — pas de technologie non confirmée (ex: Redis, PostGIS,
// Google OR-Tools, Django, Github Actions ont été retirés car absents du CV source).
// Modifie librement ce fichier: c'est la seule source de vérité pour le contenu du site.

export const profile = {
  name: "Niama Sakhr",
  role: "Software Engineer",
  tagline: "Full-Stack Developer",
  intro:
    "Ingénieure logiciel spécialisée en développement full-stack, cloud computing, DevOps et intelligence artificielle. Passionnée par la conception de solutions logicielles fiables, sécurisées, évolutives et performantes, avec un fort intérêt pour l'innovation et l'apprentissage continu des nouvelles technologies.",
  phone: "+212 6 16 56 95 99",
  github: "https://github.com/niama22",
  linkedin: "https://linkedin.com/in/niama-sakhr-4672572a2",
  website: "https://niama-sakhr-portfolio.vercel.app",
  location: "Tanger, Maroc",
};

export const stats = [
  { label: "Projets techniques", value: 2 },
  { label: "Stages", value: 2 },
  { label: "Technologies", value: 28 },
  { label: "Certifications", value: 4 },
];

export const aboutPoints = [
  "Diplômée Ingénieure en Informatique — ENSA El Jadida",
  "Passionnée par le Cloud Computing & les architectures distribuées",
  "Conception de microservices robustes et scalables",
  "Pratique du DevOps: CI/CD, conteneurisation, infra-as-code",
  "Intérêt pour l'Intelligence Artificielle appliquée",
  "Goût pour la résolution de problèmes et le travail d'équipe",
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { title: "Programmation", skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend",  skills: ["Spring Boot", "NestJS", "REST API", "Keycloak"] },
  { title: "Cloud & DevOps",  skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Git", "NGINX"] },
  { title: "Bases de données",  skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
  { title: "Architecture", skills: ["Microservices", "Apache Kafka", "Kong API Gateway", "Eureka"] },
  { title: "IA & Data",  skills: ["Transformers", "Scikit-learn", "OpenCV", "Rasa", "NumPy", "Pandas"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Stage — Ingénieure Logiciel",
    company: "Renault Group",
    location: "Tanger, Maroc",
    period: "2026",
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
    period: "2025",
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
  period: "2024",
  description:
    "Développement d'une application web de gestion des stocks avec tableaux de bord automatisés et génération de rapports.",
  achievements: [
    "Conception et développement de l'interface utilisateur avec React.js",
    "Développement des services backend avec C# .NET",
    "Conception et gestion de la base de données SQL Server",
    "Création de tableaux de bord interactifs et de rapports automatisés pour le suivi des stocks",
  ],
  technologies: ["React.js", "C# .NET", "SQL Server"],
}
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
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
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "excelliabourse",
    title: "ExcelliaBourse",
    description: "Plateforme de gestion de bourses scolaires en architecture microservices.",
    longDescription:
      "Plateforme de gestion de bourses scolaires construite avec une architecture microservices et un pipeline CI/CD entièrement automatisé, de l'infrastructure jusqu'au déploiement.",
    technologies: ["Spring Boot", "Next.js", "Docker", "Jenkins", "Ansible", "Terraform", "Kubernetes", "AWS"],
    githubUrl: "https://github.com/niama22",
    featured: true,
  },
  {
    slug: "mooditor",
    title: "Mooditor",
    description: "Application mobile de santé mentale, publiée dans IJCEDS 2025.",
    longDescription:
      "Application mobile de bien-être mental intégrant la reconnaissance d'émotions faciales, un chatbot conversationnel et un suivi de l'humeur au fil du temps.",
    technologies: ["Java", "Android", "Spring Boot", "Python", "MySQL"],
    githubUrl: "https://github.com/niama22",
    featured: true,
  },
];

export const certifications = [
  "AWS Academy Cloud Foundations",
  "AWS Academy Cloud Developing",
  "AWS Academy Cloud Architecting",
  "AWS Academy Cloud Security Foundations",
];

export const publications = [
  {
    title: "Mooditor: a mobile mental-health assistant",
    venue: "IJCEDS 2025",
    description:
      "Publication décrivant l'approche de reconnaissance d'émotions faciales et de suivi de l'humeur intégrée à l'application Mooditor.",
  },
];

export const languages = ["Arabe", "Français", "Anglais"];
export const interests = ["Sport", "Veille technologique", "Travail d'équipe", "Résolution de problèmes"];

export const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];