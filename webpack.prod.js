const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");

module.exports = merge(commonWebpack, {
  mode: "production"
  //   devtool: "cheap-module-source-map" //可不用
  
});
