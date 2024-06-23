import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"
import electron from "vite-plugin-electron";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: "electron/main.ts",
        vite: {
          build: {
            outDir: "dist/electron",
          },
        },
      },
      {
        entry: "electron/preload.ts",
        vite: {
          build: {
            outDir: "dist/electron"
          }
        }
      }
    ]),
  ],
  base:"./",
  resolve:{
    alias:{
      "@": path.resolve(__dirname,"./src")
    }
  },
  build:{
    // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
    emptyOutDir: false, 
  }
});
