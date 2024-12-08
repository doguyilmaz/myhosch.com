# Project Overview

This repository is a multi-purpose project that leverages Next.js for dynamic, scalable web applications. The setup is tailored to support customizable page configurations and seamless deployment via Vercel.

## Features

- **Dynamic Configuration**: Centralized configuration management via custom `config` files.
- **Multi-Purpose Pages**: Flexible pages that adapt based on the provided configuration.
- **Tailwind CSS Integration**: Simplified and efficient styling with Tailwind CSS.
- **Environment Variables**: Enhanced functionality powered by `.env` files.
- **Vercel Deployment**: Optimized for quick deployment and scalability on Vercel.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <repository-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Environment Variables

Environment variables are essential for dynamic configurations. Copy the `.env.local` file and modify as needed:

```bash
cp .env.local.example .env.local
```

Key variables include:

- `API_BASE_URL`: Base URL for API endpoints.
- `NEXT_PUBLIC_BRAND_CONFIG`: Points to the brand-specific configuration.

### Config Files

- **`config/brand.ts`**: Defines brand-specific settings.
- **`lib/get-brand-config.ts`**: Utility to fetch and parse configuration dynamically.

## Running Locally

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment on Vercel

### Setting Up Environment Variables

1. Go to your Vercel dashboard.
2. Navigate to the project settings.
3. Add the necessary environment variables listed in the `.env.local` file.

### Deploying

1. Push your changes to the repository:
   ```bash
   git push origin main
   ```
2. Vercel automatically triggers a deployment for the main branch.

## Directory Structure

- **`config/`**: Contains configuration files.
- **`lib/`**: Contains utility functions, including `get-brand-config.ts`.
- **`pages/`**: Contains Next.js pages for the application.
- **`styles/`**: Tailwind CSS and other styling files.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

