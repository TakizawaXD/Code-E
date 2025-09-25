import type { LearningPath, User, Notification } from "@/lib/types";

export const user: User = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
  avatarId: "avatar-3",
};

export const learningPaths: LearningPath[] = [
  {
    id: "frontend",
    title: "Ruta de Frontend",
    description: "Conviértete en un desarrollador frontend experto construyendo aplicaciones web modernas y responsivas.",
    courses: [
      {
        id: "react-essentials",
        title: "React: De Cero a Experto",
        description: "Aprende a construir aplicaciones web modernas con React, desde los fundamentos hasta los hooks avanzados.",
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
              { id: "l1-2", title: "Componentes y Props", duration: "15:45", content: "En esta lección, aprenderás sobre los componentes de React y cómo pasar datos usando props." },
              { id: "l1-3", title: "El Estado y el Ciclo de Vida", duration: "18:20", content: "Comprende cómo funciona el estado en los componentes y el ciclo de vida de un componente de React." },
            ],
          },
          {
            id: "module-2",
            title: "Hooks y State Management",
            lessons: [
              { id: "l2-1", title: "useState y useEffect", duration: "20:11" },
              { id: "l2-2", title: "Context API", duration: "18:05", content: "Aprende a manejar el estado global de tu aplicación con la Context API de React.", quiz: {
                  id: "quiz-react-context",
                  title: "Prueba de Context API",
                  questions: [
                    { id: "q1", question: "¿Qué problema resuelve la Context API?", options: ["Manejo de estado local", "Manejo de estado global", "Renderizado de componentes", "Creación de componentes"], correctAnswer: 1 },
                    { id: "q2", question: "¿Qué hook se utiliza para consumir un contexto?", options: ["useState", "useEffect", "useContext", "useReducer"], correctAnswer: 2 }
                  ]
                } 
              },
               { id: "l2-3", title: "useReducer", duration: "22:50" },
            ],
          },
        ],
      },
      {
        id: "advanced-css",
        title: "CSS Avanzado y Animaciones",
        description: "Domina Flexbox, Grid y crea animaciones sorprendentes para llevar tus diseños al siguiente nivel.",
        instructor: "Carlos Sanchez",
        instructorAvatar: "avatar-1",
        imageId: "course-css",
        pathId: "frontend",
        modules: [],
      },
      {
        id: "javascript-pro",
        title: "JavaScript Profesional",
        description: "Profundiza en el lenguaje que impulsa la web, aprendiendo sobre asincronía, patrones de diseño y más.",
        instructor: "Maria Garcia",
        instructorAvatar: "avatar-2",
        imageId: "course-js",
        pathId: "frontend",
        modules: [],
      },
      {
        id: "typescript-foundations",
        title: "Fundamentos de TypeScript",
        description: "Aprende a usar tipos estáticos en JavaScript para crear aplicaciones más robustas y escalables.",
        instructor: "Laura Torres",
        instructorAvatar: "avatar-4",
        imageId: "course-typescript",
        pathId: "frontend",
        modules: [],
      },
      {
        id: "nextjs-crash-course",
        title: "Curso Intensivo de Next.js",
        description: "Construye aplicaciones React renderizadas en el servidor, rápidas y optimizadas para SEO con Next.js.",
        instructor: "Carlos Sanchez",
        instructorAvatar: "avatar-1",
        imageId: "course-nextjs",
        pathId: "frontend",
        modules: [],
      },
    ],
  },
  {
    id: "backend",
    title: "Ruta de Backend",
    description: "Construye la lógica y los servidores que dan vida a las aplicaciones, manejando datos y APIs.",
    courses: [
      {
        id: "nodejs-mastery",
        title: "Node.js: Bases y API REST",
        description: "Crea APIs rápidas y escalables con Node.js y Express para tus aplicaciones web y móviles.",
        instructor: "Javier Fernandez",
        instructorAvatar: "avatar-1",
        imageId: "course-node",
        pathId: "backend",
        modules: [],
      },
      {
        id: "python-for-web",
        title: "Python y Django para la Web",
        description: "Desarrolla aplicaciones web robustas y seguras utilizando el popular framework Django de Python.",
        instructor: "Sofia Rodriguez",
        instructorAvatar: "avatar-2",
        imageId: "course-python",
        pathId: "backend",
        modules: [],
      },
      {
        id: "sql-databases",
        title: "Bases de Datos SQL desde Cero",
        description: "Aprende a diseñar, consultar y gestionar bases de datos relacionales con SQL.",
        instructor: "Javier Fernandez",
        instructorAvatar: "avatar-1",
        imageId: "course-sql",
        pathId: "backend",
        modules: [],
      },
      {
        id: "docker-essentials",
        title: "Docker para Desarrolladores",
        description: "Conteneriza tus aplicaciones con Docker para un desarrollo y despliegue consistentes.",
        instructor: "David Kim",
        instructorAvatar: "avatar-3",
        imageId: "course-docker",
        pathId: "backend",
        modules: [],
      },
      {
        id: "graphql-api",
        title: "Creación de APIs con GraphQL",
        description: "Diseña APIs flexibles y eficientes que permitan a los clientes solicitar exactamente los datos que necesitan.",
        instructor: "Sofia Rodriguez",
        instructorAvatar: "avatar-2",
        imageId: "course-ai", // Reusing image for now
        pathId: "backend",
        modules: [],
      },
    ],
  },
  {
    id: "data-science",
    title: "Ruta de Ciencia de Datos",
    description: "Aprende a analizar datos, construir modelos de machine learning y visualizar tus hallazgos.",
    courses: [
      {
        id: "ai-fundamentals",
        title: "Fundamentos de IA",
        description: "Una introducción al fascinante mundo de la inteligencia artificial y el machine learning.",
        instructor: "Dr. Eva Morales",
        instructorAvatar: "avatar-4",
        imageId: "course-ai",
        pathId: "data-science",
        modules: [],
      },
      {
        id: "python-for-data-science",
        title: "Python para Ciencia de Datos",
        description: "Domina las librerías de Python como NumPy, Pandas y Matplotlib para el análisis de datos.",
        instructor: "Sofia Rodriguez",
        instructorAvatar: "avatar-2",
        imageId: "course-python",
        pathId: "data-science",
        modules: [],
      },
      {
        id: "machine-learning-intro",
        title: "Introducción al Machine Learning",
        description: "Aprende los conceptos clave del machine learning y construye tus primeros modelos predictivos.",
        instructor: "Dr. Eva Morales",
        instructorAvatar: "avatar-4",
        imageId: "course-ml",
        pathId: "data-science",
        modules: [],
      },
      {
        id: "data-visualization",
        title: "Visualización de Datos con D3.js",
        description: "Crea visualizaciones de datos interactivas y atractivas para la web con D3.js.",
        instructor: "Carlos Sanchez",
        instructorAvatar: "avatar-1",
        imageId: "course-data-viz",
        pathId: "data-science",
        modules: [],
      },
      {
        id: "sql-for-data-analysis",
        title: "SQL para Análisis de Datos",
        description: "Extrae y analiza datos de bases de datos utilizando SQL para obtener información valiosa.",
        instructor: "Javier Fernandez",
        instructorAvatar: "avatar-1",
        imageId: "course-sql",
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
