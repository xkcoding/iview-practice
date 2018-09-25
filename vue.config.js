const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === "production" ? "/iview/" : "/";

module.exports = {
  lintOnSave: true,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("api", resolve("src/api"))
      .set("components", resolve("src/components"))
      .set("config", resolve("src/config"))
      .set("libs", resolve("src/libs"))
      .set("views", resolve("src/views"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    // proxy: "http://localhost:8080",
    port: 4000
  }
};
