import React, { FunctionComponent } from 'react';

import {
  HideSpec,
  HighlightSpec,
  ParagraphSpec,
  SectionSpec,
  UnorderedListSpec,
} from '../../type/topLevelSpec';
import { UnorderedList } from './UnorderedList';
import { Highlight } from '../highlight/Highlight';
import { Paragraph } from './Paragraph';
import { OrderedList } from './OrderedList';
import { Hide } from '../hide/Hide';

export const Section: FunctionComponent<SectionSpec> = ({
  type,
  ...rest
}: SectionSpec) => {
  switch (type) {
    case 'ul':
      return <UnorderedList {...(rest as UnorderedListSpec)}></UnorderedList>;

    case 'ol':
      return <OrderedList {...(rest as UnorderedListSpec)}></OrderedList>;

    case 'highlight':
      return <Highlight {...(rest as HighlightSpec)}></Highlight>;

    case 'p':
      return <Paragraph {...(rest as ParagraphSpec)}></Paragraph>;

    case 'hide':
      return <Hide {...(rest as HideSpec)}></Hide>;
  }
};
