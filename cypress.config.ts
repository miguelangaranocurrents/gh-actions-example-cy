import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/*.spec.js",
    supportFile: "cypress/support/e2e.ts",
    async setupNodeEvents(on, config) {
      const result = await cloudPlugin(on, config);
      return result;
    },
  },
  video: true,
  videoUploadOnPasses: false,
});
