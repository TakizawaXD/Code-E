
import type { Notification, LearningPath, Course, CourseModule, Lesson } from "@/lib/types";

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
    { id: 'prog-python', pathId: 'programacion', title: 'Ejercicios Prácticos de Python', description: 'Fortalece tus habilidades en Python con una serie de ejercicios desde nivel principiante hasta experto. Proyecto Final Sugerido: Crea una herramienta CLI (Command Line Interface) que organice archivos de un directorio en subcarpetas según su tipo (ej. imágenes, documentos, etc.).', instructor: 'Ricardo Ortiz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=ricardoortiz', imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'},
    { id: 'prog-javascript', pathId: 'programacion', title: 'Ejercicios Prácticos de JavaScript', description: 'Aplica tus conocimientos de JavaScript en desafíos prácticos para el navegador y más allá. Proyecto Final Sugerido: Desarrolla una extensión de navegador simple, como un bloqueador de distracciones que oculte ciertos elementos de una página.', instructor: 'Ana García', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'prog-java', pathId: 'programacion', title: 'Ejercicios Prácticos de Java', description: 'Desde conceptos básicos hasta aplicaciones de escritorio, fortalece tu dominio de Java. Proyecto Final Sugerido: Construye una aplicación de consola para gestionar un inventario de una tienda, permitiendo agregar, eliminar y buscar productos.', instructor: 'Carlos Villa', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlosvilla', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'prog-cpp', pathId: 'programacion', title: 'Ejercicios Prácticos de C++', description: 'Domina la gestión de memoria y la programación orientada a objetos con C++. Proyecto Final Sugerido: Crea una simulación de un sistema de partículas simple donde cada partícula tiene posición y velocidad, y rebotan en los bordes de la pantalla.', instructor: 'Sofia Romano', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sofiaromano', imageUrl: 'https://images.unsplash.com/photo-1598662768283-35a1a47b1c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
  
    // Desarrollo Web
    { id: 'web-react', pathId: 'desarrollo-web', title: 'React: De Cero a Experto', description: 'Aprende a construir aplicaciones web modernas con la librería más popular del mercado. Proyecto Final Sugerido: Crea un clon de la página principal de un servicio como Netflix o Spotify, consumiendo datos de una API pública para mostrar el contenido.', instructor: 'Juan Pérez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'web-node', pathId: 'desarrollo-web', title: 'Backend con Node.js y Express', description: 'Crea APIs RESTful robustas y escalables para tus aplicaciones web. Proyecto Final Sugerido: Desarrolla una API para un blog que permita operaciones CRUD (Crear, Leer, Actualizar, Borrar) para posts y comentarios.', instructor: 'Pedro Ramirez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=pedroramirez', imageUrl: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'web-typescript', pathId: 'desarrollo-web', title: 'TypeScript para Desarrollo Frontend', description: 'Añade tipado estático a tus proyectos de JavaScript para construir aplicaciones más robustas. Proyecto Final Sugerido: Refactoriza una aplicación de JavaScript existente (como una To-Do list) a TypeScript, definiendo interfaces y tipos para todos los datos.', instructor: 'Clara Pons', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=clarapons', imageUrl: 'https://images.unsplash.com/photo-1618335436825-d4f08964391a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'web-php', pathId: 'desarrollo-web', title: 'PHP y Laravel para Backend', description: 'Construye aplicaciones web completas con el framework PHP más popular. Proyecto Final Sugerido: Crea un sistema de gestión de contenido (CMS) básico para un portafolio personal, con un panel de administración para gestionar los proyectos.', instructor: 'Sergio Ramos', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sergioramos', imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'},
  
    // IA y Data Science
    { id: 'ia-datascience-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Domina Pandas, NumPy y Matplotlib para el análisis y visualización de datos. Proyecto Final Sugerido: Analiza un conjunto de datos público (ej. sobre películas o deportes) para extraer y visualizar 3 insights interesantes.', instructor: 'Carlos Sánchez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlossanchez', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Entiende los algoritmos clave del Machine Learning y cómo aplicarlos a problemas reales. Proyecto Final Sugerido: Entrena un modelo de regresión para predecir el precio de una casa basándote en sus características (tamaño, habitaciones, etc.).', instructor: 'Laura Martínez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=lauramartinez', imageUrl: 'https://images.unsplash.com/photo-1620712943543-95f135346a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'ia-r', pathId: 'ia-datascience', title: 'Análisis de Datos con R', description: 'Realiza análisis estadísticos y visualizaciones avanzadas con R y Tidyverse. Proyecto Final Sugerido: Crea un informe en R Markdown que analice las tendencias de un conjunto de datos sobre salud pública.', instructor: 'Diana Franco', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=dianafranco', imageUrl: 'https://images.unsplash.com/photo-1543286386-2e6593068625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'ia-sql', pathId: 'ia-datascience', title: 'SQL para Data Science', description: 'Domina las consultas SQL para extraer, transformar y analizar datos desde bases de datos relacionales. Proyecto Final Sugerido: Diseña y pobla una base de datos para una tienda online y escribe 5 consultas complejas para obtener reportes de ventas.', instructor: 'Alberto Núñez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=albertonunez', imageUrl: 'https://images.unsplash.com/photo-1529078155227-5425278b67f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    
    // Diseño de Producto y UX
    { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Aprende a entender a tus usuarios para diseñar mejores productos. Proyecto Final Sugerido: Realiza un estudio de usabilidad completo para una aplicación móvil existente, identificando 5 puntos de fricción y proponiendo soluciones.', instructor: 'David Gómez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=davidgomez', imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    { id: 'ux-figma', pathId: 'diseno-ux', title: 'Diseño de Interfaces con Figma', description: 'Domina la herramienta líder para el diseño de interfaces de usuario. Proyecto Final Sugerido: Diseña un prototipo interactivo de alta fidelidad para una nueva aplicación de viajes, incluyendo el flujo de búsqueda y reserva.', instructor: 'Beatriz Rico', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=beatrizrico', imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
  
    // Cloud y DevOps
    { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Conoce los servicios fundamentales de Amazon Web Services. Proyecto Final Sugerido: Despliega una aplicación web estática en un bucket de S3, configúrala para ser servida a través de CloudFront y asígnale un dominio.', instructor: 'Elena Fernández', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=elenafernandez', imageUrl: 'https://images.unsplash.com/photo-1582102759419-7b97c88d0a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 'cloud-docker', pathId: 'cloud-devops', title: 'Docker para Desarrolladores', description: 'Conteneriza tus aplicaciones y simplifica el despliegue. Proyecto Final Sugerido: Crea un Dockerfile para una aplicación Node.js y un archivo docker-compose.yml para levantar la aplicación junto a una base de datos MongoDB.', instructor: 'Marcos Luna', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=marcosluna', imageUrl: 'https://images.unsplash.com/photo-1622359990261-3f48a74d7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    
    // Desarrollo Móvil
    { id: 'movil-swift', pathId: 'desarrollo-movil', title: 'Swift y SwiftUI: De Cero a App Store', description: 'Aprende a crear apps nativas para iOS con el lenguaje y framework modernos de Apple. Proyecto Final Sugerido: Crea una aplicación de lista de recetas que obtenga los datos de una API pública y los muestre en una interfaz limpia con SwiftUI.', instructor: 'Lucía Jiménez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luciajimenez', imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'},
    { id: 'movil-kotlin', pathId: 'desarrollo-movil', title: 'Android con Kotlin: Curso Completo', description: 'Crea aplicaciones Android robustas y modernas utilizando el lenguaje preferido por Google. Proyecto Final Sugerido: Desarrolla una aplicación de diario personal que guarde las entradas en una base de datos local (Room).', instructor: 'Mateo Rojas', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=mateorojas', imageUrl: 'https://images.unsplash.com/photo-1614332287897-c283fa3c8c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'movil-flutter', pathId: 'desarrollo-movil', title: 'Flutter: Apps para iOS y Android', description: 'Crea apps nativas para ambas plataformas con un solo código base. Proyecto Final Sugerido: Construye una aplicación de pronóstico del tiempo que use la geolocalización del dispositivo y consuma una API del clima.', instructor: 'Lucía Jiménez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luciajimenez', imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 'movil-dart', pathId: 'desarrollo-movil', title: 'Fundamentos de Dart para Flutter', description: 'Domina el lenguaje de programación Dart, la base para construir aplicaciones con Flutter. Proyecto Final Sugerido: Crea una librería en Dart que gestione un sistema de puntuación para un juego, con funciones para añadir puntos, reiniciar y obtener el puntaje más alto.', instructor: 'Andrea Lezama', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=andrealezama', imageUrl: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
  
    // Blockchain y Web3
    { id: 'web3-solidity', pathId: 'blockchain-web3', title: 'Smart Contracts con Solidity', description: 'Programa contratos inteligentes para la blockchain de Ethereum. Proyecto Final Sugerido: Crea un contrato inteligente para un sistema de votación simple donde se puedan registrar candidatos y emitir votos.', instructor: 'Adrián Navarro', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=adriannavarro', imageUrl: 'https://images.unsplash.com/photo-1640118591547-906514188b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80' },
    { id: 'web3-rust', pathId: 'blockchain-web3', title: 'Desarrollo en Solana con Rust', description: 'Crea aplicaciones descentralizadas de alto rendimiento en la blockchain de Solana. Proyecto Final Sugerido: Construye un programa en Solana que funcione como un libro de visitas descentralizado en la blockchain.', instructor: 'Daniel Solis', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=danielsolis', imageUrl: 'https://images.unsplash.com/photo-1642159829394-11648e285094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
  
    // Ciberseguridad
    { id: 'cyber-intro', pathId: 'ciberseguridad', title: 'Fundamentos de Ciberseguridad', description: 'Aprende los conceptos básicos para proteger la información. Proyecto Final Sugerido: Realiza un análisis de vulnerabilidades en una máquina virtual de prueba (como Metasploitable) y documenta los hallazgos en un informe.', instructor: 'Miguel Romero', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=miguelromero', imageUrl: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
  ];

  const pythonReactQuiz: Lesson = {
    id: 'web-react-l1',
    title: '¿Qué es React?',
    duration: '10 min',
    difficulty: 'Fácil',
    order: 1,
    content: '<h1>Introducción a React</h1><p>React es una librería de JavaScript para construir interfaces de usuario. En esta lección, aprenderás los conceptos fundamentales de React, incluyendo componentes, JSX y el DOM virtual. Prepárate para el cuestionario al final.</p>',
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
                quiz: {
                    id: 'python-quiz-1',
                    title: 'Cuestionario de "Hola, Mundo"',
                    questions: [
                        { id: 'q1', question: '¿Qué función se utiliza para imprimir texto en la consola en Python?', options: ['display()', 'log()', 'print()', 'write()'], correctAnswer: 2 }
                    ]
                }
            },
            { id: 'py-b2', title: 'Función de Suma', duration: '5 min', difficulty: 'Fácil', content: '<h1>Función de Suma</h1><p>Aprende a definir funciones. Crea una función que acepte dos números como argumentos y devuelva su suma. Practicarás la definición de funciones, parámetros y el `return`.</p>', order: 2 },
            { id: 'py-b3', title: 'Saludo a Usuario', duration: '5 min', difficulty: 'Fácil', content: '<h1>Saludo a Usuario</h1><p>Interactúa con el usuario. Escribe un script que solicite el nombre del usuario usando la función `input()` y luego imprima un saludo personalizado, como "Hola, [nombre]".</p>', order: 3 },
            { id: 'py-b4', title: 'Número Par o Impar', duration: '5 min', difficulty: 'Fácil', content: '<h1>Número Par o Impar</h1><p>Introduce la lógica condicional. Escribe un programa que pida un número y determine si es par o impar, utilizando el operador módulo (`%`) y una declaración `if-else`.</p>', order: 4 },
            { id: 'py-b5', title: 'Conversor de Temperatura', duration: '5 min', difficulty: 'Fácil', content: '<h1>Conversor de Temperatura</h1><p>Practica operaciones matemáticas. Crea un programa que convierta una temperatura de grados Celsius a Fahrenheit. La fórmula es: F = (C * 9/5) + 32.</p>', order: 5 },
        ]
    },
    {
        id: 'python-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'py-i1', title: 'Frecuencia de Palabras', duration: '15 min', difficulty: 'Medio', content: '<h1>Frecuencia de Palabras</h1><p>Manipulación de texto y diccionarios. Desarrolla un programa que lea un archivo de texto, cuente la frecuencia de cada palabra (ignorando mayúsculas/minúsculas) y las muestre ordenadas.</p>', order: 1 },
            { id: 'py-i2', title: 'Clase Libro', duration: '15 min', difficulty: 'Medio', content: '<h1>Clase Libro</h1><p>Programación Orientada a Objetos. Crea una clase para representar un objeto `Libro` con propiedades como `titulo`, `autor` y `año`. Incluye un método para mostrar la información del libro.</p>', order: 2 },
            { id: 'py-i3', title: 'Conversión con List Comprehension', duration: '10 min', difficulty: 'Medio', content: '<h1>Conversión con List Comprehension</h1><p>Aprende una forma concisa de crear listas. Implementa un programa que convierta una lista de temperaturas de Celsius a Fahrenheit usando "list comprehensions".</p>', order: 3 },
            { id: 'py-i4', title: 'Simulador de Cajero Automático', duration: '20 min', difficulty: 'Medio', content: '<h1>Simulador de Cajero Automático</h1><p>Construye una aplicación de consola más compleja. Desarrolla un programa para simular las operaciones básicas de un cajero automático (consultar saldo, depositar, retirar) usando un bucle y condicionales.</p>', order: 4 },
            { id: 'py-i5', title: 'Herramienta CLI con Argparse', duration: '20 min', difficulty: 'Medio', content: '<h1>Herramienta CLI con Argparse</h1><p>Crea herramientas de línea de comandos profesionales. Utiliza el módulo `argparse` para construir una CLI que acepte argumentos, como un nombre y un número, y los imprima.</p>', order: 5 },
        ]
    },
    {
        id: 'python-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'py-e1', title: 'Motor de Juego Básico con Pygame', duration: '60 min', difficulty: 'Difícil', content: '<h1>Motor de Juego Básico con Pygame</h1><p>Explora el desarrollo de juegos. Construye un motor de juego 2D muy básico utilizando Pygame que inicialice una ventana, maneje un bucle de juego principal y permita mover un objeto (un rectángulo) con las teclas de flecha.</p>', order: 1 },
            { id: 'py-e2', title: 'API RESTful con Flask', duration: '50 min', difficulty: 'Difícil', content: '<h1>API RESTful con Flask</h1><p>Iníciate en el desarrollo backend. Crea una API RESTful utilizando Flask o FastAPI para gestionar una lista de usuarios en memoria. Implementa endpoints para obtener todos los usuarios (GET) y añadir un nuevo usuario (POST).</p>', order: 2 },
        ]
    }
];

const javascriptModules: CourseModule[] = [
    {
        id: 'js-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'js-b1', title: 'Cambiar Color de Fondo', duration: '5 min', difficulty: 'Fácil', content: '<h1>Cambiar Color de Fondo</h1><p>Manipulación del DOM. Escribe una función en un archivo .js que, al ser llamada por el `onclick` de un botón en tu HTML, cambie el color de fondo (`backgroundColor`) del `<body>` de la página a un color aleatorio.</p>', order: 1 },
            { id: 'js-b2', title: 'Validar Formulario Simple', duration: '5 min', difficulty: 'Fácil', content: '<h1>Validar Formulario Simple</h1><p>Eventos y validación. Crea un formulario HTML con un campo de email y un botón de envío. Usa JavaScript para interceptar el evento `submit` y mostrar una alerta si el campo de email está vacío, previniendo el envío del formulario.</p>', order: 2 },
            { id: 'js-b3', title: 'El Mayor de Tres Números', duration: '5 min', difficulty: 'Fácil', content: '<h1>El Mayor de Tres Números</h1><p>Lógica y funciones. Crea una función de JavaScript que acepte tres números como parámetros y devuelva el mayor de ellos. Usa `Math.max()` o condicionales `if-else`.</p>', order: 3 },
            { id: 'js-b4', title: 'Juego de Adivinanza de Números', duration: '10 min', difficulty: 'Fácil', content: '<h1>Juego de Adivinanza de Números</h1><p>Bucles y condicionales. Escribe un programa en la consola que genere un número aleatorio entre 1 y 10. Pide al usuario que adivine el número y dale pistas ("más alto", "más bajo") hasta que acierte.</p>', order: 4 },
            { id: 'js-b5', title: 'Contador Regresivo', duration: '10 min', difficulty: 'Fácil', content: '<h1>Contador Regresivo</h1><p>Timers y manipulación del DOM. Crea un contador en una página web que comience en 10 y disminuya cada segundo. Cuando llegue a 0, muestra un mensaje. Usa `setInterval()` y actualiza el contenido de un elemento HTML.</p>', order: 5 },
        ]
    },
    {
        id: 'js-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'js-i1', title: 'Juego de Piedra, Papel o Tijera', duration: '20 min', difficulty: 'Medio', content: '<h1>Juego de Piedra, Papel o Tijera</h1><p>Lógica de juego. Desarrolla un juego simple de "Piedra, Papel o Tijera" contra la computadora. El usuario hace clic en un botón, la computadora elige al azar y se muestra el resultado en la página.</p>', order: 1 },
            { id: 'js-i2', title: 'Consumir una API con Fetch', duration: '15 min', difficulty: 'Medio', content: '<h1>Consumir una API con Fetch</h1><p>Asincronía y APIs. Utiliza la API de `fetch` para obtener datos de una API pública (ej. JSONPlaceholder). Muestra una lista de títulos de "posts" en tu página web. Maneja el estado de carga y posibles errores.</p>', order: 2 },
            { id: 'js-i3', title: 'Carrusel de Imágenes Básico', duration: '20 min', difficulty: 'Medio', content: '<h1>Carrusel de Imágenes Básico</h1><p>Manipulación avanzada del DOM. Crea un carrusel de imágenes con botones de "anterior" y "siguiente" para navegar entre un array de URLs de imágenes. Opcional: haz que se desplace automáticamente cada 3 segundos.</p>', order: 3 },
            { id: 'js-i4', title: 'Filtro de Búsqueda Dinámico', duration: '15 min', difficulty: 'Medio', content: '<h1>Filtro de Búsqueda Dinámico</h1><p>Eventos y arrays. Para una lista de productos (un array de strings), crea un campo de texto donde, a medida que el usuario escribe, la lista de productos se filtra dinámicamente para mostrar solo los que coinciden.</p>', order: 4 },
            { id: 'js-i5', title: 'Validador de Contraseñas', duration: '15 min', difficulty: 'Medio', content: '<h1>Validador de Contraseñas</h1><p>Expresiones regulares y UI. Crea un validador de contraseñas que verifique en tiempo real si la contraseña cumple con varias reglas (ej. longitud mínima, una mayúscula, un número) y muestra visualmente qué reglas se cumplen.</p>', order: 5 },
        ]
    },
    {
        id: 'js-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'js-e1', title: 'Aplicación de Tareas (To-do list) con React', duration: '60 min', difficulty: 'Difícil', content: '<h1>Aplicación de Tareas con React</h1><p>Frameworks de Frontend. Crea una aplicación de una sola página (SPA) con React. Debe permitir añadir tareas a una lista, eliminarlas y marcarlas como completadas. Gestiona el estado del componente.</p>', order: 1 },
            { id: 'js-e2', title: 'Animación de Partículas con Canvas', duration: '50 min', difficulty: 'Difícil', content: '<h1>Animación de Partículas con Canvas</h1><p>Gráficos y Animación. Implementa una animación simple utilizando la API de Canvas de HTML5. Crea un conjunto de partículas (círculos) que se mueven por la pantalla y rebotan en los bordes. Utiliza `requestAnimationFrame` para un rendimiento óptimo.</p>', order: 2 },
        ]
    }
];

const genericModules = (courseId: string, courseTitle: string): CourseModule[] => {
    const lessonContent = [
        `<h1>Ejercicio 1: Configuración del Entorno</h1><p>Instala las herramientas necesarias para el curso "${courseTitle}" y crea tu primer proyecto "Hola Mundo".</p>`,
        `<h1>Ejercicio 2: Variables y Tipos de Datos</h1><p>Aprende a declarar variables y a utilizar los tipos de datos fundamentales en el contexto de "${courseTitle}".</p>`,
        `<h1>Ejercicio 3: Operadores Básicos</h1><p>Realiza operaciones aritméticas y lógicas para resolver un problema simple relacionado con "${courseTitle}".</p>`,
        `<h1>Ejercicio 4: Estructuras de Control</h1><p>Usa condicionales (if/else) para crear un programa que tome decisiones basadas en una entrada, aplicado a un caso de uso de "${courseTitle}".</p>`,
        `<h1>Ejercicio 5: Bucles y Repeticiones</h1><p>Utiliza bucles (for/while) para procesar una colección de datos e imprimir los resultados. Este es un pilar en "${courseTitle}".</p>`,
        `<h1>Ejercicio 6: Funciones y Modularización</h1><p>Crea tu primera función reutilizable que encapsule una lógica específica del dominio de "${courseTitle}".</p>`,
        `<h1>Ejercicio 7: Manejo de Arrays/Listas</h1><p>Aprende a almacenar y manipular colecciones de datos, un requisito indispensable para cualquier proyecto de "${courseTitle}".</p>`,
        `<h1>Ejercicio 8: Programación Orientada a Objetos (Básico)</h1><p>Define una clase simple que modele un concepto del mundo real relevante para "${courseTitle}".</p>`,
        `<h1>Ejercicio 9: Manipulación de Strings</h1><p>Trabaja con texto para extraer información, formatearla o validarla, una tarea común en "${courseTitle}".</p>`,
        `<h1>Ejercicio 10: Proyecto Final Pequeño</h1><p>Integra todos los conceptos aprendidos para construir una pequeña aplicación o script que resuelva un problema práctico de "${courseTitle}".</p>`
    ];

    return [
        {
            id: `${courseId}-m1`,
            title: 'Módulo de Introducción Práctica',
            order: 1,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `${courseId}-l${i + 1}`,
                title: `Ejercicio Práctico ${i + 1}`,
                duration: `${Math.floor(Math.random() * 15) + 5} min`,
                difficulty: i < 3 ? 'Fácil' : i < 7 ? 'Medio' : 'Difícil',
                content: lessonContent[i],
                order: i + 1,
            })),
        },
    ];
};

export const courses: Course[] = courseData.map(course => {
  let modules: CourseModule[] = [];
  switch (course.id) {
    case 'prog-python':
      modules = pythonModules;
      break;
    case 'prog-javascript':
      modules = javascriptModules;
      break;
    case 'web-react':
        modules = [
            {
                id: 'react-m1',
                title: 'Fundamentos de React',
                order: 1,
                lessons: [
                    pythonReactQuiz,
                    { id: 'react-l2', title: 'Componentes y Props', duration: '15 min', difficulty: 'Fácil', content: '<h1>Componentes y Props</h1><p>Aprende a crear componentes reutilizables y a pasar datos entre ellos usando props.</p>', order: 2 },
                ]
            }
        ]
        break;
    default:
      modules = genericModules(course.id, course.title);
      break;
  }
  return { ...course, modules };
});
