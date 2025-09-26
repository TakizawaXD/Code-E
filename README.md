# Code-E: Plataforma de Aprendizaje en Línea

Code-E es una plataforma web moderna para el aprendizaje en línea, diseñada para ofrecer a los usuarios una experiencia educativa interactiva y comunitaria. Construida con Next.js para el frontend y un backend de Python (Flask), la aplicación permite a los usuarios explorar cursos, seguir rutas de aprendizaje y participar en foros de discusión.

## 🎯 Propósito, Audiencia y Visión

### ¿Por qué y para qué fue creado este proyecto?

El proyecto Code-E nació de la necesidad de crear una plataforma de e-learning que no solo se centre en el contenido, sino también en la **comunidad** y la **aplicación práctica**. A diferencia de otras plataformas donde el aprendizaje puede ser una experiencia solitaria, Code-E está diseñado para fomentar la interacción, la colaboración y el feedback entre estudiantes y profesionales. El objetivo principal es construir un ecosistema donde los usuarios puedan:

-   **Aprender haciendo:** A través de ejercicios prácticos, proyectos y cuestionarios.
-   **Crecer en comunidad:** Participando en foros, debates y colaborando con otros estudiantes.
-   **Validar sus habilidades:** Obteniendo certificados y construyendo un portafolio visible.

### ¿Cuál es el público de origen?

Code-E está dirigido a un público amplio y diverso, unido por el deseo de aprender y crecer en el sector tecnológico:

-   **Estudiantes y Recién Graduados:** Jóvenes que buscan una base sólida en desarrollo, diseño o ciencia de datos para iniciar su carrera profesional.
-   **Profesionales en Transición (Reskilling):** Personas que desean cambiar de carrera e ingresar al mundo de la tecnología.
-   **Desarrolladores y Tecnólogos (Upskilling):** Profesionales que ya trabajan en el sector pero necesitan actualizar sus habilidades o aprender nuevas tecnologías.
-   **Autodidactas y Entusiastas:** Cualquier persona con curiosidad y ganas de aprender a programar o a dominar nuevas herramientas digitales a su propio ritmo.

### ¿Qué se tiene de expectativas de este proyecto?

La visión a largo plazo para Code-E es convertirla en una plataforma de referencia en el aprendizaje tecnológico en español. Las expectativas de futuro incluyen:

-   **Integración de IA:** Incorporar herramientas de inteligencia artificial para ofrecer tutorías personalizadas y recomendaciones de aprendizaje.
-   **Gamificación Avanzada:** Desarrollar un sistema completo de puntos, insignias y tablas de clasificación para motivar a los estudiantes.
-   **Bolsa de Trabajo:** Crear un módulo donde las empresas puedan reclutar talento directamente desde la plataforma.

## ✨ Características Principales

-   **Autenticación de Usuarios:** Sistema de registro e inicio de sesión.
-   **Catálogo de Cursos:** Explora cursos organizados por categorías y rutas de aprendizaje.
-   **Progreso del Curso:** Sigue tu avance en cada curso y marca lecciones como completadas.
-   **Panel de Usuario:** Un dashboard personal para ver tus cursos y progreso.
-   **Comunidad y Foros:** Un espacio para que los usuarios inicien discusiones y colaboren.
-   **Diseño Responsivo:** Interfaz de usuario optimizada para escritorio y móviles.

---

## 🚀 Stack Tecnológico

