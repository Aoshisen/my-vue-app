import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
// path helper
function pathResolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// styles
const variables_style_path = pathResolve("./src/assets/styles/_variables.scss");
const helper_style_path = pathResolve("./src/assets/styles/_helper.scss");

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variables_style_path}";@import "${helper_style_path}";`,
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
