# Kursor: Plataforma de Aprendizaje en Línea con Next.js y Firebase

<p align="center">
  <img src="https://picsum.photos/seed/kursor-logo/1200/630" alt="Kursor Hero Image" data-ai-hint="online learning platform" />
</p>

**Kursor** es una plataforma web moderna y completa para el aprendizaje en línea, construida con un stack tecnológico de vanguardia que incluye Next.js, TypeScript, Firebase, ShadCN UI y Tailwind CSS. El proyecto está diseñado para ofrecer una experiencia educativa interactiva, comunitaria y altamente escalable.

## 🎯 Propósito, Audiencia y Visión

### ¿Por qué Kursor?

Kursor fue creado para ser más que un simple repositorio de cursos. Es una plataforma viva que pone énfasis en la **comunidad**, la **interacción** y el **aprendizaje práctico**. A diferencia de las experiencias de e-learning solitarias, Kursor fomenta la colaboración y la comunicación entre estudiantes, creando un ecosistema de crecimiento continuo.

### ¿A quién está dirigido?

*   **Estudiantes y Autodidactas:** Personas que buscan una base sólida en tecnología para iniciar o potenciar su carrera.
*   **Profesionales en Transición (Reskilling):** Aquellos que desean cambiar de carrera e ingresar al mundo de la tecnología.
*   **Desarrolladores y Tecnólogos (Upskilling):** Profesionales que necesitan actualizarse con nuevas herramientas y frameworks.

### Visión a Futuro

La visión es convertir a Kursor en una plataforma de referencia para el aprendizaje tecnológico, incorporando IA para tutorías personalizadas, gamificación avanzada para motivar a los usuarios y una bolsa de trabajo integrada para conectar talento con oportunidades.

## ✨ Características Principales

*   **Autenticación con Firebase:** Sistema de registro e inicio de sesión seguro con correo/contraseña y proveedores sociales (Google).
*   **Catálogo de Cursos Dinámico:** Cursos organizados por escuelas y rutas de aprendizaje, cargados desde una base de datos Firestore.
*   **Progreso del Usuario:** Seguimiento en tiempo real del avance en cada curso y lección.
*   **Panel de Usuario (Dashboard):** Vista personalizada con cursos en progreso, estadísticas y puntos de gamificación.
*   **Comunicación en Tiempo Real:** Un chat global para la comunidad y secciones de comentarios en cada lección, todo potenciado por Firestore.
*   **Retos Semanales:** Desafíos de programación para poner a prueba las habilidades de los usuarios.
*   **Guías Interactivas:** Secciones de contenido especializado, como la guía de preparación para entrevistas.
*   **Interfaz Moderna y Responsiva:** UI construida con ShadCN y Tailwind CSS, optimizada para cualquier dispositivo.
*   **Temas Personalizables:** Múltiples temas de colores y modo claro/oscuro para personalizar la experiencia del usuario.

---

## 🚀 Stack Tecnológico

