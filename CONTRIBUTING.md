# Contributing to Ecoshel

Thank you for your interest in contributing to Ecoshel! Follow these guidelines to help keep the codebase maintainable and robust.

## Development Workflow

1. **Clone and Install**
   ```bash
   git clone <repo-url>
   cd Ecoshel-main
   npm install
   ```

2. **Environment Variables**
   ```bash
   cp .env.example .env.local
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Code Quality and Testing**
   Always verify that code passes linting and unit tests before submitting changes:
   ```bash
   npm run lint
   npm test
   ```

## Architectural Guidelines

- **App Router**: We use Next.js 14 App Router (`app/` directory). File-system routes live in `app/<route>/page.tsx`.
- **Global Auth**: Access authentication state and actions via `useAuth()` from `app/context/AuthContext.tsx`.
- **Navigation**: Always use `next/link` `<Link>` or `useRouter()` (`router.push`) for page navigation. Do not use custom view-state emulations.
- **Client Components**: Only add `"use client"` when component requires client-side hooks (`useState`, `useEffect`, event listeners) or browser APIs.
- **SSR Safety**: Always guard direct `window` or `localStorage` access with `typeof window !== "undefined"`.
