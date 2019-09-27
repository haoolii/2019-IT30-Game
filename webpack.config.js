const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/App.ts",
  output: {
    filename: "bundle.js",
    publicPath: process.env.NODE_ENV === 'production' ? '/game/' : '/'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: [".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, './src/')
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' }
    ]),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 8087
  },
  externals: {
    // Don't bundle giant dependencies, instead assume they're available in
    // the html doc as global variables node module name -> JS global
    // through which it is available
    //"pixi.js": "PIXI"
  }
}