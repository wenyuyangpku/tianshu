import React, { FunctionComponent } from 'react';

import { Page } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
};

export const Basic: FunctionComponent = () => (
  <Page
    {...{
      title: 'TypeScript 简介',
      author: '杨文宇',
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
  ></Page>
);
