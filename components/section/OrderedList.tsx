import React, { FunctionComponent } from 'react';

import { OrderedListSpec } from '../../type/topLevelSpec';

export const OrderedList: FunctionComponent<OrderedListSpec> = ({
  content,
}: OrderedListSpec) => {
  const listItems = content.map((value, index) => <li key={index}>{value}</li>);

  return <ol>{listItems}</ol>;
};
