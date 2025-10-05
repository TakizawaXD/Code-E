
// USAGE: npx tsx src/lib/seed.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/config'; // Make sure this path is correct
import type { CourseModule, Lesson } from './types';
import images from './placeholder-images.json';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// --- DATA TO SEED ---

const learningPaths = [
    { id: 'desarrollo-web', title: 'Desarrollo Web', description: 'Conviértete en un experto del lado del cliente y del servidor, dominando frameworks y lenguajes modernos.' },
    { id: 'ia-datascience', title: 'Inteligencia Artificial y Data Science', description: 'Aprende a analizar datos, construir modelos de machine learning y extraer insights valiosos.' },
    { id: 'diseno-ux', title: 'Diseño de Producto y UX', description: 'Crea productos digitales intuitivos, atractivos y que los usuarios amen desde el primer clic.' },
    { id: 'cloud-devops', title: 'Cloud Computing y DevOps', description: 'Despliega, gestiona y escala aplicaciones de forma eficiente en la nube con prácticas de DevOps.' },
    { id: 'recursos-humanos', title: 'Recursos Humanos', description: 'Moderniza la gestión del talento con herramientas digitales y estrategias innovadoras.' },
    { id: 'negocios', title: 'Negocios', description: 'Adquiere habilidades en gestión, estrategia y finanzas para liderar en el mundo empresarial.' },
    { id: 'english-academy', title: 'English Academy', description: 'Mejora tu inglés profesional para comunicarte en un mercado laboral globalizado.' },
    { id: 'ciberseguridad', title: 'Ciberseguridad', description: 'Protege sistemas, redes y datos de ataques digitales y conviértete en un guardián digital.' },
    { id: 'desarrollo-movil', title: 'Desarrollo Móvil', description: 'Crea aplicaciones impactantes para iOS y Android y llega a millones de usuarios.' },
    { id: 'blockchain-web3', title: 'Blockchain y Web3', description: 'Explora el futuro del internet con aplicaciones descentralizadas, NFTs y contratos inteligentes.' },
    { id: 'finanzas-inversiones', title: 'Finanzas e Inversiones', description: 'Toma el control de tus finanzas personales y aprende a invertir de manera inteligente.' },
    { id: 'diseno-grafico', title: 'Diseño Gráfico y Arte Digital', description: 'Comunica ideas visualmente a través de la ilustración, la fotografía y el branding.' },
    { id: 'marketing-digital', title: 'Marketing Digital', description: 'Domina estrategias de SEO, SEM, redes sociales y contenido para hacer crecer negocios en línea.' },
    { id: 'habilidades-blandas', title: 'Liderazgo y Habilidades Blandas', description: 'Desarrolla la comunicación, el liderazgo y la inteligencia emocional para destacar profesionalmente.' },
    { id: 'contenido-audiovisual', title: 'Contenido Audiovisual', description: 'Aprende a producir, grabar y editar videos y podcasts de alta calidad.' },
    { id: 'programacion', title: 'Programación', description: 'Domina los lenguajes y la lógica de programación que son la base de toda la tecnología.' },
    { id: 'startups', title: 'Startups', description: 'Lanza y haz crecer tu propio negocio tecnológico, desde la idea hasta la financiación.' },
];

