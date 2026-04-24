import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  {
    extends: compat.extends("eslint:recommended"),

    languageOptions: {
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.commonjs,
        Promise: "readonly"
      },

      ecmaVersion: 3,
      sourceType: "script"
    },

    rules: {
      "no-constant-condition": 0,
      "no-fallthrough": 0,
      "no-redeclare": 0,
      "no-useless-escape": 0
    }
  }
]);
