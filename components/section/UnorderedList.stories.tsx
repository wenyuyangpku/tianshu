import React, { FunctionComponent } from 'react';

import { UnorderedList } from './UnorderedList';

export default {
  title: 'Components/UnorderedList',
  component: UnorderedList,
};

export const Basic: FunctionComponent = () => (
  <UnorderedList
    {...{
      content: [
        '使用类型，在编译前捕捉错误，增加开发的速度',
        '使用未来的Javascript特性',
      ],
    }}
  ></UnorderedList>
);
