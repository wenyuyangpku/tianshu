import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Title } from './Title';
import { color } from '../shared/styles';

export default {
  title: 'Components/Title',
  component: Title,
};

const Layout = styled.div`
  max-width: 1000px;
  background: ${color.lighter};
`;

export const Basic: FunctionComponent = () => (
  <Layout>
    <Title {...{ title: '第一章', index: 0 }}></Title>
  </Layout>
);
