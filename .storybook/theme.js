import { create } from '@storybook/theming';
import brandImage from './images/backoffice-logo@2x.png';

// Theming https://storybook.js.org/docs/configurations/theming/
export default create({
  base: 'dark',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  appBg: '#121D2C',
  appContentBg: 'white',
  appBorderColor: '#DDDFE1',

  textColor: '#525E71',

  barBg: '#121D2C',

  brandTitle: 'BackOffice Components Storybook',
  brandUrl: './',
  brandImage: brandImage
});
