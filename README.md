# js_lessons

Base repository for EduTec JavaScript course exercises.

Each exercise should branch from `main` into:

- `lesson-topic-XX-exercise-YY-slug`
- `answer-topic-XX-exercise-YY-slug`

Recommended workflow:

1. Branch from `main` into `lesson-topic-XX-exercise-YY-slug`.
2. Copy files from `templates/exercise/` into the repository root.
3. Adapt `README.md`, `src/index.js`, and tests for the specific task.
4. Ensure lesson branch has failing tests for unfinished `TODO`s.
5. Create `answer-topic-XX-exercise-YY-slug` from the lesson branch and finish the solution.

Scripts:

- `npm run test` - run Vitest once
- `npm run test:watch` - run Vitest in watch mode
- `npm run check` - run all required checks
