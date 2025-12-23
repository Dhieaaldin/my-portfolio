# Dhia Eddine Louati - Portfolio V2.0

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://dhieaaldin.github.io/my-portfolio/)
[![GitHub](https://img.shields.io/badge/github-repo-blue?style=for-the-badge&logo=github)](https://github.com/Dhieaaldin/my-portfolio)
[![License](https://img.shields.io/badge/license-MIT-purple?style=for-the-badge)](LICENSE)

> A modern, AI-powered portfolio showcasing projects in data science, machine learning, and software development. Built with Next.js 16, TypeScript, and featuring a RAG-powered chatbot.

![Portfolio Preview](https://i.imgur.com/pNCFiGK.png)

---

## ✨ What's New in V2?

This is a **complete redesign** from the ground up. The original portfolio was a simple static HTML/CSS/JS site. Version 2.0 brings:

- **Next.js 16** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** for utility-first, responsive styling
- **Framer Motion** for smooth, engaging animations
- **AI Chatbot Integration** powered by RAG, FastAPI, and MongoDB Atlas
- **Static Export** for zero-cost hosting on GitHub Pages
- **Dark Mode** with automatic theme detection

---

## 🚀 Features

- **Modern Stack** — Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Fully Responsive** — Mobile-first design that works on all devices
- **Lightning Fast** — Static site generation for optimal performance
- **SEO Optimized** — Semantic HTML and meta tags for discoverability
- **Project Filtering** — Browse 9+ projects by category and technology
- **AI Assistant** — RAG-powered chatbot answers questions about my work
- **Smooth Animations** — Engaging page transitions and scroll effects
- **Zero Cost Hosting** — Deployed on GitHub Pages with automated CI/CD

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **UI Components** | [Shadcn UI](https://ui.shadcn.com/) (adapted) |
| **Backend** | [FastAPI](https://fastapi.tiangolo.com/) + MongoDB Atlas |

---

## 📂 Project Structure

```
my-portfolio/
├── public/                  # Static assets
│   └── projects/           # Project images
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects page
│   │   └── skills/         # Skills page
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── skills.tsx
│   │   │   └── contact.tsx
│   │   ├── ui/             # Reusable UI components
│   │   └── theme-provider.tsx
│   ├── data/
│   │   └── projects.ts     # Project data
│   └── lib/
│       └── utils.ts        # Utility functions
├── legacy_v1/              # Original static portfolio
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎯 Featured Projects

### Machine Learning & AI
- **SonicShield** — Real-time audio event detection for autism support (Android, TensorFlow Lite, Flask)
- **Car Price Predictor** — ML-powered vehicle price prediction with EDA visualization
- **Insurance Recommendation System** — Hybrid engine using XGBoost and rule-based matching

### Software Development
- **Git Visualizer** — Java Swing application with repository visualization and commit history

### Data Analysis & SQL
- **Google Analytics Analysis** — Comprehensive e-commerce data analysis
- **World Layoffs Analysis** — Global employment trends using MySQL
- **NYC School SAT Analysis** — Educational performance metrics
- **Netflix Movies Analysis** — Content and duration trends
- **Euro 2024 Analysis** — Soccer tournament SQL analysis

---

## 🤖 AI Chatbot Integration

The portfolio features a **RAG-powered chatbot** that can answer questions about my projects, skills, and experience in real-time.

**Architecture:**
- **Backend:** FastAPI server with MongoDB Atlas vector search
- **Endpoint:** `https://rag-assistant-backend-v1.onrender.com/api/chat`
- **Features:** Contextual responses, source attribution, conversational memory

Try it live on the [portfolio website](https://dhieaaldin.github.io/my-portfolio/)!

---

## 🏃 Getting Started

### Prerequisites

- **Node.js** 18.17 or higher
- **npm** 9.x or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/Dhieaaldin/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (static export) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📦 Building & Deployment

### Local Build

```bash
npm run build
```

This generates an `out/` directory with static files ready for deployment.

### GitHub Pages Deployment

The portfolio uses **automated deployment** via GitHub Actions:

1. Enable GitHub Pages in repository settings (source: **GitHub Actions**)
2. Push to the `portfolio-v2` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin portfolio-v2
   ```
3. Monitor deployment in the **Actions** tab
4. Access your live site at: `https://dhieaaldin.github.io/my-portfolio/`

---

## 🎨 Customization Guide

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Machine Learning' | 'Software Development' | 'Data Analysis';
  image: string;
  screenshots: string[];
  github: string;
  link?: string;
}
```

### Updating Skills

Modify `src/components/sections/skills.tsx` to update skill categories and items.

### Theme Customization

Adjust CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262.1 83.3% 57.8%;
  /* Add your custom colors */
}
```

---

## 🚀 Performance Optimizations

- **Static Export** for zero-cost hosting
- **Image Optimization** for GitHub Pages compatibility
- **Code Splitting** with Next.js App Router
- **Tailwind CSS** with PostCSS compilation
- **Zero Runtime JS** overhead for static pages

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 👤 Author

**Dhia Eddine Louati**

- GitHub: [@Dhieaaldin](https://github.com/Dhieaaldin)
- Portfolio: [dhieaaldin.github.io/my-portfolio](https://dhieaaldin.github.io/my-portfolio/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Dhieaaldin/my-portfolio/issues).

---

## 📝 Changelog

### Version 2.0.0 (December 2024)
- Complete redesign with Next.js 16 and TypeScript
- Added AI-powered RAG chatbot integration
- Implemented project filtering system
- Added dark mode support
- Integrated Framer Motion animations
- Set up automated GitHub Pages deployment
- Migrated from static HTML to modern React architecture

### Version 1.0.0
- Initial static HTML/CSS/JS portfolio
- Basic project showcase
- Contact form

---

## 🙏 Acknowledgments

- **Next.js Team** for the incredible framework
- **Vercel** for Next.js and deployment tools
- **Tailwind Labs** for Tailwind CSS
- **Shadcn** for the UI component inspiration
- **Anthropic** for Claude AI assistance

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Dhia Eddine Louati](https://github.com/Dhieaaldin)

</div>
