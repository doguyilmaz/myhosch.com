# Myhosch.com Monorepo

A monorepo containing multiple Next.js applications and shared packages, built with Turborepo and pnpm.

## Applications

### 1. Myhosch (Portfolio & Blog)

- Personal portfolio and blog site
- Features MDX support, dynamic OG images, and SEO optimization
- Uses Tailwind CSS and Geist font
- Port: 3000

### 2. Docs

- Documentation site
- Uses shared UI components
- Port: 3002

### 3. Web

- Web application with shared components
- Port: 3001

### 4. Random Wordle

- A Wordle game variant with different themes (Naruto, Bleach, One Piece, etc.)
- Built with Mantine UI
- Port: 3003

## Shared Packages

### @repo/ui

- Shared UI components
- Used across multiple applications
- Includes button, card, and code components

### @repo/eslint-config

- Shared ESLint configurations
- Ensures consistent code style across all applications

### @repo/typescript-config

- Shared TypeScript configurations
- Provides base configurations for Next.js and React libraries

## Getting Started

1. Prerequisites:

   - Node.js >= 18
   - pnpm >= 8.15.6

2. Install dependencies:
