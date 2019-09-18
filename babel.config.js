module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'macros',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'react-css-modules',
      {
        generateScopedName: '[name]__[local]___[hash:base64:5]', // is applied to the element
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
            plugins: ['postcss-nested']
          }
        },
        exclude: 'node_modules',
        webpackHotModuleReloading: true
      }
    ]
  ]
};
