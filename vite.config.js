import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';

export default async ({ mode }) => {
  process.env = { ...loadEnv(mode, process.cwd()), ...process.env };

  const plugins = [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })];

  return defineConfig({
    server: { port: process.env.VITE_PUBLIC_PORT },
    plugins,
    optimizeDeps: {
      esbuildOptions: {
        plugins: [fixReactVirtualized],
      },
    },
  });
};
