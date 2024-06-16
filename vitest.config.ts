import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    // Appent test files or folders to be excluded during test run.
    exclude: [...configDefaults.exclude],
  },
});
