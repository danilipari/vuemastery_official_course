const { defineConfig } = require('@vue/cli-service');
const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/__global.scss")]
    }
  }
}