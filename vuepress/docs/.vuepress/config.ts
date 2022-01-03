import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions } from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Dev Notes of Miles Xu',
  description: 'Just playing around',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
});
