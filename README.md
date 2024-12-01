# nikki - Japanese Diary Application

A minimalist diary application built with Astro and Storyblok, featuring traditional Japanese writing aesthetics.

## Features

- 🎯 Minimalist design inspired by traditional Japanese diaries
- 📝 Vertical writing (tategaki) for diary entries
- 🖼️ Image support with optimized loading
- 📱 Fully responsive design
- 🚀 Fast page loads with static site generation
- ♾️ Infinite scroll for diary entries
- 🔍 SEO optimized with proper meta tags

## Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Storyblok](https://www.storyblok.com) - Headless CMS
- [TailwindCSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type Safety

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Storyblok account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nikki.git
cd nikki
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
STORYBLOK_TOKEN=your_storyblok_preview_token
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:4321`

## Storyblok Setup

1. Create a new Storyblok space
2. Create the following content types:

### Diary Entry
- `date` (Date)
- `image` (Asset)
- `content` (Text)

### Author Info
- `name` (Text)
- `avatar` (Asset)
- `twitter` (Text)

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── author/
│   │   ├── common/
│   │   └── diary/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── date.ts
│       └── mockData.ts
└── package.json
```

## Development

### Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |

### Adding New Features

1. Create components in appropriate directories under `src/components/`
2. Update Storyblok components in `astro.config.mjs` if needed
3. Test with mock data by setting `STORYBLOK_TOKEN=fake`

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` directory to your preferred hosting platform

## Performance Optimization

- Images are automatically optimized using Astro's image optimization
- Static site generation for fast page loads
- Lazy loading of images and infinite scroll content
- Minimal JavaScript usage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.