import React, { FunctionComponent } from 'react';

import { OrderedList } from './OrderedList';

export default {
  title: 'Components/OrderedList',
  component: OrderedList,
};

export const Basic: FunctionComponent = () => (
  <OrderedList
    {...{
      content: [
        '使用类型，在编译前捕捉错误，增加开发的速度',
        '使用未来的Javascript特性',
      ],
    }}
  ></OrderedList>
);
