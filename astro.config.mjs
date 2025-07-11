// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
});
  



// export default defineConfig({
//   integrations: [tailwind()],
//   site: 'https://your-username.github.io', // Replace with your GitHub username
//   base: '/sam-lower-memorial', // Replace with your repo name if different
// });
