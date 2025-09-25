export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
};

export type CourseModule = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  imageId: string;
  modules: CourseModule[];
  pathId: string;
};

export type LearningPath = {
  id: string;
  title: string;
  description: string;
  courses: Course[];
};

export type User = {
  name: string;
  email: string;
  avatarId: string;
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  date: Date;
};
