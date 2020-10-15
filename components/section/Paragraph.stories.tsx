import React, { FunctionComponent } from 'react';

import { Paragraph } from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

export const Basic: FunctionComponent = () => (
  <Paragraph {...{ content: '这也是一句废话' }}></Paragraph>
);
