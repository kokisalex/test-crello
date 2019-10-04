const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }],
    '@babel/react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
});