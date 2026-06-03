import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Yeni Tailwind Vite plugini

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
