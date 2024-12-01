import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
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
  site: 'https://nikki.serizawa.me',
});