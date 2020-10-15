import React, { FunctionComponent } from 'react';

import { Content } from './Content';

export default {
  title: 'Components/Content',
  component: Content,
};

export const Basic: FunctionComponent = () => (
  <Content
    {...{
      title: '为什么用Typescript?',
      section: [
        {
          type: 'ul',
          content: [
            '使用类型，在编译前捕捉错误，增加开发的速度',
            '使用未来的Javascript特性',
          ],
        },
      ],
    }}
  ></Content>
);
