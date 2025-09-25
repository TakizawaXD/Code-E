
// USAGE: npx tsx src/lib/seed.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/config'; // Make sure this path is correct

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// --- DATA TO SEED ---

const learningPaths = [
    { id: 'frontend', title: 'Desarrollo Frontend', description: 'Conviértete en un experto del lado del cliente, dominando HTML, CSS, JavaScript y frameworks modernos como React.' },
    { id: 'backend', title: 'Desarrollo Backend', description: 'Construye la lógica del servidor, bases de datos y APIs que potencian las aplicaciones web y móviles.' },
    { id: 'fullstack', title: 'Desarrollo Full-Stack', description: 'Domina tanto el frontend como el backend para construir aplicaciones web completas de principio a fin.' },
    { id: 'datascience', title: 'Ciencia de Datos', description: 'Aprende a analizar datos, construir modelos de machine learning y extraer insights valiosos para la toma de decisiones.' },
];

const courses = [
  // Frontend
  {
    id: 'react-desde-cero',
    pathId: 'frontend',
    title: 'React: De Cero a Experto',
    description: 'Aprende a construir aplicaciones web modernas y reactivas con la librería más popular del mercado.',
    instructor: 'Juan Pérez',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez',
    imageUrl: 'https://picsum.photos/seed/react/600/400',
  },
  {
    id: 'javascript-moderno',
    pathId: 'frontend',
    title: 'JavaScript Moderno: Guía Definitiva',
    description: 'Domina las últimas características de JavaScript (ES6+) y escribe código más limpio y eficiente.',
    instructor: 'Maria García',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=mariagarcia',
    imageUrl: 'https://picsum.photos/seed/javascript/600/400',
  },
  {
    id: 'css-avanzado',
    pathId: 'frontend',
    title: 'CSS Avanzado y SASS',
    description: 'Lleva tus habilidades de CSS al siguiente nivel con Flexbox, Grid, animaciones y preprocesadores como SASS.',
    instructor: 'Carlos Rodríguez',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlosrodriguez',
    imageUrl: 'https://picsum.photos/seed/css/600/400',
  },
  // Backend
  {
    id: 'nodejs-master',
    pathId: 'backend',
    title: 'Node.js: De Cero a Maestro',
    description: 'Construye APIs RESTful rápidas y escalables utilizando Node.js, Express y MongoDB.',
    instructor: 'Ana López',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=analopez',
    imageUrl: 'https://picsum.photos/seed/nodejs/600/400',
  },
  {
    id: 'python-apis',
    pathId: 'backend',
    title: 'APIs con Python, FastAPI y Docker',
    description: 'Crea APIs de alto rendimiento con Python y FastAPI, y aprende a contenerizarlas con Docker.',
    instructor: 'Luis Martínez',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luismartinez',
    imageUrl: 'https://picsum.photos/seed/pythonapi/600/400',
  },
  // Full-Stack
  {
    id: 'fullstack-mearn',
    pathId: 'fullstack',
    title: 'Full-Stack con MERN (Mongo, Express, React, Node)',
    description: 'Conviértete en un desarrollador Full-Stack creando una aplicación completa con el stack MERN.',
    instructor: 'Elena Fernández',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=elenafernandez',
    imageUrl: 'https://picsum.photos/seed/mern/600/400',
  },
  // Data Science
  {
    id: 'python-datascience',
    pathId: 'datascience',
    title: 'Python para Data Science',
    description: 'Aprende a usar Pandas, NumPy y Matplotlib para el análisis y visualización de datos.',
    instructor: 'David Gómez',
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=davidgomez',
    imageUrl: 'https://picsum.photos/seed/pyds/600/400',
  },
];

