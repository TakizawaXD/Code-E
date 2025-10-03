

import type { Notification, LearningPath, Course, CourseModule, Lesson } from "@/lib/types";
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
export const learningPaths: LearningPath[] = [
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

const courseData: Omit<Course, 'modules'>[] = [
    // Programación
    { id: 'prog-python', pathId: 'programacion', title: 'Ejercicios Prácticos de Python', description: 'Resuelve problemas prácticos y refuerza tu lógica de programación con Python.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/1/150/150', imageUrl: images['course-prog-python'] },
    { id: 'prog-javascript', pathId: 'programacion', title: 'Ejercicios Prácticos de JavaScript', description: 'Aplica tus conocimientos de JavaScript en ejercicios del mundo real, desde el DOM hasta las APIs.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/2/150/150', imageUrl: images['course-prog-javascript'] },
    { id: 'prog-java', pathId: 'programacion', title: 'Ejercicios Prácticos de Java', description: 'Fortalece tus habilidades en Java con ejercicios de Programación Orientada a Objetos y multihilo.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/3/150/150', imageUrl: images['course-prog-java'] },
    { id: 'prog-cpp', pathId: 'programacion', title: 'Ejercicios Prácticos de C++', description: 'Domina la gestión de memoria y la Programación Orientada a Objetos en C++ con retos prácticos.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/4/150/150', imageUrl: images['course-prog-cpp'] },
  
    // Desarrollo Web
    { id: 'web-react', pathId: 'desarrollo-web', title: 'React: De Cero a Experto', description: 'Construye aplicaciones web interactivas y modernas con la librería más popular del mercado.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/5/150/150', imageUrl: images['course-web-react'] },
    { id: 'web-node', pathId: 'desarrollo-web', title: 'Backend con Node.js y Express', description: 'Crea APIs RESTful robustas y escalables utilizando el ecosistema de Node.js.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/6/150/150', imageUrl: images['course-web-node'] },
    { id: 'web-typescript', pathId: 'desarrollo-web', title: 'TypeScript para Desarrollo Frontend', description: 'Lleva tu código JavaScript al siguiente nivel con tipado estático y funcionalidades avanzadas.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/7/150/150', imageUrl: images['course-web-typescript'] },
    { id: 'web-php', pathId: 'desarrollo-web', title: 'PHP y Laravel para Backend', description: 'Desarrolla aplicaciones web robustas y elegantes con el framework PHP más popular.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/8/150/150', imageUrl: images['course-web-php'] },
  
    // IA y Data Science
    { id: 'ia-datascience-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Aprende a manipular, analizar y visualizar datos con las librerías esenciales de Python.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/9/150/150', imageUrl: images['course-ia-datascience-python'] },
    { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Entrena y evalúa modelos de clasificación, regresión y clustering con Scikit-learn.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/10/150/150', imageUrl: images['course-ia-ml'] },
    { id: 'ia-r', pathId: 'ia-datascience', title: 'Análisis de Datos con R', description: 'Utiliza el poder de R y Tidyverse para el análisis estadístico y la visualización de datos.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/11/150/150', imageUrl: images['course-ia-r'] },
    { id: 'ia-sql', pathId: 'ia-datascience', title: 'SQL para Data Science', description: 'Escribe consultas complejas para extraer y transformar datos de bases de datos relacionales.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/12/150/150', imageUrl: images['course-ia-sql'] },
    
    // Diseño de Producto y UX
    { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Aprende a crear user personas, journey maps y a realizar pruebas de usabilidad efectivas.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/13/150/150', imageUrl: images['course-ux-investigacion'] },
    { id: 'ux-figma', pathId: 'diseno-ux', title: 'Diseño de Interfaces con Figma', description: 'Domina Figma desde cero y aprende a crear prototipos interactivos y sistemas de diseño.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/14/150/150', imageUrl: images['course-ux-figma'] },
  
    // Cloud y DevOps
    { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Despliega aplicaciones y gestiona infraestructura en la nube de Amazon Web Services.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/15/150/150', imageUrl: images['course-cloud-aws'] },
    { id: 'cloud-docker', pathId: 'cloud-devops', title: 'Docker para Desarrolladores', description: 'Conteneriza tus aplicaciones y optimiza tu flujo de desarrollo con Docker.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/16/150/150', imageUrl: images['course-cloud-docker'] },
    
    // Desarrollo Móvil
    { id: 'movil-swift', pathId: 'desarrollo-movil', title: 'Swift y SwiftUI: De Cero a App Store', description: 'Desarrolla aplicaciones nativas para iOS con el moderno framework SwiftUI.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/17/150/150', imageUrl: images['course-movil-swift'] },
    { id: 'movil-kotlin', pathId: 'desarrollo-movil', title: 'Android con Kotlin: Curso Completo', description: 'Crea aplicaciones robustas para Android utilizando Kotlin y las mejores prácticas.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/18/150/150', imageUrl: images['course-movil-kotlin'] },
    { id: 'movil-flutter', pathId: 'desarrollo-movil', title: 'Flutter: Apps para iOS y Android', description: 'Crea apps nativas para ambas plataformas con un solo código base.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/19/150/150', imageUrl: images['course-movil-flutter']},
    { id: 'movil-dart', pathId: 'desarrollo-movil', title: 'Fundamentos de Dart para Flutter', description: 'Domina la sintaxis y los conceptos clave de Dart, el lenguaje detrás de Flutter.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/20/150/150', imageUrl: images['course-movil-dart'] },
  
    // Blockchain y Web3
    { id: 'web3-solidity', pathId: 'blockchain-web3', title: 'Smart Contracts con Solidity', description: 'Programa contratos inteligentes para la blockchain de Ethereum y crea aplicaciones descentralizadas.', instructor: 'Lizeth', instructorAvatarUrl: 'https://picsum.photos/seed/21/150/150', imageUrl: images['course-web3-solidity'] },
    { id: 'web3-rust', pathId: 'blockchain-web3', title: 'Desarrollo en Solana con Rust', description: 'Aprende a crear programas de alta velocidad y bajo costo en la blockchain de Solana.', instructor: 'Andres', instructorAvatarUrl: 'https://picsum.photos/seed/22/150/150', imageUrl: images['course-web3-rust'] },
  
    // Ciberseguridad
    { id: 'cyber-intro', pathId: 'ciberseguridad', title: 'Fundamentos de Ciberseguridad', description: 'Entiende los principios de la seguridad digital, desde la encriptación hasta la defensa contra ataques.', instructor: 'Hernando', instructorAvatarUrl: 'https://picsum.photos/seed/23/150/150', imageUrl: images['course-cyber-intro'] },
];

  const pythonReactQuiz: Lesson = {
    id: 'web-react-l1',
    title: '¿Qué es React?',
    duration: '10 min',
    difficulty: 'Fácil',
    order: 1,
    content: '<h1>Introducción a React</h1><p>React es una librería de JavaScript para construir interfaces de usuario. En esta lección, aprenderás los conceptos fundamentales de React, incluyendo componentes, JSX y el DOM virtual. Prepárate para el cuestionario al final.</p>',
    imageUrl: images['course-web-react'],
    youtubeVideoId: "GMnWXlJnbNo",
    quiz: {
      id: 'react-quiz-1',
      title: 'Cuestionario de React Básico',
      questions: [
        {
          id: 'q1',
          question: '¿Qué es JSX?',
          options: [
            'Un lenguaje de programación diferente',
            'Una extensión de la sintaxis de JavaScript',
            'Una librería de CSS',
            'Una base de datos'
          ],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: '¿Qué método se usa para renderizar un componente de React en el DOM?',
          options: [
            'ReactDOM.render()',
            'React.mount()',
            'Component.display()',
            'ReactDOM.attach()'
          ],
          correctAnswer: 0
        }
      ]
    }
  };

const pythonModules: CourseModule[] = [
    {
        id: 'python-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'py-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: '<h1>¡Hola, mundo!</h1><p>Tu primer programa en cualquier lenguaje de programación. Escribe un script que imprima el texto "¡Hola, mundo!" en la consola. Te familiarizarás con la función `print()`.</p>', order: 1, 
              imageUrl: images['lesson-default'],
              youtubeVideoId: "Kp4Mvapo5kc",
              quiz: {
                    id: 'python-quiz-1',
                    title: 'Cuestionario de "Hola, Mundo"',
                    questions: [
                        { id: 'q1', question: '¿Qué función se utiliza para imprimir texto en la consola en Python?', options: ['display()', 'log()', 'print()', 'write()'], correctAnswer: 2 }
                    ]
                }
            },
            { id: 'py-b2', title: 'Función de Suma', duration: '5 min', difficulty: 'Fácil', content: '<h1>Función de Suma</h1><p>Aprende a definir funciones. Crea una función que acepte dos números como argumentos y devuelva su suma. Practicarás la definición de funciones, parámetros y el `return`.</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "Z1Yd7upQsXY"
            },
            { id: 'py-b3', title: 'Saludo a Usuario', duration: '5 min', difficulty: 'Fácil', content: '<h1>Saludo a Usuario</h1><p>Interactúa con el usuario. Escribe un script que solicite el nombre del usuario usando la función `input()` y luego imprima un saludo personalizado, como "Hola, [nombre]".</p>', order: 3,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "AL3f4gHn9S0"
            },
            { id: 'py-b4', title: 'Número Par o Impar', duration: '5 min', difficulty: 'Fácil', content: '<h1>Número Par o Impar</h1><p>Introduce la lógica condicional. Escribe un programa que pida un número y determine si es par o impar, utilizando el operador módulo (`%`) y una declaración `if-else`.</p>', order: 4,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "c24l5dI-5gI"
            },
            { id: 'py-b5', title: 'Conversor de Temperatura', duration: '5 min', difficulty: 'Fácil', content: '<h1>Conversor de Temperatura</h1><p>Practica operaciones matemáticas. Crea un programa que convierta una temperatura de grados Celsius a Fahrenheit. La fórmula es: F = (C * 9/5) + 32.</p>', order: 5,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "eMMZp5d0-zM"
            },
        ]
    },
    {
        id: 'python-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'py-i1', title: 'Frecuencia de Palabras', duration: '15 min', difficulty: 'Medio', content: '<h1>Frecuencia de Palabras</h1><p>Manipulación de texto y diccionarios. Desarrolla un programa que lea un archivo de texto, cuente la frecuencia de cada palabra (ignorando mayúsculas/minúsculas) y las muestre ordenadas.</p>', order: 1,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "bA2-za-c-9M"
            },
            { id: 'py-i2', title: 'Clase Libro', duration: '15 min', difficulty: 'Medio', content: '<h1>Clase Libro</h1><p>Programación Orientada a Objetos. Crea una clase para representar un objeto `Libro` con propiedades como `titulo`, `autor` y `año`. Incluye un método para mostrar la información del libro.</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "8O5p_2pcb2A"
            },
            { id: 'py-i3', title: 'Conversión con List Comprehension', duration: '10 min', difficulty: 'Medio', content: '<h1>Conversión con List Comprehension</h1><p>Aprende una forma concisa de crear listas. Implementa un programa que convierta una lista de temperaturas de Celsius a Fahrenheit usando "list comprehensions".</p>', order: 3,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "1-NYWk0n0yA"
            },
            { id: 'py-i4', title: 'Simulador de Cajero Automático', duration: '20 min', difficulty: 'Medio', content: '<h1>Simulador de Cajero Automático</h1><p>Construye una aplicación de consola más compleja. Desarrolla un programa para simular las operaciones básicas de un cajero automático (consultar saldo, depositar, retirar) usando un bucle y condicionales.</p>', order: 4,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "j-ND0aaN9T8"
            },
            { id: 'py-i5', title: 'Herramienta CLI con Argparse', duration: '20 min', difficulty: 'Medio', content: '<h1>Herramienta CLI con Argparse</h1><p>Crea herramientas de línea de comandos profesionales. Utiliza el módulo `argparse` para construir una CLI que acepte argumentos, como un nombre y un número, y los imprima.</p>', order: 5,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "rnbeS_H02jQ"
            },
        ]
    },
    {
        id: 'python-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'py-e1', title: 'Motor de Juego Básico con Pygame', duration: '60 min', difficulty: 'Difícil', content: '<h1>Motor de Juego Básico con Pygame</h1><p>Explora el desarrollo de juegos. Construye un motor de juego 2D muy básico utilizando Pygame que inicialice una ventana, maneje un bucle de juego principal y permita mover un objeto (un rectángulo) con las teclas de flecha.</p>', order: 1,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "jO6qQDNa2_g"
            },
            { id: 'py-e2', title: 'API RESTful con Flask', duration: '50 min', difficulty: 'Difícil', content: '<h1>API RESTful con Flask</h1><p>Iníciate en el desarrollo backend. Crea una API RESTful utilizando Flask o FastAPI para gestionar una lista de usuarios en memoria. Implementa endpoints para obtener todos los usuarios (GET) y añadir un nuevo usuario (POST).</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "s_ht4AKnWZg"
            },
        ]
    },
    {
        id: 'python-m4',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 4,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `py-p${i + 1}`,
            title: `Proyecto ${i + 1} en Python`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Python</h1><p>Crea una aplicación en Python que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Python.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const javascriptModules: CourseModule[] = [
    {
        id: 'js-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'js-b1', title: 'Cambiar Color de Fondo', duration: '5 min', difficulty: 'Fácil', content: '<h1>Cambiar Color de Fondo</h1><p>Manipulación del DOM. Escribe una función en un archivo .js que, al ser llamada por el `onclick` de un botón en tu HTML, cambie el color de fondo (`backgroundColor`) del `<body>` de la página a un color aleatorio.</p>', order: 1, 
              imageUrl: images['lesson-default'],
              youtubeVideoId: "BisJdN2LWEY",
            },
            { id: 'js-b2', title: 'Validar Formulario Simple', duration: '5 min', difficulty: 'Fácil', content: '<h1>Validar Formulario Simple</h1><p>Eventos y validación. Crea un formulario HTML con un campo de email y un botón de envío. Usa JavaScript para interceptar el evento `submit` y mostrar una alerta si el campo de email está vacío, previniendo el envío del formulario.</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "SjH0F-2s36I"
            },
            { id: 'js-b3', title: 'El Mayor de Tres Números', duration: '5 min', difficulty: 'Fácil', content: '<h1>El Mayor de Tres Números</h1><p>Lógica y funciones. Crea una función de JavaScript que acepte tres números como parámetros y devuelva el mayor de ellos. Usa `Math.max()` o condicionales `if-else`.</p>', order: 3,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "QhGsoj5VZZ8"
            },
            { id: 'js-b4', title: 'Juego de Adivinanza de Números', duration: '10 min', difficulty: 'Fácil', content: '<h1>Juego de Adivinanza de Números</h1><p>Bucles y condicionales. Escribe un programa en la consola que genere un número aleatorio entre 1 y 10. Pide al usuario que adivine el número y dale pistas ("más alto", "más bajo") hasta que acierte.</p>', order: 4,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "zL2Jp94I-48"
            },
            { id: 'js-b5', title: 'Contador Regresivo', duration: '10 min', difficulty: 'Fácil', content: '<h1>Contador Regresivo</h1><p>Timers y manipulación del DOM. Crea un contador en una página web que comience en 10 y disminuya cada segundo. Cuando llegue a 0, muestra un mensaje. Usa `setInterval()` y actualiza el contenido de un elemento HTML.</p>', order: 5,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "x7WJ2e_w8d8"
            },
        ]
    },
    {
        id: 'js-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'js-i1', title: 'Juego de Piedra, Papel o Tijera', duration: '20 min', difficulty: 'Medio', content: '<h1>Juego de Piedra, Papel o Tijera</h1><p>Lógica de juego. Desarrolla un juego simple de "Piedra, Papel o Tijera" contra la computadora. El usuario hace clic en un botón, la computadora elige al azar y se muestra el resultado en la página.</p>', order: 1,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "1-Gle3J43xU"
            },
            { id: 'js-i2', title: 'Consumir una API con Fetch', duration: '15 min', difficulty: 'Medio', content: '<h1>Consumir una API con Fetch</h1><p>Asincronía y APIs. Utiliza la API de `fetch` para obtener datos de una API pública (ej. JSONPlaceholder). Muestra una lista de títulos de "posts" en tu página web. Maneja el estado de carga y posibles errores.</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "cuEtnrL9-H0"
            },
            { id: 'js-i3', title: 'Carrusel de Imágenes Básico', duration: '20 min', difficulty: 'Medio', content: '<h1>Carrusel de Imágenes Básico</h1><p>Manipulación avanzada del DOM. Crea un carrusel de imágenes con botones de "anterior" y "siguiente" para navegar entre un array de URLs de imágenes. Opcional: haz que se desplace automáticamente cada 3 segundos.</p>', order: 3,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "Kts_NkttA9Y"
            },
            { id: 'js-i4', title: 'Filtro de Búsqueda Dinámico', duration: '15 min', difficulty: 'Medio', content: '<h1>Filtro de Búsqueda Dinámico</h1><p>Eventos y arrays. Para una lista de productos (un array de strings), crea un campo de texto donde, a medida que el usuario escribe, la lista de productos se filtra dinámicamente para mostrar solo los que coinciden.</p>', order: 4,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "V-sEwsca1ZA"
            },
            { id: 'js-i5', title: 'Aplicación del Clima', duration: '25 min', difficulty: 'Medio', content: '<h1>Aplicación del Clima</h1><p>API y DOM. Desarrolla una aplicación web que permita a los usuarios buscar una ciudad y muestre la temperatura y el pronóstico actual. Utiliza una API del clima gratuita como OpenWeatherMap.</p>', order: 5,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "gu2K2k3jC3k"
            },
        ]
    },
    {
        id: 'js-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'js-e1', title: 'Chat en Tiempo Real con WebSockets', duration: '60 min', difficulty: 'Difícil', content: '<h1>Chat en Tiempo Real con WebSockets</h1><p>Comunicación bidireccional. Crea un servidor de Node.js con `ws` y una página HTML simple. Implementa una aplicación de chat donde los mensajes enviados por un cliente se transmitan a todos los demás clientes conectados en tiempo real.</p>', order: 1,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "2Nt0dGq3S7o"
            },
            { id: 'js-e2', title: 'Módulo de Componentes Web Reutilizables', duration: '50 min', difficulty: 'Difícil', content: '<h1>Módulo de Componentes Web Reutilizables</h1><p>Estándares web modernos. Usando JavaScript puro y la API de Custom Elements, crea un componente reutilizable (ej. un `<custom-tooltip>`) que pueda ser usado en cualquier página HTML con su propio comportamiento y estilo encapsulado.</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: "Rpl22B4r3E8"
            },
        ]
    },
    {
        id: 'javascript-m4',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 4,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `js-p${i + 1}`,
            title: `Proyecto ${i + 1} en JavaScript`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en JavaScript</h1><p>Crea una aplicación en JavaScript que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en JavaScript.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const javaModules: CourseModule[] = [
    {
        id: 'java-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'java-b1',
                title: '¡Hola, mundo!',
                duration: '5 min',
                difficulty: 'Fácil',
                content: '<h1>¡Hola, mundo! en Java</h1><p>Tu primer paso en Java. Aprenderás sobre la estructura básica de una clase de Java, el método `main`, y cómo usar `System.out.println()` para mostrar texto en la consola.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'grEKMHGYyns',
                quiz: {
                    id: 'java-quiz-1',
                    title: 'Cuestionario Básico de Java',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Cuál es el punto de entrada de un programa en Java?',
                            options: ['start()', 'main()', 'run()', 'execute()'],
                            correctAnswer: 1
                        }
                    ]
                }
            },
            { id: 'java-b2', title: 'Calculadora Simple', duration: '10 min', difficulty: 'Fácil', content: '<h1>Calculadora Simple</h1><p>Practica con variables y operadores. Crea un programa que declare dos variables numéricas y muestre el resultado de su suma, resta, multiplicación y división.</p>', order: 2,
              imageUrl: images['lesson-default'],
              youtubeVideoId: 'K-qB4mY-XlA'
            },
        ]
    },
    {
        id: 'java-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `java-p${i + 1}`,
            title: `Proyecto ${i + 1} en Java`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Java</h1><p>Crea una aplicación en Java que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Java.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const cppModules: CourseModule[] = [
    {
        id: 'cpp-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'cpp-b1',
                title: '¡Hola, mundo!',
                duration: '5 min',
                difficulty: 'Fácil',
                content: '<h1>¡Hola, mundo! en C++</h1><p>El primer paso en C++. Aprenderás a usar la librería `iostream` y el objeto `std::cout` para imprimir texto en la consola, y entenderás la estructura básica de un programa en C++.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'vLnPwxZdW4Y',
                quiz: {
                    id: 'cpp-quiz-1',
                    title: 'Cuestionario Básico de C++',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Qué librería se necesita para imprimir en la consola en C++?',
                            options: ['stdio', 'console', 'iostream', 'string'],
                            correctAnswer: 2
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'cpp-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `cpp-p${i + 1}`,
            title: `Proyecto ${i + 1} en C++`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en C++</h1><p>Crea una aplicación en C++ que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en C++.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const typescriptModules: CourseModule[] = [
    {
        id: 'ts-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'ts-b1',
                title: 'Introducción a Tipos',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>Introducción a Tipos en TypeScript</h1><p>Aprende a usar tipos básicos como `string`, `number` y `boolean` para hacer tu código JavaScript más seguro. Tiparás variables y funciones simples.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'BwuLxPH8IDs',
                quiz: {
                    id: 'ts-quiz-1',
                    title: 'Cuestionario de Tipos en TypeScript',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Cuál es la sintaxis para declarar una variable de tipo número en TypeScript?',
                            options: ['var age: number = 30;', 'number age = 30;', 'let age = number(30);', 'let age: number = 30;'],
                            correctAnswer: 3
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'ts-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `ts-p${i + 1}`,
            title: `Proyecto ${i + 1} en TypeScript`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en TypeScript</h1><p>Crea una aplicación en TypeScript que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en TypeScript.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const phpModules: CourseModule[] = [
    {
        id: 'php-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'php-b1',
                title: '¡Hola, mundo!',
                duration: '5 min',
                difficulty: 'Fácil',
                content: '<h1>¡Hola, mundo! en PHP</h1><p>Tu primer script en PHP. Aprenderás a usar la etiqueta `<?php` y la instrucción `echo` para mostrar texto en una página web generada por el servidor.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'OK_JCtrrv-c',
                quiz: {
                    id: 'php-quiz-1',
                    title: 'Cuestionario Básico de PHP',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Qué instrucción se usa para imprimir texto en PHP?',
                            options: ['print', 'console.log', 'display', 'echo'],
                            correctAnswer: 3
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'php-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `php-p${i + 1}`,
            title: `Proyecto ${i + 1} en PHP`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en PHP</h1><p>Crea una aplicación en PHP que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en PHP.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const rModules: CourseModule[] = [
    {
        id: 'r-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'r-b1',
                title: 'Introducción a R y RStudio',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>Introducción a R y RStudio</h1><p>Aprende qué es R y cómo usar RStudio. Crearás tus primeras variables y realizarás operaciones matemáticas básicas en la consola.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: '_V8eKsto3Ug',
                quiz: {
                    id: 'r-quiz-1',
                    title: 'Cuestionario Básico de R',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Qué operador se usa comúnmente para la asignación de variables en R?',
                            options: ['=', '<-', ':=', '->'],
                            correctAnswer: 1
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'r-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `r-p${i + 1}`,
            title: `Proyecto ${i + 1} en R`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en R</h1><p>Crea una aplicación en R que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en R.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const sqlModules: CourseModule[] = [
    {
        id: 'sql-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'sql-b1',
                title: 'La Sentencia SELECT',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>La Sentencia SELECT en SQL</h1><p>La base de todas las consultas. Aprenderás a usar `SELECT` para recuperar columnas específicas de una tabla y `SELECT *` para obtener todas las columnas.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'HXV3zeQKqGY',
                quiz: {
                    id: 'sql-quiz-1',
                    title: 'Cuestionario de SELECT',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Qué comando usarías para seleccionar todas las columnas de una tabla llamada "clientes"?',
                            options: ['GET * FROM clientes;', 'SELECT all FROM clientes;', 'SELECT * FROM clientes;', 'FETCH * FROM clientes;'],
                            correctAnswer: 2
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'sql-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `sql-p${i + 1}`,
            title: `Proyecto ${i + 1} en SQL`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en SQL</h1><p>Crea una aplicación en SQL que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en SQL.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const swiftModules: CourseModule[] = [
    {
        id: 'swift-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'swift-b1',
                title: 'Introducción a Swift',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>Introducción a Swift</h1><p>Tu primer contacto con el lenguaje de Apple. Aprenderás a declarar variables con `let` y `var`, y a imprimir en la consola con la función `print()`.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'comQ1-x2a1Q',
                quiz: {
                    id: 'swift-quiz-1',
                    title: 'Cuestionario Básico de Swift',
                    questions: [
                        {
                            id: 'q1',
                            question: 'En Swift, ¿qué palabra clave se utiliza para declarar una constante?',
                            options: ['var', 'const', 'let', 'static'],
                            correctAnswer: 2
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'swift-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `swift-p${i + 1}`,
            title: `Proyecto ${i + 1} en Swift`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Swift</h1><p>Crea una aplicación en Swift que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Swift.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const kotlinModules: CourseModule[] = [
    {
        id: 'kotlin-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'kotlin-b1',
                title: 'Introducción a Kotlin',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>Introducción a Kotlin</h1><p>El lenguaje moderno para Android. Aprenderás la estructura básica de una función `main` y cómo imprimir en consola con `println()`.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'F9UC9DY-vIU',
                quiz: {
                    id: 'kotlin-quiz-1',
                    title: 'Cuestionario Básico de Kotlin',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Qué palabra clave se usa para declarar una variable de solo lectura en Kotlin?',
                            options: ['var', 'let', 'const', 'val'],
                            correctAnswer: 3
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'kotlin-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `kotlin-p${i + 1}`,
            title: `Proyecto ${i + 1} en Kotlin`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Kotlin</h1><p>Crea una aplicación en Kotlin que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Kotlin.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const dartModules: CourseModule[] = [
    {
        id: 'dart-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'dart-b1',
                title: 'Introducción a Dart',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>Introducción a Dart</h1><p>El lenguaje detrás de Flutter. Aprenderás a escribir una función `main`, declarar variables y usar `print()` para la salida en consola.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'Ej_Pcr4uC2Q',
                quiz: {
                    id: 'dart-quiz-1',
                    title: 'Cuestionario Básico de Dart',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Cuál es el punto de entrada de una aplicación en Dart?',
                            options: ['start()', 'main()', 'run()', 'entry()'],
                            correctAnswer: 1
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'dart-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `dart-p${i + 1}`,
            title: `Proyecto ${i + 1} en Dart`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Dart</h1><p>Crea una aplicación en Dart que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Dart.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const solidityModules: CourseModule[] = [
    {
        id: 'solidity-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'solidity-b1',
                title: 'Estructura de un Smart Contract',
                duration: '10 min',
                difficulty: 'Fácil',
                content: '<h1>Estructura de un Smart Contract</h1><p>Aprende la estructura básica de un contrato inteligente en Solidity, incluyendo la versión del compilador, la palabra clave `contract` y las variables de estado.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'aGonv5DP910',
                quiz: {
                    id: 'solidity-quiz-1',
                    title: 'Cuestionario de Smart Contracts',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Cómo se define la versión del compilador de Solidity en un contrato?',
                            options: ['version solidity ^0.8.0;', 'compiler 0.8.0;', 'pragma solidity ^0.8.0;', 'solidity version ^0.8.0;'],
                            correctAnswer: 2
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'solidity-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `solidity-p${i + 1}`,
            title: `Proyecto ${i + 1} en Solidity`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Solidity</h1><p>Crea una aplicación en Solidity que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Solidity.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const rustModules: CourseModule[] = [
    {
        id: 'rust-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            {
                id: 'rust-b1',
                title: '¡Hola, mundo!',
                duration: '5 min',
                difficulty: 'Fácil',
                content: '<h1>¡Hola, mundo! en Rust</h1><p>Tu primer programa en Rust. Aprenderás sobre la función `main` y la macro `println!` para imprimir texto en la consola de forma segura y eficiente.</p>',
                order: 1,
                imageUrl: images['lesson-default'],
                youtubeVideoId: 'zF34dRivLOw',
                quiz: {
                    id: 'rust-quiz-1',
                    title: 'Cuestionario Básico de Rust',
                    questions: [
                        {
                            id: 'q1',
                            question: '¿Qué macro se utiliza para imprimir una línea de texto en Rust?',
                            options: ['print!()', 'echo!()', 'println!()', 'log!()'],
                            correctAnswer: 2
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'rust-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `rust-p${i + 1}`,
            title: `Proyecto ${i + 1} en Rust`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Rust</h1><p>Crea una aplicación en Rust que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Rust.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const nodeModules: CourseModule[] = [
    {
        id: 'node-m1',
        title: 'Fundamentos de Node',
        order: 1,
        lessons: [{ id: 'node-l1', title: 'Intro a Node.js', duration: '12 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'TlB_eWDSMt4' }]
    },
    {
        id: 'node-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `node-p${i + 1}`,
            title: `Proyecto ${i + 1} en Node.js`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Node.js</h1><p>Crea una aplicación en Node.js que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Node.js.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const reactModules: CourseModule[] = [
    {
        id: 'react-m1',
        title: 'Fundamentos de React',
        order: 1,
        lessons: [pythonReactQuiz]
    },
    {
        id: 'react-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `react-p${i + 1}`,
            title: `Proyecto ${i + 1} en React`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en React</h1><p>Crea una aplicación en React que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en React.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const vueModules: CourseModule[] = [
    {
        id: 'vue-m1',
        title: 'Fundamentos de Vue',
        order: 1,
        lessons: [{ id: 'vue-l1', title: 'Intro a Vue', duration: '10 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: '4deVCNJq3qc' }]
    },
    {
        id: 'vue-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `vue-p${i + 1}`,
            title: `Proyecto ${i + 1} en Vue`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Vue</h1><p>Crea una aplicación en Vue que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Vue.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];

const flutterModules: CourseModule[] = [
    {
        id: 'flutter-m1',
        title: 'Fundamentos de Flutter',
        order: 1,
        lessons: [{ id: 'flutter-l1', title: 'Intro a Flutter', duration: '10 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: '5izffRVgc0k' }]
    },
    {
        id: 'flutter-m2',
        title: 'Proyectos Prácticos (Avanzado)',
        order: 2,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `flutter-p${i + 1}`,
            title: `Proyecto ${i + 1} en Flutter`,
            duration: '120 min',
            difficulty: 'Difícil',
            content: '<h1>Proyecto Avanzado en Flutter</h1><p>Crea una aplicación en Flutter que resuelva un problema complejo del mundo real. Debe incluir pruebas automatizadas, documentación clara y buenas prácticas de arquitectura. Este proyecto forma parte de la certificación avanzada en Flutter.</p>',
            order: i + 1,
            imageUrl: images['lesson-default'],
        })),
    },
];


// Combine all modules
const allModules: Record<string, CourseModule[]> = {
    'prog-python': pythonModules,
    'prog-javascript': javascriptModules,
    'prog-java': javaModules,
    'prog-cpp': cppModules,
    'web-react': reactModules,
    'web-node': nodeModules,
    'web-typescript': typescriptModules,
    'web-php': phpModules,
    'ia-r': rModules,
    'ia-sql': sqlModules,
    'movil-swift': swiftModules,
    'movil-kotlin': kotlinModules,
    'movil-dart': dartModules,
    'web3-solidity': solidityModules,
    'web3-rust': rustModules,
    'movil-flutter': flutterModules,
    'web-vue': vueModules,
    'ia-ml': [{ id: 'ml-m1', title: 'Fundamentos de ML', order: 1, lessons: [{ id: 'ml-l1', title: 'Intro a ML', duration: '15 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'Gv9_4yMHFhI' }] }],
    'ia-datascience-python': [{ id: 'ds-py-m1', title: 'Intro a Python para DS', order: 1, lessons: [{ id: 'ds-py-l1', title: 'Pandas y Numpy', duration: '20 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'ua-CiDNNj30' }] }],
    'ux-investigacion': [{ id: 'ux-inv-m1', title: 'Investigación de Usuarios', order: 1, lessons: [{ id: 'ux-inv-l1', title: 'User Personas', duration: '15 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'u8zQ3bhyX1U' }] }],
    'ux-figma': [{ id: 'ux-figma-m1', title: 'Diseño en Figma', order: 1, lessons: [{ id: 'ux-figma-l1', title: 'Prototipado', duration: '18 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: '4W4LvJnNegI' }] }],
    'cloud-aws': [{ id: 'aws-m1', title: 'Intro a AWS', order: 1, lessons: [{ id: 'aws-l1', title: 'EC2 y S3', duration: '20 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'PLVHgQku8Z935QbKFvttpxUF1WlNWt1dZ9' }] }],
    'cloud-docker': [{ id: 'docker-m1', title: 'Intro a Docker', order: 1, lessons: [{ id: 'docker-l1', title: 'Contenedores', duration: '15 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'pGyN1pa7c8Q' }] }],
    'cyber-intro': [{ id: 'cyber-m1', title: 'Fundamentos de Ciberseguridad', order: 1, lessons: [{ id: 'cyber-l1', title: 'Amenazas Comunes', duration: '15 min', difficulty: 'Fácil', content: 'Contenido...', order: 1, youtubeVideoId: 'inWWhr5tnEA' }] }],
};

export const courses: Course[] = courseData.map(course => ({
    ...course,
    modules: allModules[course.id] || [{
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

    

    

    