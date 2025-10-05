

import type { Notification, LearningPath, Course, CourseModule, Lesson, School } from "@/lib/types";
import images from './placeholder-images.json';

// This file now only contains types and potentially non-user-specific, non-db data.
// All user, course, and learning path data will be fetched from Firestore.

export const notifications: Notification[] = [
    {
        id: "1",
        title: "¡Bienvenido a Code-E!",
        description: "Explora nuestros cursos y comienza tu ruta de aprendizaje.",
        date: new Date(),
    },
    {
        id: "2",
        title: "Actualización de la plataforma",
        description: "Hemos añadido nuevos cuestionarios y lecciones interactivas.",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
]


// --- MOCK DATA ---
export const allSchools: School[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    learningPaths: [
      { 
        id: 'arquitecturas-web', 
        title: 'Arquitecturas Web Modernas y Escalabilidad', 
        description: 'Domina los patrones y tecnologías para construir aplicaciones web robustas y de alto rendimiento.',
        courses: [
            { id: 'fund-arq-software', title: 'Curso de Fundamentos de Arquitectura de Software', instructor: 'Nicolas Bohorquez', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["fund-arq-software"], modules: [] },
            { id: 'prof-arq-software', title: 'Curso Profesional de Arquitectura de Software', instructor: 'Guido Contreras Woda', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["prof-arq-software"], modules: [] },
            { id: 'arq-limpias-dev', title: 'Curso de Arquitecturas Limpias para Desarrollo de Software', instructor: 'Manuel Zapata', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["arq-limpias-dev"], modules: [] },
            { id: 'pract-arq-backend', title: 'Curso Práctico de Arquitectura Backend', instructor: 'Jorge Villalobos', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["pract-arq-backend"], modules: [] },
            { id: 'audio-alta-concurrencia', title: 'Audiocurso de Fundamentos de Arquitectura de Alta Concurrencia', instructor: 'Pablo Fredrikson', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["audio-alta-concurrencia"], modules: [] },
            { id: 'audio-arq-frontend', title: 'Audiocurso de Frameworks y Arquitecturas Frontend: Casos de Estudio', instructor: 'Miguel Ángel Durán', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["audio-arq-frontend"], modules: [] },
            { id: 'arq-css', title: 'Curso de Arquitecturas CSS', instructor: 'Estefany Aguilar', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["arq-css"], modules: [] },
            { id: 'ssr-react', title: 'Curso de Server Side Render o SSR con React.js', instructor: 'Enrique Devars', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["ssr-react"], modules: [] },
            { id: 'nextjs-jamstack', title: 'Curso de Next.js: Sitios Estáticos y Jamstack', instructor: 'Jonathan Alvarez', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["nextjs-jamstack"], modules: [] },
            { id: 'intro-jamstack', title: 'Curso de Introducción a Jamstack', instructor: 'Oscar Barajas Tavares', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["intro-jamstack"], modules: [] },
            { id: 'ssr-nuxt2', title: 'Curso de Server Side Rendering con Nuxt 2', instructor: 'Diana Martínez', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["ssr-nuxt2"], modules: [] },
            { id: 'web-astro', title: 'Curso de Creación de Páginas Web con Astro', instructor: 'Oscar Barajas Tavares', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["web-astro"], modules: [] },
            { id: 'angular-avanzado', title: 'Curso de Angular Avanzado', instructor: 'Nicolas Molina', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["angular-avanzado"], modules: [] },
            { id: 'nextjs-avanzado', title: 'Curso de Next.js Avanzado', instructor: 'Jonathan Alvarez', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["nextjs-avanzado"], modules: [] },
            { id: 'nodejs-auth-microservices', title: 'Curso de Node.js: Autenticación, Microservicios y Redis', instructor: 'Carlos Hernández', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["nodejs-auth-microservices"], modules: [] },
            { id: 'go-eventos-cqrs', title: 'Curso de Go Avanzado: Arquitectura de Eventos y CQRS', instructor: 'Néstor Escoto', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["go-eventos-cqrs"], modules: [] },
            { id: 'go-grpc', title: 'Curso de Go Avanzado: Protobuffers y gRPC', instructor: 'Néstor Escoto', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["go-grpc"], modules: [] },
            { id: 'graphql-nodejs', title: 'Curso de GraphQL con Node.js', instructor: 'Nicolas Molina', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["graphql-nodejs"], modules: [] },
            { id: 'avanzado-nodejs-graphql', title: 'Curso Avanzado de Node.js con GraphQL, Apollo Server y Prisma', instructor: 'Jonathan Alvarez', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["avanzado-nodejs-graphql"], modules: [] },
            { id: 'fund-observabilidad-new-relic', title: 'Curso de Fundamentos de Observabilidad con New Relic', instructor: 'Ricardo Celis', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["fund-observabilidad-new-relic"], modules: [] },
            { id: 'ing-observabilidad-new-relic', title: 'Curso de Ingeniería en Observabilidad con New Relic', instructor: 'Leomaris Reyes', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["ing-observabilidad-new-relic"], modules: [] },
            { id: 'obs-agentes-ai-langsmith', title: 'Curso de Observabilidad de Agentes AI con LangSmith', instructor: 'Marcelo Arias', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["obs-agentes-ai-langsmith"], modules: [] },
            { id: 'monorepos-nx', title: 'Curso de Monorepositorios con NX', instructor: 'Sergie Code', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["monorepos-nx"], modules: [] }
        ]
      },
      { 
        id: 'bases-de-datos-web', 
        title: 'Bases de Datos para Web',
        description: 'Aprende a modelar, gestionar y optimizar bases de datos relacionales y NoSQL para aplicaciones web.',
        courses: [
            { id: 'fund-db', title: 'Curso de Fundamentos de Bases de Datos', instructor: 'Alberto Alcocer (Beco)', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["fund-db"], modules: [] },
            { id: 'sql-mysql', title: 'Curso de SQL y MySQL', instructor: 'Alberto Alcocer (Beco)', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["sql-mysql"], modules: [] },
            { id: 'postgresql', title: 'Curso de PostgreSQL', instructor: 'Amin Espinoza', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["postgresql"], modules: [] },
            { id: 'db-mysql-mariadb', title: 'Curso de Bases de Datos con MySQL y MariaDB', instructor: 'Platzi Team', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["db-mysql-mariadb"], modules: [] },
            { id: 'opt-db-sql-server', title: 'Curso de Optimización de Bases de Datos en SQL Server', instructor: 'Roy Rojas', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["opt-db-sql-server"], modules: [] },
            { id: 'db-nosql', title: 'Curso de Base de Datos NoSQL', instructor: 'Adán Figueroa Jiménez', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["db-nosql"], modules: [] },
            { id: 'intro-mongodb', title: 'Curso de Introducción a MongoDB', instructor: 'Nicolas Molina', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["intro-mongodb"], modules: [] },
            { id: 'modelado-mongodb', title: 'Curso de Modelado de Datos en MongoDB', instructor: 'Nicolas Molina', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["modelado-mongodb"], modules: [] },
            { id: 'mongodb-aggregation', title: 'Curso de MongoDB: Aggregation Framework', instructor: 'Carlos Olivera Terrazas', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["mongodb-aggregation"], modules: [] },
            { id: 'intro-elasticsearch', title: 'Curso de Introducción a Elasticsearch', instructor: 'Kevin Sarmiento Mendoza', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["intro-elasticsearch"], modules: [] },
            { id: 'azure-cache-redis', title: 'Curso de Azure Cache para Redis', instructor: 'Juan Carlos Ruiz', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["azure-cache-redis"], modules: [] }
        ]
      },
    ]
  },
  {
    id: "programacion",
    title: "Programación",
    learningPaths: [
        {
            id: 'prog-python-path',
            title: 'Programación con Python',
            description: 'Desde los fundamentos hasta la creación de aplicaciones complejas con el lenguaje más versátil.',
            courses: [
                { id: 'prog-python', pathId: 'programacion', title: 'Curso de Fundamentos de Python', instructor: 'Sergie Code', level: 'básico', imageUrl: images['course-prog-python'], modules: [] },
                { id: 'prog-python-comp', pathId: 'programacion', title: 'Curso de Python: Comprehensions, Funciones y Manejo de Errores', instructor: 'Nicolas Molina', level: 'básico', imageUrl: images['prog-python-comp'], modules: [] },
                { id: 'prog-python-pip', pathId: 'programacion', title: 'Curso de Python: PIP y Entornos Virtuales', instructor: 'Nicolas Molina', level: 'intermedio', imageUrl: images['prog-python-pip'], modules: [] },
            ]
        },
        {
            id: 'prog-js-path',
            title: 'Programación con JavaScript',
            description: 'Domina el lenguaje de la web para crear aplicaciones interactivas y dinámicas.',
            courses: [
                { id: 'prog-javascript', pathId: 'programacion', title: 'Curso de Fundamentos de JavaScript', instructor: 'Diego De Granda', level: 'básico', imageUrl: images['course-prog-javascript'], modules: [] },
                { id: 'prog-js-closures', pathId: 'programacion', title: 'Curso de Closures y Scope en JavaScript', instructor: 'Oscar Barajas Tavares', level: 'básico', imageUrl: images['prog-js-closures'], modules: [] },
            ]
        }
    ]
  },
  {
    id: 'negocios',
    title: 'Negocios',
    learningPaths: [
      {
        id: 'negocios-finanzas',
        title: 'Finanzas para Negocios',
        description: 'Aprende a gestionar las finanzas de tu empresa y a tomar decisiones estratégicas.',
        courses: [
          { id: 'finanzas-emprendedores', pathId: 'negocios', title: 'Curso de Finanzas para Emprendedores', instructor: 'Juan Camilo González', level: 'básico', imageUrl: images['finanzas-emprendedores'], modules: [] },
          { id: 'analisis-financiero-excel', pathId: 'negocios', title: 'Curso de Análisis Financiero en Excel', instructor: 'Jorge Moreno', level: 'intermedio', imageUrl: images['analisis-financiero-excel'], modules: [] },
        ],
      },
      {
        id: 'negocios-estrategia',
        title: 'Estrategia y Crecimiento Empresarial',
        description: 'Desarrolla planes de negocio sólidos y estrategias para escalar tu empresa.',
        courses: [
          { id: 'estrategia-negocios-digitales', pathId: 'negocios', title: 'Curso de Estrategias para Negocios Digitales', instructor: 'Eugenio Perea', level: 'intermedio', imageUrl: images['estrategia-negocios-digitales'], modules: [] },
          { id: 'metricas-negocio', pathId: 'negocios', title: 'Curso de Métricas Esenciales de Negocio', instructor: 'Sthefanni Beltrán', level: 'básico', imageUrl: images['metricas-negocio'], modules: [] },
        ],
      },
    ],
  },
  {
    id: 'english-academy',
    title: 'English Academy',
    learningPaths: [
      {
        id: 'english-profesional',
        title: 'Inglés para Profesionales',
        description: 'Mejora tus habilidades de comunicación en inglés para el entorno laboral.',
        courses: [
          { id: 'english-entrevistas', pathId: 'english-academy', title: 'Curso de Inglés para Entrevistas de Trabajo', instructor: 'Jess Harris', level: 'intermedio', imageUrl: images['english-entrevistas'], modules: [] },
          { id: 'english-negocios', pathId: 'english-academy', title: 'Curso de Comunicación de Negocios en Inglés', instructor: 'Gina Pedraza', level: 'avanzado', imageUrl: images['english-negocios'], modules: [] },
        ],
      },
    ],
  },
  {
    id: 'recursos-humanos',
    title: 'Recursos Humanos',
    learningPaths: [
      {
        id: 'rh-talento',
        title: 'Atracción y Selección de Talento',
        description: 'Aprende a encontrar, entrevistar y contratar al mejor talento para tu equipo.',
        courses: [
          { id: 'rh-reclutamiento-tech', pathId: 'recursos-humanos', title: 'Curso de Reclutamiento y Selección de Talento Tech', instructor: 'Nicole Chapaval', level: 'intermedio', imageUrl: images['rh-reclutamiento-tech'], modules: [] },
        ],
      },
      {
        id: 'rh-cultura',
        title: 'Cultura y Employee Experience',
        description: 'Construye una cultura organizacional fuerte que atraiga y retenga al talento.',
        courses: [
          { id: 'rh-cultura-org', pathId: 'recursos-humanos', title: 'Curso de Cultura Organizacional en Startups', instructor: 'José Iván Anaya', level: 'básico', imageUrl: images['rh-cultura-org'], modules: [] },
        ],
      },
    ],
  },
];


