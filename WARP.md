# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 e-commerce application using the App Router, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Create production build
npm start            # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

### Testing
This project does not currently have a testing framework configured.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **React**: Version 19.2.0
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono via next/font

### Project Structure
- **`app/`**: Next.js App Router directory
  - `layout.tsx`: Root layout with font configuration and metadata
  - `page.tsx`: Homepage component
  - `globals.css`: Global styles with Tailwind imports and CSS variables
- **`public/`**: Static assets (SVG files)
- **TypeScript configuration**: Path alias `@/*` maps to project root

### Styling Architecture
- Uses Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- Custom CSS variables defined in `globals.css` for theming (`--background`, `--foreground`)
- Inline theme configuration using `@theme` directive
- Dark mode support via `prefers-color-scheme` media query
- Font variables injected via className in root layout

### Configuration Files
- **`next.config.ts`**: Next.js configuration (currently minimal)
- **`tsconfig.json`**: TypeScript config with strict mode, path aliases (`@/*`), and Next.js plugin
- **`eslint.config.mjs`**: ESLint setup using Next.js presets (core-web-vitals + TypeScript)
- **`postcss.config.mjs`**: PostCSS configuration for Tailwind CSS v4

## Windows Development Notes
This project is being developed on Windows with PowerShell. Use PowerShell-compatible commands when running shell operations.
