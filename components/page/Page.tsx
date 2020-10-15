import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { TopLevelSpec } from '../../type/topLevelSpec';
import { Content } from '../content/Content';
import { Welcome } from '../../components/welcome/Welcome';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
`;

export const Page: FunctionComponent<TopLevelSpec> = ({
  content,
}: TopLevelSpec) => {
  return (
    <PageContainer>
      <ContentContainer>
        <Welcome></Welcome>
        {content.map((value, index) => (
          <Content key={index} {...value}></Content>
        ))}
      </ContentContainer>
    </PageContainer>
  );
};
