import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { color, typography } from '../shared/styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.h1`
  width: 80%;
  margin: 0 20px;
  padding: 0 20px;
  border-right: 1px solid ${color.darkest};
  text-align: right;
  color: ${color.darkest};
  /* font-size: ${typography.size.l3}px;
  font-weight: ${typography.weight.bold}; */
`;

const Author = styled.div`
  width: 20%;
  padding: 0 20px;
  color: ${color.darkest};
  font-size: 100px;
  font-weight: ${typography.weight.black};
`;

export const Title: FunctionComponent<Props> = ({
  title = '',
  index = 0,
}: Props) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <Author>{index}</Author>
    </Container>
  );
};

interface Props {
  title: string;
  index: number;
}
