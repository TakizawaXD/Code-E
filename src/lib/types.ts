

import { FieldValue, Timestamp } from "firebase/firestore";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  active?: boolean;
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
  content: string; 
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  quiz?: Quiz;
  order: number;
  imageUrl?: string;
  youtubeVideoId?: string;
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
};

export type UserProfile = {
  name: string;
  email: string;
  createdAt: FieldValue;
  points?: number;
  avatarUrl?: string;
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  date: Timestamp;
};

export type Progress = {
  id: string;
  courseId: string;
  completedLessons: string[];
  completed: boolean;
  startedAt?: Timestamp;
  lastUpdatedAt?: Timestamp;
  completedAt?: Timestamp;
};

export type Comment = {
    id: string;
    userId: string;
    userName: string;
    userAvatarUrl: string;
    text: string;
    createdAt: Timestamp;
};

// Gamification Types
export type GamificationStats = {
  id: string; // Should match userId
  points: number;
  currentStreak: number;
  longestStreak: number;
  lastStudiedDate: Timestamp | null;
}

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: string; // e.g., URL to an SVG or a Lucide icon name
}

export type UserBadge = {
  id: string; // Auto-generated ID
  userId: string;
  badgeId: string;
  earnedAt: Timestamp;
}

// Forum Types
export type ForumThread = {
    id: string;
    title: string;
    content: string;
    authorId: string;
    authorName: string;
    authorAvatarUrl?: string;
    createdAt: Timestamp;
    postCount: number;
    lastPostAt: Timestamp;
};

export type ForumPost = {
    id: string;
    content: string;
    authorId: string;
    authorName: string;
    authorAvatarUrl?: string;
    createdAt: Timestamp;
};
