## Copilot / AI assistant guidance for this repository

This file captures the concrete, discoverable patterns an AI should follow to be immediately productive in this Patient Portal web app.

- Project type: React + TypeScript + Vite. Primary UI uses TailwindCSS. Firebase (Auth / Firestore / Storage) is the backend.
- Key entry points:
  - `package.json` — scripts: `npm run dev` (Vite), `npm run build` (runs `tsc && vite build`), `npm run preview` (vite preview).
  - `src/patientPortal.tsx` — very large monolithic file that contains app providers, hooks, layout (Sidebar, Header, PageWrapper), and many UI components. Many features are implemented here.
  - `src/services/` — integration layer for Firebase: `auth-service.ts`, `database-service.ts`, `firebase-config.ts`.

Guiding principles
- Keep integration code in `src/services/*`. These services encapsulate Firebase calls and return Promises or unsubscribe functions for real-time subscriptions (e.g. `subscribeToAppointments`). When adding backend access, add functions here and follow existing error handling pattern (try/catch -> console.error -> throw).
- UI and routing: `src/patientPortal.tsx` exports UI building blocks and the App router. When adding a new page, prefer adding it under `src/pages/` (create the folder) and then add a Route inside the router in `patientPortal.tsx` under the existing `PageWrapper`/Routes.
- Auth context: use the `useAuth()` hook (exported from `patientPortal.tsx`) to access `user` and `isLoading`. Most data hooks expect `user.uid` as the patient id — pass that to `database-service` functions (e.g. `getPatientAppointments(user.uid)`).

Important conventions and examples (concrete)
- Real-time subscriptions: database-service functions that start an `onSnapshot` return an unsubscribe; consume them inside a `useEffect` and return the unsubscribe. Example: `const unsub = subscribeToAppointments(user.uid, cb); return () => unsub();`.
- Add/read/write Firestore data via `src/services/database-service.ts`. Example read:
  - `import { getPatientAppointments } from './services/database-service';`
  - `const appointments = await getPatientAppointments(patientId);`
- Upload files with progress: `uploadDocument(patientId, file, onProgress)` in `database-service.ts` — it uses `uploadBytesResumable` and saves metadata to Firestore (fields: `fileUrl`, `storagePath`, `sizeBytes`).
- Auth flows: use `src/services/auth-service.ts` functions: `loginWithEmail`, `signupWithEmail`, `loginWithGoogle`, `logout`, and `onAuthChange`.

Project-specific gotchas and notes
- The repo contains a single large `patientPortal.tsx` file (many exports). To find UI elements or providers, search that file (it contains a table-of-contents comment block). When adding features, consider extracting components to `src/components/` or `src/pages/` but follow existing naming and prop patterns.
- Firebase config is checked in at `src/services/firebase-config.ts` (contains API keys). The codebase expects these exports: `auth`, `db`, `storage`, and `googleProvider`.
- The README still contains language referencing Create React App — the actual build uses Vite. Use `npm run dev` (Vite) to run locally (not `npm start`).
- TypeScript is enabled (`tsconfig.json`) — prefer adding types for public functions in `src/services/*` (patterns already present in `database-service.ts` for e.g. `Appointment`, `Document`, `Message`).

Quick change recipes
- Add a new route + page:
  1. Create `src/pages/MyPage.tsx` exporting a React component.
  2. Import it in `src/patientPortal.tsx` and add a `<Route path="/mypage" element={<MyPage />} />` inside the existing `Routes` block under `PageWrapper`.
  3. If the page needs data scoped to the patient, call `const { user } = useAuth();` then call `await getPatientX(user.uid)` from `database-service`.

- Add a database helper:
  1. Add a typed function in `src/services/database-service.ts` following existing patterns (exported async function, try/catch, console.error, throw).
  2. Add a small unit-friendly wrapper (returns Promise) and prefer Firestore queries already used (query + where + orderBy).

Tests / CI / Linting
- There are no test scripts in `package.json`. `setupTests.ts` exists but no `test` script is configured — do not rely on tests being present.

Security note (discoverable):
- Firebase keys are included in `src/services/firebase-config.ts` — treat production secrets carefully. For local dev, the code uses the same file; consider replacing with env config if changing the project.

If something is ambiguous, first inspect these files to confirm behavior:
- `src/patientPortal.tsx` (app provider + UI)
- `src/services/*.ts` (auth + database integration)
- `package.json` (scripts)
- `tailwind.config.js` and `src/index.css` (styling conventions)

If you want, I can:
- Extract a short list of commonly-used exports from `patientPortal.tsx` (e.g. `useAuth`, `Sidebar`, `Header`, `PageWrapper`) to speed up code edits.
- Propose a small refactor to move page components out of `patientPortal.tsx` into `src/pages/` to reduce file size and improve maintainability.

Please tell me which of the above you'd like me to add, update, or expand.
