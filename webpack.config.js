
var webpack = require('webpack');
module.exports = {
  // devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
	  {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
	  {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test:/\.(woff2?|woff|eot|svg|ttf|otf)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ],
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}