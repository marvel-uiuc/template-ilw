import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "<%= name %>",
            entry: "<%= name %>.ts",
            fileName: "<%= name %>",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "<%= name %>.css";
                    return "assets/[name]-[hash][extname]"; // vite default
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
