import { terser } from "rollup-plugin-terser";

const input = "index.js";
const sourcemap = true;

export default [
  {
    input,
    output: {
      file: "dist/converttogeojson.es.js",
      format: "es",
      sourcemap
    }
  },
  {
    input,
    output: {
      file: "dist/converttogeojson.js",
      format: "cjs",
      sourcemap
    }
  },
  {
    input,
    output: {
      file: "dist/converttogeojsons.min.js",
      format: "umd",
      name: "convertToGeoJSON",
      sourcemap
    },
    plugins: [terser()]
  }
];
