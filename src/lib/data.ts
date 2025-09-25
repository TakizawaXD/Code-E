
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
  { 
    id: 'prog-python', 
    pathId: 'programacion', 
    title: 'Ejercicios Prácticos de Python', 
    description: 'Fortalece tus habilidades en Python con una serie de ejercicios desde nivel principiante hasta experto.', 
    instructor: 'Ricardo Ortiz', 
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=ricardoortiz', 
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
  },
  { 
    id: 'prog-javascript', 
    pathId: 'programacion', 
    title: 'Ejercicios Prácticos de JavaScript', 
    description: 'Aplica tus conocimientos de JavaScript en desafíos prácticos para el navegador y más allá.', 
    instructor: 'Ana García', 
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', 
    imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
   { id: 'prog-java', pathId: 'programacion', title: 'Java para Principiantes', description: 'Aprende los fundamentos de Java, uno de los lenguajes más demandados.', instructor: 'Carlos Villa', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlosvilla', imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Desarrollo Web
  { 
    id: 'web-react', 
    pathId: 'desarrollo-web', 
    title: 'React: De Cero a Experto', 
    description: 'Aprende a construir aplicaciones web modernas con React.', 
    instructor: 'Juan Pérez', 
    instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez', 
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  { id: 'web-vue', pathId: 'desarrollo-web', title: 'Vue.js para Principiantes', description: 'Iníciate en el desarrollo de interfaces con Vue.js.', instructor: 'Ana García', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  { id: 'web-node', pathId: 'desarrollo-web', title: 'Backend con Node.js y Express', description: 'Crea APIs RESTful robustas y escalables.', instructor: 'Pedro Ramirez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=pedroramirez', imageUrl: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // IA y Data Science
  { id: 'ia-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Domina Pandas, NumPy y Matplotlib para el análisis de datos.', instructor: 'Carlos Sánchez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlossanchez', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Entiende los algoritmos clave del Machine Learning.', instructor: 'Laura Martínez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=lauramartinez', imageUrl: 'https://images.unsplash.com/photo-1620712943543-95f135346a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Diseño de Producto y UX
  { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Aprende a entender a tus usuarios para diseñar mejores productos.', instructor: 'David Gómez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=davidgomez', imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  { id: 'ux-figma', pathId: 'diseno-ux', title: 'Diseño de Interfaces con Figma', description: 'Domina la herramienta líder para el diseño de interfaces de usuario.', instructor: 'Beatriz Rico', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=beatrizrico', imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
  // Cloud y DevOps
  { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Conoce los servicios fundamentales de Amazon Web Services.', instructor: 'Elena Fernández', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=elenafernandez', imageUrl: 'https://images.unsplash.com/photo-1582102759419-7b97c88d0a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  { id: 'cloud-docker', pathId: 'cloud-devops', title: 'Docker para Desarrolladores', description: 'Conteneriza tus aplicaciones y simplifica el despliegue.', instructor: 'Marcos Luna', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=marcosluna', imageUrl: 'https://images.unsplash.com/photo-1622359990261-3f48a74d7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Recursos Humanos
  { id: 'rh-tech', pathId: 'recursos-humanos', title: 'Tech Recruiting', description: 'Aprende a reclutar el mejor talento para el sector tecnológico.', instructor: 'Sofia Díaz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sofiadiaz', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Negocios
  { id: 'negocios-finanzas', pathId: 'negocios', title: 'Finanzas para Emprendedores', description: 'Entiende los números de tu negocio para tomar mejores decisiones.', instructor: 'Javier Torres', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=javiertorres', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // English Academy
  { id: 'english-business', pathId: 'english-academy', title: 'Business English', description: 'Mejora tu vocabulario y fluidez para el entorno profesional.', instructor: 'Sarah Johnson', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sarahjohnson', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' },
  // Ciberseguridad
  { id: 'cyber-intro', pathId: 'ciberseguridad', title: 'Fundamentos de Ciberseguridad', description: 'Aprende los conceptos básicos para proteger la información.', instructor: 'Miguel Romero', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=miguelromero', imageUrl: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
  // Desarrollo Móvil
  { id: 'movil-flutter', pathId: 'desarrollo-movil', title: 'Flutter: Apps para iOS y Android', description: 'Crea apps nativas para ambas plataformas con un solo código base.', instructor: 'Lucía Jiménez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luciajimenez', imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Blockchain y Web3
  { id: 'web3-solidity', pathId: 'blockchain-web3', title: 'Smart Contracts con Solidity', description: 'Programa contratos inteligentes para la blockchain de Ethereum.', instructor: 'Adrián Navarro', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=adriannavarro', imageUrl: 'https://images.unsplash.com/photo-1640118591547-906514188b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80' },
  // Finanzas e Inversiones
  { id: 'fin-personal', pathId: 'finanzas-inversiones', title: 'Finanzas Personales 101', description: 'Organiza tu dinero, sal de deudas y empieza a invertir.', instructor: 'Verónica Cruz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=veronicacruz', imageUrl: 'https://images.unsplash.com/photo-1642073317833-e25f16c659d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Diseño Gráfico
  { id: 'dg-branding', pathId: 'diseno-grafico', title: 'Diseño de Marcas y Branding', description: 'Crea identidades visuales memorables y efectivas.', instructor: 'Óscar Vega', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=oscarvega', imageUrl: 'https://images.unsplash.com/photo-1600693539789-2166699a7442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Marketing Digital
  { id: 'mkt-seo', pathId: 'marketing-digital', title: 'SEO para Principiantes', description: 'Posiciona sitios web en los primeros lugares de Google.', instructor: 'Paula Reyes', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=paulareyes', imageUrl: 'https://images.unsplash.com/photo-1559868779-139b418296c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Habilidades Blandas
  { id: 'soft-comunicacion', pathId: 'habilidades-blandas', title: 'Comunicación Efectiva', description: 'Mejora tus habilidades para presentar, negociar e influir.', instructor: 'Fernando Morales', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=fernandomorales', imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Contenido Audiovisual
  { id: 'av-edicion', pathId: 'contenido-audiovisual', title: 'Edición de Video con DaVinci Resolve', description: 'Aprende a editar video como un profesional con software gratuito.', instructor: 'Isabel Castillo', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=isabelcastillo', imageUrl: 'https://images.unsplash.com/photo-1574717024633-6005c4831564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Startups
  { id: 'startup-mvp', pathId: 'startups', title: 'Creación de un MVP', description: 'Construye y lanza el Producto Mínimo Viable de tu startup.', instructor: 'Mónica Herrera', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=monicaherrera', imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
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

const genericModules = (course: Omit<Course, "modules">): CourseModule[] => [
    {
        id: `${course.id}-m1`,
        title: 'Módulo de Introducción',
        order: 1,
        lessons: Array.from({ length: 10 }, (_, i) => ({
            id: `${course.id}-l${i + 1}`,
            title: `Ejercicio Práctico ${i + 1}`,
            duration: `${Math.floor(Math.random() * 15) + 5} min`,
            difficulty: i < 3 ? 'Fácil' : i < 7 ? 'Medio' : 'Difícil',
            content: `<h1>Contenido del Ejercicio ${i + 1}</h1><p>Esta es la descripción del ejercicio práctico número ${i + 1} para el curso "${course.title}". Aquí desarrollarás una habilidad clave.</p><p>¡Manos a la obra!</p>`,
            order: i + 1,
        })),
    },
];

export const courses: Course[] = courseData.map(course => {
  let modules: CourseModule[] = [];
  if (course.id === 'prog-python') {
    modules = pythonModules;
  } else if (course.id === 'prog-javascript') {
    modules = javascriptModules;
  } else {
    modules = genericModules(course);
  }
  return { ...course, modules };
});

    