-   **Framework Frontend:** [Next.js](https://nextjs.org/) (con App Router)
-   **Backend:** [Python](https://www.python.org/) con [Flask](https://flask.palletsprojects.com/)
-   **Base de Datos:** [MySQL](https://www.mysql.com/) (local)
-   **Lenguaje (Frontend):** [TypeScript](https://www.typescriptlang.org/)
-   **UI y Estilos:** [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
-   **Iconos:** [Lucide React](https://lucide.dev/)

---

## 🏗️ Arquitectura de la Aplicación

He aquí un diagrama de alto nivel que ilustra la arquitectura de Code-E:

```
+---------------------------+      +---------------------------+      +---------------------------+
|      Cliente (Navegador)  |      |      Servidor (Next.js)   |      |      Servidor (Flask)     |
|---------------------------|      |---------------------------|      |---------------------------|
|                           |      |                           |      |                           |
|   React (ShadCN UI)       | <--> |   Routing (App Router)    |      |    API Endpoints (REST)   |
|   - Componentes           |      |   - Páginas (Server/Client) | <--> |   - /api/courses          |
|   - Vistas (Cursos, Dash) |      |   - Server Actions        |      |   - /api/users            |
|                           |      |                           |      |   - Lógica de negocio     |
|                           |      |                           |      |                           |
|   Tailwind CSS            |      |   Lógica de Presentación  |      |                           |
|   - Estilos y Tema        |      |                           |      |                           |
+---------------------------+      +---------------------------+      +---------------------------+
                                                                             |
       (Peticiones HTTP/API)                                                 | (Conector MySQL)
                                                                             |
                                                                    +--------------------+
                                                                    |   Base de Datos    |
                                                                    |      (MySQL)       |
                                                                    +--------------------+
```

-   **Cliente (Navegador):** La interfaz de usuario construida con React, Next.js y ShadCN UI.
-   **Servidor (Next.js):** Gestiona el renderizado de páginas y se comunica con el backend de Flask a través de llamadas a su API REST.
-   **Servidor (Flask):** Provee una API REST que maneja toda la lógica de negocio, incluyendo la autenticación de usuarios y la interacción con la base de datos MySQL.
-   **Base de Datos (MySQL):** Almacena toda la información de la aplicación, como usuarios, cursos, progreso, etc.

---

## 🗃️ Esquema de la Base de Datos (MySQL)

A continuación se detalla la estructura de tablas y relaciones para la base de datos MySQL. Para ver el script SQL completo para la creación de estas tablas, consulta el archivo `docs/schema.sql`.

![Diagrama de la Base de Datos](https://github.com/TakizawaXD/Code-E/blob/main/img/diagram-export-26-9-2025-9_22_24-a.-m..png?raw=true)

-   **`users`**: Almacena la información de los usuarios.
    -   `id` (PK), `name`, `username`, `email`, `password_hash`, `created_at`
-   **`learning_paths`**: Agrupa los cursos en rutas de aprendizaje.
    -   `id` (PK), `title`, `description`
-   **`courses`**: Contiene los detalles de cada curso.
    -   `id` (PK), `title`, `description`, `instructor_name`, `path_id` (FK a `learning_paths`)
-   **`modules`**: Representa un módulo o sección dentro de un curso.
    -   `id` (PK), `title`, `course_id` (FK a `courses`), `order`
-   **`lessons`**: Contiene el material de una lección individual.
    -   `id` (PK), `title`, `content` (TEXT), `video_url`, `module_id` (FK a `modules`), `order`
-   **`progress`**: Rastrea el progreso de un usuario en un curso.
    -   `id` (PK), `user_id` (FK a `users`), `course_id` (FK a `courses`), `completed_lessons` (JSON o tabla pivote), `status` ('in_progress', 'completed')
-   **`forum_threads`**: Modela una discusión en el foro.
    -   `id` (PK), `title`, `content` (TEXT), `user_id` (FK a `users`), `created_at`
-   **`forum_posts`**: Representa una respuesta dentro de una discusión.
    -   `id` (PK), `content` (TEXT), `thread_id` (FK a `forum_threads`), `user_id` (FK a `users`), `created_at`

---

## 📁 Estructura de Carpetas

-   **`/src/app`**: Rutas principales de la aplicación (App Router de Next.js).
-   **`/src/components`**: Componentes de React reutilizables (UI, layout, etc.).
-   **`/src/lib`**: Lógica de cliente, tipos de TypeScript y datos estáticos.
-   **`/docs`**: Contiene documentación adicional, como el esquema SQL de la base de datos.
-   **`/backend`**: (Directorio sugerido) Contendría la aplicación Flask, modelos de datos y lógica de la API.

---

## 🛠️ Cómo Empezar

### 1. Requisitos Previos

-   Node.js (versión 18 o superior)
-   `npm` o `pnpm`
-   Python (versión 3.8 o superior) y `pip`
-   Un servidor de MySQL local instalado y en ejecución

### 2. Configuración del Frontend

1.  **Clona el repositorio e instala dependencias:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    npm install
    ```
2.  **Inicia el servidor de desarrollo de Next.js:**
    ```bash
    npm run dev
    ```

### 3. Configuración del Backend

1.  **Navega a la carpeta del backend y crea un entorno virtual:**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
    ```
2.  **Instala las dependencias de Python:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Configura la base de datos:**
    -   Crea una base de datos en tu servidor MySQL.
    -   Configura la cadena de conexión en un archivo `.env` dentro de la carpeta `backend`.
    -   Ejecuta el script `docs/schema.sql` en tu cliente de MySQL para crear las tablas.
4.  **Inicia el servidor de Flask:**
    ```bash
    flask run
    ```

Ahora, la aplicación Next.js debería poder comunicarse con tu API de Flask local.

URL: https://codeeapp.netlify.app/
