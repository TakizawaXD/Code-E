
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
    { id: 'programacion', title: 'Programación', description: 'Domina los lenguajes y la lógica de programación que son la base de toda la tecnología.' },
    { id: 'desarrollo-web', title: 'Desarrollo Web', description: 'Conviértete en un experto del lado del cliente y del servidor, dominando frameworks y lenguajes modernos.' },
    { id: 'ia-datascience', title: 'Inteligencia Artificial y Data Science', description: 'Aprende a analizar datos, construir modelos de machine learning y extraer insights valiosos.' },
];

const courseData: Omit<Course, 'modules'>[] = [
  // Programación
  { 
    id: 'prog-python', 
    pathId: 'programacion', 
    title: 'Ejercicios Prácticos de Python', 
    description: 'Fortalece tus habilidades en Python con una serie de ejercicios desde nivel principiante hasta experto.', 
    instructor: 'Ricardo Ortiz', 
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=ricardoortiz', 
    imageUrl: 'https://picsum.photos/seed/pythonlogic/600/400' 
  },
  { 
    id: 'prog-javascript', 
    pathId: 'programacion', 
    title: 'Ejercicios Prácticos de JavaScript', 
    description: 'Aplica tus conocimientos de JavaScript en desafíos prácticos para el navegador y más allá.', 
    instructor: 'Ana García', 
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', 
    imageUrl: 'https://picsum.photos/seed/javascript/600/400'
  },
  // Desarrollo Web
  { 
    id: 'web-react', 
    pathId: 'desarrollo-web', 
    title: 'React: De Cero a Experto', 
    description: 'Aprende a construir aplicaciones web modernas con React.', 
    instructor: 'Juan Pérez', 
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez', 
    imageUrl: 'https://picsum.photos/seed/react/600/400' 
  },
];

const pythonModules: CourseModule[] = [
    {
        id: 'python-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'py-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: '<p>Escribe un programa que imprima "¡Hola, mundo!" en la consola.</p>', order: 1 },
            { id: 'py-b2', title: 'Función de Suma', duration: '5 min', difficulty: 'Fácil', content: '<p>Crea una función que reciba dos números y devuelva su suma.</p>', order: 2 },
            { id: 'py-b3', title: 'Saludo a Usuario', duration: '5 min', difficulty: 'Fácil', content: '<p>Escribe un script que solicite el nombre del usuario y lo salude por su nombre.</p>', order: 3 },
            { id: 'py-b4', title: 'Número Par o Impar', duration: '5 min', difficulty: 'Fácil', content: '<p>Escribe un programa que determine si un número ingresado es par o impar.</p>', order: 4 },
            { id: 'py-b5', title: 'Conversor de Temperatura', duration: '5 min', difficulty: 'Fácil', content: '<p>Crea un programa que convierta una temperatura de grados Celsius a Fahrenheit.</p>', order: 5 },
        ]
    },
    {
        id: 'python-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'py-i1', title: 'Frecuencia de Palabras', duration: '15 min', difficulty: 'Medio', content: '<p>Desarrolla un programa que lea un archivo de texto, cuente la frecuencia de cada palabra y las muestre ordenadas.</p>', order: 1 },
            { id: 'py-i2', title: 'Clase Libro', duration: '15 min', difficulty: 'Medio', content: '<p>Crea una clase para representar un objeto `Libro` con propiedades como `titulo`, `autor` y `año`.</p>', order: 2 },
            { id: 'py-i3', title: 'Conversión de Listas', duration: '10 min', difficulty: 'Medio', content: '<p>Implementa un programa que convierta una lista de temperaturas de Celsius a Fahrenheit usando listas de comprensión.</p>', order: 3 },
            { id: 'py-i4', title: 'Simulador de Cajero Automático', duration: '20 min', difficulty: 'Medio', content: '<p>Desarrolla un programa para simular un cajero automático básico (consultar saldo, depositar, retirar).</p>', order: 4 },
            { id: 'py-i5', title: 'Herramienta CLI', duration: '20 min', difficulty: 'Medio', content: '<p>Crea una herramienta de línea de comandos (CLI) simple utilizando el módulo `argparse`.</p>', order: 5 },
        ]
    },
    {
        id: 'python-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'py-e1', title: 'Motor de Juego Básico', duration: '60 min', difficulty: 'Difícil', content: '<p>Construye un motor de juego 2D muy básico utilizando Pygame (manejo de ventana, bucle principal, un objeto que se mueve).</p>', order: 1 },
            { id: 'py-e2', title: 'API RESTful', duration: '50 min', difficulty: 'Difícil', content: '<p>Crea una API RESTful utilizando Flask o FastAPI para gestionar una lista de usuarios en memoria (GET, POST).</p>', order: 2 },
        ]
    }
];