const courses: Omit<import('./types').Course, 'modules'>[] = [
    // Programación
    { id: 'prog-python', pathId: 'programacion', title: 'Ejercicios Prácticos de Python', description: 'Resuelve problemas prácticos y refuerza tu lógica de programación con Python.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/1/150/150', imageUrl: images['course-prog-python'] },
    { id: 'prog-javascript', pathId: 'programacion', title: 'Ejercicios Prácticos de JavaScript', description: 'Aplica tus conocimientos de JavaScript en ejercicios del mundo real, desde el DOM hasta las APIs.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/2/150/150', imageUrl: images['course-prog-javascript'] },
    { id: 'prog-java', pathId: 'programacion', title: 'Ejercicios Prácticos de Java', description: 'Fortalece tus habilidades en Java con ejercicios de Programación Orientada a Objetos y multihilo.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/3/150/150', imageUrl: images['course-prog-java'] },
    { id: 'prog-cpp', pathId: 'programacion', title: 'Ejercicios Prácticos de C++', description: 'Domina la gestión de memoria y la Programación Orientada a Objetos en C++ con retos prácticos.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/4/150/150', imageUrl: images['course-prog-cpp'] },
  
    // Desarrollo Web
    { id: 'web-react', pathId: 'desarrollo-web', title: 'React: De Cero a Experto', description: 'Construye aplicaciones web interactivas y modernas con la librería más popular del mercado.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/5/150/150', imageUrl: images['course-web-react'] },
    { id: 'web-node', pathId: 'desarrollo-web', title: 'Backend con Node.js y Express', description: 'Crea APIs RESTful robustas y escalables utilizando el ecosistema de Node.js.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/6/150/150', imageUrl: images['course-web-node'] },
    { id: 'web-typescript', pathId: 'desarrollo-web', title: 'TypeScript para Desarrollo Frontend', description: 'Lleva tu código JavaScript al siguiente nivel con tipado estático y funcionalidades avanzadas.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/7/150/150', imageUrl: images['course-web-typescript'] },
    { id: 'web-php', pathId: 'desarrollo-web', title: 'PHP y Laravel para Backend', description: 'Desarrolla aplicaciones web robustas y elegantes con el framework PHP más popular.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/8/150/150', imageUrl: images['course-web-php'] },
  
    // IA y Data Science
    { id: 'ia-datascience-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Aprende a manipular, analizar y visualizar datos con las librerías esenciales de Python.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/9/150/150', imageUrl: images['course-ia-datascience-python'] },
    { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Entrena y evalúa modelos de clasificación, regresión y clustering con Scikit-learn.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/10/150/150', imageUrl: images['course-ia-ml'] },
    { id: 'ia-r', pathId: 'ia-datascience', title: 'Análisis de Datos con R', description: 'Utiliza el poder de R y Tidyverse para el análisis estadístico y la visualización de datos.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/11/150/150', imageUrl: images['course-ia-r'] },
    { id: 'ia-sql', pathId: 'ia-datascience', title: 'SQL para Data Science', description: 'Escribe consultas complejas para extraer y transformar datos de bases de datos relacionales.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/12/150/150', imageUrl: images['course-ia-sql'] },
    
    // Diseño de Producto y UX
    { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Aprende a crear user personas, journey maps y a realizar pruebas de usabilidad efectivas.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/13/150/150', imageUrl: images['course-ux-investigacion'] },
    { id: 'ux-figma', pathId: 'diseno-ux', title: 'Diseño de Interfaces con Figma', description: 'Domina Figma desde cero y aprende a crear prototipos interactivos y sistemas de diseño.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/14/150/150', imageUrl: images['course-ux-figma'] },
  
    // Cloud y DevOps
    { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Despliega aplicaciones y gestiona infraestructura en la nube de Amazon Web Services.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/15/150/150', imageUrl: images['course-cloud-aws'] },
    { id: 'cloud-docker', pathId: 'cloud-devops', title: 'Docker para Desarrolladores', description: 'Conteneriza tus aplicaciones y optimiza tu flujo de desarrollo con Docker.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/16/150/150', imageUrl: images['course-cloud-docker'] },
    
    // Desarrollo Móvil
    { id: 'movil-swift', pathId: 'desarrollo-movil', title: 'Swift y SwiftUI: De Cero a App Store', description: 'Desarrolla aplicaciones nativas para iOS con el moderno framework SwiftUI.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/17/150/150', imageUrl: images['course-movil-swift'] },
    { id: 'movil-kotlin', pathId: 'desarrollo-movil', title: 'Android con Kotlin: Curso Completo', description: 'Crea aplicaciones robustas para Android utilizando Kotlin y las mejores prácticas.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/18/150/150', imageUrl: images['course-movil-kotlin'] },
    { id: 'movil-flutter', pathId: 'desarrollo-movil', title: 'Flutter: Apps para iOS y Android', description: 'Crea apps nativas para ambas plataformas con un solo código base.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/19/150/150', imageUrl: images['course-movil-flutter']},
    { id: 'movil-dart', pathId: 'desarrollo-movil', title: 'Fundamentos de Dart para Flutter', description: 'Domina la sintaxis y los conceptos clave de Dart, el lenguaje detrás de Flutter.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/20/150/150', imageUrl: images['course-movil-dart'] },
  
    // Blockchain y Web3
    { id: 'web3-solidity', pathId: 'blockchain-web3', title: 'Smart Contracts con Solidity', description: 'Programa contratos inteligentes para la blockchain de Ethereum y crea aplicaciones descentralizadas.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/21/150/150', imageUrl: images['course-web3-solidity'] },
    { id: 'web3-rust', pathId: 'blockchain-web3', title: 'Desarrollo en Solana con Rust', description: 'Aprende a crear programas de alta velocidad y bajo costo en la blockchain de Solana.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/22/150/150', imageUrl: images['course-web3-rust'] },
  
    // Ciberseguridad
    { id: 'cyber-intro', pathId: 'ciberseguridad', title: 'Fundamentos de Ciberseguridad', description: 'Entiende los principios de la seguridad digital, desde la encriptación hasta la defensa contra ataques.', instructor: 'Instructor de Code-E', instructorAvatarUrl: 'https://picsum.photos/seed/23/150/150', imageUrl: images['course-cyber-intro'] },
];

const modulesAndLessons: Record<string, CourseModule[]> = {
    'prog-python': [
        {
            id: 'python-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'py-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: 'Tu primer programa...', order: 1, youtubeVideoId: 'Kp4Mvapo5kc' },
                { id: 'py-b2', title: 'Función de Suma', duration: '5 min', difficulty: 'Fácil', content: 'Aprende a definir funciones...', order: 2, youtubeVideoId: 'Z1Yd7upQsXY' },
            ]
        },
        {
            id: 'python-m4', title: 'Proyectos Prácticos (Avanzado)', order: 4,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `py-p${i + 1}`, title: `Proyecto ${i + 1} en Python`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Python</h1><p>Crea una aplicación en Python que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        },
    ],
    'prog-javascript': [
        {
            id: 'js-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'js-b1', title: 'Cambiar Color de Fondo', duration: '5 min', difficulty: 'Fácil', content: 'Manipulación del DOM...', order: 1, youtubeVideoId: "BisJdN2LWEY" }
            ]
        },
        {
            id: 'javascript-m4', title: 'Proyectos Prácticos (Avanzado)', order: 4,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `js-p${i + 1}`, title: `Proyecto ${i + 1} en JavaScript`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en JavaScript</h1><p>Crea una aplicación en JavaScript que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'prog-java': [
        {
            id: 'java-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'java-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: 'Tu primer paso en Java...', order: 1, youtubeVideoId: 'grEKMHGYyns' }
            ]
        },
        {
            id: 'java-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `java-p${i + 1}`, title: `Proyecto ${i + 1} en Java`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Java</h1><p>Crea una aplicación en Java que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'prog-cpp': [
        {
            id: 'cpp-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'cpp-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: 'El primer paso en C++...', order: 1, youtubeVideoId: 'vLnPwxZdW4Y' }
            ]
        },
        {
            id: 'cpp-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `cpp-p${i + 1}`, title: `Proyecto ${i + 1} en C++`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en C++</h1><p>Crea una aplicación en C++ que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'web-typescript': [
        {
            id: 'ts-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'ts-b1', title: 'Introducción a Tipos', duration: '10 min', difficulty: 'Fácil', content: 'Aprende a usar tipos básicos...', order: 1, youtubeVideoId: 'BwuLxPH8IDs' }
            ]
        },
        {
            id: 'ts-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `ts-p${i + 1}`, title: `Proyecto ${i + 1} en TypeScript`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en TypeScript</h1><p>Crea una aplicación en TypeScript que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'web-php': [
        {
            id: 'php-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'php-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: 'Tu primer script en PHP...', order: 1, youtubeVideoId: 'OK_JCtrrv-c' }
            ]
        },
        {
            id: 'php-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `php-p${i + 1}`, title: `Proyecto ${i + 1} en PHP`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en PHP</h1><p>Crea una aplicación en PHP que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'ia-r': [
        {
            id: 'r-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'r-b1', title: 'Introducción a R y RStudio', duration: '10 min', difficulty: 'Fácil', content: 'Aprende qué es R y cómo usar RStudio...', order: 1, youtubeVideoId: '_V8eKsto3Ug' }
            ]
        },
        {
            id: 'r-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `r-p${i + 1}`, title: `Proyecto ${i + 1} en R`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en R</h1><p>Crea una aplicación en R que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'ia-sql': [
        {
            id: 'sql-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'sql-b1', title: 'La Sentencia SELECT', duration: '10 min', difficulty: 'Fácil', content: 'La base de todas las consultas...', order: 1, youtubeVideoId: 'HXV3zeQKqGY' }
            ]
        },
        {
            id: 'sql-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `sql-p${i + 1}`, title: `Proyecto ${i + 1} en SQL`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en SQL</h1><p>Crea una aplicación en SQL que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'movil-swift': [
        {
            id: 'swift-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'swift-b1', title: 'Introducción a Swift', duration: '10 min', difficulty: 'Fácil', content: 'Tu primer contacto con el lenguaje de Apple...', order: 1, youtubeVideoId: 'comQ1-x2a1Q' }
            ]
        },
        {
            id: 'swift-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `swift-p${i + 1}`, title: `Proyecto ${i + 1} en Swift`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Swift</h1><p>Crea una aplicación en Swift que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'movil-kotlin': [
        {
            id: 'kotlin-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'kotlin-b1', title: 'Introducción a Kotlin', duration: '10 min', difficulty: 'Fácil', content: 'El lenguaje moderno para Android...', order: 1, youtubeVideoId: 'F9UC9DY-vIU' }
            ]
        },
        {
            id: 'kotlin-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `kotlin-p${i + 1}`, title: `Proyecto ${i + 1} en Kotlin`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Kotlin</h1><p>Crea una aplicación en Kotlin que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'movil-dart': [
        {
            id: 'dart-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'dart-b1', title: 'Introducción a Dart', duration: '10 min', difficulty: 'Fácil', content: 'El lenguaje detrás de Flutter...', order: 1, youtubeVideoId: 'Ej_Pcr4uC2Q' }
            ]
        },
        {
            id: 'dart-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `dart-p${i + 1}`, title: `Proyecto ${i + 1} en Dart`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Dart</h1><p>Crea una aplicación en Dart que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'web3-solidity': [
        {
            id: 'solidity-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'solidity-b1', title: 'Estructura de un Smart Contract', duration: '10 min', difficulty: 'Fácil', content: 'Aprende la estructura básica...', order: 1, youtubeVideoId: 'aGonv5DP910' }
            ]
        },
        {
            id: 'solidity-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `solidity-p${i + 1}`, title: `Proyecto ${i + 1} en Solidity`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Solidity</h1><p>Crea una aplicación en Solidity que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'web3-rust': [
        {
            id: 'rust-m1', title: 'Principiante', order: 1,
            lessons: [
                { id: 'rust-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: 'Tu primer programa en Rust...', order: 1, youtubeVideoId: 'zF34dRivLOw' }
            ]
        },
        {
            id: 'rust-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `rust-p${i + 1}`, title: `Proyecto ${i + 1} en Rust`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Rust</h1><p>Crea una aplicación en Rust que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'web-node': [
        {
            id: 'node-m1', title: 'Fundamentos de Node', order: 1,
            lessons: [{ id: 'node-l1', title: 'Intro a Node.js', duration: '12 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'TlB_eWDSMt4' }]
        },
        {
            id: 'node-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `node-p${i + 1}`, title: `Proyecto ${i + 1} en Node.js`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Node.js</h1><p>Crea una aplicación en Node.js que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'web-react': [
        {
            id: 'react-m1', title: 'Fundamentos de React', order: 1,
            lessons: [
                 {
                    id: 'web-react-l1', title: '¿Qué es React?', duration: '10 min', difficulty: 'Fácil', order: 1,
                    content: '<h1>Introducción a React</h1><p>React es una librería de JavaScript...</p>',
                    youtubeVideoId: "GMnWXlJnbNo",
                 }
            ]
        },
        {
            id: 'react-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `react-p${i + 1}`, title: `Proyecto ${i + 1} en React`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en React</h1><p>Crea una aplicación en React que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
        }
    ],
    'movil-flutter': [
        {
            id: 'flutter-m1', title: 'Fundamentos de Flutter', order: 1,
            lessons: [{ id: 'flutter-l1', title: 'Intro a Flutter', duration: '10 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: '5izffRVgc0k' }]
        },
        {
            id: 'flutter-m2', title: 'Proyectos Prácticos (Avanzado)', order: 2,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `flutter-p${i + 1}`, title: `Proyecto ${i + 1} en Flutter`, duration: '120 min', difficulty: 'Difícil',
                content: '<h1>Proyecto Avanzado en Flutter</h1><p>Crea una aplicación en Flutter que resuelva un problema complejo...</p>',
                order: i + 1,
            })),
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
            batch.set(pathRef, { title: path.title, description: path.description });
        });
        console.log(`${learningPaths.length} learning paths added to batch.`);

        // 2. Seed Courses, Modules, and Lessons
        console.log('Seeding courses, modules, and lessons...');
        let totalModules = 0;
        let totalLessons = 0;

        courses.forEach(course => {
            const { id, ...courseData } = course;
            const courseRef = doc(db, 'courses', id);
            batch.set(courseRef, courseData);

            const courseModules = modulesAndLessons[id as keyof typeof modulesAndLessons];
            if (courseModules) {
                courseModules.forEach((module: any) => {
                    totalModules++;
                    const { id: moduleId, lessons, ...moduleData } = module;
                    const moduleRef = doc(db, 'courses', id, 'modules', moduleId);
                    batch.set(moduleRef, moduleData);

                    lessons.forEach((lesson: any) => {
                        totalLessons++;
                        const { id: lessonId, ...lessonData } = lesson;
                        const lessonRef = doc(db, 'courses', id, 'modules', moduleId, 'lessons', lessonId);
                        batch.set(lessonRef, lessonData);
                    });
                });
            }
        });
        console.log(`${courses.length} courses added to batch.`);
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
