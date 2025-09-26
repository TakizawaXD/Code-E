
-- Representación SQL de la base de datos NoSQL de Firestore.
-- Este script es solo para referencia y no se ejecuta en la aplicación.

-- Tabla para las Rutas de Aprendizaje (Learning Paths)
CREATE TABLE LearningPaths (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT
);

-- Tabla para los Cursos
CREATE TABLE Courses (
    id VARCHAR(255) PRIMARY KEY,
    pathId VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor VARCHAR(255),
    instructorAvatarUrl VARCHAR(255),
    imageUrl VARCHAR(255),
    FOREIGN KEY (pathId) REFERENCES LearningPaths(id)
);

-- Tabla para los Módulos de los Cursos
CREATE TABLE CourseModules (
    id VARCHAR(255) PRIMARY KEY,
    courseId VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    moduleOrder INT,
    FOREIGN KEY (courseId) REFERENCES Courses(id)
);

-- Tabla para las Lecciones de los Módulos
CREATE TABLE Lessons (
    id VARCHAR(255) PRIMARY KEY,
    moduleId VARCHAR(255),
    courseId VARCHAR(255), -- Denormalized for easier querying
    title VARCHAR(255) NOT NULL,
    duration VARCHAR(50),
    difficulty VARCHAR(50) CHECK (difficulty IN ('Fácil', 'Medio', 'Difícil')),
    content TEXT,
    lessonOrder INT,
    FOREIGN KEY (moduleId) REFERENCES CourseModules(id),
    FOREIGN KEY (courseId) REFERENCES Courses(id)
);

-- Tabla para los Usuarios
CREATE TABLE Users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para el Progreso de los Usuarios en los Cursos
CREATE TABLE UserProgress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(255),
    courseId VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (courseId) REFERENCES Courses(id),
    UNIQUE(userId, courseId)
);

-- Tabla para registrar las lecciones completadas por un usuario
CREATE TABLE CompletedLessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    progressId INT,
    lessonId VARCHAR(255),
    FOREIGN KEY (progressId) REFERENCES UserProgress(id),
    FOREIGN KEY (lessonId) REFERENCES Lessons(id)
);

-- Tabla para los Comentarios en las lecciones
CREATE TABLE Comments (
    id VARCHAR(255) PRIMARY KEY,
    lessonId VARCHAR(255),
    userId VARCHAR(255),
    text TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lessonId) REFERENCES Lessons(id),
    FOREIGN KEY (userId) REFERENCES Users(id)
);


-- INSERCIÓN DE DATOS DE EJEMPLO

-- Insertar Rutas de Aprendizaje
INSERT INTO LearningPaths (id, title, description) VALUES
('desarrollo-web', 'Desarrollo Web', 'Conviértete en un experto del lado del cliente y del servidor, dominando frameworks y lenguajes modernos.'),
('ia-datascience', 'Inteligencia Artificial y Data Science', 'Aprende a analizar datos, construir modelos de machine learning y extraer insights valiosos.'),
('diseno-ux', 'Diseño de Producto y UX', 'Crea productos digitales intuitivos, atractivos y que los usuarios amen desde el primer clic.'),
('cloud-devops', 'Cloud Computing y DevOps', 'Despliega, gestiona y escala aplicaciones de forma eficiente en la nube con prácticas de DevOps.'),
('recursos-humanos', 'Recursos Humanos', 'Moderniza la gestión del talento con herramientas digitales y estrategias innovadoras.'),
('negocios', 'Negocios', 'Adquiere habilidades en gestión, estrategia y finanzas para liderar en el mundo empresarial.'),
('english-academy', 'English Academy', 'Mejora tu inglés profesional para comunicarte en un mercado laboral globalizado.'),
('ciberseguridad', 'Ciberseguridad', 'Protege sistemas, redes y datos de ataques digitales y conviértete en un guardián digital.'),
('desarrollo-movil', 'Desarrollo Móvil', 'Crea aplicaciones impactantes para iOS y Android y llega a millones de usuarios.'),
('blockchain-web3', 'Blockchain y Web3', 'Explora el futuro del internet con aplicaciones descentralizadas, NFTs y contratos inteligentes.'),
('finanzas-inversiones', 'Finanzas e Inversiones', 'Toma el control de tus finanzas personales y aprende a invertir de manera inteligente.'),
('diseno-grafico', 'Diseño Gráfico y Arte Digital', 'Comunica ideas visualmente a través de la ilustración, la fotografía y el branding.'),
('marketing-digital', 'Marketing Digital', 'Domina estrategias de SEO, SEM, redes sociales y contenido para hacer crecer negocios en línea.'),
('habilidades-blandas', 'Liderazgo y Habilidades Blandas', 'Desarrolla la comunicación, el liderazgo y la inteligencia emocional para destacar profesionalmente.'),
('contenido-audiovisual', 'Contenido Audiovisual', 'Aprende a producir, grabar y editar videos y podcasts de alta calidad.'),
('programacion', 'Programación', 'Domina los lenguajes y la lógica de programación que son la base de toda la tecnología.'),
('startups', 'Startups', 'Lanza y haz crecer tu propio negocio tecnológico, desde la idea hasta la financiación.');

-- Insertar Cursos (Ejemplo para un curso)
INSERT INTO Courses (id, pathId, title, description, instructor, instructorAvatarUrl, imageUrl) VALUES
('web-react', 'desarrollo-web', 'React: De Cero a Experto', 'Aprende a construir aplicaciones web modernas con la librería más popular del mercado. Proyecto Final Sugerido: Crea un clon de la página principal de un servicio como Netflix o Spotify, consumiendo datos de una API pública para mostrar el contenido.', 'Juan Pérez', 'https://i.pravatar.cc/150?u=juanperez', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');

-- Insertar Módulos (Ejemplo para el curso de React)
INSERT INTO CourseModules (id, courseId, title, moduleOrder) VALUES
('react-m1', 'web-react', 'Fundamentos de React', 1);

-- Insertar Lecciones (Ejemplo para el módulo de React)
INSERT INTO Lessons (id, moduleId, courseId, title, duration, difficulty, content, lessonOrder) VALUES
('web-react-l1', 'react-m1', 'web-react', '¿Qué es React?', '10 min', 'Fácil', '<h1>Introducción a React</h1><p>React es una librería de JavaScript para construir interfaces de usuario. En esta lección, aprenderás los conceptos fundamentales de React, incluyendo componentes, JSX y el DOM virtual. Prepárate para el cuestionario al final.</p>', 1),
('react-l2', 'react-m1', 'web-react', 'Componentes y Props', '15 min', 'Fácil', '<h1>Componentes y Props</h1><p>Aprende a crear componentes reutilizables y a pasar datos entre ellos usando props.</p>', 2);

-- ... (Se omiten el resto de las sentencias INSERT para brevedad, pero seguirían este mismo patrón para todos los datos)
