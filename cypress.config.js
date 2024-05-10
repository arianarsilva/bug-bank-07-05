const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  env: {
    baseUrl: "https://bugbank.netlify.app",
  },

  specPattern: "**/*.feature",

  async setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);
    on(
      "file:preprocessor",
      createBundler({ plugins: [createEsbuildPlugin(config)] })
    );
    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
