# React + InversifyJS Task Manager

A modern task management application built with React, TypeScript, and InversifyJS for dependency injection.

## Features

- Add, edit, delete, and toggle tasks
- Clean and intuitive user interface
- In-memory task storage
- Type-safe development with TypeScript
- Dependency injection with InversifyJS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-inversify-tasks
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── services/      # Business logic services
├── types/         # TypeScript type definitions
└── container.ts   # Inversify container configuration
```

## Technologies Used

- React 18
- TypeScript
- InversifyJS
- Vite
- CSS Modules

## Development

The project uses Vite for fast development and building. The development server will automatically reload when you make changes.

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

MIT 