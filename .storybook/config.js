import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import requireContext from 'require-context.macro';
import ShopKeepTheme from './theme';
import ShopKeepViewports from './viewports';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/stylesheets/index.scss';

addDecorator(withInfo);
addDecorator(withA11y);

addParameters({
  backgrounds: [
    {
      name: 'ShopKeep Light',
      value: '#E5E7EA',
      default: true
    },
    {
      name: 'ShopKeep Dark',
      value: '#121D2C'
    }
  ],
  options: {
    theme: ShopKeepTheme,
    showPanel: true,
    panelPosition: 'right',
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...ShopKeepViewports
    },
    defaultViewport: 'iphone6'
  }
});

configure(requireContext('../stories', true, /\.stories\.js$/), module);
