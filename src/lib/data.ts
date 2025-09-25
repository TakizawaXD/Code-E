
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

const generateLessons = (courseId: string, moduleId: string): Lesson[] => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `${courseId}-${moduleId}-l${i + 1}`,
    title: `Ejercicio Práctico ${i + 1}`,
    duration: `${Math.floor(Math.random() * 15) + 5} min`,
    difficulty: i < 3 ? 'Fácil' : i < 7 ? 'Medio' : 'Difícil',
    content: `<h1>Contenido del Ejercicio ${i + 1}</h1><p>Esta es la descripción del ejercicio práctico número ${i + 1}. Aquí desarrollarás una habilidad clave.</p><p>¡Manos a la obra!</p>`,
    order: i + 1,
  }));
};

const generateModules = (courseId: string): CourseModule[] => {
  const modules = [
    {
      id: `${courseId}-m1`,
      title: 'Módulo de Introducción',
      order: 1,
    },
    {
      id: `${courseId}-m2`,
      title: 'Conceptos Avanzados',
      order: 2,
    }
  ];

  return modules.map(module => ({
    ...module,
    lessons: generateLessons(courseId, module.id),
  }));
};

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
  // Desarrollo Web
  { id: 'web-react', pathId: 'desarrollo-web', title: 'React: De Cero a Experto', description: 'Aprende a construir aplicaciones web modernas con React.', instructor: 'Juan Pérez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez', imageUrl: 'https://picsum.photos/seed/react/600/400' },
  { id: 'web-vue', pathId: 'desarrollo-web', title: 'Vue.js para Principiantes', description: 'Iníciate en el desarrollo de interfaces con Vue.js.', instructor: 'Ana García', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', imageUrl: 'https://picsum.photos/seed/vue/600/400' },
  // IA y Data Science
  { id: 'ia-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Domina Pandas, NumPy y Matplotlib para el análisis de datos.', instructor: 'Carlos Sánchez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlossanchez', imageUrl: 'https://picsum.photos/seed/pyds/600/400' },
  { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Entiende los algoritmos clave del Machine Learning.', instructor: 'Laura Martínez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=lauramartinez', imageUrl: 'https://picsum.photos/seed/ml/600/400' },
  // Diseño de Producto y UX
  { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Aprende a entender a tus usuarios para diseñar mejores productos.', instructor: 'David Gómez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=davidgomez', imageUrl: 'https://picsum.photos/seed/uxr/600/400' },
  // Cloud y DevOps
  { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Conoce los servicios fundamentales de Amazon Web Services.', instructor: 'Elena Fernández', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=elenafernandez', imageUrl: 'https://picsum.photos/seed/aws/600/400' },
  // Recursos Humanos
  { id: 'rh-tech', pathId: 'recursos-humanos', title: 'Tech Recruiting', description: 'Aprende a reclutar el mejor talento para el sector tecnológico.', instructor: 'Sofia Díaz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sofiadiaz', imageUrl: 'https://picsum.photos/seed/recruiting/600/400' },
  // Negocios
  { id: 'negocios-finanzas', pathId: 'negocios', title: 'Finanzas para Emprendedores', description: 'Entiende los números de tu negocio para tomar mejores decisiones.', instructor: 'Javier Torres', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=javiertorres', imageUrl: 'https://picsum.photos/seed/finance/600/400' },
  // English Academy
  { id: 'english-business', pathId: 'english-academy', title: 'Business English', description: 'Mejora tu vocabulario y fluidez para el entorno profesional.', instructor: 'Sarah Johnson', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sarahjohnson', imageUrl: 'https://picsum.photos/seed/english/600/400' },
  // Ciberseguridad
  { id: 'cyber-intro', pathId: 'ciberseguridad', title: 'Fundamentos de Ciberseguridad', description: 'Aprende los conceptos básicos para proteger la información.', instructor: 'Miguel Romero', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=miguelromero', imageUrl: 'https://picsum.photos/seed/cyber/600/400' },
  // Desarrollo Móvil
  { id: 'movil-flutter', pathId: 'desarrollo-movil', title: 'Flutter: Apps para iOS y Android', description: 'Crea apps nativas para ambas plataformas con un solo código base.', instructor: 'Lucía Jiménez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luciajimenez', imageUrl: 'https://picsum.photos/seed/flutter/600/400' },
  // Blockchain y Web3
  { id: 'web3-solidity', pathId: 'blockchain-web3', title: 'Smart Contracts con Solidity', description: 'Programa contratos inteligentes para la blockchain de Ethereum.', instructor: 'Adrián Navarro', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=adriannavarro', imageUrl: 'https://picsum.photos/seed/solidity/600/400' },
  // Finanzas e Inversiones
  { id: 'fin-personal', pathId: 'finanzas-inversiones', title: 'Finanzas Personales 101', description: 'Organiza tu dinero, sal de deudas y empieza a invertir.', instructor: 'Verónica Cruz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=veronicacruz', imageUrl: 'https://picsum.photos/seed/personalfin/600/400' },
  // Diseño Gráfico
  { id: 'dg-branding', pathId: 'diseno-grafico', title: 'Diseño de Marcas y Branding', description: 'Crea identidades visuales memorables y efectivas.', instructor: 'Óscar Vega', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=oscarvega', imageUrl: 'https://picsum.photos/seed/branding/600/400' },
  // Marketing Digital
  { id: 'mkt-seo', pathId: 'marketing-digital', title: 'SEO para Principiantes', description: 'Posiciona sitios web en los primeros lugares de Google.', instructor: 'Paula Reyes', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=paulareyes', imageUrl: 'https://picsum.photos/seed/seo/600/400' },
  // Habilidades Blandas
  { id: 'soft-comunicacion', pathId: 'habilidades-blandas', title: 'Comunicación Efectiva', description: 'Mejora tus habilidades para presentar, negociar e influir.', instructor: 'Fernando Morales', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=fernandomorales', imageUrl: 'https://picsum.photos/seed/softskills/600/400' },
  // Contenido Audiovisual
  { id: 'av-edicion', pathId: 'contenido-audiovisual', title: 'Edición de Video con DaVinci Resolve', description: 'Aprende a editar video como un profesional con software gratuito.', instructor: 'Isabel Castillo', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=isabelcastillo', imageUrl: 'https://picsum.photos/seed/videoedit/600/400' },
  // Programación
  { id: 'prog-python', pathId: 'programacion', title: 'Lógica de Programación con Python', description: 'Aprende a pensar como un programador resolviendo problemas reales.', instructor: 'Ricardo Ortiz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=ricardoortiz', imageUrl: 'https://picsum.photos/seed/pythonlogic/600/400' },
  // Startups
  { id: 'startup-mvp', pathId: 'startups', title: 'Creación de un MVP', description: 'Construye y lanza el Producto Mínimo Viable de tu startup.', instructor: 'Mónica Herrera', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=monicaherrera', imageUrl: 'https://picsum.photos/seed/mvp/600/400' },
];

export const courses: Course[] = courseData.map(course => ({
  ...course,
  modules: generateModules(course.id),
}));
