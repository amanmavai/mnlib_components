import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {glob} from "glob";
import {peerDependencies} from "./package.json";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({include: ["lib"]})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          path.relative("lib", file.slice(0, file.length - path.extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        // Put chunk files at <output>/chunks
        chunkFileNames: "chunks/[name].[hash].js",
        // Put chunk styles at <output>/assets
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    copyPublicDir: false,
  },
});
