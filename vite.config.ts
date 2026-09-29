import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Public URL of the deployed site. Social networks require absolute image URLs.
  // Set SITE_URL explicitly, or let Vercel provide its production domain at build time.
  const env = loadEnv(mode, process.cwd(), '');
  const vercelDomain = env.VERCEL_PROJECT_PRODUCTION_URL;
  const siteUrl = (env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : '')).replace(/\/$/, '');

  return {
    plugins: [
      react(),
      {
        name: 'inject-site-url',
        transformIndexHtml: (html) => {
          const output = html.replaceAll('%SITE_URL%', siteUrl);
          if (!siteUrl) return output;
          return {
            html: output,
            tags: [
              { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
            ],
          };
        },
      },
    ],
  };
});
