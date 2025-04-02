# Aniruddha Narayan - Professional Portfolio

A state-of-the-art portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed for professional presentation with a focus on clean design, accessibility, and performance.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Light/Dark Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Fully responsive across all devices
- **Professional Layout**: Clean sections including Hero, About, Experience, Projects, Skills, and Contact
- **Smooth Animations**: Subtle fade-in and slide-up animations for better UX
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized for speed and Core Web Vitals

## Sections

1. **Hero**: Eye-catching introduction with key highlights
2. **About**: Professional summary and mission statement
3. **Experience**: Detailed work history and achievements
4. **Projects**: Showcase of key projects including Valley AI and Ankosha A Drones
5. **Skills**: Technical expertise and achievements
6. **Contact**: Easy ways to connect

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aniruddha-pf
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
aniruddha-pf/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── ThemeProvider.tsx     # Dark mode provider
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Experience.tsx        # Experience section
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Skills and achievements
│   └── Contact.tsx           # Contact section
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## Customization

### Updating Content

- **Personal Information**: Edit components in the `components/` directory
- **Styling**: Modify `tailwind.config.ts` and `app/globals.css`
- **SEO**: Update metadata in `app/layout.tsx`

### Color Scheme

The portfolio uses a clean, professional color scheme:
- **Light Mode**: White background with dark text
- **Dark Mode**: Dark background with light text
- **Accents**: Minimal use of grays for borders and backgrounds

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Performance

This portfolio is optimized for:
- Fast initial page load
- Smooth animations
- Responsive images
- Minimal JavaScript bundle size
- SEO best practices

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

All rights reserved © 2026 Aniruddha Narayan

## Contact

- Email: aniruddhanarayan36@gmail.com
- LinkedIn: [linkedin.com/in/aniruddha-narayan-8b06a1257](https://www.linkedin.com/in/aniruddha-narayan-8b06a1257)

---

Built with ❤️ for innovation in defense technology and AI systems.
