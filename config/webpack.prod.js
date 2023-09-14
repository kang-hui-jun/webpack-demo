const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // new CompressionPlugin(),
    new BundleAnalyzerPlugin(),
  ],
});
