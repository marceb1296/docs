/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true
        }),
        dts({
            insertTypesEntry: true,
        })
    ],
    server: {
        port: 3000,
        open: true
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: './src/test/setup.ts'
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib/index.ts"),
            name: "Docs",
            fileName: "docs",

        },
        rollupOptions: {
            external: ["react", "react-dom", "@preact/signals-react"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDom",
                    "@preact/signals-react": "SignalsReact"
                }
            }
        },
    }
    
})
