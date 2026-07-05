# 🚀 Shaik Shahid Shariff — Portfolio Website

A world-class, award-winning personal portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

> *Inspired by Vercel, Linear, Framer & Stripe.*

---

## ✨ Features

| Feature | Details |
|---|---|
| ⚡ Framework | Next.js 16 (App Router) |
| 🎨 Styling | Tailwind CSS v4 + CSS Variables |
| 🎭 Animations | Framer Motion v12 |
| 🌐 Icons | Lucide React |
| 🔡 Fonts | Inter + JetBrains Mono |
| 🎯 Performance | Static generation, lazy loading |
| ♿ Accessible | Semantic HTML, ARIA labels |
| 🔍 SEO | Open Graph, Twitter Cards, Schema.org |

## 🎨 Design System

- **Dark theme** with electric blue / purple / cyan accents
- **Glassmorphism** cards with backdrop blur
- **Aurora gradient** ambient backgrounds
- **Particle field** with mouse interaction
- **Custom cursor** with glow ring
- **3D tilt** project cards
- **Animated skill bars** with IntersectionObserver
- **Command Palette** (`Ctrl+K` / `Cmd+K`)
- **Scroll progress** bar
- **Loading screen** with animated progress

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, metadata, fonts
│   ├── page.tsx         # Main page (all sections)
│   ├── globals.css      # Design tokens + animations
│   └── not-found.tsx    # Custom 404 page
├── components/
│   ├── effects/
│   │   ├── CustomCursor.tsx
│   │   ├── ParticleField.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── BackToTop.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CommandPalette.tsx
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Certifications.tsx
│       ├── Education.tsx
│       ├── GitHubStats.tsx
│       ├── TechStack.tsx
│       └── Contact.tsx
└── lib/
    ├── constants.ts     # ALL portfolio data
    └── utils.ts         # Utility functions
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Customization

**ALL portfolio data is in one file: `src/lib/constants.ts`**

Edit that file to update:
- Personal info (name, email, location)
- Skills and proficiency levels
- Projects (add/remove/edit)
- Experience
- Certifications
- Education
- Social links

### Adding a New Project

In `src/lib/constants.ts`, add to the `PROJECTS` array:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "Short description",
  longDescription: "Full description",
  features: ["Feature 1", "Feature 2"],
  tech: ["Flutter", "Firebase"],
  category: "Mobile App",
  color: "from-blue-600 to-cyan-500",
  icon: "Globe",
  github: "https://github.com/your-repo",
  demo: "https://your-demo.com", // or null
  highlights: ["Key stat", "Another"],
  year: "2024",
}
```

### Adding a Resume

Replace `public/resume.pdf` with your actual resume PDF file.

---

## 🌐 Deploying to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js
5. Your site is live in ~60 seconds! 🎉

### Environment Variables

No environment variables required for basic deployment.

### Custom Domain

1. In Vercel dashboard → **Settings** → **Domains**
2. Add your domain (e.g., `shahidshariff.dev`)
3. Update your DNS records as instructed by Vercel

---

## 🎯 Performance Tips

- Replace `public/resume.pdf` with your actual CV
- Add a real profile photo by updating the avatar initials in `About.tsx`
- The GitHub stats cards use your real username from constants.ts

## 📊 SEO

Update the metadata in `src/app/layout.tsx`:
- `metadataBase` URL → your real domain
- Open Graph image → generate at 1200×630px, save as `public/og-image.png`

---

## 📝 Maintenance

### Monthly Updates
1. Update `PROJECTS` in `constants.ts` with new work
2. Update skill levels in `SKILLS` array
3. Run `npm run build` to verify no errors
4. Deploy via `vercel --prod`

### Upgrading Dependencies
```bash
npm update
npm run build   # verify no breaking changes
```

---

## 🏆 Built With

- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

**© 2024 Shaik Shahid Shariff. Built with ❤️ in India.**
