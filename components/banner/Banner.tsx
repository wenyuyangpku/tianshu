import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { color, typography } from '../shared/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${color.dark};
  padding: 20px;
`;

const Title = styled.div`
  color: ${color.lightest};
  font-size: ${typography.size.l1}px;
  font-weight: ${typography.weight.bold};
`;

const Author = styled.div`
  color: ${color.lightest};
  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.bold};
`;

export const Banner: FunctionComponent<Props> = ({
  title = '',
  author = '',
}: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Container>
  );
};

interface Props {
  title: string;
  author: string;
}
