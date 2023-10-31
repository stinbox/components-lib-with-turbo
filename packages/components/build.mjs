import esbuild from "esbuild";

const result = await esbuild.build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  minify: false,
  outdir: "./dist",
  format: "esm",
  packages: "external",
  target: ["es2020"],
});

console.log(result);
