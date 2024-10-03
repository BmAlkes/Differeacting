import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import generateSitemap from 'vite-plugin-pages-sitemap'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [react(),
    Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