const javascriptModules: CourseModule[] = [
    {
        id: 'js-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'js-b1', title: 'Cambiar Color de Fondo', duration: '5 min', difficulty: 'Fácil', content: '<p>Escribe una función que cambie el color de fondo de una página web cuando se hace clic en un botón.</p>', order: 1 },
            { id: 'js-b2', title: 'Validar Formulario Simple', duration: '5 min', difficulty: 'Fácil', content: '<p>Valida un formulario simple para asegurar que un campo de correo electrónico no esté vacío antes de enviarlo.</p>', order: 2 },
            { id: 'js-b3', title: 'El Mayor de Tres Números', duration: '5 min', difficulty: 'Fácil', content: '<p>Crea una función que determine el mayor de tres números dados.</p>', order: 3 },
            { id: 'js-b4', title: 'Juego de Adivinanza', duration: '10 min', difficulty: 'Fácil', content: '<p>Escribe un programa que simule un juego de adivinanza de números en la consola.</p>', order: 4 },
            { id: 'js-b5', title: 'Contador Regresivo', duration: '10 min', difficulty: 'Fácil', content: '<p>Crea un contador regresivo simple en una página web que se actualice cada segundo.</p>', order: 5 },
        ]
    },
    {
        id: 'js-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'js-i1', title: 'Piedra, Papel o Tijera', duration: '20 min', difficulty: 'Medio', content: '<p>Desarrolla un juego simple de "Piedra, Papel o Tijera" que se ejecute en el navegador y muestre el resultado.</p>', order: 1 },
            { id: 'js-i2', title: 'Consumir una API con Fetch', duration: '15 min', difficulty: 'Medio', content: '<p>Utiliza la API de `Fetch` para obtener datos de una API pública (ej. JSONPlaceholder) y mostrarlos en la página.</p>', order: 2 },
            { id: 'js-i3', title: 'Carrusel de Imágenes', duration: '20 min', difficulty: 'Medio', content: '<p>Crea un carrusel de imágenes simple que se desplace automáticamente cada 3 segundos.</p>', order: 3 },
            { id: 'js-i4', title: 'Filtro de Búsqueda Dinámico', duration: '15 min', difficulty: 'Medio', content: '<p>Para una lista de productos (un array de strings), desarrolla un filtro de búsqueda dinámico en un campo de texto.</p>', order: 4 },
            { id: 'js-i5', title: 'Validador de Contraseñas', duration: '15 min', difficulty: 'Medio', content: '<p>Crea un validador de contraseñas que verifique múltiples reglas (longitud, mayúsculas, números).</p>', order: 5 },
        ]
    },
    {
        id: 'js-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'js-e1', title: 'Aplicación de Tareas (To-do list)', duration: '60 min', difficulty: 'Difícil', content: '<p>Crea una aplicación de una sola página (SPA) con React o Vue para mostrar y gestionar una lista de tareas (añadir, eliminar, marcar como completada).</p>', order: 1 },
            { id: 'js-e2', title: 'Animación con Canvas', duration: '50 min', difficulty: 'Difícil', content: '<p>Implementa una animación de partículas simple utilizando la API de Canvas de HTML5.</p>', order: 2 },
        ]
    }
];

const reactModules: CourseModule[] = [
    {
        id: 'react-m1',
        title: 'Introducción a React',
        order: 1,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `react-l${i + 1}`,
            title: `Lección ${i + 1}: Conceptos Básicos`,
            duration: '10 min',
            difficulty: 'Fácil',
            content: `<p>Contenido de la lección ${i + 1} sobre React.</p>`,
            order: i + 1,
        })),
    }
];

export const courses: Course[] = courseData.map(course => {
  let modules: CourseModule[] = [];
  if (course.id === 'prog-python') {
    modules = pythonModules;
  } else if (course.id === 'prog-javascript') {
    modules = javascriptModules;
  } else if (course.id === 'web-react') {
    modules = reactModules;
  }
  return { ...course, modules };
});
