module.exports = {
  entry:"./www.js",
  output:{
    path:"build",
    filename:"qq.js"
  },
  devtool:"eval",
  module: {
  rules: [
  { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  },
}
