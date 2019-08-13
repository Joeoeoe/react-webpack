const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = merge.smart(commonWebpack, {
  mode: "development",
  output:{
    publicPath:'/'
  },
  // 中小项目：eval-source-map
  // 大项目考虑时间成本，用cheap-module-eval-source-map
  devtool: "eval-source-map",
  module: {
    rules: [
      //css与css module处理
      {
        test: /\.css$/,
        //匹配.css或.module.css
        oneOf: [
          {
            test: /\.module\.css/,
            use: [
              // {
              //   loader: "style-loader"//把<style></style>标签放在DOM中（因为CSS文件以开始没有分离
              // },
              {
                loader: MiniCssExtractPlugin.loader //使打包后CSS与js文件分离
              },
              {
                loader: "css-loader",
                options: {
                  modules: {
                    //css modules 启用
                    localIdentName: "[path][name]__[local]--[hash:base64:5]"
                  }
                }
              },
              {
                loader: "postcss-loader"
              }
            ]
          },
          {
            use: [
              // {
              //   loader: "style-loader"
              // },
              {
                loader: MiniCssExtractPlugin.loader //使打包后CSS与js文件分离
              },
              {
                loader: "css-loader"
              },
              {
                loader: "postcss-loader"
              }
            ]
          }
        ]
      }
    ]
  }
});
