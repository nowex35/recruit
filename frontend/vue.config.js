const BundleTracker = require("webpack-bundle-tracker");
const path = require("path");

module.exports = {
  publicPath: "http://127.0.0.1:8080/",
  outputDir: "./dist/",

  chainWebpack: (config) => {
    config.plugin("BundleTracker").use(BundleTracker, [
      {
        path: path.join(__dirname, "./"),
        filename: "webpack-stats.json",
      },
    ]);

    config.output.filename("bundle.js");

    config.optimization.splitChunks(false);

    config.resolve.alias.set("__STATIC__", "static");

    config.devServer.headers({ "Access-Control-Allow-Origin": ["*"] });
  },

  devServer: {
    hot: true, // ホットリロードの設定
    https: false, // HTTPSを無効化
    allowedHosts: "all", // 許可するホストを指定
    watchFiles: {
      paths: ["src/**/*"], // 監視するパス
      options: {
        usePolling: true, // ポーリングの有効化
        interval: 1000, // ポーリング間隔
      },
    },
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
};
