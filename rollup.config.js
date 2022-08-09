// rollup.config.js
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
const packageJson = require("./package.json")

export default {
  // entry points
  input: "./src/index.js",
  // output files
  output: [
    {
      file: packageJson.module,
      format: "esm", // ES Modules
      sourcemap: true,
    },
  ],
  // Plugins array
  plugins: [
    peerDepsExternal(), // prevents bundling peerDependencies
    resolve(), // resolves package entrypoints
    typescript({ useTsconfigDeclarationDir: true }), // typescript
  ],
}