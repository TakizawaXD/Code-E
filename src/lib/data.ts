
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
    { id: 'prog-python', pathId: 'programacion', title: 'Ejercicios Prácticos de Python', description: 'Fácil: Escribe una función que tome una lista de números y devuelva la suma de todos los elementos. Fácil: Crea un programa que invierta una cadena de texto dada por el usuario. Intermedio: Desarrolla un script que lea un archivo de texto (.txt) y cuente la frecuencia de cada palabra, mostrando las 10 más comunes. Intermedio: Implementa una clase Rectangulo con atributos de ancho y alto, y métodos para calcular el área y el perímetro. Avanzado: Construye un web scraper que extraiga todos los enlaces de una página web específica y los guarde en un archivo CSV. Avanzado: Diseña una mini aplicación de consola para gestionar un inventario, que permita agregar, eliminar y actualizar productos, utilizando clases y persistencia de datos en un archivo JSON.', instructor: 'Ricardo Ortiz', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=ricardoortiz', imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'},
    { id: 'prog-javascript', pathId: 'programacion', title: 'Ejercicios Prácticos de JavaScript', description: 'Fácil: Crea una función que reciba una cadena y un número, y repita la cadena ese número de veces. Fácil: Desarrolla un simple "to-do list" interactivo en el DOM, donde el usuario pueda agregar y marcar tareas como completadas. Intermedio: Implementa una función que tome una lista de objetos y los ordene alfabéticamente por una propiedad específica. Intermedio: Utiliza la API Fetch para consumir datos de un servicio público (por ejemplo, una API de chistes) y mostrar el resultado en la página. Avanzado: Construye un carrusel de imágenes completamente funcional utilizando JavaScript puro, sin librerías externas. Avanzado: Crea un sistema de validación de formularios que use expresiones regulares para verificar el formato de email, contraseña y número de teléfono, mostrando retroalimentación en tiempo real.', instructor: 'Ana García', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=anagarcia', imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'prog-java', pathId: 'programacion', title: 'Ejercicios Prácticos de Java', description: 'Fácil: Escribe una clase Coche con atributos de marca, modelo y año, y un método para imprimir sus detalles. Fácil: Crea un programa que determine si un número dado es primo o no. Intermedio: Diseña una jerarquía de clases para un sistema de Animales, con una clase base Animal y subclases como Perro y Gato, utilizando herencia y polimorfismo. Intermedio: Implementa un programa que lea y escriba en un archivo de texto, manejando adecuadamente las excepciones de E/S. Avanzado: Desarrolla una aplicación de escritorio simple con Swing o JavaFX para una calculadora básica, que maneje operaciones de suma, resta, multiplicación y división. Avanzado: Crea un servidor multihilo que acepte conexiones de clientes y envíe un mensaje de bienvenida a cada uno.', instructor: 'Carlos Villa', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlosvilla', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'prog-cpp', pathId: 'programacion', title: 'Ejercicios Prácticos de C++', description: 'Fácil: Escribe un programa que pida al usuario su edad y determine si es mayor o menor de edad. Fácil: Implementa un programa que intercambie los valores de dos variables sin usar una tercera variable. Intermedio: Crea una clase Punto2D con atributos privados x e y, y métodos para calcular la distancia a otro punto. Intermedio: Escribe una función que reciba un arreglo dinámico de enteros y devuelva el puntero al elemento más grande. Avanzado: Desarrolla un sistema de gestión de Estudiantes que use punteros inteligentes (unique_ptr o shared_ptr) para manejar la memoria de forma segura. Avanzado: Implementa tu propia clase de Vector dinámico desde cero, replicando la funcionalidad básica de la STL, incluyendo redimensionamiento y acceso a elementos.', instructor: 'Sofia Romano', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sofiaromano', imageUrl: 'https://images.unsplash.com/photo-1598662768283-35a1a47b1c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
  
    // Desarrollo Web
    { id: 'web-react', pathId: 'desarrollo-web', title: 'React: De Cero a Experto', description: 'Fácil: Crea un componente de contador simple con un botón para incrementar y otro para decrementar. Fácil: Desarrolla un componente que muestre una lista de elementos (por ejemplo, nombres), con la capacidad de agregar nuevos elementos a través de un campo de entrada. Intermedio: Construye un formulario de contacto con múltiples campos y gestión de estado con useState. Intermedio: Implementa la funcionalidad para consumir una API REST (por ejemplo, de películas) usando useEffect y useState para mostrar los datos. Avanzado: Crea una aplicación de una sola página (SPA) con React Router que tenga varias rutas, incluyendo una página de inicio, una de "Acerca de" y una de perfil de usuario dinámico. Avanzado: Desarrolla un componente de tabla con paginación, filtros y ordenamiento de datos, utilizando una API de prueba.', instructor: 'Juan Pérez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=juanperez', imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'web-node', pathId: 'desarrollo-web', title: 'Backend con Node.js y Express', description: 'Fácil: Configura un servidor Express básico que responda con un "¡Hola, mundo!" en la ruta raíz. Fácil: Crea una API REST que tenga un solo recurso (/items) con rutas para obtener todos los elementos (GET) y agregar uno nuevo (POST). Intermedio: Conecta tu API a una base de datos local (por ejemplo, SQLite) para persistir los datos de los elementos. Intermedio: Implementa un middleware de autenticación simple que verifique una clave de API en los encabezados de las solicitudes. Avanzado: Construye una API REST completa para una aplicación de blog con recursos para posts y comments, que gestione las operaciones CRUD (CREATE, READ, UPDATE, DELETE) en una base de datos. Avanzado: Implementa un sistema de autenticación de usuarios con JWT (JSON Web Tokens) para proteger rutas específicas de tu API.', instructor: 'Pedro Ramirez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=pedroramirez', imageUrl: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'web-typescript', pathId: 'desarrollo-web', title: 'TypeScript para Desarrollo Frontend', description: 'Fácil: Tipa una función que sume dos números, asegurando que los parámetros y el valor de retorno sean de tipo number. Fácil: Crea una interface para un objeto Producto que tenga propiedades id: number, nombre: string y precio: number. Intermedio: Desarrolla un hook personalizado en React con TypeScript que maneje el estado de un formulario, tipando los valores de entrada. Intermedio: Implementa una función genérica que tome un array de cualquier tipo y devuelva el primer elemento. Avanzado: Define y utiliza un tipo de utilidad (Utility Type) personalizado para hacer que todas las propiedades de un objeto sean opcionales. Avanzado: Crea una aplicación React con TypeScript que consuma una API y gestione los datos de forma segura usando interfaces para la respuesta de la API y los estados del componente.', instructor: 'Clara Pons', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=clarapons', imageUrl: 'https://images.unsplash.com/photo-1618335436825-d4f08964391a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'web-php', pathId: 'desarrollo-web', title: 'PHP y Laravel para Backend', description: 'Fácil: Configura una ruta en Laravel que devuelva una vista simple con un mensaje de bienvenida. Fácil: Crea un controlador que reciba un parámetro de la URL y lo muestre en una vista. Intermedio: Usa Eloquent ORM para crear un modelo Producto y una migración de base de datos para la tabla correspondiente. Intermedio: Desarrolla un formulario web que use POST para guardar datos en la base de datos a través del modelo Producto. Avanzado: Implementa un sistema de autenticación de usuarios usando las funcionalidades de Laravel Breeze o Fortify. Avanzado: Construye una API RESTful para posts con todas las operaciones CRUD y protege las rutas con middleware de autenticación.', instructor: 'Sergio Ramos', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=sergioramos', imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'},
  
    // IA y Data Science
    { id: 'ia-datascience-python', pathId: 'ia-datascience', title: 'Python para Data Science', description: 'Fácil: Utiliza NumPy para crear un array 3x3 de ceros y otro con valores aleatorios. Fácil: Usa Pandas para cargar un archivo CSV y mostrar las primeras 5 filas y un resumen estadístico de los datos. Intermedio: Realiza una limpieza de datos en un DataFrame de Pandas, manejando valores nulos, eliminando duplicados y cambiando tipos de datos. Intermedio: Crea un gráfico de dispersión (scatter plot) con Matplotlib para visualizar la relación entre dos columnas de un DataFrame. Avanzado: Carga dos DataFrames y realiza una operación de merge o join basándose en una columna en común. Avanzado: Implementa un análisis exploratorio de datos (EDA) completo en un Jupyter Notebook, utilizando visualizaciones múltiples y estadísticas descriptivas para entender un conjunto de datos.', instructor: 'Carlos Sánchez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=carlossanchez', imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'ia-ml', pathId: 'ia-datascience', title: 'Fundamentos de Machine Learning', description: 'Fácil: Carga un conjunto de datos de la librería Scikit-learn (por ejemplo, iris) y divídelo en conjuntos de entrenamiento y prueba. Fácil: Implementa un modelo de regresión lineal simple para predecir un valor continuo a partir de una variable. Intermedio: Entrena un modelo de clasificación (DecisionTreeClassifier o SVC) en un conjunto de datos y evalúa su precisión utilizando una matriz de confusión. Intermedio: Realiza un preprocesamiento de datos básico, incluyendo escalado de características y codificación de variables categóricas. Avanzado: Implementa un modelo de agrupamiento (K-Means) y visualiza los resultados para entender los clústeres. Avanzado: Desarrolla un pipeline de Machine Learning que incluya la carga de datos, preprocesamiento, entrenamiento del modelo, optimización de hiperparámetros con búsqueda en cuadrícula (grid search) y evaluación final.', instructor: 'Laura Martínez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=lauramartinez', imageUrl: 'https://images.unsplash.com/photo-1620712943543-95f135346a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'ia-r', pathId: 'ia-datascience', title: 'Análisis de Datos con R', description: 'Fácil: Carga un data.frame desde un archivo CSV y calcula la media, mediana y desviación estándar de una columna. Fácil: Utiliza el paquete dplyr para filtrar filas de un data.frame que cumplan una condición específica. Intermedio: Crea un histograma de una variable numérica y un gráfico de barras para una variable categórica usando ggplot2. Intermedio: Realiza un análisis de correlación entre dos variables y visualiza el resultado con un gráfico de dispersión y una línea de tendencia. Avanzado: Implementa un modelo de regresión lineal múltiple para predecir una variable dependiente a partir de múltiples variables independientes. Avanzado: Realiza un análisis de supervivencia o un modelo de series temporales simple sobre un conjunto de datos apropiado.', instructor: 'Diana Franco', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=dianafranco', imageUrl: 'https://images.unsplash.com/photo-1543286386-2e6593068625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'ia-sql', pathId: 'ia-datascience', title: 'SQL para Data Science', description: 'Fácil: Escribe una consulta que seleccione todas las columnas de una tabla llamada clientes. Fácil: Realiza una consulta para contar el número total de clientes en una tabla. Intermedio: Escribe una consulta para obtener los 10 productos más vendidos, uniendo las tablas ventas y productos. Intermedio: Utiliza GROUP BY y HAVING para encontrar los clientes que han gastado más de $1000. Avanzado: Crea una subconsulta para encontrar los productos que no se han vendido en los últimos 6 meses. Avanzado: Utiliza una Common Table Expression (CTE) para calcular la venta total por mes y comparar las ventas de un mes con el promedio del año.', instructor: 'Alberto Núñez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=albertonunez', imageUrl: 'https://images.unsplash.com/photo-1529078155227-5425278b67f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    
    // Diseño de Producto y UX
    { id: 'ux-investigacion', pathId: 'diseno-ux', title: 'Investigación de Usuarios', description: 'Fácil: Desarrolla 3 preguntas abiertas para una entrevista de usuario sobre una aplicación móvil de fitness. Fácil: Define las 5 principales hipótesis sobre los problemas que un grupo de usuarios podría tener con un sitio de comercio electrónico. Intermedio: Crea un user persona detallado para una aplicación de gestión de proyectos, incluyendo sus metas, frustraciones y comportamiento. Intermedio: Diseña un guion para una prueba de usabilidad de 15 minutos para una nueva función de un software, con 3 tareas específicas para el usuario. Avanzado: Mapea el User Journey completo desde que un usuario descubre un producto hasta que lo usa regularmente, identificando puntos de dolor y oportunidades.', instructor: 'David Gómez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=davidgomez', imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    { id: 'ux-figma', pathId: 'diseno-ux', title: 'Diseño de Interfaces con Figma', description: 'Fácil: Crea un prototipo de una aplicación de calculadora simple, con botones y un display, y enlaza los clics a la funcionalidad de prototipado. Fácil: Diseña una pantalla de Login y Registro para una aplicación móvil, aplicando una paleta de colores coherente y tipografía legible. Intermedio: Utiliza Auto Layout para diseñar un menú de navegación responsivo que se adapte automáticamente al tamaño de la pantalla. Intermedio: Crea un componente de botón interactivo con variantes para sus estados (predeterminado, hover, disabled). Avanzado: Diseña un sistema de diseño (Design System) básico con una biblioteca de componentes, estilos de color y tipografía, y úsalo para crear la pantalla de un Dashboard de análisis.', instructor: 'Beatriz Rico', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=beatrizrico', imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
  
    // Cloud y DevOps
    { id: 'cloud-aws', pathId: 'cloud-devops', title: 'Introducción a AWS', description: 'Fácil: Configura un bucket de S3 y sube un archivo HTML estático. Fácil: Crea una instancia de EC2 y conéctate a ella vía SSH. Intermedio: Utiliza IAM para crear un usuario con permisos limitados a un bucket de S3 específico. Intermedio: Implementa una función AWS Lambda simple que reciba un nombre y devuelva un saludo, y configura un API Gateway para invocarla a través de una URL. Avanzado: Desarrolla un pipeline de CI/CD para una aplicación web estática, utilizando servicios como CodeCommit, CodeBuild y S3.', instructor: 'Elena Fernández', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=elenafernandez', imageUrl: 'https://images.unsplash.com/photo-1582102759419-7b97c88d0a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 'cloud-docker', pathId: 'cloud-devops', title: 'Docker para Desarrolladores', description: 'Fácil: Escribe un Dockerfile para una aplicación Node.js simple y construye la imagen. Fácil: Crea un contenedor a partir de una imagen de Nginx y accede a la página web en tu navegador. Intermedio: Utiliza docker-compose para orquestar una aplicación de dos servicios: un servidor Node.js y una base de datos PostgreSQL. Intermedio: Implementa un Docker volumen para persistir los datos de la base de datos de un contenedor. Avanzado: Conteneriza una aplicación React con un Dockerfile multi-etapa para optimizar el tamaño de la imagen final.', instructor: 'Marcos Luna', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=marcosluna', imageUrl: 'https://images.unsplash.com/photo-1622359990261-3f48a74d7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    
    // Desarrollo Móvil
    { id: 'movil-swift', pathId: 'desarrollo-movil', title: 'Swift y SwiftUI: De Cero a App Store', description: 'Fácil: Crea una interfaz de usuario con SwiftUI que muestre un texto y un botón que cambie el texto al ser presionado. Fácil: Diseña una lista de elementos (por ejemplo, nombres) y hazla navegable para mostrar una pantalla de detalles para cada elemento. Intermedio: Implementa la gestión del estado para una aplicación simple de contador de pasos, utilizando @State y @Binding. Intermedio: Realiza una llamada a una API REST para obtener datos y mostrarlos en una lista en tu interfaz de usuario. Avanzado: Crea un sistema de navegación completo con pestañas (TabView) y vistas de detalle, y maneja el estado de la aplicación entre pantallas.', instructor: 'Lucía Jiménez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luciajimenez', imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'},
    { id: 'movil-kotlin', pathId: 'desarrollo-movil', title: 'Android con Kotlin: Curso Completo', description: 'Fácil: Crea una aplicación con un único Activity que contenga un botón y un TextView. Fácil: Utiliza ConstraintLayout para diseñar una pantalla de login básica. Intermedio: Implementa una RecyclerView para mostrar una lista de datos que se obtienen de una clase de modelo. Intermedio: Realiza una llamada a una API web utilizando librerías como Retrofit y Gson para obtener datos y mostrarlos en la interfaz. Avanzado: Construye una aplicación con múltiples Activities y maneja la navegación entre ellas usando Intents.', instructor: 'Mateo Rojas', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=mateorojas', imageUrl: 'https://images.unsplash.com/photo-1614332287897-c283fa3c8c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
    { id: 'movil-flutter', pathId: 'desarrollo-movil', title: 'Flutter: Apps para iOS y Android', description: 'Fácil: Crea una aplicación simple con un widget Scaffold, una AppBar y un Center con texto. Fácil: Implementa un widget ListView que muestre una lista de elementos generada dinámicamente. Intermedio: Desarrolla un formulario con múltiples campos de entrada de texto y valida los datos antes de mostrarlos en otra pantalla. Intermedio: Usa un widget FutureBuilder para realizar una llamada a una API REST y mostrar el resultado en la interfaz. Avanzado: Implementa un sistema de gestión del estado con Provider o BLoC para una aplicación de contador que tenga múltiples pantallas.', instructor: 'Lucía Jiménez', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=luciajimenez', imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 'movil-dart', pathId: 'desarrollo-movil', title: 'Fundamentos de Dart para Flutter', description: 'Fácil: Declara variables, usa operadores básicos y define una función simple que no retorne un valor. Fácil: Escribe una función que tome una lista de números y devuelva una nueva lista con los números pares. Intermedio: Crea una clase Persona con un constructor, y métodos getter y setter para sus propiedades. Intermedio: Implementa una clase abstracta Animal con un método abstracto y una clase Perro que herede de ella. Avanzado: Trabaja con Futures y async/await para simular una operación asíncrona, como una llamada a una API, y maneja los errores.', instructor: 'Andrea Lezama', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=andrealezama', imageUrl: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
  
    // Blockchain y Web3
    { id: 'web3-solidity', pathId: 'blockchain-web3', title: 'Smart Contracts con Solidity', description: 'Fácil: Escribe un contrato inteligente simple que almacene un número y tenga funciones para leer y actualizar ese número. Fácil: Crea un contrato de votación que permita a los usuarios votar una sola vez y muestre el conteo de votos. Intermedio: Desarrolla un contrato ERC-20 (Token estándar) básico que permita a los usuarios acuñar (mint) y transferir tokens. Intermedio: Implementa un modificador (modifier) para restringir el acceso a una función solo al propietario del contrato. Avanzado: Crea un contrato de subasta que use require para validar que las pujas sean mayores que la anterior y maneje el reembolso de los fondos.', instructor: 'Adrián Navarro', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=adriannavarro', imageUrl: 'https://images.unsplash.com/photo-1640118591547-906514188b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80' },
    { id: 'web3-rust', pathId: 'blockchain-web3', title: 'Desarrollo en Solana con Rust', description: 'Fácil: Escribe un programa simple en Rust que imprima "Hola, Solana!". Fácil: Define una struct en Rust para representar una cuenta de programa en Solana, con un campo para un contador. Intermedio: Implementa una función que inicialice la cuenta de un programa con un valor inicial. Intermedio: Crea una instrucción para un programa de Solana que incremente el contador en una cuenta de programa específica. Avanzado: Desarrolla un programa más complejo que maneje múltiples cuentas y transacciones, utilizando cross-program invocations (invocaciones entre programas).', instructor: 'Daniel Solis', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=danielsolis', imageUrl: 'https://images.unsplash.com/photo-1642159829394-11648e285094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
  
    // Ciberseguridad
    { id: 'cyber-intro', pathId: 'ciberseguridad', title: 'Fundamentos de Ciberseguridad', description: 'Fácil: Investiga y explica la diferencia entre HTTP y HTTPS y por qué es importante para la seguridad web. Fácil: Identifica los 5 principales errores de configuración de seguridad en una red Wi-Fi doméstica. Intermedio: Describe y crea un ejemplo de cómo funciona un ataque de SQL Injection en una aplicación web. Intermedio: Investiga y explica los pasos de una cadena de ataque (kill chain) para una intrusión en una red corporativa. Avanzado: Diseña una estrategia de defensa a profundidad para una aplicación web, incluyendo capas como WAF, IDS/IPS, control de acceso y monitoreo.', instructor: 'Miguel Romero', instructorAvatarUrl: 'https://i.pravatar.cc/150?u=miguelromero', imageUrl: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
  ];

  const pythonReactQuiz: Lesson = {
    id: 'web-react-l1',
    title: '¿Qué es React?',
    duration: '10 min',
    difficulty: 'Fácil',
    order: 1,
    content: '<h1>Introducción a React</h1><p>React es una librería de JavaScript para construir interfaces de usuario. En esta lección, aprenderás los conceptos fundamentales de React, incluyendo componentes, JSX y el DOM virtual. Prepárate para el cuestionario al final.</p>',
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHR8ZW58MHx8fHwxNzU4NzU5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    youtubeVideoId: "6I3W1v2v6wY",
    quiz: {
      id: 'react-quiz-1',
      title: 'Cuestionario de React Básico',
      questions: [
        {
          id: 'q1',
          question: '¿Qué es JSX?',
          options: [
            'Un lenguaje de programación diferente',
            'Una extensión de la sintaxis de JavaScript',
            'Una librería de CSS',
            'Una base de datos'
          ],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: '¿Qué método se usa para renderizar un componente de React en el DOM?',
          options: [
            'ReactDOM.render()',
            'React.mount()',
            'Component.display()',
            'ReactDOM.attach()'
          ],
          correctAnswer: 0
        }
      ]
    }
  };

const pythonModules: CourseModule[] = [
    {
        id: 'python-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'py-b1', title: '¡Hola, mundo!', duration: '5 min', difficulty: 'Fácil', content: '<h1>¡Hola, mundo!</h1><p>Tu primer programa en cualquier lenguaje de programación. Escribe un script que imprima el texto "¡Hola, mundo!" en la consola. Te familiarizarás con la función `print()`.</p>', order: 1, 
              imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxweXRob24lMjBjb2RlfGVufDB8fHx8MTc1ODc2MDMxNnww&ixlib=rb-4.1.0&q=80&w=1080",
              youtubeVideoId: "I2wURD4_T4I",
              quiz: {
                    id: 'python-quiz-1',
                    title: 'Cuestionario de "Hola, Mundo"',
                    questions: [
                        { id: 'q1', question: '¿Qué función se utiliza para imprimir texto en la consola en Python?', options: ['display()', 'log()', 'print()', 'write()'], correctAnswer: 2 }
                    ]
                }
            },
            { id: 'py-b2', title: 'Función de Suma', duration: '5 min', difficulty: 'Fácil', content: '<h1>Función de Suma</h1><p>Aprende a definir funciones. Crea una función que acepte dos números como argumentos y devuelva su suma. Practicarás la definición de funciones, parámetros y el `return`.</p>', order: 2 },
            { id: 'py-b3', title: 'Saludo a Usuario', duration: '5 min', difficulty: 'Fácil', content: '<h1>Saludo a Usuario</h1><p>Interactúa con el usuario. Escribe un script que solicite el nombre del usuario usando la función `input()` y luego imprima un saludo personalizado, como "Hola, [nombre]".</p>', order: 3 },
            { id: 'py-b4', title: 'Número Par o Impar', duration: '5 min', difficulty: 'Fácil', content: '<h1>Número Par o Impar</h1><p>Introduce la lógica condicional. Escribe un programa que pida un número y determine si es par o impar, utilizando el operador módulo (`%`) y una declaración `if-else`.</p>', order: 4 },
            { id: 'py-b5', title: 'Conversor de Temperatura', duration: '5 min', difficulty: 'Fácil', content: '<h1>Conversor de Temperatura</h1><p>Practica operaciones matemáticas. Crea un programa que convierta una temperatura de grados Celsius a Fahrenheit. La fórmula es: F = (C * 9/5) + 32.</p>', order: 5 },
        ]
    },
    {
        id: 'python-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'py-i1', title: 'Frecuencia de Palabras', duration: '15 min', difficulty: 'Medio', content: '<h1>Frecuencia de Palabras</h1><p>Manipulación de texto y diccionarios. Desarrolla un programa que lea un archivo de texto, cuente la frecuencia de cada palabra (ignorando mayúsculas/minúsculas) y las muestre ordenadas.</p>', order: 1 },
            { id: 'py-i2', title: 'Clase Libro', duration: '15 min', difficulty: 'Medio', content: '<h1>Clase Libro</h1><p>Programación Orientada a Objetos. Crea una clase para representar un objeto `Libro` con propiedades como `titulo`, `autor` y `año`. Incluye un método para mostrar la información del libro.</p>', order: 2 },
            { id: 'py-i3', title: 'Conversión con List Comprehension', duration: '10 min', difficulty: 'Medio', content: '<h1>Conversión con List Comprehension</h1><p>Aprende una forma concisa de crear listas. Implementa un programa que convierta una lista de temperaturas de Celsius a Fahrenheit usando "list comprehensions".</p>', order: 3 },
            { id: 'py-i4', title: 'Simulador de Cajero Automático', duration: '20 min', difficulty: 'Medio', content: '<h1>Simulador de Cajero Automático</h1><p>Construye una aplicación de consola más compleja. Desarrolla un programa para simular las operaciones básicas de un cajero automático (consultar saldo, depositar, retirar) usando un bucle y condicionales.</p>', order: 4 },
            { id: 'py-i5', title: 'Herramienta CLI con Argparse', duration: '20 min', difficulty: 'Medio', content: '<h1>Herramienta CLI con Argparse</h1><p>Crea herramientas de línea de comandos profesionales. Utiliza el módulo `argparse` para construir una CLI que acepte argumentos, como un nombre y un número, y los imprima.</p>', order: 5 },
        ]
    },
    {
        id: 'python-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'py-e1', title: 'Motor de Juego Básico con Pygame', duration: '60 min', difficulty: 'Difícil', content: '<h1>Motor de Juego Básico con Pygame</h1><p>Explora el desarrollo de juegos. Construye un motor de juego 2D muy básico utilizando Pygame que inicialice una ventana, maneje un bucle de juego principal y permita mover un objeto (un rectángulo) con las teclas de flecha.</p>', order: 1 },
            { id: 'py-e2', title: 'API RESTful con Flask', duration: '50 min', difficulty: 'Difícil', content: '<h1>API RESTful con Flask</h1><p>Iníciate en el desarrollo backend. Crea una API RESTful utilizando Flask o FastAPI para gestionar una lista de usuarios en memoria. Implementa endpoints para obtener todos los usuarios (GET) y añadir un nuevo usuario (POST).</p>', order: 2 },
        ]
    }
];

const javascriptModules: CourseModule[] = [
    {
        id: 'js-m1',
        title: 'Principiante',
        order: 1,
        lessons: [
            { id: 'js-b1', title: 'Cambiar Color de Fondo', duration: '5 min', difficulty: 'Fácil', content: '<h1>Cambiar Color de Fondo</h1><p>Manipulación del DOM. Escribe una función en un archivo .js que, al ser llamada por el `onclick` de un botón en tu HTML, cambie el color de fondo (`backgroundColor`) del `<body>` de la página a un color aleatorio.</p>', order: 1,
              imageUrl: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYW5kb20lMjBjb2xvcnN8ZW58MHx8fHwxNzU4NzYwNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
              youtubeVideoId: "3x9AtR_bK-g",
            },
            { id: 'js-b2', title: 'Validar Formulario Simple', duration: '5 min', difficulty: 'Fácil', content: '<h1>Validar Formulario Simple</h1><p>Eventos y validación. Crea un formulario HTML con un campo de email y un botón de envío. Usa JavaScript para interceptar el evento `submit` y mostrar una alerta si el campo de email está vacío, previniendo el envío del formulario.</p>', order: 2 },
            { id: 'js-b3', title: 'El Mayor de Tres Números', duration: '5 min', difficulty: 'Fácil', content: '<h1>El Mayor de Tres Números</h1><p>Lógica y funciones. Crea una función de JavaScript que acepte tres números como parámetros y devuelva el mayor de ellos. Usa `Math.max()` o condicionales `if-else`.</p>', order: 3 },
            { id: 'js-b4', title: 'Juego de Adivinanza de Números', duration: '10 min', difficulty: 'Fácil', content: '<h1>Juego de Adivinanza de Números</h1><p>Bucles y condicionales. Escribe un programa en la consola que genere un número aleatorio entre 1 y 10. Pide al usuario que adivine el número y dale pistas ("más alto", "más bajo") hasta que acierte.</p>', order: 4 },
            { id: 'js-b5', title: 'Contador Regresivo', duration: '10 min', difficulty: 'Fácil', content: '<h1>Contador Regresivo</h1><p>Timers y manipulación del DOM. Crea un contador en una página web que comience en 10 y disminuya cada segundo. Cuando llegue a 0, muestra un mensaje. Usa `setInterval()` y actualiza el contenido de un elemento HTML.</p>', order: 5 },
        ]
    },
    {
        id: 'js-m2',
        title: 'Intermedio',
        order: 2,
        lessons: [
            { id: 'js-i1', title: 'Juego de Piedra, Papel o Tijera', duration: '20 min', difficulty: 'Medio', content: '<h1>Juego de Piedra, Papel o Tijera</h1><p>Lógica de juego. Desarrolla un juego simple de "Piedra, Papel o Tijera" contra la computadora. El usuario hace clic en un botón, la computadora elige al azar y se muestra el resultado en la página.</p>', order: 1 },
            { id: 'js-i2', title: 'Consumir una API con Fetch', duration: '15 min', difficulty: 'Medio', content: '<h1>Consumir una API con Fetch</h1><p>Asincronía y APIs. Utiliza la API de `fetch` para obtener datos de una API pública (ej. JSONPlaceholder). Muestra una lista de títulos de "posts" en tu página web. Maneja el estado de carga y posibles errores.</p>', order: 2 },
            { id: 'js-i3', title: 'Carrusel de Imágenes Básico', duration: '20 min', difficulty: 'Medio', content: '<h1>Carrusel de Imágenes Básico</h1><p>Manipulación avanzada del DOM. Crea un carrusel de imágenes con botones de "anterior" y "siguiente" para navegar entre un array de URLs de imágenes. Opcional: haz que se desplace automáticamente cada 3 segundos.</p>', order: 3 },
            { id: 'js-i4', title: 'Filtro de Búsqueda Dinámico', duration: '15 min', difficulty: 'Medio', content: '<h1>Filtro de Búsqueda Dinámico</h1><p>Eventos y arrays. Para una lista de productos (un array de strings), crea un campo de texto donde, a medida que el usuario escribe, la lista de productos se filtra dinámicamente para mostrar solo los que coinciden.</p>', order: 4 },
            { id: 'js-i5', title: 'Validador de Contraseñas', duration: '15 min', difficulty: 'Medio', content: '<h1>Validador de Contraseñas</h1><p>Expresiones regulares y UI. Crea un validador de contraseñas que verifique en tiempo real si la contraseña cumple con varias reglas (ej. longitud mínima, una mayúscula, un número) y muestra visualmente qué reglas se cumplen.</p>', order: 5 },
        ]
    },
    {
        id: 'js-m3',
        title: 'Experto',
        order: 3,
        lessons: [
            { id: 'js-e1', title: 'Aplicación de Tareas (To-do list) con React', duration: '60 min', difficulty: 'Difícil', content: '<h1>Aplicación de Tareas con React</h1><p>Frameworks de Frontend. Crea una aplicación de una sola página (SPA) con React. Debe permitir añadir tareas a una lista, eliminarlas y marcarlas como completadas. Gestiona el estado del componente.</p>', order: 1 },
            { id: 'js-e2', title: 'Animación de Partículas con Canvas', duration: '50 min', difficulty: 'Difícil', content: '<h1>Animación de Partículas con Canvas</h1><p>Gráficos y Animación. Implementa una animación simple utilizando la API de Canvas de HTML5. Crea un conjunto de partículas (círculos) que se mueven por la pantalla y rebotan en los bordes. Utiliza `requestAnimationFrame` para un rendimiento óptimo.</p>', order: 2 },
        ]
    }
];

const genericModules = (courseId: string, courseTitle: string): CourseModule[] => {
    const lessonContent = [
        `<h1>Ejercicio 1: Configuración del Entorno</h1><p>Instala las herramientas necesarias para el curso "${courseTitle}" y crea tu primer proyecto "Hola Mundo".</p>`,
        `<h1>Ejercicio 2: Variables y Tipos de Datos</h1><p>Aprende a declarar variables y a utilizar los tipos de datos fundamentales en el contexto de "${courseTitle}".</p>`,
        `<h1>Ejercicio 3: Operadores Básicos</h1><p>Realiza operaciones aritméticas y lógicas para resolver un problema simple relacionado con "${courseTitle}".</p>`,
        `<h1>Ejercicio 4: Estructuras de Control</h1><p>Usa condicionales (if/else) para crear un programa que tome decisiones basadas en una entrada, aplicado a un caso de uso de "${courseTitle}".</p>`,
        `<h1>Ejercicio 5: Bucles y Repeticiones</h1><p>Utiliza bucles (for/while) para procesar una colección de datos e imprimir los resultados. Este es un pilar en "${courseTitle}".</p>`,
        `<h1>Ejercicio 6: Funciones y Modularización</h1><p>Crea tu primera función reutilizable que encapsule una lógica específica del dominio de "${courseTitle}".</p>`,
        `<h1>Ejercicio 7: Manejo de Arrays/Listas</h1><p>Aprende a almacenar y manipular colecciones de datos, un requisito indispensable para cualquier proyecto de "${courseTitle}".</p>`,
        `<h1>Ejercicio 8: Programación Orientada a Objetos (Básico)</h1><p>Define una clase simple que modele un concepto del mundo real relevante para "${courseTitle}".</p>`,
        `<h1>Ejercicio 9: Manipulación de Strings</h1><p>Trabaja con texto para extraer información, formatearla o validarla, una tarea común en "${courseTitle}".</p>`,
        `<h1>Ejercicio 10: Proyecto Final Pequeño</h1><p>Integra todos los conceptos aprendidos para construir una pequeña aplicación o script que resuelva un problema práctico de "${courseTitle}".</p>`
    ];

    return [
        {
            id: `${courseId}-m1`,
            title: 'Módulo de Introducción Práctica',
            order: 1,
            lessons: Array.from({ length: 10 }, (_, i) => ({
                id: `${courseId}-l${i + 1}`,
                title: `Ejercicio Práctico ${i + 1}`,
                duration: `${Math.floor(Math.random() * 15) + 5} min`,
                difficulty: i < 3 ? 'Fácil' : i < 7 ? 'Medio' : 'Difícil',
                content: lessonContent[i],
                order: i + 1,
            })),
        },
    ];
};

export const courses: Course[] = courseData.map(course => {
  let modules: CourseModule[] = [];
  switch (course.id) {
    case 'prog-python':
      modules = pythonModules;
      break;
    case 'prog-javascript':
      modules = javascriptModules;
      break;
    case 'web-react':
        modules = [
            {
                id: 'react-m1',
                title: 'Fundamentos de React',
                order: 1,
                lessons: [
                    pythonReactQuiz,
                    { id: 'react-l2', title: 'Componentes y Props', duration: '15 min', difficulty: 'Fácil', content: '<h1>Componentes y Props</h1><p>Aprende a crear componentes reutilizables y a pasar datos entre ellos usando props.</p>', order: 2 },
                ]
            }
        ]
        break;
    default:
      modules = genericModules(course.id, course.title);
      break;
  }
  return { ...course, modules };
});

    

    
