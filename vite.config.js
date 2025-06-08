import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "vite-template",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
