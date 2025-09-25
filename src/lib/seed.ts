
// USAGE: npx tsx src/lib/seed.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/config'; // Make sure this path is correct

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

const courses = [
  // Desarrollo Web
  { id: 'web-react', pathId: 'desarrollo-web', title: 'React: De Cero a Experto', description: 'Aprende a construir aplicaciones web modernas con React.', instructor: 'Juan Pérez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  { id: 'web-vue', pathId: 'desarrollo-web', title: 'Vue.js para Principiantes', description: 'Iníciate en el desarrollo de interfaces con Vue.js.', instructor: 'Ana García', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // IA y Data Science
  { id: 'ia-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Domina Pandas, NumPy y Matplotlib para el análisis de datos.', instructor: 'Carlos Sánchez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlossanchez', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Entiende los algoritmos clave del Machine Learning.', instructor: 'Laura Martínez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=lauramartinez', imageUrl: 'https://images.unsplash.com/photo-1620712943543-95f135346a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  // Diseño de Producto y UX
  { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Aprende a entender a tus usuarios para diseñar mejores productos.', instructor: 'David Gómez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=davidgomez', imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  // Cloud y DevOps
  { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Conoce los servicios fundamentales de Amazon Web Services.', instructor: 'Elena Fernández', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=elenafernandez', imageUrl: 'https://images.unsplash.com/photo-1582102759419-7b97c88d0a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
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
  // Programación
  { id: 'prog-python', pathId: 'programacion', title: 'Lógica de Programación con Python', description: 'Aprende a pensar como un programador resolviendo problemas reales.', instructor: 'Ricardo Ortiz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=ricardoortiz', imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' },
  // Startups
  { id: 'startup-mvp', pathId: 'startups', title: 'Creación de un MVP', description: 'Construye y lanza el Producto Mínimo Viable de tu startup.', instructor: 'Mónica Herrera', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=monicaherrera', imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
];

const modulesAndLessons = courses.reduce((acc, course) => {
    acc[course.id] = [
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
    return acc;
}, {} as Record<string, any>);


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
