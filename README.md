# Dhia Eddine Louati - Portfolio Website

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed for static export to GitHub Pages.

## 🚀 Features

- **Modern Tech Stack**: Built with the latest Next.js and Tailwind CSS features.
- **Fully Static**: Exported as static HTML/CSS/JS for zero-cost hosting (GitHub Pages, Vercel, Netlify).
- **Responsive Design**: Mobile-first architecture ensuring perfect display on all devices.
- **Dark Mode**: Seamless theme switching with system preference detection.
- **Animations**: Smooth scroll revelations and interactions using Framer Motion.
- **SEO Friendly**: Pre-configured metadata and semantic HTML structure.
- **Project Filtering**: Categorized project showcase with instant filtering.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (adapted)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📂 Project Structure

```bash
├── public/              # Static assets (images, favicon)
├── src/
│   ├── app/             # Next.js App Router pages and layout
│   │   ├── globals.css  # Global styles & Tailwind v4 config
│   │   ├── layout.tsx   # Root layout with ThemeProvider
│   │   └── page.tsx     # Main one-page portfolio
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   └── ui/          # Reusable UI atoms (Button, Card, etc.)
│   ├── data/            # Static data files (projects.ts)
│   └── lib/             # Utilities (cn, etc.)
└── next.config.ts       # Next.js configuration (static export)
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Dhieaaldin/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Deployment

### GitHub Pages

This project is configured for static export (`output: 'export'` in `next.config.ts`).

1.  **Build the project**:
    ```bash
    npm run build
    ```
    This generates an `out/` directory with the static files.

2.  **Deploy**:
    - Push the contents of the `out/` folder to your `gh-pages` branch, or configure GitHub Actions to build and deploy this repo.

    **Note**: If deploying to a subdirectory (e.g., `username.github.io/repo-name`), you may need to configure `basePath` in `next.config.ts`.

## 🎨 Customization

- **Projects**: Edit `src/data/projects.ts` to add or update your projects.
- **Skills**: Update the list in `src/components/sections/skills.tsx`.
- **Theme**: Modify CSS variables in `src/app/globals.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
