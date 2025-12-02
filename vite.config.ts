import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    // const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      base: 'https://dcequea97.github.io/',
      // server: {
      //   port: 443,
      //   host: '0.0.0.0',
      // },
      // define: {},
      // resolve: {
      //   alias: {
      //     '@': path.resolve(__dirname, '.'),
      //   }
      // }
    };
});
