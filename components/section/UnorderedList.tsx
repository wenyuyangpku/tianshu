import React, { FunctionComponent } from 'react';

import { UnorderedListSpec } from '../../type/topLevelSpec';

export const UnorderedList: FunctionComponent<UnorderedListSpec> = ({
  content,
}: UnorderedListSpec) => {
  const listItems = content.map((value, index) => <li key={index}>{value}</li>);

  return <ul>{listItems}</ul>;
};
