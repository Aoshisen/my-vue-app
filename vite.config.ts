import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// path helper
function pathResolve(dir: string) {
  console.log(path.resolve(__dirname, dir));
  //兼容windows 路径问题 \ -> /
  return path.resolve(__dirname, dir).replace(/\\/g, "/");
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