const coursesWithModules = allSchools.flatMap(school => 
    school.learningPaths.flatMap(path => 
        path.courses.map(course => {
            if (course.modules && course.modules.length > 0) {
                return course;
            }
            // Add default module and lesson if none exist
            return {
                ...course,
                modules: [{
                    id: `${course.id}-m1`,
                    title: 'Módulo de Introducción',
                    order: 1,
                    lessons: [{
                        id: `${course.id}-l1-intro`,
                        title: 'Bienvenido al curso',
                        order: 1,
                        difficulty: 'Fácil',
                        content: `<p>En este curso sobre <strong>${course.title}</strong>, aprenderás los conceptos fundamentales y avanzados para llevar tus habilidades al siguiente nivel.</p><p>Explora las lecciones en la barra lateral para comenzar tu viaje de aprendizaje. ¡Mucho éxito!</p>`,
                        imageUrl: course.imageUrl
                    },
                    {
                        id: `${course.id}-l2-video`,
                        title: 'Video de Introducción',
                        order: 2,
                        difficulty: 'Fácil',
                        youtubeVideoId: 'dQw4w9WgXcQ', // Rickroll as placeholder
                        content: `<p>Este video te dará una visión general de lo que cubriremos en el curso. Presta atención a los conceptos clave presentados por el instructor.</p>`
                    },
                    {
                        id: `${course.id}-l3-quiz`,
                        title: 'Cuestionario Inicial',
                        order: 3,
                        difficulty: 'Fácil',
                        quiz: {
                            id: `${course.id}-q1`,
                            title: 'Prueba de conocimientos previos',
                            questions: [
                                { id: 'q1', question: `¿Cuál es un concepto clave en ${course.title}?`, options: ['Opción A', 'Opción B', 'Opción C', 'Todas las anteriores'], correctAnswer: 3 },
                                { id: 'q2', question: '¿Es este curso para principiantes?', options: ['Sí', 'No'], correctAnswer: 0 },
                            ]
                        },
                        content: `<p>Demuestra lo que sabes antes de empezar. Este cuestionario nos ayudará a entender tu nivel actual.</p>`
                    }
                    ]
                }]
            };
        })
    )
);

export const courses: Course[] = coursesWithModules;
const allLearningPathsList = allSchools.flatMap(school => school.learningPaths.map(path => ({ ...path, courses: undefined, description: path.description || "" })));
export const learningPaths: Omit<LearningPath, 'courses'>[] = allLearningPathsList;


    

