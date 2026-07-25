import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**",
      "**/*.cjs",
      "**/*.html"
    ],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "no-eval": "error",
      "no-inner-declarations": "error",
      "no-multi-spaces": "error",
      "func-style": [
        "error",
        "declaration"
      ],
      "prefer-arrow-callback": "error",
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,],
    languageOptions: {
      globals: globals.browser
    }
  }
]);