const modulesAndLessons = {
    'react-desde-cero': [
        {
            id: 'react-modulo-1', title: 'Introducción a React', order: 1, lessons: [
                { id: 'react-l1', title: '¿Qué es React?', duration: '10 min', difficulty: 'Fácil', content: '<h1>Conceptos Fundamentales</h1><p>En esta lección exploraremos la librería de React, su propósito y sus ventajas.</p>', order: 1 },
                { id: 'react-l2', title: 'Componentes y Props', duration: '15 min', difficulty: 'Fácil', content: '<h1>Componentes</h1><p>Aprende a crear y componer componentes de React y a pasar datos mediante props.</p>', order: 2 },
            ]
        },
        {
            id: 'react-modulo-2', title: 'Estado y Ciclo de Vida', order: 2, lessons: [
                { id: 'react-l3', title: 'El Hook `useState`', duration: '20 min', difficulty: 'Medio', content: '<h1>Manejando el estado</h1><p>Descubre cómo manejar el estado local de un componente con el hook `useState`.</p>', order: 1 },
            ]
        }
    ],
    'javascript-moderno': [
        {
            id: 'js-modulo-1', title: 'Fundamentos de ES6+', order: 1, lessons: [
                { id: 'js-l1', title: 'Variables y Destructuring', duration: '12 min', difficulty: 'Fácil', content: '<h1>let, const y destructuring</h1><p>Entiende las nuevas formas de declarar variables y el destructuring de objetos y arrays.</p>', order: 1 },
            ]
        }
    ],
    'css-avanzado': [
        {
            id: 'css-modulo-1', title: 'Flexbox', order: 1, lessons: [
                { id: 'css-l1', title: 'Introducción a Flexbox', duration: '18 min', difficulty: 'Fácil', content: '<h1>Flexbox Básico</h1><p>Aprende los fundamentos de Flexbox para crear layouts flexibles y modernos.</p>', order: 1 },
            ]
        }
    ],
    'nodejs-master': [
        {
            id: 'node-modulo-1', title: 'Introducción a Node.js', order: 1, lessons: [
                { id: 'node-l1', title: '¿Qué es Node.js?', duration: '10 min', difficulty: 'Fácil', content: '<h1>Node.js</h1><p>Explora el entorno de ejecución de JavaScript del lado del servidor.</p>', order: 1 },
            ]
        }
    ],
    'python-apis': [
         {
            id: 'pyapi-modulo-1', title: 'Fundamentos de FastAPI', order: 1, lessons: [
                { id: 'pyapi-l1', title: 'Tu primera API', duration: '15 min', difficulty: 'Fácil', content: '<h1>Hola Mundo con FastAPI</h1><p>Crea tu primer endpoint con el framework de Python más rápido.</p>', order: 1 },
            ]
        }
    ],
    'fullstack-mearn': [
        {
            id: 'mern-modulo-1', title: 'Configurando el Entorno', order: 1, lessons: [
                { id: 'mern-l1', title: 'Estructura del Proyecto', duration: '10 min', difficulty: 'Fácil', content: '<h1>Proyecto MERN</h1><p>Organiza tu proyecto para un desarrollo eficiente.</p>', order: 1 },
            ]
        }
    ],
    'python-datascience': [
         {
            id: 'pyds-modulo-1', title: 'Análisis con Pandas', order: 1, lessons: [
                { id: 'pyds-l1', title: 'Introducción a DataFrames', duration: '20 min', difficulty: 'Fácil', content: '<h1>Pandas DataFrames</h1><p>Aprende a manipular y analizar datos tabulares con la librería Pandas.</p>', order: 1 },
            ]
        }
    ],
};


// Main function to seed the data
async function seedDatabase() {
    try {
        const batch = writeBatch(db);
        console.log('Starting to seed database...');

        // 1. Seed Learning Paths
        console.log('Seeding learning paths...');
        learningPaths.forEach(path => {
            const pathRef = doc(db, 'learningPaths', path.id);
            batch.set(pathRef, path);
        });
        console.log(`${learningPaths.length} learning paths added to batch.`);

        // 2. Seed Courses
        console.log('Seeding courses...');
        courses.forEach(course => {
            const courseRef = doc(db, 'courses', course.id);
            batch.set(courseRef, course);
        });
        console.log(`${courses.length} courses added to batch.`);

        // 3. Seed Modules and Lessons
        console.log('Seeding modules and lessons...');
        let totalModules = 0;
        let totalLessons = 0;
        for (const courseId in modulesAndLessons) {
            const courseModules = modulesAndLessons[courseId as keyof typeof modulesAndLessons];
            courseModules.forEach(module => {
                totalModules++;
                const moduleRef = doc(db, 'courses', courseId, 'modules', module.id);
                batch.set(moduleRef, { title: module.title, order: module.order });

                module.lessons.forEach(lesson => {
                    totalLessons++;
                    const lessonRef = doc(db, 'courses', courseId, 'modules', module.id, 'lessons', lesson.id);
                    batch.set(lessonRef, lesson);
                });
            });
        }
        console.log(`${totalModules} modules and ${totalLessons} lessons added to batch.`);


        // Commit the batch
        console.log('Committing batch...');
        await batch.commit();
        console.log('Database seeded successfully!');

    } catch (error) {
        console.error('Error seeding database: ', error);
    }
}

seedDatabase().then(() => {
    console.log("Seeding process finished.");
    // Firebase connection will keep the script alive, you might need to manually exit
    process.exit(0);
}).catch(() => {
    process.exit(1);
});
