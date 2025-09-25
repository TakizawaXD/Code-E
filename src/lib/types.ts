import { FieldValue } from "firebase/firestore";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  content?: string;
  quiz?: Quiz;
  order: number;
};

export type CourseModule = {
  id:string;
  title: string;
  lessons: Lesson[];
  order: number;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatarUrl: string;
  imageUrl: string;
  modules: CourseModule[];
  pathId: string;
};

export type LearningPath = {
  id: string;
  title: string;
  description: string;
  courses: Course[];
};

export type UserProfile = {
  name: string;
  email: string;
  createdAt: FieldValue;
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

export type Progress = {
  id: string;
  courseId: string;
  completedLessons: string[];
  completed: boolean;
};
