import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        quienesSomos: resolve(__dirname, "quienes-somos.html"),
        informacion: resolve(__dirname, "informacion.html"),
        notFound: resolve(__dirname, "404.html")
      }
    }
  }
});
