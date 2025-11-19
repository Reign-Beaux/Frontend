import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "build", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-multi-spaces": "error", // Marca varios espacios entre tokens
      "space-infix-ops": "error", // Operadores deben tener espacios correctos
      "keyword-spacing": ["error", { before: true, after: true }], // Espacios después de keywords
      "space-before-blocks": ["error", "always"], // Espacio antes de llaves
      "space-before-function-paren": ["error", "never"], // Ajusta según tu preferencia
      "comma-spacing": ["error", { before: false, after: true }], // Espacios en comas
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
