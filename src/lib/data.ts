import type { Notification, LearningPath, Course, CourseModule, Lesson, School } from "@/lib/types";
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
            ]
        },
        {
            id: 'prog-js-path',
            title: 'Programación con JavaScript',
            description: 'Domina el lenguaje de la web para crear aplicaciones interactivas y dinámicas.',
            courses: [
                { id: 'prog-javascript', pathId: 'programacion', title: 'Curso de Fundamentos de JavaScript', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['course-prog-javascript'], modules: [] },
                { id: 'prog-js-closures', pathId: 'programacion', title: 'Curso de Closures y Scope en JavaScript', instructor: 'Code-E BOT', level: 'básico', imageUrl: images['prog-js-closures'], modules: [] },
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
