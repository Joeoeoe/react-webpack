const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * eval-source-map：调试用
   * cheap-module-eval-source-map:大型项目调试用
   * cheap-module-source-map:上线用
   */
  devtool: "eval-source-map",

  entry: __dirname + "/src/index.js",

  output: {
    path: __dirname + "/dist",
    filename: "main.js"
  },

  /**
   * These options determine how the different types of modules
   * within a project will be treated.
   */
  module: {
    // an array of Rule
    rules: [
      // js,jsx处理
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      //html处理
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      //css与css module处理
      {
        test: /\.css$/,
        //匹配.css或.module.css
        oneOf: [
          {
            test: /\.module\.css/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  modules: {
                    //css modules 启用
                    localIdentName: "[name]__[local]--[hash:base64:5]"
                  }
                }
              },
              {
                loader: "postcss-loader" //默认
              }
            ]
          },
          {
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader"
              },
              {
                loader: "postcss-loader" //默认
              }
            ]
          }
        ]
      },

      //图片处理
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          // {
          //   loader: "file-loader"
          // },
          {
            loader: "url-loader", //需要npm安装file-loader，会自动配合file-loader，但use中不需要写
            options: {
              outputPath: "images/",
              limit: 10 * 1024 //10kb以下转换为base64
            }
          }
        ]
      },

      //字体处理
      {
        test: /\.(eot|woff2?|ttf|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              // publicPath: "fonts/", //????
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),

    /**
     * Hot Module Replacement (HMR) exchanges, adds, or removes
     * modules while an application is running, without a full
     * reload.
     */
    new webpack.HotModuleReplacementPlugin()
  ],

  //   本地服务器配置
  devServer: {
    hot: true,
    host: "localhost",
    port: 8080,
    historyApiFallback: true, //404跳转至index.html
    proxy: { //代理，可用于跨域，多个后台等情况
      
    }
  }
};
