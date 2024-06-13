import { defineConfig } from "vite";
import { resolve, join } from "path";
import react from "@vitejs/plugin-react";

// Define chrome as default browser for the dev server.
const opsys = process.platform;
// windows
if (opsys === "win32") process.env.BROWSER = "chrome";
// macOS
if (opsys === "darwin") process.env.BROWSER = "/Applications/Google Chrome.app";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, "dist"),
    sourcemap: true,
    minify: true,
    cssMinify: true,
    // Vite entry point (only if no index.html file at project's root folder.)
  },
  resolve: {
    alias: {
      "@": resolve(join(__dirname, "src")),
      "@assets": resolve(join(__dirname, "src", "assets")),
      "@components": resolve(join(__dirname, "src", "components")),
      "@contexts": resolve(join(__dirname, "src", "contexts")),
      "@hooks": resolve(join(__dirname, "src", "hooks")),
      "@pages": resolve(join(__dirname, "src", "pages")),
      "@reducers": resolve(join(__dirname, "src", "reducers")),
      "@stores": resolve(join(__dirname, "src", "stores")),
      "@themes": resolve(join(__dirname, "src", "themes")),
      "@types": resolve(join(__dirname, "src", "types")),
      "@utils": resolve(join(__dirname, "src", "utils")),
    },
  },
  plugins: [react()],
});
