
// USAGE: npx tsx src/lib/seed.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/config'; // Make sure this path is correct
import { courses, learningPaths } from './data';
import type { Course } from './types';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


// Main function to seed the data
async function seedDatabase() {
    try {
        const batch = writeBatch(db);
        console.log('Starting to seed database...');

        // 1. Seed Learning Paths
        console.log('Seeding learning paths...');
        learningPaths.forEach(path => {
            const pathRef = doc(db, 'learningPaths', path.id);
            batch.set(pathRef, { title: path.title, description: path.description });
        });
        console.log(`${learningPaths.length} learning paths added to batch.`);

        // 2. Seed Courses, Modules, and Lessons
        console.log('Seeding courses, modules, and lessons...');
        let totalModules = 0;
        let totalLessons = 0;

        courses.forEach((course: Course) => {
            const { id, modules, ...courseData } = course;
            const courseRef = doc(db, 'courses', id);
            batch.set(courseRef, courseData);

            if (modules) {
                modules.forEach((module) => {
                    totalModules++;
                    const { id: moduleId, lessons, ...moduleData } = module;
                    const moduleRef = doc(db, 'courses', id, 'modules', moduleId);
                    batch.set(moduleRef, moduleData);

                    lessons.forEach((lesson) => {
                        totalLessons++;
                        const { id: lessonId, ...lessonData } = lesson;
                        const lessonRef = doc(db, 'courses', id, 'modules', moduleId, 'lessons', lessonId);
                        batch.set(lessonRef, lessonData);
                    });
                });
            }
        });
        console.log(`${courses.length} courses added to batch.`);
        console.log(`${totalModules} modules and ${totalLessons} lessons added to batch.`);


        // Commit the batch
        console.log('Committing batch...');
        await batch.commit();
        console.log('Database seeded successfully!');

    } catch (error) {
        console.error('Error seeding database: ', error);
    }
}

seedDatabase().then(() => {
    console.log("Seeding process finished.");
    // Firebase connection will keep the script alive, you might need to manually exit
    process.exit(0);
}).catch(() => {
    process.exit(1);
});
