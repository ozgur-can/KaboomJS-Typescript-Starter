const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "dist",
    watch: true,
    target: "esnext",
    platform: "node"
})