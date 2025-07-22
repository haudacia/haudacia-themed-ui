import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.jsx",
      name: "ThemedUI",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `themed-ui.${format}.js`,
    },
    addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-onboarding",
      "@storybook/addon-interactions",
    ],
    docs: {
      autodocs: "tag",
    },
    rollupOptions: {
      // não empacotar React/ReactDOM
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
