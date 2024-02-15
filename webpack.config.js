const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, 'index.html'), // Указываем путь к файлу index.html в корне проекта
        path.resolve(__dirname, 'public'), // Или любые другие пути, которые нужно очистить
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/template.html',// Путь к вашему HTML шаблону
      filename: path.resolve(__dirname, 'index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};