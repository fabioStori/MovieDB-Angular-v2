module.exports = {
  stories: [
    "../src/**/*.stories.ts",
    "../src/app/**/**/stories/*.stories.ts",
    "../src/app/**/stories/*.stories.ts",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-notes",
  ],
};
