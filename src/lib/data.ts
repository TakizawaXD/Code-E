

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
          { id: 'arq-fundamentos', pathId: 'desarrollo-web', title: 'Curso de Fundamentos de Arquitectura de Software', instructor: 'Nicolas Bohorquez', level: 'básico', imageUrl: images["course-web-react"], modules: [] },
          { id: 'arq-profesional', pathId: 'desarrollo-web', title: 'Curso Profesional de Arquitectura de Software', instructor: 'Guido Contreras Woda', level: 'avanzado', imageUrl: images["course-web-react"], modules: [] },
          { id: 'arq-limpias', pathId: 'desarrollo-web', title: 'Curso de Arquitecturas Limpias para Desarrollo de Software', instructor: 'Manuel Zapata', level: 'intermedio', imageUrl: images["course-web-react"], modules: [] },
        ]
      },
      { 
        id: 'bases-de-datos-web', 
        title: 'Bases de Datos para Web',
        description: 'Aprende a modelar, gestionar y optimizar bases de datos relacionales y NoSQL para aplicaciones web.',
        courses: [
          { id: 'db-fundamentos', pathId: 'desarrollo-web', title: 'Curso de Fundamentos de Bases de Datos', instructor: 'Alberto Alcocer (Beco)', level: 'básico', imageUrl: images["course-ia-sql"], modules: [] },
          { id: 'db-sql-mysql', pathId: 'desarrollo-web', title: 'Curso de SQL y MySQL', instructor: 'Alberto Alcocer (Beco)', level: 'avanzado', imageUrl: images["course-ia-sql"], modules: [] },
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
                { id: 'prog-python-comp', pathId: 'programacion', title: 'Curso de Python: Comprehensions, Funciones y Manejo de Errores', instructor: 'Nicolas Molina', level: 'básico', imageUrl: images['course-prog-python'], modules: [] },
                { id: 'prog-python-pip', pathId: 'programacion', title: 'Curso de Python: PIP y Entornos Virtuales', instructor: 'Nicolas Molina', level: 'intermedio', imageUrl: images['course-prog-python'], modules: [] },
            ]
        },
        {
            id: 'prog-js-path',
            title: 'Programación con JavaScript',
            description: 'Domina el lenguaje de la web para crear aplicaciones interactivas y dinámicas.',
            courses: [
                { id: 'prog-javascript', pathId: 'programacion', title: 'Curso de Fundamentos de JavaScript', instructor: 'Diego De Granda', level: 'básico', imageUrl: images['course-prog-javascript'], modules: [] },
                { id: 'prog-js-closures', pathId: 'programacion', title: 'Curso de Closures y Scope en JavaScript', instructor: 'Oscar Barajas Tavares', level: 'básico', imageUrl: images['course-prog-javascript'], modules: [] },
            ]
        }
    ]
  },
];


const allCoursesList = allSchools.flatMap(school => school.learningPaths.flatMap(path => path.courses));
export const courses: Course[] = allCoursesList.map(course => ({
    ...course,
    modules: course.modules.length > 0 ? course.modules : [{
        id: `${course.id}-m1`,
        title: 'Contenido del Curso',
        order: 1,
        lessons: [{
            id: `${course.id}-l1`,
            title: 'Lección Próximamente',
            duration: 'N/A',
            difficulty: 'Fácil',
            content: '<p>El contenido detallado para este curso estará disponible muy pronto. ¡Gracias por tu paciencia!</p>',
            order: 1,
            imageUrl: images['lesson-default']
        }]
    }]
}));

const allLearningPathsList = allSchools.flatMap(school => school.learningPaths.map(path => ({ ...path, courses: undefined, description: path.description || "" })));
export const learningPaths: Omit<LearningPath, 'courses'>[] = allLearningPathsList;
