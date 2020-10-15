import React, { FunctionComponent } from 'react';

import { Hide } from './Hide';

export default {
  title: 'Components/Hide',
  component: Hide,
};

export const Basic: FunctionComponent = () => (
  <Hide
    {...{
      display: 'none',
      content: [
        {
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
        },
      ],
    }}
  ></Hide>
);
