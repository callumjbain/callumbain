# Callum Bain - Personal Portfolio

A modern, responsive portfolio website showcasing my work as a front-end developer. Built with React, TypeScript, and Tailwind CSS, featuring a cosmic-themed design with smooth animations and interactive elements.

## 🌟 Features

- **Modern Design**: Clean, cosmic-themed interface with gradient effects and animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations, hover effects, and dynamic content
- **Dark Theme**: Elegant dark theme with cosmic background effects
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Type Safe**: Full TypeScript implementation for better code quality

## 🚀 Live Demo

Visit the live site: [callumbain.me](https://callumbain.me)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **UI Components**: Radix UI (Toast)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AboutSection.tsx    # About me section
│   ├── ContactSection.tsx  # Contact form and info
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing hero section
│   ├── NavBar.tsx         # Navigation bar
│   ├── ProjectsSection.tsx # Featured projects
│   ├── SkillsSection.tsx  # Skills showcase
│   ├── StarBackground.tsx # Animated background
│   └── ThemeToggle.tsx    # Theme switcher
├── pages/              # Page components
│   ├── Home.tsx          # Main homepage
│   └── NotFound.tsx      # 404 page
├── lib/                # Utility functions
│   └── utils.ts          # Helper utilities
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/callumbain/callumbain.git
cd callumbain
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Key styling files:

- `src/index.css` - Global styles and CSS variables
- `src/App.css` - Component-specific styles

### Content

Update the following components to customize content:

- [`HeroSection.tsx`](src/components/HeroSection.tsx) - Personal introduction
- [`AboutSection.tsx`](src/components/AboutSection.tsx) - About me content
- [`ProjectsSection.tsx`](src/components/ProjectsSection.tsx) - Featured projects
- [`SkillsSection.tsx`](src/components/SkillsSection.tsx) - Skills and expertise
- [`ContactSection.tsx`](src/components/ContactSection.tsx) - Contact information

### Projects

Edit the `projects` array in [`ProjectsSection.tsx`](src/components/ProjectsSection.tsx:3) to add your own projects:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "/projects/your-image.png",
    tags: ["React", "TypeScript", "Tailwind"],
    url: "https://your-project.com",
  },
  // Add more projects...
];
```

### Skills

Update the `skills` array in [`SkillsSection.tsx`](src/components/SkillsSection.tsx:4) to reflect your expertise:

```typescript
const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  // Add more skills...
];
```

## 🚀 Deployment

The site is configured for deployment to GitHub Pages:

1. Update the `homepage` field in [`package.json`](package.json:5) with your domain
2. Run the deployment command:

```bash
npm run deploy
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:

- Open an issue for bugs or suggestions
- Submit a pull request for improvements
- Fork the project for your own portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please consider giving it a star!
