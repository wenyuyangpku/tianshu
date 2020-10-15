import React, { FunctionComponent } from 'react';

import { ParagraphSpec } from '../../type/topLevelSpec';

export const Paragraph: FunctionComponent<ParagraphSpec> = ({
  content,
}: ParagraphSpec) => {
  return <>{content}</>;
};