*   **Framework Frontend:** [Next.js](https://nextjs.org/) (con App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Backend y Base de Datos:** [Firebase](https://firebase.google.com/) (Firestore, Authentication)
*   **UI y Estilos:** [React](httpss://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Gestión de Formularios:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **Manejo de Fechas:** [date-fns](https://date-fns.org/)

---

## 🏗️ Arquitectura de la Aplicación

Kursor utiliza una arquitectura moderna basada en componentes de servidor y cliente de Next.js, con Firebase como backend serverless.

```
+---------------------------+      +-----------------------------------+      +-------------------------+
|      Cliente (Navegador)  |      |      Servidor Next.js (Vercel)    |      |      Firebase (Google)  |
|---------------------------|      |-----------------------------------|      |-------------------------|
|                           |      |                                   |      |                         |
|   React (ShadCN UI)       | <--> |   - Páginas (Server/Client Comp.) | <--> |   - Firestore (DB)      |
|   - Vistas Interactivas   |      |   - Server Actions                |      |   - Authentication      |
|   - Hooks de Firebase     |      |   - API Routes (si es necesario)  |      |   - Security Rules      |
|   (useUser, useCollection)|      |                                   |      |                         |
|                           |      +-----------------------------------+      +-------------------------+
|   Tailwind CSS            |
|                           |
+---------------------------+
       (Suscripciones en tiempo real con WebSockets)
```

-   **Cliente (Navegador):** Construido con **React** y componentes **ShadCN UI**. Se comunica directamente con Firebase para obtener datos en tiempo real (`useCollection`, `useDoc`) y realizar acciones.
-   **Servidor Next.js:** Sirve los componentes de servidor, maneja la lógica de las **Server Actions** para operaciones seguras (como otorgar puntos) y renderiza las páginas iniciales.
-   **Firebase:** Actúa como el backend completo (BaaS):
    -   **Firestore:** Base de datos NoSQL en tiempo real para almacenar toda la información (usuarios, cursos, comentarios, etc.).
    -   **Authentication:** Gestiona el registro, inicio de sesión y la seguridad de las sesiones de usuario.
    -   **Security Rules:** Definen la lógica de permisos para proteger los datos en Firestore.

---

## 🗃️ Modelo de Datos en Firestore

La estructura de la base de datos en Firestore está diseñada para ser escalable y eficiente.

*   `users/{userId}`: Almacena el perfil público de cada usuario (nombre, puntos, biografía, etc.).
    *   Subcolección `enrolledCourses/{courseId}`: Registra los cursos en los que un usuario se ha inscrito.
    *   Subcolección `progress/{courseId}/lessons/{lessonId}`: Guarda el progreso de cada lección completada por un usuario.
*   `courses/{courseId}`: Contiene la información estática de cada curso.
    *   Subcolección `modules/{moduleId}`: Almacena los módulos de un curso.
        *   Subcolección `lessons/{lessonId}`: Contiene los detalles de cada lección.
*   `lessons/{lessonId}/comments/{commentId}`: Almacena los comentarios de cada lección.
*   `comunicacion/{messageId}`: Contiene los mensajes del chat global en tiempo real.

Este modelo permite consultas eficientes y seguras, donde los usuarios solo pueden acceder y modificar los datos permitidos por las **Firestore Security Rules**.

---

## 📁 Estructura de Carpetas

La estructura del proyecto está organizada para mantener una clara separación de responsabilidades.

-   **/src/app/**: Contiene las rutas de la aplicación usando el App Router de Next.js.
    -   `/(main)`: Grupo de rutas para las páginas principales de la aplicación.
    -   `/auth`: Grupo de rutas para las páginas de autenticación.
    -   `layout.tsx`, `page.tsx`: Archivos de diseño y página para cada ruta.
-   **/src/components/**: Componentes de React reutilizables.
    -   `/ui`: Componentes de UI de ShadCN (Button, Card, etc.).
    -   `/layout`: Componentes estructurales como el Header y la MainNav.
-   **/src/firebase/**: Centraliza toda la configuración y la lógica de Firebase.
    -   `config.ts`: Configuración del proyecto de Firebase.
    -   `client-provider.tsx`: Proveedor que inicializa Firebase en el cliente.
    -   `provider.tsx`: Contexto de React que distribuye las instancias de Firebase y el estado del usuario.
    -   `use-collection.tsx`, `use-doc.tsx`: Hooks para la suscripción a datos de Firestore en tiempo real.
-   **/src/lib/**: Lógica de cliente, tipos, y datos estáticos.
    -   `data.ts`: Datos mock y estáticos de la aplicación.
    -   `types.ts`: Definiciones de tipos de TypeScript para todo el proyecto.
    -   `utils.ts`: Funciones de utilidad (ej. `cn` para clases de Tailwind).
-   **/src/hooks/**: Hooks personalizados de React.
-   **/docs/**: Documentación del proyecto.
    -   `backend.json`: Define las entidades de datos y la estructura de Firestore.

---

## 🛠️ Cómo Empezar

### 1. Requisitos Previos

-   Node.js (versión 18 o superior)
-   `npm` o `pnpm`

### 2. Configuración del Proyecto

1.  **Clona el repositorio e instala dependencias:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd kursor-project
    npm install
    ```

2.  **Configuración de Firebase:**
    -   Asegúrate de que el archivo `src/firebase/config.ts` contenga la configuración de tu propio proyecto de Firebase.
    -   Ve a la consola de Firebase, y en la configuración de tu proyecto, activa **Firebase Authentication** (con proveedores de Email/Contraseña y Google) y **Firestore Database**.

3.  **Reglas de Seguridad de Firestore:**
    -   Copia el contenido del archivo `firestore.rules` de este proyecto.
    -   En tu consola de Firebase, ve a `Firestore Database > Reglas` y pega el contenido. Publica los cambios.

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

### 5. Sembrar Datos (Opcional)

El proyecto incluye un script para poblar tu base de datos de Firestore con datos de ejemplo (cursos, módulos, lecciones).

```bash
npx tsx src/lib/seed.ts
```

**Nota:** Este script está diseñado para ejecutarse en un entorno de Node.js y puede requerir que te autentiques con las credenciales de administrador de Firebase si no lo ejecutas en un entorno configurado.
