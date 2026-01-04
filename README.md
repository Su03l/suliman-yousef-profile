# Suliman Yousef Portfolio

A modern, high-performance portfolio website built with React 19, Vite, and Tailwind CSS 4. This project showcases professional experience, services, and technical projects with a premium look and smooth animations.

## 🚀 Features

- **Dynamic Hero Section**: Interactive introduction with smooth entry animations.
- **Detailed About Me**: Comprehensive overview of skills and professional background.
- **Service Offerings**: Visual display of specialized services provided.
- **Project Showcase**: Grid layout for technical projects with detailed descriptions and tech stacks.
- **Resume Integration**: Interactive resume section with categorized experience and education.
- **Contact Form**: Functional contact section for direct inquiries.
- **Modern UI/UX**: Built with a "premium" aesthetic using glassmorphism, gradients, and micro-animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd MyProfileUpdate
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

Create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory.

## 📂 Project Structure

```text
├── public/           # Static assets
├── src/
│   ├── components/   # UI Components
│   │   ├── layout/   # Layout elements (Navbar, Footer)
│   │   ├── projects/ # Project-specific components
│   │   ├── sections/ # Main page sections (Hero, About, etc.)
│   │   └── ui/       # Reusable UI elements
│   ├── core/         # Core logic and utilities
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Application entry point
│   └── constants.ts  # Global constants and configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts    # Vite configuration
```

## 📄 License

This project is licensed under the MIT License.
