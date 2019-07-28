const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");

module.exports = merge(commonWebpack, {
  mode: "development",
  
  // 中小项目：eval-source-map
  // 大项目考虑时间成本，用cheap-module-eval-source-map
  devtool: "eval-source-map"
});
