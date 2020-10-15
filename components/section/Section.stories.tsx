import React, { FunctionComponent } from 'react';

import { Section } from './Section';

export default {
  title: 'Components/Section',
  component: Section,
};

export const Basic: FunctionComponent = () => (
  <Section
    {...{
      type: 'ul',
      content: [
        '使用类型，在编译前捕捉错误，增加开发的速度',
        '使用未来的Javascript特性',
      ],
    }}
  ></Section>
);
