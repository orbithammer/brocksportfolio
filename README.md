# Brock Penner's Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my projects and skills as a junior developer. Features a clean design with automatic dark/light theme switching based on user preferences.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Automatic Theme Switching**: Respects user's system theme preferences (light/dark mode)
- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Static Export**: Optimized for deployment on static hosting platforms
- **Semantic HTML**: Accessible markup with proper ARIA labels
- **Performance Optimized**: Image optimization and efficient bundling
- **Testing Setup**: Configured with Vitest for unit testing

## 🚀 Live Demo

Visit the live site: [brocksportfolio.netlify.app](https://brocksportfolio.netlify.app/)

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Poppins (Google Fonts)
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint
- **Deployment**: Netlify (static export)

## 📁 Project Structure

```
brocksportfolio/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── EmailLink.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ResumeLink.tsx
│   ├── lib/                 # Data and utility functions
│   │   └── projects.ts      # Project data and helper functions
│   ├── projects/            # Projects pages
│   │   ├── [slug]/
│   │   │   └── page.tsx     # Dynamic project detail pages
│   │   └── page.tsx         # Projects listing page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── tests/               # Test files
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── public/                  # Static assets
│   ├── icons/               # SVG icons
│   ├── images/              # Project screenshots and photos
│   └── files/               # Resume PDF
├── netlify.toml             # Netlify deployment configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.11.0 or higher
- npm 10.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brocksportfolio.git
   cd brocksportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with Vitest UI

## 🎨 Design Features

### Theme System
- Automatic light/dark mode based on user's system preferences
- CSS custom properties for consistent theming
- Smooth transitions between theme states

### Color Palette
- **Light Mode**: Clean whites and grays with red accents
- **Dark Mode**: Dark backgrounds with mint green highlights
- **Accent Colors**: Carefully chosen for accessibility and visual appeal

### Typography
- **Primary Font**: Poppins for clean, modern readability
- **Responsive Text**: Fluid typography that scales across devices

## 📱 Components

### Core Components

- **Navbar**: Responsive navigation with mobile hamburger menu
- **ProjectCard**: Reusable card component for project previews
- **EmailLink**: Contact button with mailto functionality
- **ResumeLink**: Resume download with PDF preview

### Pages

- **Homepage**: Hero section with introduction and skills overview
- **About**: Personal background and interests
- **Projects**: Gallery of development projects
- **Project Detail**: Individual project pages with technologies, learnings, and links

## 🌐 Deployment

This project is configured for deployment on Netlify with static export:

1. **Automatic Deployment**: Connected to GitHub for automatic deploys
2. **Build Command**: `npm run build`
3. **Publish Directory**: `out`
4. **Node Version**: 20.11.0

### Manual Deployment

```bash
# Build for production
npm run build

# The 'out' directory contains the static export
# Upload the contents to your hosting provider
```

## 🧪 Testing

The project includes a testing setup with Vitest:

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui
```

Test files are located in `app/tests/` directory.

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Next.js Image component for optimal loading
- **Static Export**: Fast loading times with CDN distribution
- **Minimal Bundle**: Efficient code splitting and tree shaking

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customization
- **Colors**: Modify `tailwind.config.js` and `globals.css`
- **Content**: Update project data in `app/lib/projects.ts`
- **Assets**: Replace images and icons in the `public/` directory

## 📝 Adding New Projects

To add a new project:

1. **Add project images** to `public/images/`
2. **Update project data** in `app/lib/projects.ts`:
   ```typescript
   {
     slug: "project-slug",
     title: "Project Title",
     description: "Brief description",
     image: "/images/project-preview.jpg",
     images: ["/images/project1.jpg", "/images/project2.jpg"],
     technologies: [
       { name: "React", icon: "/icons/react.svg" }
     ],
     learnings: ["What you learned from this project"],
     githubUrl: "https://github.com/username/repo",
     liveUrl: "https://project-demo.com",
     liveIcon: "/icons/demo-icon.svg"
   }
   ```

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

- **Email**: brockpenner@protonmail.com
- **LinkedIn**: [Brock Penner](https://www.linkedin.com/in/brock-penner-97322062)
- **Mastodon**: [@brockpenner@techhub.social](https://techhub.social/@brockpenner)
- **GitHub**: [orbithammer](https://github.com/orbithammer)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Brock Penner**