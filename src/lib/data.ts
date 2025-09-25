import type { LearningPath, User, Notification } from "@/lib/types";

export const user: User = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
  avatarId: "avatar-1",
};

export const learningPaths: LearningPath[] = [
  {
    id: "frontend",
    title: "Ruta de Frontend",
    description: "Conviértete en un desarrollador frontend experto.",
    courses: [
      {
        id: "react-essentials",
        title: "React: De Cero a Experto",
        description: "Aprende a construir aplicaciones web modernas con React.",
        instructor: "Maria Garcia",
        instructorAvatar: "avatar-2",
        imageId: "course-react",
        pathId: "frontend",
        modules: [
          {
            id: "module-1",
            title: "Introducción a React",
            lessons: [
              { id: "l1-1", title: "Configuración del entorno", duration: "10:32" },
              { id: "l1-2", title: "Componentes y Props", duration: "15:45" },
            ],
          },
          {
            id: "module-2",
            title: "Hooks y State Management",
            lessons: [
              { id: "l2-1", title: "useState y useEffect", duration: "20:11" },
              { id: "l2-2", title: "Context API", duration: "18:05" },
            ],
          },
        ],
      },
      {
        id: "advanced-css",
        title: "CSS Avanzado y Animaciones",
        description: "Domina Flexbox, Grid y crea animaciones sorprendentes.",
        instructor: "Carlos Sanchez",
        instructorAvatar: "avatar-1",
        imageId: "course-css",
        pathId: "frontend",
        modules: [],
      },
      {
        id: "javascript-pro",
        title: "JavaScript Profesional",
        description: "Profundiza en el lenguaje que impulsa la web.",
        instructor: "Maria Garcia",
        instructorAvatar: "avatar-2",
        imageId: "course-js",
        pathId: "frontend",
        modules: [],
      },
    ],
  },
  {
    id: "backend",
    title: "Ruta de Backend",
    description: "Construye la lógica y los servidores que dan vida a las aplicaciones.",
    courses: [
      {
        id: "nodejs-mastery",
        title: "Node.js: Bases y API REST",
        description: "Crea APIs rápidas y escalables con Node.js y Express.",
        instructor: "Javier Fernandez",
        instructorAvatar: "avatar-1",
        imageId: "course-node",
        pathId: "backend",
        modules: [],
      },
      {
        id: "python-for-web",
        title: "Python y Django para la Web",
        description: "Desarrolla aplicaciones web robustas con Python.",
        instructor: "Sofia Rodriguez",
        instructorAvatar: "avatar-2",
        imageId: "course-python",
        pathId: "backend",
        modules: [],
      },
    ],
  },
  {
    id: "data-science",
    title: "Ruta de Ciencia de Datos",
    description: "Analiza datos y construye modelos de inteligencia artificial.",
    courses: [
      {
        id: "ai-fundamentals",
        title: "Fundamentos de IA",
        description: "Una introducción al fascinante mundo de la inteligencia artificial.",
        instructor: "Dr. Eva Morales",
        instructorAvatar: "avatar-2",
        imageId: "course-ai",
        pathId: "data-science",
        modules: [],
      },
    ],
  },
];

export const notifications: Notification[] = [
    {
        id: "1",
        title: "¡Nuevo curso disponible!",
        description: "El curso 'CSS Avanzado' ha sido añadido a la ruta de Frontend.",
        date: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
        id: "2",
        title: "Progreso guardado",
        description: "Tu progreso en 'React: De Cero a Experto' ha sido guardado.",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
        id: "3",
        title: "¡Felicidades!",
        description: "Has completado la lección 'Componentes y Props'.",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    }
]

export const allCourses = learningPaths.flatMap(path => path.courses);
