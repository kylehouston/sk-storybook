const path = require('path');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = async ({ config }) => {
  // https://storybook.js.org/docs/configurations/custom-webpack-config/
  // console.dir(config.plugins, { depth: null });

  config.module.rules = config.module.rules.map(f => {
    // Needed to add this to ignore our ../ for the default rule, instead of purging it.
    // See: https://github.com/storybookjs/storybook/issues/6319
    // See: https://gist.github.com/ademilter/5f56fe9e56c5eb8725292274c68001c5
    if (f.test.toString() === '/\\.css$/') {
      f.exclude = path.resolve(__dirname, '../');
    }
    return f;
  });

  config.module.rules.push(
    {
      test: /\.(sa|sc|c)ss$/,
      exclude: /\.module.(sc|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.module.(sc|c)ss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            context: path.resolve(__dirname, '../')
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
  );

  return config;
};
