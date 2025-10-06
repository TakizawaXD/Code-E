
import type { Notification, LearningPath, Course, CourseModule, Lesson, School, WeeklyChallenge, TermuxGuide, TermuxProject } from "@/lib/types";
import images from '@/app/lib/placeholder-images.json';
import videos from '@/app/lib/placeholder-videos.json';

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
            { id: 'fund-arq-software', title: 'Curso de Fundamentos de Arquitectura de Software', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["fund-arq-software"], modules: [] },
            { id: 'prof-arq-software', title: 'Curso Profesional de Arquitectura de Software', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["prof-arq-software"], modules: [] },
            { id: 'arq-limpias-dev', title: 'Curso de Arquitecturas Limpias para Desarrollo de Software', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["arq-limpias-dev"], modules: [] },
            { id: 'pract-arq-backend', title: 'Curso Práctico de Arquitectura Backend', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["pract-arq-backend"], modules: [] },
            { id: 'audio-alta-concurrencia', title: 'Audiocurso de Fundamentos de Arquitectura de Alta Concurrencia', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["audio-alta-concurrencia"], modules: [] },
            { id: 'audio-arq-frontend', title: 'Audiocurso de Frameworks y Arquitecturas Frontend: Casos de Estudio', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["audio-arq-frontend"], modules: [] },
            { id: 'arq-css', title: 'Curso de Arquitecturas CSS', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["arq-css"], modules: [] },
            { id: 'ssr-react', title: 'Curso de Server Side Render o SSR con React.js', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["ssr-react"], modules: [] },
            { id: 'nextjs-jamstack', title: 'Curso de Next.js: Sitios Estáticos y Jamstack', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["nextjs-jamstack"], modules: [] },
            { id: 'intro-jamstack', title: 'Curso de Introducción a Jamstack', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["intro-jamstack"], modules: [] },
            { id: 'ssr-nuxt2', title: 'Curso de Server Side Rendering con Nuxt 2', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["ssr-nuxt2"], modules: [] },
            { id: 'web-astro', title: 'Curso de Creación de Páginas Web con Astro', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["web-astro"], modules: [] },
            { id: 'angular-avanzado', title: 'Curso de Angular Avanzado', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["angular-avanzado"], modules: [] },
            { id: 'nextjs-avanzado', title: 'Curso de Next.js Avanzado', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["nextjs-avanzado"], modules: [] },
            { id: 'nodejs-auth-microservices', title: 'Curso de Node.js: Autenticación, Microservicios y Redis', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["nodejs-auth-microservices"], modules: [] },
            { id: 'go-eventos-cqrs', title: 'Curso de Go Avanzado: Arquitectura de Eventos y CQRS', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["go-eventos-cqrs"], modules: [] },
            { id: 'go-grpc', title: 'Curso de Go Avanzado: Protobuffers y gRPC', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["go-grpc"], modules: [] },
            { id: 'graphql-nodejs', title: 'Curso de GraphQL con Node.js', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["graphql-nodejs"], modules: [] },
            { id: 'avanzado-nodejs-graphql', title: 'Curso Avanzado de Node.js con GraphQL, Apollo Server y Prisma', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["avanzado-nodejs-graphql"], modules: [] },
            { id: 'fund-observabilidad-new-relic', title: 'Curso de Fundamentos de Observabilidad con New Relic', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["fund-observabilidad-new-relic"], modules: [] },
            { id: 'ing-observabilidad-new-relic', title: 'Curso de Ingeniería en Observabilidad con New Relic', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["ing-observabilidad-new-relic"], modules: [] },
            { id: 'obs-agentes-ai-langsmith', title: 'Curso de Observabilidad de Agentes AI con LangSmith', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["obs-agentes-ai-langsmith"], modules: [] },
            { id: 'monorepos-nx', title: 'Curso de Monorepositorios con NX', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["monorepos-nx"], modules: [] }
        ]
      },
      { 
        id: 'bases-de-datos-web', 
        title: 'Bases de Datos para Web',
        description: 'Aprende a modelar, gestionar y optimizar bases de datos relacionales y NoSQL para aplicaciones web.',
        courses: [
            { id: 'fund-db', title: 'Curso de Fundamentos de Bases de Datos', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["fund-db"], modules: [] },
            { id: 'sql-mysql', title: 'Curso de SQL y MySQL', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["sql-mysql"], modules: [] },
            { id: 'postgresql', title: 'Curso de PostgreSQL', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["postgresql"], modules: [] },
            { id: 'db-mysql-mariadb', title: 'Curso de Bases de Datos con MySQL y MariaDB', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["db-mysql-mariadb"], modules: [] },
            { id: 'opt-db-sql-server', title: 'Curso de Optimización de Bases de Datos en SQL Server', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images["opt-db-sql-server"], modules: [] },
            { id: 'db-nosql', title: 'Curso de Base de Datos NoSQL', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["db-nosql"], modules: [] },
            { id: 'intro-mongodb', title: 'Curso de Introducción a MongoDB', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["intro-mongodb"], modules: [] },
            { id: 'modelado-mongodb', title: 'Curso de Modelado de Datos en MongoDB', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["modelado-mongodb"], modules: [] },
            { id: 'mongodb-aggregation', title: 'Curso de MongoDB: Aggregation Framework', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images["mongodb-aggregation"], modules: [] },
            { id: 'intro-elasticsearch', title: 'Curso de Introducción a Elasticsearch', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["intro-elasticsearch"], modules: [] },
            { id: 'azure-cache-redis', title: 'Curso de Azure Cache para Redis', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images["azure-cache-redis"], modules: [] }
        ]
      },
      {
        id: 'desarrollo-backend-java',
        title: 'Desarrollo Backend con Java',
        description: 'Aprende a construir aplicaciones robustas y escalables con Java y Spring.',
        courses: [
          { id: 'intro-desarrollo-backend', title: 'Curso de Introducción al Desarrollo Backend', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-desarrollo-backend'], modules: [] },
          { id: 'java-basico', title: 'Curso de Java', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['java-basico'], modules: [] },
          { id: 'java-se-sql', title: 'Curso de Java SE: SQL y Bases de Datos', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['java-se-sql'], modules: [] },
          { id: 'java-spring-boot', title: 'Curso de Java Spring Boot', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['java-spring-boot'], modules: [] },
          { id: 'java-spring', title: 'Curso de Java Spring', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['java-spring'], modules: [] },
          { id: 'java-spring-data-jpa', title: 'Curso de Java Spring Data JPA: Bases de Datos', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['java-spring-data-jpa'], modules: [] },
          { id: 'java-spring-security', title: 'Curso de Java Spring Security: Autenticación y Seguridad Web', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['java-spring-security'], modules: [] },
        ],
        projects: [
          { title: "API REST para un Blog", description: "Crea una API REST simple con Spring Boot para gestionar posts y comentarios.", level: "Fácil", githubUrl: "https://github.com/example/java-blog-api" },
          { title: "Sistema de Reservas de Hotel", description: "Desarrolla una aplicación web para gestionar reservas de habitaciones, clientes y disponibilidad.", level: "Intermedio", githubUrl: "https://github.com/example/java-hotel-booking" },
          { title: "Clon de Twitter (Backend)", description: "Implementa las funcionalidades básicas de Twitter, como tweets, follows y un timeline, usando Java.", level: "Intermedio", githubUrl: "https://github.com/example/java-twitter-clone" },
          { title: "Microservicio de Autenticación", description: "Crea un servicio dedicado para manejar el registro y login de usuarios con JWT.", level: "Intermedio", githubUrl: "https://github.com/example/java-auth-microservice" },
          { title: "Librería de Conversión de Moneda", description: "Construye una librería simple que consulte una API externa para convertir entre diferentes divisas.", level: "Fácil", githubUrl: "https://github.com/example/java-currency-converter" },
        ]
      },
      {
        id: 'desarrollo-backend-nodejs',
        title: 'Desarrollo Backend con Node.js',
        description: 'Crea APIs rápidas y eficientes con el ecosistema de JavaScript en el servidor.',
        courses: [
            { id: 'fund-nodejs', title: 'Curso de Fundamentos de Node.js', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['fund-nodejs'], modules: [] },
            { id: 'backend-expressjs', title: 'Curso de Backend con ExpressJS', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['backend-expressjs'], modules: [] },
            { id: 'api-first', title: 'Curso de API First', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['api-first'], modules: [] },
            { id: 'backend-nestjs', title: 'Curso de Backend con NestJS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['backend-nestjs'], modules: [] },
            { id: 'nestjs-modular', title: 'Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['nestjs-modular'], modules: [] },
            { id: 'nestjs-mongodb', title: 'Curso de NestJS: Persistencia de Datos con MongoDB', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['nestjs-mongodb'], modules: [] },
            { id: 'nestjs-typeorm', title: 'Curso de NestJS: Persistencia de Datos con TypeORM', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['nestjs-typeorm'], modules: [] },
            { id: 'nestjs-auth', title: 'Curso de NestJS: Autenticación con Passport y JWT', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['nestjs-auth'], modules: [] },
            { id: 'backend-nodejs-postgres', title: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['backend-nodejs-postgres'], modules: [] },
            { id: 'backend-nodejs-auth', title: 'Curso de Backend con Node.js: Autenticación con Passport.js y JWT', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['backend-nodejs-auth'], modules: [] },
            { id: 'api-rest-js-fund', title: 'Curso de API REST con Javascript: Fundamentos', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['api-rest-js-fund'], modules: [] },
            { id: 'api-rest-js-real', title: 'Curso de API REST con Javascript: Ejemplos con APIs reales', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['api-rest-js-real'], modules: [] },
            { id: 'api-rest-js-perf', title: 'Curso de API REST con Javascript: Performance y Usabilidad', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['api-rest-js-perf'], modules: [] },
            { id: 'real-time-socketio', title: 'Curso de Aplicaciones en Tiempo Real con Socket.io', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['real-time-socketio'], modules: [] },
            { id: 'nodejs-avanzado-2023', title: 'Curso de Node.js Avanzado', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['nodejs-avanzado-2023'], modules: [] },
            { id: 'cert-nodejs-openjs-2023', title: 'Curso para Certificacion de Node.js con OpenJS Foundation 2023', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['cert-nodejs-openjs-2023'], modules: [] },
            { id: 'webpack-express-react-ts', title: 'Curso de Webpack con Express.js, React.js y TypeScript', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['webpack-express-react-ts'], modules: [] },
            { id: 'firebase-angular-20', title: 'Curso de Firebase con Angular 20', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['firebase-angular-20'], modules: [] },
        ]
      },
      {
        id: 'desarrollo-backend-php',
        title: 'Desarrollo Backend con PHP',
        description: 'Construye aplicaciones web dinámicas con uno de los lenguajes más populares del lado del servidor.',
        courses: [
            { id: 'php-avanzado', title: 'Curso de PHP Avanzado', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['php-avanzado'], modules: [] },
            { id: 'fund-php', title: 'Curso de Fundamentos de PHP', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['fund-php'], modules: [] },
            { id: 'php-html', title: 'Curso de PHP: Integración con HTML', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['php-html'], modules: [] },
            { id: 'php-cookies-sesiones', title: 'Curso de PHP: Cookies, Sesiones y Modularización', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['php-cookies-sesiones'], modules: [] },
            { id: 'php-db', title: 'Curso de PHP: Bases de Datos', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['php-db'], modules: [] },
            { id: 'api-rest-php', title: 'Curso de API REST con PHP', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['api-rest-php'], modules: [] },
            { id: 'intro-frameworks-php', title: 'Curso de Introducción a Frameworks de PHP', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-frameworks-php'], modules: [] },
            { id: 'laravel-basico', title: 'Curso de Laravel', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['laravel-basico'], modules: [] },
            { id: 'intro-laravel-9', title: 'Curso de Introducción a Laravel 9', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-laravel-9'], modules: [] },
            { id: 'api-rest-laravel', title: 'Curso de API REST con Laravel', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['api-rest-laravel'], modules: [] },
            { id: 'api-rest-laravel-buenas-practicas', title: 'Curso de Estándares y Buenas Prácticas para API REST con Laravel', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['api-rest-laravel-buenas-practicas'], modules: [] },
            { id: 'laravel-livewire', title: 'Curso de Interfaces Dinámicas con Laravel Livewire', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['laravel-livewire'], modules: [] },
            { id: 'intro-laravel-8', title: 'Curso de Introducción a Laravel 8', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['intro-laravel-8'], modules: [] },
            { id: 'laravel-tdd', title: 'Curso de Desarrollo en Laravel con Test Driven Development', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['laravel-tdd'], modules: [] },
            { id: 'practico-symfony', title: 'Curso Práctico de Symfony', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['practico-symfony'], modules: [] },
            { id: 'symfony-framework', title: 'Curso de Symfony Framework', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['symfony-framework'], modules: [] },
        ],
        projects: [
          { title: "Sistema de Gestión de Tareas (To-Do List)", description: "Crea una aplicación web con Laravel para gestionar una lista de tareas con autenticación de usuarios.", level: "Fácil", githubUrl: "https://github.com/example/php-todo-list" },
          { title: "Framework de Blog desde Cero", description: "Construye un micro-framework en PHP puro con un enrutador y un sistema de plantillas para un blog.", level: "Intermedio", githubUrl: "https://github.com/example/php-blog-framework" },
          { title: "Acortador de URLs", description: "Desarrolla un servicio que toma una URL larga y genera una corta, almacenando la relación en una base de datos.", level: "Fácil", githubUrl: "https://github.com/example/php-url-shortener" },
          { title: "API REST para una Tienda Online", description: "Crea una API con Symfony o Laravel para gestionar productos, pedidos y clientes.", level: "Intermedio", githubUrl: "https://github.com/example/php-ecommerce-api" },
          { title: "Galería de Imágenes con subida de archivos", description: "Implementa una aplicación que permita a los usuarios subir imágenes y mostrarlas en una galería.", level: "Fácil", githubUrl: "https://github.com/example/php-image-gallery" },
        ]
      },
      {
        id: 'desarrollo-backend-python',
        title: 'Desarrollo Backend con Python',
        description: 'Utiliza la simplicidad y poder de Python para crear servicios backend eficientes.',
        courses: [
            { id: 'fastapi-curso', title: 'Curso de FastAPI', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['fastapi-curso'], modules: [] },
            { id: 'flask-curso', title: 'Curso de Flask', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['flask-curso'], modules: [] },
            { id: 'django-curso', title: 'Curso de Django', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['django-curso'], modules: [] },
            { id: 'django-rest-framework', title: 'Curso de Django Rest Framework', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['django-rest-framework'], modules: [] },
            { id: 'deploy-python-nube', title: 'Curso de Despliegue de Aplicaciones Python en la Nube', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['deploy-python-nube'], modules: [] },
        ]
      },
      {
        id: 'desarrollo-backend-ruby',
        title: 'Desarrollo Backend con Ruby',
        description: 'Descubre la elegancia y productividad de Ruby on Rails para el desarrollo web.',
        courses: [
            { id: 'intro-ruby-on-rails', title: 'Curso de Introducción a Ruby on Rails', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-ruby-on-rails'], modules: [] },
            { id: 'api-ruby-on-rails', title: 'Curso de Creación de APIs con Ruby on Rails', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['api-ruby-on-rails'], modules: [] },
            { id: 'intermedio-ruby-on-rails', title: 'Curso Intermedio de Ruby on Rails', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['intermedio-ruby-on-rails'], modules: [] },
        ],
        projects: [
          { title: "Aplicación de Blog", description: "Crea un blog completo con artículos, comentarios y autenticación de usuarios usando Ruby on Rails.", level: "Fácil", githubUrl: "https://github.com/example/rails-blog" },
          { title: "Clon de Instagram", description: "Desarrolla una versión simplificada de Instagram donde los usuarios pueden subir fotos y seguir a otros.", level: "Intermedio", githubUrl: "https://github.com/example/rails-instagram-clone" },
          { title: "Marketplace de Anuncios Clasificados", description: "Construye una plataforma donde los usuarios puedan publicar y buscar anuncios.", level: "Intermedio", githubUrl: "https://github.com/example/rails-marketplace" },
          { title: "API para una Lista de Tareas", description: "Crea una API en modo 'API-only' de Rails para gestionar tareas.", level: "Fácil", githubUrl: "https://github.com/example/rails-todo-api" },
          { title: "Sistema de Gestión de Proyectos", description: "Una aplicación para crear proyectos, asignar tareas y hacer seguimiento del progreso.", level: "Intermedio", githubUrl: "https://github.com/example/rails-project-manager" },
        ]
      },
      {
        id: 'desarrollo-frontend-angular',
        title: 'Desarrollo Frontend con Angular',
        description: 'Construye aplicaciones web a gran escala con el poderoso framework de Google.',
        courses: [
            { id: 'angular-componentes-servicios', title: 'Curso de Angular: Componentes y Servicios', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['angular-componentes-servicios'], modules: [] },
            { id: 'angular-forms', title: 'Curso de Angular Forms: Creación y Optimización de Formularios Web', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['angular-forms'], modules: [] },
            { id: 'consumo-apis-rest-angular', title: 'Curso de Consumo de APIs REST con Angular', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['consumo-apis-rest-angular'], modules: [] },
            { id: 'angular-router', title: 'Curso de Angular Router: Lazy Loading y Programación Modular', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['angular-router'], modules: [] },
            { id: 'auth-angular', title: 'Curso de Autenticación con Angular', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['auth-angular'], modules: [] },
            { id: 'maquetacion-angular-cdk-tailwind', title: 'Curso de Maquetación con Angular CDK y Tailwind CSS', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['maquetacion-angular-cdk-tailwind'], modules: [] },
            { id: 'practico-angular-trello', title: 'Curso Práctico de Angular: Construye un Clon de Trello', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['practico-angular-trello'], modules: [] },
            { id: 'angular-creacion-apps-web', title: 'Curso de Angular: Creación de Aplicaciones Web', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['angular-creacion-apps-web'], modules: [] },
        ]
      },
      {
        id: 'desarrollo-frontend-javascript',
        title: 'Desarrollo Frontend con JavaScript',
        description: 'Domina el lenguaje de la web y sus herramientas para crear experiencias interactivas.',
        courses: [
            { id: 'js-dom', title: 'Curso de JavaScript: Manipulación del DOM', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['js-dom'], modules: [] },
            { id: 'ecmascript-historia', title: 'Curso de ECMAScript: Historia y Versiones de JavaScript', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['ecmascript-historia'], modules: [] },
            { id: 'npm-gestion-paquetes', title: 'Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['npm-gestion-paquetes'], modules: [] },
            { id: 'intro-empaquetadores-web', title: 'Curso de Introducción a Empaquetadores Web', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['intro-empaquetadores-web'], modules: [] },
            { id: 'webpack-curso', title: 'Curso de Webpack', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['webpack-curso'], modules: [] },
            { id: 'js-web-components', title: 'Curso de JavaScript: Web Components', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['js-web-components'], modules: [] },
            { id: 'spa-js-vanilla', title: 'Curso de Single Page Application con JavaScript Vanilla', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['spa-js-vanilla'], modules: [] },
            { id: 'debugging-chrome-devtools', title: 'Curso de Debugging con Chrome DevTools', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['debugging-chrome-devtools'], modules: [] },
            { id: 'optimizacion-web', title: 'Curso de Optimización Web', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['optimizacion-web'], modules: [] },
            { id: 'vitejs-curso', title: 'Curso de Vite.js', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['vitejs-curso'], modules: [] },
            { id: 'solidjs-curso', title: 'Curso de SolidJS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['solidjs-curso'], modules: [] },
            { id: 'svelte-curso', title: 'Curso de Svelte', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['svelte-curso'], modules: [] },
        ]
      },
      {
        id: 'desarrollo-frontend-react',
        title: 'Desarrollo Frontend con React.js',
        description: 'Crea interfaces de usuario modernas y reactivas con la librería más popular del mercado.',
        courses: [
            { id: 'react-js-curso', title: 'Curso de React.js', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['react-js-curso'], modules: [] },
            { id: 'react-manejo-estado', title: 'Curso de React.js: Manejo Profesional del Estado', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['react-manejo-estado'], modules: [] },
            { id: 'react-patrones-render', title: 'Curso de React.js: Patrones de Render y Composición', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['react-patrones-render'], modules: [] },
            { id: 'react-router-curso', title: 'Curso de React.js: Navegación con React Router', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['react-router-curso'], modules: [] },
            { id: 'profesional-react-redux', title: 'Curso Profesional de React.js y Redux', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['profesional-react-redux'], modules: [] },
            { id: 'react-avanzado', title: 'Curso de React Avanzado', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['react-avanzado'], modules: [] },
            { id: 'react-typescript', title: 'Curso de React.js con TypeScript', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['react-typescript'], modules: [] },
        ]
      },
      {
        id: 'desarrollo-frontend-vue',
        title: 'Desarrollo Frontend con Vue.js',
        description: 'Descubre el framework progresivo de JavaScript, conocido por su curva de aprendizaje amigable.',
        courses: [
            { id: 'vue-intro-fundamentos', title: 'Curso de Vue.js: Introducción y Fundamentos', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['vue-intro-fundamentos'], modules: [] },
            { id: 'vue-componentes-composition', title: 'Curso de Vue.js: Componentes y Composition API', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['vue-componentes-composition'], modules: [] },
            { id: 'vue-reactividad-3', title: 'Curso de Reactividad con Vue.js 3', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['vue-reactividad-3'], modules: [] },
            { id: 'practico-vue', title: 'Curso Práctico de Vue.js', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['practico-vue'], modules: [] },
            { id: 'vue-router-curso-2', title: 'Curso de Vue.js: Navegación con Vue Router', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['vue-router-curso-2'], modules: [] },
            { id: 'vue-vuex', title: 'Curso de Vue.js: Manejo del Estado con Vuex', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['vue-vuex'], modules: [] },
            { id: 'vue-pinia', title: 'Curso de Vue.js: Manejo del Estado con Pinia', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['vue-pinia'], modules: [] },
            { id: 'basico-vue2', title: 'Curso Básico de Vue.js 2', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['basico-vue2'], modules: [] },
            { id: 'avanzado-vue2', title: 'Curso Avanzado de Vue.js 2', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['avanzado-vue2'], modules: [] },
            { id: 'testing-vue2', title: 'Curso de Testing con Vue.js 2', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['testing-vue2'], modules: [] },
            { id: 'unit-testing-vue3', title: 'Curso de Unit Testing en Vue.js 3', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['unit-testing-vue3'], modules: [] },
        ]
      },
      {
        id: 'devops-cloud-web',
        title: 'DevOps y Cloud para Desarrolladores Web',
        description: 'Integra desarrollo y operaciones para entregar aplicaciones de forma rápida y fiable.',
        courses: [
            { id: 'intro-devops', title: 'Curso de Introducción a DevOps', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-devops'], modules: [] },
            { id: 'profesional-devops', title: 'Curso Profesional de DevOps', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['profesional-devops'], modules: [] },
            { id: 'docker-fundamentos', title: 'Curso de Docker: Fundamentos', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['docker-fundamentos'], modules: [] },
            { id: 'docker-avanzado', title: 'Curso de Docker Avanzado', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['docker-avanzado'], modules: [] },
            { id: 'swarm-curso', title: 'Curso de Swarm', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['swarm-curso'], modules: [] },
            { id: 'kubernetes-curso', title: 'Curso de Kubernetes', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['kubernetes-curso'], modules: [] },
            { id: 'terraform-curso', title: 'Curso de Terraform', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['terraform-curso'], modules: [] },
            { id: 'iac-aws', title: 'Curso de Infraestructura Como Código en AWS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['iac-aws'], modules: [] },
            { id: 'github-actions-curso', title: 'Curso de GitHub Actions', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['github-actions-curso'], modules: [] },
            { id: 'azure-devops-ci-cd', title: 'Curso de Azure DevOps: Flujos de CI/CD', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['azure-devops-ci-cd'], modules: [] },
            { id: 'intro-deploy-apps', title: 'Curso de Introducción al Despliegue de Aplicaciones', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['intro-deploy-apps'], modules: [] },
            { id: 'serverless-framework-aws', title: 'Curso de Serverless Framework en AWS', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['serverless-framework-aws'], modules: [] },
            { id: 'avanzado-serverless-aws', title: 'Curso Avanzado de Serverless Framework en AWS', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['avanzado-serverless-aws'], modules: [] },
            { id: 'aws-cloud-practitioner', title: 'Curso AWS Cloud Practitioner Certification', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['aws-cloud-practitioner'], modules: [] },
            { id: 'intro-gcp', title: 'Curso de Introducción a Google Cloud Platform', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-gcp'], modules: [] },
            { id: 'fund-azure-az900', title: 'Curso de Fundamentos de Microsoft Azure (AZ-900)', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['fund-azure-az900'], modules: [] },
        ]
      },
      {
        id: 'diseno-desarrollo-frontend',
        title: 'Diseño y Desarrollo Frontend',
        description: 'Combina diseño y código para crear interfaces visualmente atractivas y funcionales.',
        courses: [
            { id: 'frontend-developer-curso', title: 'Curso de Frontend Developer', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['frontend-developer-curso'], modules: [] },
            { id: 'practico-frontend-developer', title: 'Curso Práctico de Frontend Developer', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['practico-frontend-developer'], modules: [] },
            { id: 'css-curso', title: 'Curso de CSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['css-curso'], modules: [] },
            { id: 'responsive-design-mobile-first', title: 'Curso de Responsive Design: Maquetación Mobile First', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['responsive-design-mobile-first'], modules: [] },
            { id: 'practico-maquetacion-css', title: 'Curso Práctico de Maquetación en CSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['practico-maquetacion-css'], modules: [] },
            { id: 'diseno-web-css-grid-flexbox', title: 'Curso de Diseño Web con CSS Grid y Flexbox', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['diseno-web-css-grid-flexbox'], modules: [] },
            { id: 'css-grid-basico', title: 'Curso de CSS Grid Básico', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['css-grid-basico'], modules: [] },
            { id: 'profesional-css-grid-layout', title: 'Curso Profesional de CSS Grid Layout', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['profesional-css-grid-layout'], modules: [] },
            { id: 'transformaciones-transiciones-css', title: 'Curso de Transformaciones y Transiciones en CSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['transformaciones-transiciones-css'], modules: [] },
            { id: 'animaciones-css', title: 'Curso de Animaciones con CSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['animaciones-css'], modules: [] },
            { id: 'fundamentos-sass', title: 'Curso de Fundamentos de Sass: Crea tu Primera Landing Page', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['fundamentos-sass'], modules: [] },
            { id: 'tailwindcss-curso', title: 'Curso de TailwindCSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['tailwindcss-curso'], modules: [] },
            { id: 'practico-maquetacion-animaciones-css', title: 'Curso Práctico de Maquetación y Animaciones con CSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['practico-maquetacion-animaciones-css'], modules: [] },
            { id: 'materialize-curso', title: 'Curso de Materialize', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['materialize-curso'], modules: [] },
        ]
      },
      {
        id: 'fundamentos-desarrollo-web',
        title: 'Fundamentos del Desarrollo Web Profesional',
        description: 'Sienta las bases para convertirte en un desarrollador web completo y competente.',
        courses: [
            { id: 'intro-web-historia', title: 'Curso de Introducción a la Web: Historia y Funcionamiento de Internet', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-web-historia'], modules: [] },
            { id: 'basico-computadores-informatica', title: 'Curso Básico de Computadores e Informática', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['basico-computadores-informatica'], modules: [] },
            { id: 'intro-terminal', title: 'Curso de Introducción a la Terminal y Línea de Comandos', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-terminal'], modules: [] },
            { id: 'fund-ingenieria-software', title: 'Curso de Fundamentos de Ingeniería de Software', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['fund-ingenieria-software'], modules: [] },
            { id: 'html-curso', title: 'Curso de HTML', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['html-curso'], modules: [] },
            { id: 'practico-html-css', title: 'Curso Práctico de HTML y CSS', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['practico-html-css'], modules: [] },
            { id: 'gratis-programacion-basica', title: 'Curso Gratis de Programación Básica', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['gratis-programacion-basica'], modules: [] },
            { id: 'git-github-curso', title: 'Curso de Git y GitHub', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['git-github-curso'], modules: [] },
        ]
      },
      {
        id: 'seguridad-web-api',
        title: 'Seguridad Web & API',
        description: 'Aprende a proteger tus aplicaciones web y APIs contra las amenazas más comunes.',
        courses: [
            { id: 'fund-criptografia', title: 'Curso de Fundamentos de Criptografía', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['fund-criptografia'], modules: [] },
            { id: 'owasp-top-10', title: 'Curso de OWASP Top 10: Riesgos en Aplicaciones', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['owasp-top-10'], modules: [] },
            { id: 'ciberseguridad-desarrollo-web', title: 'Curso de Ciberseguridad para Desarrollo Web', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['ciberseguridad-desarrollo-web'], modules: [] },
            { id: 'oauth-openid', title: 'Curso de OAuth 2.0 y OpenID Connect: Flujos de Autenticación y Casos de Estudio', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['oauth-openid'], modules: [] },
            { id: 'auth0-implementacion', title: 'Curso de Auth0: Implementación de Autenticación y Seguridad Web', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['auth0-implementacion'], modules: [] },
            { id: 'secretos-js-proteccion', title: 'Taller de Secretos Ocultos de JavaScript: Protección de Clases y Objetos', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['secretos-js-proteccion'], modules: [] },
            { id: 'nextjs-seguridad-owasp', title: 'Curso de Next.js: Seguridad Web con OWASP', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['nextjs-seguridad-owasp'], modules: [] },
            { id: 'nextjs-auth-curso', title: 'Curso de Next.js: Autenticación', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['nextjs-auth-curso'], modules: [] },
        ]
      },
      {
        id: 'testing-qa-web',
        title: 'Testing Automatizado y QA para Web',
        description: 'Asegura la calidad de tus aplicaciones web a través de pruebas automatizadas y QA.',
        courses: [
            { id: 'fund-pruebas-software', title: 'Curso de Fundamentos de Pruebas de Software', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['fund-pruebas-software'], modules: [] },
            { id: 'intro-automatizacion-pruebas', title: 'Curso de Introducción a la Automatización de Pruebas', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-automatizacion-pruebas'], modules: [] },
            { id: 'intro-testing-js', title: 'Curso de Introducción al Testing con JavaScript', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['intro-testing-js'], modules: [] },
            { id: 'react-testing-library', title: 'Curso de React Testing Library', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['react-testing-library'], modules: [] },
            { id: 'angular-unit-testing-servicios', title: 'Curso de Angular: Unit Testing para Servicios', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['angular-unit-testing-servicios'], modules: [] },
            { id: 'angular-unit-testing-componentes', title: 'Curso de Angular: Unit Testing para Componentes', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['angular-unit-testing-componentes'], modules: [] },
            { id: 'angular-unit-testing-formularios', title: 'Curso de Angular: Unit Testing para Formularios', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['angular-unit-testing-formularios'], modules: [] },
            { id: 'angular-unit-testing-rutas', title: 'Curso de Angular: Unit Testing para Rutas', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['angular-unit-testing-rutas'], modules: [] },
            { id: 'pruebas-unitarias-angular', title: 'Curso de Pruebas Unitarias en Angular', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['pruebas-unitarias-angular'], modules: [] },
            { id: 'automatizacion-cypress', title: 'Curso de Automatización de Pruebas UI con Cypress', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['automatizacion-cypress'], modules: [] },
            { id: 'automatizacion-backend-cypress', title: 'Curso de Automatización de Pruebas de Backend con Cypress', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['automatizacion-backend-cypress'], modules: [] },
            { id: 'cypress-avanzado', title: 'Curso de Cypress Avanzado', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['cypress-avanzado'], modules: [] },
            { id: 'automatizacion-puppeteer', title: 'Curso de Automatización de Pruebas con Puppeteer', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['automatizacion-puppeteer'], modules: [] },
            { id: 'avanzado-puppeteer', title: 'Curso Avanzado de Automatización de Pruebas con Puppeteer', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['avanzado-puppeteer'], modules: [] },
            { id: 'automatizacion-playwright', title: 'Curso de Automatización de Test con Playwright', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['automatizacion-playwright'], modules: [] },
            { id: 'e2e-testing-api-rest-nodejs', title: 'Curso de End to End Testing para APIs REST con Node.js', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['e2e-testing-api-rest-nodejs'], modules: [] },
            { id: 'performance-testing-nodejs-k6', title: 'Curso de Performance Testing en Node.js con K6', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['performance-testing-nodejs-k6'], modules: [] },
            { id: 'basico-testing-php-laravel', title: 'Curso Básico de Testing con PHP y Laravel', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['basico-testing-php-laravel'], modules: [] },
            { id: 'basico-testing-java', title: 'Curso Básico de Testing en Java', instructor: 'Code-E BOT', level: 'básico', pathId: 'desarrollo-web', imageUrl: images['basico-testing-java'], modules: [] },
            { id: 'unit-testing-csharp-dotnet', title: 'Curso de Unit Testing con C# y .NET', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['unit-testing-csharp-dotnet'], modules: [] },
            { id: 'unit-testing-go', title: 'Curso de Unit Testing en Go', instructor: 'Code-E BOT', level: 'avanzado', pathId: 'desarrollo-web', imageUrl: images['unit-testing-go'], modules: [] },
            { id: 'unit-testing-python', title: 'Curso de Unit Testing en Python', instructor: 'Code-E BOT', level: 'intermedio', pathId: 'desarrollo-web', imageUrl: images['unit-testing-python'], modules: [] },
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
                { id: 'prog-python', pathId: 'programacion', title: 'Curso de Fundamentos de Python', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['course-prog-python'], modules: [] },
                { id: 'prog-python-comp', pathId: 'programacion', title: 'Curso de Python: Comprehensions, Funciones y Manejo de Errores', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['prog-python-comp'], modules: [] },
                { id: 'prog-python-pip', pathId: 'programacion', title: 'Curso de Python: PIP y Entornos Virtuales', instructor: 'Code-E BOT', level: 'intermedio', imageUrl: images['prog-python-pip'], modules: [] },
            ],
            projects: [
              { title: "Analizador de Texto", description: "Crea una herramienta de línea de comandos que cuenta palabras, caracteres y oraciones en un archivo de texto.", level: "Fácil", githubUrl: "https://github.com/example/python-text-analyzer" },
              { title: "Juego del Ahorcado", description: "Implementa el clásico juego del ahorcado en la consola, con una lista de palabras predefinida.", level: "Fácil", githubUrl: "https://github.com/example/python-hangman-game" },
              { title: "Web Scraper de Noticias", description: "Desarrolla un script con Beautiful Soup o Scrapy para extraer titulares de tu sitio de noticias favorito.", level: "Intermedio", githubUrl: "https://github.com/example/python-news-scraper" },
              { title: "API REST con Flask o FastAPI", description: "Construye una API simple para gestionar una colección de libros o películas, con endpoints para CRUD.", level: "Intermedio", githubUrl: "https://github.com/example/python-simple-api" },
              { title: "Bot de Telegram o Discord", description: "Crea un bot que responda a comandos básicos, como mostrar el clima o contar un chiste.", level: "Intermedio", githubUrl: "https://github.com/example/python-discord-bot" },
            ]
        },
        {
            id: 'prog-js-path',
            title: 'Programación con JavaScript',
            description: 'Domina el lenguaje de la web para crear aplicaciones interactivas y dinámicas.',
            courses: [
                { id: 'prog-javascript', pathId: 'programacion', title: 'Curso de Fundamentos de JavaScript', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['course-prog-javascript'], modules: [] },
                { id: 'prog-js-closures', pathId: 'programacion', title: 'Curso de Closures y Scope en JavaScript', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['prog-js-closures'], modules: [] },
            ],
            projects: [
              { title: "Calculadora Interactiva", description: "Construye una calculadora funcional en una página web utilizando HTML, CSS y JavaScript puro.", level: "Fácil", githubUrl: "https://github.com/example/js-calculator" },
              { title: "Aplicación del Clima", description: "Crea una app que consulte una API de clima gratuita y muestre la temperatura y el pronóstico de una ciudad.", level: "Intermedio", githubUrl: "https://github.com/example/js-weather-app" },
              { title: "Juego de Memoria (Memorama)", description: "Desarrolla un juego de tarjetas de memoria que el usuario debe voltear para encontrar los pares.", level: "Intermedio", githubUrl: "https://github.com/example/js-memory-game" },
              { title: "Generador de Paletas de Colores", description: "Crea una herramienta que genere esquemas de colores aleatorios y permita al usuario copiarlos.", level: "Fácil", githubUrl: "https://github.com/example/js-color-palette-generator" },
              { title: "Lista de Tareas con LocalStorage", description: "Una aplicación de 'To-Do' que guarda las tareas en el almacenamiento local del navegador para que persistan.", level: "Fácil", githubUrl: "https://github.com/example/js-todo-list-localstorage" },
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
          { id: 'finanzas-emprendedores', pathId: 'negocios', title: 'Curso de Finanzas para Emprendedores', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['finanzas-emprendedores'], modules: [] },
          { id: 'analisis-financiero-excel', pathId: 'negocios', title: 'Curso de Análisis Financiero en Excel', instructor: 'Code-E BOT', level: 'intermedio', imageUrl: images['analisis-financiero-excel'], modules: [] },
        ],
      },
      {
        id: 'negocios-estrategia',
        title: 'Estrategia y Crecimiento Empresarial',
        description: 'Desarrolla planes de negocio sólidos y estrategias para escalar tu empresa.',
        courses: [
          { id: 'estrategia-negocios-digitales', pathId: 'negocios', title: 'Curso de Estrategias para Negocios Digitales', instructor: 'Code-E BOT', level: 'intermedio', imageUrl: images['estrategia-negocios-digitales'], modules: [] },
          { id: 'metricas-negocio', pathId: 'negocios', title: 'Curso de Métricas Esenciales de Negocio', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['metricas-negocio'], modules: [] },
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
          { id: 'english-entrevistas', pathId: 'english-academy', title: 'Curso de Inglés para Entrevistas de Trabajo', instructor: 'Code-E BOT', level: 'intermedio', imageUrl: images['english-entrevistas'], modules: [] },
          { id: 'english-negocios', pathId: 'english-academy', title: 'Curso de Comunicación de Negocios en Inglés', instructor: 'Code-E BOT', level: 'avanzado', imageUrl: images['english-negocios'], modules: [] },
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
          { id: 'rh-reclutamiento-tech', pathId: 'recursos-humanos', title: 'Curso de Reclutamiento y Selección de Talento Tech', instructor: 'Code-E BOT', level: 'intermedio', imageUrl: images['rh-reclutamiento-tech'], modules: [] },
        ],
      },
      {
        id: 'rh-cultura',
        title: 'Cultura y Employee Experience',
        description: 'Construye una cultura organizacional fuerte que atraiga y retenga al talento.',
        courses: [
          { id: 'rh-cultura-org', pathId: 'recursos-humanos', title: 'Curso de Cultura Organizacional en Startups', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['rh-cultura-org'], modules: [] },
        ],
      },
    ],
  },
];

const videoIdKeys = Object.keys(videos) as (keyof typeof videos)[];

// Function to generate detailed content for each lesson
const generateDetailedLesson = (course: Course, module: CourseModule, lesson: Lesson, lessonIndex: number): Lesson => {
    const videoKey = videoIdKeys[(lesson.order - 1) % videoIdKeys.length];
    const videoId = videos[videoKey];
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


// --- Weekly Challenges Data ---
export const weeklyChallenges: WeeklyChallenge[] = [
    {
        language: "JavaScript/TypeScript",
        iconKey: "javascript",
        title: "Clon de Trello en Tiempo Real",
        description: "Construye un tablero Kanban funcional similar a Trello. Los usuarios deben poder crear tableros, listas y tarjetas. Las tarjetas deben ser arrastrables (drag-and-drop) entre listas, y todos los cambios deben reflejarse en tiempo real para todos los usuarios conectados.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.IO", "React-dnd"],
        inspirationUrl: "https://github.com/example/trello-clone"
    },
    {
        language: "Python",
        iconKey: "python",
        title: "Plataforma de Trading de Criptomonedas (Simulada)",
        description: "Crea una aplicación web que simule el trading de criptomonedas. Conéctate a una API pública (ej. CoinGecko) para obtener precios en tiempo real. Los usuarios deben poder registrarse, recibir un saldo virtual y 'comprar/vender' criptos. Incluye gráficos históricos de precios y un panel de portafolio.",
        technologies: ["Django", "Django REST Framework", "Celery", "Redis", "Chart.js", "PostgreSQL"],
        inspirationUrl: "https://github.com/example/crypto-trader"
    },
    {
        language: "Java",
        iconKey: "java",
        title: "Sistema de Reservas de Vuelos",
        description: "Desarrolla un sistema backend robusto para una aerolínea. Debe gestionar vuelos, asientos, precios dinámicos, reservas y perfiles de usuario. Implementa una API REST completa y segura con manejo de transacciones para garantizar la integridad de los datos.",
        technologies: ["Spring Boot", "Spring Security", "JPA/Hibernate", "PostgreSQL", "Maven/Gradle", "JUnit 5"],
        inspirationUrl: "https://github.com/example/flight-booking-system"
    },
    {
        language: "Go",
        iconKey: "go",
        title: "Proxy Inverso y Balanceador de Carga",
        description: "Crea una aplicación de alto rendimiento en Go que actúe como un proxy inverso y un balanceador de carga. Debe poder distribuir el tráfico entrante entre múltiples servidores backend utilizando diferentes algoritmos (ej. Round Robin, Least Connections).",
        technologies: ["Go (net/http)", "Goroutines", "Channels", "Docker"],
        inspirationUrl: "https://github.com/example/go-load-balancer"
    },
    {
        language: "Rust",
        iconKey: "rust",
        title: "Implementación de una Blockchain Simple",
        description: "Construye una pequeña blockchain desde cero. Debe incluir la creación de bloques, el minado con prueba de trabajo (Proof of Work), la validación de la cadena y una API simple para interactuar con ella. Enfócate en la seguridad y la concurrencia que ofrece Rust.",
        technologies: ["Rust", "Tokio", "Serde", "SHA-256", "Actix-web/Axum"],
        inspirationUrl: "https://github.com/example/rust-blockchain"
    },
    {
        language: "PHP",
        iconKey: "php",
        title: "Plataforma E-commerce Multi-vendedor (Marketplace)",
        description: "Crea un marketplace completo donde múltiples vendedores puedan registrarse, publicar sus productos y gestionar sus ventas. La plataforma debe manejar carritos de compra, pasarelas de pago (simuladas), perfiles de vendedor y reseñas de productos.",
        technologies: ["Laravel", "MySQL/PostgreSQL", "Livewire/Vue.js", "Stripe API (Sandbox)", "PHPUnit"],
        inspirationUrl: "https://github.com/example/php-marketplace"
    },
    {
        language: "C#",
        iconKey: "csharp",
        title: "Motor de Videojuego 2D Básico",
        description: "Utilizando .NET y una librería gráfica como MonoGame o Stride, crea un motor de juego 2D básico. Debe incluir un bucle de juego, renderizado de sprites, manejo de entrada, detección de colisiones simples y un sistema de entidades y componentes.",
        technologies: [".NET", "MonoGame/Stride", "C#", "Entity-Component-System (ECS)"],
        inspirationUrl: "https://github.com/example/csharp-game-engine"
    },
    {
        language: "Swift",
        iconKey: "swift",
        title: "Clon de Apple Music para iOS",
        description: "Desarrolla una aplicación para iOS que replique las funcionalidades principales de Apple Music. Incluye una biblioteca de canciones (local o desde una API), listas de reproducción, un reproductor de audio con controles y una interfaz de usuario pulida que siga las guías de diseño de Apple.",
        technologies: ["SwiftUI", "Combine", "AVFoundation", "Core Data/SwiftData"],
        inspirationUrl: "https://github.com/example/swift-music-app"
    },
    {
        language: "Kotlin",
        iconKey: "kotlin",
        title: "Aplicación de Fitness y Seguimiento de Ejercicios",
        description: "Crea una aplicación para Android que permita a los usuarios registrar sus entrenamientos, seguir su progreso a lo largo del tiempo y visualizar estadísticas. Utiliza los componentes de Jetpack, Coroutines para operaciones asíncronas y almacena los datos localmente con Room.",
        technologies: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Material Design 3"],
        inspirationUrl: "https://github.com/example/kotlin-fitness-app"
    },
    {
        language: "TypeScript (Backend)",
        iconKey: "typescript",
        title: "API para un Sistema de Gestión de Inventarios",
        description: "Diseña y construye una API robusta y bien tipada para gestionar el inventario de un almacén. Debe incluir manejo de productos, proveedores, niveles de stock, órdenes de compra y alertas de stock bajo. Utiliza un framework como NestJS o AdonisJS para una arquitectura sólida.",
        technologies: ["TypeScript", "NestJS/AdonisJS", "TypeORM/Prisma", "PostgreSQL", "JWT", "Jest"],
        inspirationUrl: "https://github.com/example/ts-inventory-api"
    }
];

// --- Termux Data ---
export const termuxGuides: TermuxGuide[] = [
    {
        id: 'git',
        title: 'Git y GitHub',
        description: 'Aprende a versionar tu código y colaborar en proyectos usando Git desde Termux.',
        steps: [
            { title: 'Instalar Git', description: 'Instala el paquete de Git.', command: 'pkg install git' },
            { title: 'Configurar tu identidad', description: 'Establece tu nombre de usuario y correo electrónico. Reemplaza los valores de ejemplo.', command: 'git config --global user.name "Tu Nombre"\ngit config --global user.email "tu@email.com"' },
            { title: 'Clonar un repositorio', description: 'Trae un repositorio de GitHub a tu dispositivo.', command: 'git clone https://github.com/usuario/repositorio.git' },
        ],
    },
    {
        id: 'node',
        title: 'Servidor con Node.js',
        description: 'Monta un entorno de desarrollo completo para JavaScript y crea un servidor web.',
        steps: [
            { title: 'Instalar Node.js', description: 'Instala la última versión LTS de Node.js.', command: 'pkg install nodejs-lts' },
            { title: 'Crear un proyecto', description: 'Inicia un nuevo proyecto de Node.js y crea un archivo de servidor.', command: 'npm init -y\ntouch server.js' },
            { title: 'Instalar Express', description: 'Añade Express, un popular framework para servidores web.', command: 'npm install express' },
        ],
    },
    {
        id: 'python',
        title: 'Scripts y Bots con Python',
        description: 'Usa el poder de Python para automatizar tareas y crear bots interactivos.',
        steps: [
            { title: 'Instalar Python', description: 'Instala la versión más reciente de Python.', command: 'pkg install python' },
            { title: 'Instalar PIP', description: 'Asegúrate de tener el gestor de paquetes de Python.', command: 'python -m ensurepip --upgrade' },
            { title: 'Instalar una librería', description: 'Por ejemplo, instala la librería "requests" para hacer peticiones HTTP.', command: 'pip install requests' },
        ],
    },
];

export const termuxProjects: TermuxProject[] = [
    {
        id: 'project-node-server',
        title: 'Servidor Web Básico',
        description: 'Crea un servidor web simple con Node.js y Express que responda a peticiones en tu red local.',
        icon: 'nodejs',
        technologies: ['Node.js', 'Express', 'npm'],
        steps: [
            { title: 'Instalar Node.js', description: 'Asegúrate de tener Node.js instalado.', command: 'pkg install nodejs-lts' },
            { title: 'Crear carpeta del proyecto', description: 'Crea un directorio para tu servidor y entra en él.', command: 'mkdir mi-servidor && cd mi-servidor' },
            { title: 'Inicializar el proyecto', description: 'Crea un archivo package.json para gestionar las dependencias.', command: 'npm init -y' },
            { title: 'Instalar Express', description: 'Añade el framework Express a tu proyecto.', command: 'npm install express' },
            { title: 'Crear el archivo del servidor', description: 'Crea un archivo llamado server.js y añade el código para levantar el servidor.', command: 'touch server.js' },
            { title: 'Editar el archivo', description: 'Usa un editor de texto como nano o vim para pegar el código del servidor en server.js.', command: 'nano server.js' },
            { title: 'Ejecutar el servidor', description: 'Inicia tu servidor. Podrás acceder a él desde el navegador de tu teléfono en http://localhost:3000.', command: 'node server.js' },
        ]
    },
    {
        id: 'project-python-bot',
        title: 'Bot de Telegram',
        description: 'Programa un bot de Telegram simple en Python que responda a comandos básicos.',
        icon: 'python',
        technologies: ['Python', 'pip', 'python-telegram-bot'],
        steps: [
            { title: 'Instalar Python', description: 'Asegúrate de tener Python instalado.', command: 'pkg install python' },
            { title: 'Instalar la librería del bot', description: 'Instala la librería necesaria para interactuar con la API de Telegram.', command: 'pip install python-telegram-bot' },
            { title: 'Obtener un Token', description: 'Habla con el "BotFather" en Telegram para crear un nuevo bot y obtener tu token de API.' },
            { title: 'Crear el script', description: 'Crea un archivo (ej. bot.py) y escribe el código para que tu bot responda a mensajes.', command: 'nano bot.py' },
            { title: 'Ejecutar el bot', description: 'Inicia tu bot. Permanecerá activo escuchando mensajes.', command: 'python bot.py' },
        ]
    },
    {
        id: 'project-static-site',
        title: 'Portfolio Estático',
        description: 'Crea una página web simple para tu portfolio usando solo HTML y CSS y sírvela localmente.',
        icon: 'static',
        technologies: ['HTML', 'CSS', 'Python'],
        steps: [
            { title: 'Crear archivos', description: 'Crea los archivos básicos para tu sitio web.', command: 'touch index.html style.css' },
            { title: 'Escribir el contenido', description: 'Usa nano o vim para escribir el HTML de tu portfolio en index.html y los estilos en style.css.' },
            { title: 'Iniciar un servidor local', description: 'Python tiene un servidor web incorporado muy útil para servir archivos locales.', command: 'python -m http.server 8080' },
            { title: 'Ver tu sitio', description: 'Abre el navegador en tu teléfono y ve a http://localhost:8080 para ver tu página.' },
        ]
    },
];

    