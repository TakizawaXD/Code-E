# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Seeding the Database

To populate your Firestore database with the initial set of courses, learning paths, and lessons, run the following command from your terminal:

```bash
npx tsx src/lib/seed.ts
```

This command executes the seed script which will write the necessary data to your Firestore instance. You only need to run this once to set up the project.
