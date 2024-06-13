module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules", "public"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Enforce type definition to consistently use type (instead of interface which is default).
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@": "src",
          "@assets": "src/assets",
          "@components": "src/components",
          "@contexts": "src/contexts",
          "@hooks": "src/hooks",
          "@pages": "src/pages",
          "@reducers": "src/reducers",
          "@stores": "src/stores",
          "@tests": "src/tests",
          "@themes": "src/themes",
          "@types": "src/types",
          "@utils": "src/utils",
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
