import path from 'path';

export const devtool = 'eval-source-map';
export const entry = {
  main: './src/index.js',
};
export const mode = 'development';
export const module = {
  rules: [{
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader'
    }],
    test: /\.jsx?$/
  }, {
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }],
    test: /\.s[ac]ss$/i
  }]
};
export const output = {
  path: __dirname + '/dist',
  filename: '[name].bundle.js',
  plugins: [
    new WebpackFavicons({
      src: 'public/favicon.svg',
      path: 'img',
      background: '#000',
      theme_color: '#000',
      icons: {
        favicons: true
      }
    })
  ]
};
