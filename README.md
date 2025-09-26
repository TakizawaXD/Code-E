# Code-E: Plataforma de Aprendizaje en Línea

Code-E es una plataforma web moderna para el aprendizaje en línea, diseñada para ofrecer a los usuarios una experiencia educativa interactiva y comunitaria. Construida con Next.js y Firebase, la aplicación permite a los usuarios explorar cursos, seguir rutas de aprendizaje, realizar cuestionarios y participar en foros de discusión.

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

-   **Integración de IA:** Incorporar herramientas de inteligencia artificial (con Genkit) para ofrecer tutorías personalizadas, corrección automática de código y recomendaciones de aprendizaje adaptativas.
-   **Gamificación Avanzada:** Desarrollar un sistema completo de puntos, insignias (badges) y tablas de clasificación para motivar a los estudiantes y recompensar su progreso.
-   **Bolsa de Trabajo y Perfiles Profesionales:** Crear un módulo donde las empresas puedan reclutar talento directamente desde la plataforma, basándose en los logros, certificados y portafolios de los estudiantes.
-   **Contenido Interactivo Avanzado:** Más allá de los videos y cuestionarios, se espera añadir "playgrounds" de código interactivos y la posibilidad de que los usuarios suban y compartan sus propios proyectos.

## ✨ Características Principales

-   **Autenticación de Usuarios:** Sistema completo de registro e inicio de sesión con correo y contraseña.
-   **Catálogo de Cursos:** Explora cursos organizados por categorías y rutas de aprendizaje.
-   **Progreso del Curso:** Sigue tu avance en cada curso, marca lecciones como completadas y realiza cuestionarios.
-   **Panel de Usuario:** Un dashboard personal donde puedes ver tus cursos en progreso y los certificados obtenidos.
-   **Comunidad y Foros:** Un espacio para que los usuarios inicien discusiones, hagan preguntas y colaboren entre sí.
-   **Diseño Responsivo:** Interfaz de usuario optimizada para una experiencia fluida en computadoras de escritorio y dispositivos móviles.
-   **Tema Oscuro y Claro:** Personaliza la apariencia de la plataforma según tus preferencias.

---

## 🚀 Stack Tecnológico

-   **Framework Frontend:** [Next.js](https://nextjs.org/) (con App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **UI y Estilos:** [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
-   **Backend y Base de Datos:** [Firebase](https://firebase.google.com/) (Authentication, Firestore)
-   **Gestión de Formularios:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Iconos:** [Lucide React](https://lucide.dev/)

---

## 🏗️ Arquitectura de la Aplicación

He aquí un diagrama de alto nivel que ilustra la arquitectura de Code-E:

```
+---------------------------+      +---------------------------+      +---------------------------+
|      Cliente (Navegador)  |      |      Servidor (Next.js)   |      |    Servicios de Backend   |
|---------------------------|      |---------------------------|      |---------------------------|
|                           |      |                           |      |                           |
|   React (ShadCN UI)       | <--> |   Routing (App Router)    |      |                           |
|   - Componentes           |      |   - Páginas (Server/Client) |      |   Firebase Authentication |
|   - Vistas (Cursos, Dash) |      |   - API Routes / Actions    | <--> |   - Gestión de Usuarios   |
|   - Hooks (useUser, etc.) |      |                           |      |                           |
|                           |      |                           |      |                           |
|   Tailwind CSS            |      |   Lógica de Negocio       |      |   Firestore (Base de Datos) |
|   - Estilos y Tema        |      |   - src/lib/data.ts       |      |   - Cursos, Progreso, etc.  |
|                           |      |                           |      |                           |
+---------------------------+      +---------------------------+      +---------------------------+
       |                                      ^
       | (Peticiones HTTPS)                   | (SDK de Firebase)
       |                                      |
       +--------------------------------------+

```

-   **Cliente (Navegador):** Es la interfaz de usuario con la que interactúan los usuarios. Construida con React y componentes de ShadCN UI, se encarga de presentar la información y capturar las interacciones.
-   **Servidor (Next.js):** Gestiona el enrutamiento, el renderizado de páginas (tanto en el servidor como en el cliente) y la lógica de negocio. Se comunica con Firebase a través del SDK para obtener y escribir datos.
-   **Servicios de Backend (Firebase):** Proporciona los servicios de autenticación y la base de datos NoSQL (Firestore) para almacenar toda la información dinámica de la aplicación, como perfiles de usuario, progreso de cursos y discusiones del foro.

---

## 📁 Estructura de Carpetas

-   **`/src/app`**: Contiene las rutas principales de la aplicación siguiendo la convención del App Router de Next.js.
    -   **`/(main)`**: Layout principal para las páginas autenticadas y públicas (header, footer).
    -   **`/auth`**: Layout y páginas para el flujo de autenticación (login, signup).
-   **`/src/components`**: Componentes de React reutilizables.
    -   **`/ui`**: Componentes base de ShadCN UI.
    -   **`/layout`**: Componentes estructurales como el Header y la Navegación.
-   **`/src/lib`**: Contiene la lógica y los datos centrales de la aplicación.
    -   **`data.ts`**: Simula una base de datos con datos estáticos para cursos y lecciones.
    -   **`types.ts`**: Definiciones de tipos de TypeScript para todo el proyecto.
    -   **`seed.ts`**: Script para poblar la base de datos de Firestore.
-   **`/src/firebase`**: Configuración y hooks personalizados para interactuar con Firebase.
    -   **`provider.tsx`**: Proveedor de contexto para los servicios de Firebase.
    -   **`use-collection.tsx` / `use-doc.tsx`**: Hooks para suscripciones en tiempo real a Firestore.
-   **`/src/ai`**: Reservado para futuras integraciones de IA con Genkit.

---

## 🛠️ Cómo Empezar

### 1. Requisitos Previos

-   Node.js (versión 18 o superior)
-   `pnpm` o `npm` como gestor de paquetes

### 2. Configuración del Proyecto

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

### 3. Seeding de la Base de Datos

Para poblar tu base de datos de Firestore con el conjunto inicial de cursos, rutas de aprendizaje y lecciones, ejecuta el siguiente comando desde tu terminal:

```bash
npx tsx src/lib/seed.ts
```

Este comando ejecuta el script de *seeding* que escribirá los datos necesarios en tu instancia de Firestore. Solo necesitas ejecutarlo una vez para configurar el proyecto.

### 4. Ejecutar el Servidor de Desarrollo

Una vez que la base de datos esté poblada, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

### 5. Añadir o Modificar Cursos

Todo el contenido de los cursos se gestiona dentro del archivo `src/lib/seed.ts`. Para añadir, editar o eliminar un curso, sigue estos pasos:

1.  **Abre `src/lib/seed.ts`**: Dentro de este archivo, encontrarás arrays de datos para `learningPaths`, `courses`, y `modulesAndLessons`.
2.  **Modifica los datos**: Añade o edita los objetos en estos arrays para reflejar el contenido que deseas.
3.  **Vuelve a ejecutar el script de seeding**:
    ```bash
    npx tsx src/lib/seed.ts
    ```
    Esto sobrescribirá los datos de la base de datos con los cambios que has realizado en el archivo.