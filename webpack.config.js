var path = require('path');

module.exports = {
  entry: {
    Alert: "./src/Alert.js",
    Button: "./src/Button.js",
    Card: "./src/Card.js",
    Modal: "./src/Modal.js",
    Selector: "./src/Selector.js",
    Switcher: "./src/Switcher.js"
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css/,
        loader: 'css-loader',
        include: __dirname + '/src'
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};