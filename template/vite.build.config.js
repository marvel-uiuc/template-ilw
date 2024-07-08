import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "<%= name %>",
            entry: "<%= name %>.js",
            fileName: "<%= name %>",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "<%= name %>.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
