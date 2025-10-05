
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

const youtubeVideoIds = [
    'dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'a_i6G-qP_0g', 'L_LUpnjgPso', 'k-rN74S3X-o',
    '8sXyfY2mR2k', 'm65hbG-hW6w', '9bZkp7q19f0', '2l3x2M1b3sY', '0-S5a0eXPoc'
];

// Function to generate detailed content for each lesson
const generateDetailedLesson = (course: Course, module: CourseModule, lesson: Lesson, lessonIndex: number): Lesson => {
    const videoId = youtubeVideoIds[(lesson.order -1) % youtubeVideoIds.length];
    return {
        ...lesson,
        content: `<h3>Sobre esta lección</h3>
<p>En esta sección del curso <strong>${course.title}</strong>, exploraremos el tema de "<em>${lesson.title}</em>". Este es un concepto fundamental para cualquier persona que aspire a dominar ${module.title}.</p>
<p>A lo largo de esta lección, cubriremos los siguientes puntos clave:</p>
<ul>
    <li>Principios básicos de ${lesson.title}.</li>
    <li>Aplicaciones prácticas en el mundo real.</li>
    <li>Errores comunes y cómo evitarlos.</li>
</ul>
<p>Recomendamos ver el video adjunto y luego poner a prueba tus conocimientos con el cuestionario al final. ¡No dudes en usar la sección de comentarios si tienes alguna pregunta!</p>`,
        youtubeVideoId: videoId,
        quiz: {
            id: `${lesson.id}-quiz`,
            title: `Cuestionario: ${lesson.title}`,
            questions: [
                {
                    id: `${lesson.id}-q1`,
                    question: `¿Cuál es el concepto principal de "${lesson.title}"?`,
                    options: ['Una técnica avanzada', 'Un principio fundamental', 'Una herramienta opcional', 'No se aplica en este contexto'],
                    correctAnswer: 1,
                },
                {
                    id: `${lesson.id}-q2`,
                    question: `¿Es "${lesson.title}" relevante para ${course.title}?`,
                    options: ['Sí, es crucial', 'No, no está relacionado', 'A veces', 'Solo para expertos'],
                    correctAnswer: 0,
                },
            ],
        },
    };
};

const coursesWithDetailedModules = allSchools.flatMap(school =>
    school.learningPaths.flatMap(path =>
        path.courses.map(course => {
            const moduleCount = Math.floor(Math.random() * 3) + 2; // 2 to 4 modules
            const modules: CourseModule[] = [];
            for (let i = 1; i <= moduleCount; i++) {
                const lessonCount = Math.floor(Math.random() * 4) + 3; // 3 to 6 lessons
                const lessons: Lesson[] = [];
                for (let j = 1; j <= lessonCount; j++) {
                    const lesson: Lesson = {
                        id: `${course.id}-m${i}-l${j}`,
                        title: `Lección ${j}: Conceptos ${j === 1 ? 'Básicos' : 'Avanzados'} de ${course.title.substring(8, 20)}`,
                        order: j,
                        difficulty: ['Fácil', 'Medio', 'Difícil'][(j-1) % 3] as 'Fácil' | 'Medio' | 'Difícil',
                        imageUrl: course.imageUrl
                    };
                    lessons.push(generateDetailedLesson(course, {id: `${course.id}-m${i}`, title: `Módulo ${i}`, order: i, lessons: []}, lesson, j));
                }
                modules.push({
                    id: `${course.id}-m${i}`,
                    title: `Módulo ${i}: ${i === 1 ? 'Introducción' : 'Profundización'}`,
                    order: i,
                    lessons: lessons,
                });
            }
            return {
                ...course,
                modules,
            };
        })
    )
);

export const courses: Course[] = coursesWithDetailedModules;
const allLearningPathsList = allSchools.flatMap(school => school.learningPaths.map(path => ({ ...path, courses: undefined, description: path.description || "" })));
export const learningPaths: Omit<LearningPath, 'courses'>[] = allLearningPathsList;
