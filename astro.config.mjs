import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        diaryEntry: 'components/diary/DiaryEntry',
        authorInfo: 'components/author/AuthorInfo',
      },
      apiOptions: {
        region: 'ap',
      },
    }),
    sitemap(),
    tailwind(),
  ],
  output: 'static',
  adapter: vercel(),
  site: 'https://your-domain.com',
});