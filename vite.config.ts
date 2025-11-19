import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@Api", replacement: path.resolve(__dirname, "src/Api") },
      { find: "@Application", replacement: path.resolve(__dirname, "src/Application") },
      { find: "@Domain", replacement: path.resolve(__dirname, "src/Domain") },
      { find: "@Infrastructure", replacement: path.resolve(__dirname, "src/Infrastructure") },
      { find: "@Presentation", replacement: path.resolve(__dirname, "src/Presentation") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  css: {
    modules: {
      // generateScopedName: "[hash:8]",
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    allowedHosts: ["saulantonio.br-y-sa.com", "localhost"],
  },
});
