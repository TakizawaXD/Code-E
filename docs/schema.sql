-- Code-E: Esquema de Base de Datos MySQL
-- Este archivo contiene las sentencias SQL para crear la estructura de tablas inicial.

-- Tabla para almacenar los usuarios de la plataforma
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para las rutas de aprendizaje que agrupan cursos
CREATE TABLE IF NOT EXISTS `learning_paths` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT
);

-- Tabla para los cursos
CREATE TABLE IF NOT EXISTS `courses` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `instructor_name` VARCHAR(255),
  `path_id` INT,
  FOREIGN KEY (`path_id`) REFERENCES `learning_paths`(`id`) ON DELETE SET NULL
);

-- Tabla para los módulos dentro de un curso
CREATE TABLE IF NOT EXISTS `modules` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `course_id` INT NOT NULL,
  `order` INT NOT NULL DEFAULT 0,
  FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE
);

-- Tabla para las lecciones dentro de un módulo
CREATE TABLE IF NOT EXISTS `lessons` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT,
  `video_url` VARCHAR(255),
  `module_id` INT NOT NULL,
  `order` INT NOT NULL DEFAULT 0,
  FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE
);

-- Tabla para rastrear el progreso de un usuario en un curso
CREATE TABLE IF NOT EXISTS `progress` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  `completed_lessons` JSON,
  `status` ENUM('in_progress', 'completed') NOT NULL DEFAULT 'in_progress',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE,
  UNIQUE KEY `user_course_progress` (`user_id`, `course_id`)
);

-- Tabla para los hilos de discusión en el foro
CREATE TABLE IF NOT EXISTS `forum_threads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

-- Tabla para las respuestas dentro de un hilo del foro
CREATE TABLE IF NOT EXISTS `forum_posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `content` TEXT NOT NULL,
  `thread_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`thread_id`) REFERENCES `forum_threads`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);
