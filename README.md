# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Seeding the Database

To populate your Firestore database with the initial set of courses, learning paths, and lessons, run the following command from your terminal:

```bash
npx tsx src/lib/seed.ts
```

This command executes the seed script which will write the necessary data to your Firestore instance. You only need to run this once to set up the project.

### Adding or Modifying Courses

All course content is managed within the `src/lib/seed.ts` file. To add, edit, or remove a course, follow these steps:

1.  **Open `src/lib/seed.ts`**: Inside this file, you will find arrays of data for `learningPaths`, `courses`, and `modulesAndLessons`.
2.  **Modify the data**: Add or edit the objects in these arrays to reflect your desired content.
3.  **Re-run the seed script**: Execute `npx tsx src/lib/seed.ts` again to overwrite the database with your changes. The script is designed to replace the existing data with the new content from the file.
