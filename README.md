# Kursor: Tu Comunidad para Crecer en Tecnología

<p align="center">
  <img src="https://picsum.photos/seed/kursor-logo/1200/630" alt="Kursor Hero Image" data-ai-hint="online learning platform" />
</p>

**Kursor** es una moderna plataforma de aprendizaje en línea, diseñada para ser un espacio donde la comunidad, la interacción y el aprendizaje práctico son los protagonistas.

## 🎯 ¿De qué se trata Kursor?

### ¿Por qué fue creado?

Imagina un gimnasio para tu cerebro tecnológico, pero donde no entrenas solo. Kursor nació para ser ese lugar. En vez de solo ver videos en solitario, aquí la idea es **aprender en comunidad**. Es una plataforma para compartir dudas, resolver retos juntos y crecer acompañado de otras personas con tus mismos intereses.

### ¿Para quién es?

*   **Para los que empiezan de cero:** Si quieres entrar al mundo de la tecnología pero no sabes por dónde empezar.
*   **Para los que buscan un cambio:** Si ya tienes una carrera pero quieres reinventarte y pasarte al sector tecnológico.
*   **Para los que ya están en el sector:** Si eres un profesional que necesita mantenerse al día con las últimas herramientas y tecnologías.

### ¿Qué se tiene pensado hacer con él?

La visión es convertir a Kursor en el mejor aliado para tu carrera en tecnología. En el futuro, se planea incluir:
*   Un **tutor con Inteligencia Artificial** que resuelva tus dudas 24/7.
*   Más **elementos de juego** (puntos, insignias, niveles) para que aprender sea más divertido.
*   Una **bolsa de trabajo** para conectar a los mejores estudiantes con grandes empresas.

---

## ✨ Características Principales

*   **Catálogo de Cursos:** Cientos de cursos organizados en rutas claras, como "Desarrollo Web desde Cero".
*   **Seguimiento de tu Progreso:** La plataforma guarda por dónde vas en cada curso.
*   **Tu Panel Personal:** Un espacio solo para ti donde ves tus cursos, tu avance y tus logros.
*   **Chat para la Comunidad:** Un lugar para conversar en tiempo real con otros estudiantes.
*   **Retos Semanales:** Desafíos de programación para que pongas a prueba lo que aprendes.
*   **Guías Prácticas:** Contenido especializado, como una guía para prepararte para entrevistas de trabajo.
*   **Diseño Moderno:** Una interfaz agradable y fácil de usar en cualquier dispositivo (móvil, tablet, computador).

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

## 🏗️ ¿Cómo funciona? (Diagrama Simple)

Kursor funciona conectando tres piezas clave: tu navegador, un servidor inteligente y los servicios de Google (Firebase).

```
+--------------------------+      +--------------------------+      +-------------------------+
|                          |      |                          |      |                         |
|   TU NAVEGADOR           | <--> |   EL SERVIDOR (Kursor)   | <--> |   GOOGLE (Firebase)     |
|   (La App que ves)       |      |   (Sirve la página)      |      |   (Guarda los datos)    |
|                          |      |                          |      |                         |
+--------------------------+      +--------------------------+      +-------------------------+
           ^                                                                   |
           |                  (Se conecta directamente para el chat            |
           +-------------------- y las notificaciones en tiempo real) ---------+

```

1.  **Tu Navegador:** Es la aplicación con la que interactúas, construida con React y componentes visuales modernos.
2.  **El Servidor de Kursor:** Es el encargado de enviar la página web a tu navegador.
3.  **Google (Firebase):** Es el "cerebro" en la nube que guarda toda la información: quién eres, qué cursos has tomado, los comentarios que has hecho y los mensajes del chat. Tu navegador se conecta directamente a Firebase para que todo (como el chat) se actualice en tiempo real sin tener que recargar la página.

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
