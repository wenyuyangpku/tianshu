import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ContentSpec } from '../../type/topLevelSpec';
import { Section } from '../section/Section';

const Title = styled.h2``;

export const Content: FunctionComponent<ContentSpec> = ({
  title,
  section,
}: ContentSpec) => {
  const itemsList = section.map((value, index) => {
    return <Section key={index} {...value}></Section>;
  });

  return (
    <div>
      <Title>{title}</Title>
      {itemsList}
    </div>
  );
};
