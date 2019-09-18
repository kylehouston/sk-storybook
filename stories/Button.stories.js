import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Button from '../src/components/button';
import buttonMarkdown from './button.md';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const empty = () => <Button onClick={action('clicked')} />;

export const withText = () => {
  const buttonText = text('Text', 'Button with text');
  const isDisabled = boolean('Disabled', false);
  return (
    <Button className="my-global-button" onClick={action('clicked')} disabled={isDisabled}>
      {buttonText}
    </Button>
  );
};

withText.story = {
  name: 'Simple button with some text',
  parameters: {
    notes: {
      markdown: buttonMarkdown
    }
  }
};

export const danger = () => {
  const buttonText = text('Text', 'Button with text');
  const isDisabled = boolean('Disabled', false);
  return (
    <Button className="button--danger" onClick={action('clicked')} disabled={isDisabled}>
      {buttonText}
    </Button>
  );
};

export const alt = () => {
  return <Button className="button-alt">Alternative Button</Button>;
};

export const accessible = () => <Button>Accessible button</Button>;

export const inaccessible = () => (
  <Button style={{ backgroundColor: 'red', color: 'darkRed' }}>Accessible button</Button>
);

export const withEmojis = () => (
  <Button className="button-alt" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
