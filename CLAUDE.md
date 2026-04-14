# foamico-website

## Project Overview
<!-- Describe the project -->

## Tech Stack
<!-- List frameworks, languages, database, etc. -->

## Development
```bash
npm install
npm run dev
```

## Key Conventions
- All API responses: `{ success: boolean, data?: any, error?: string }`
- No secrets in code — use environment variables
- Parameterized queries only — no string concatenation in SQL
- Error handling: try/catch in every route handler

## Important Rules
- Never modify code outside the scope of the current task. Do not touch files, functions, or flows unrelated to what the user has explicitly asked for.
- Always build/compile the project after making changes to catch errors before sharing the final summary.
- Write optimized code and reuse existing utilities. Check if equivalent logic already exists before writing new helpers.
- Always share a summary at the end of each response: (1) what was the issue, (2) findings/root cause, (3) changes made and where.
