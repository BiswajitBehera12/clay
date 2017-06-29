const webpack = require('webpack');

module.exports = {
  entry: './src/MetalClayCollapse.js',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                compact: false,
                presets: ['babel-preset-es2015'],
                plugins: ['babel-plugin-transform-node-env-inline']
            }
        }
    }]
  },
  output: {
      library: 'metal',
      libraryTarget: 'this',
      filename: './build/globals/metal-clay-collapse.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};