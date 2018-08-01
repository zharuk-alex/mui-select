import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import DefaultDemo from './DefaultDemo';
import MultipleDemo from './MultipleDemo';
import CssCustomizeDemo from './CssCustomizeDemo';
import ValueCustomizeDemo from './ValueCustomizeDemo';




const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  // 'Item 7',
  // 'Item 8',
  // 'Item 9',
  // 'Item 10',
  // 'Item 11',
  // 'Item 12',
]

const Presentation = () => (
  <DefaultDemo items={items} />
);

storiesOf('Welcome', module)
  .add('Default Demo', () => <Presentation /> )
  .add('Multiple Demo', () => <MultipleDemo  items={items} /> )
  .add('Css Customize Demo', () => <CssCustomizeDemo  items={items} /> )
  .add('Value Customize Demo', () => <ValueCustomizeDemo  items={items} /> );
