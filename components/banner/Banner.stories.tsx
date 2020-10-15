import React, { FunctionComponent } from 'react';

import { Banner } from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
};

export const Basic: FunctionComponent = () => (
  <Banner {...{ title: '这是一句废话', author: 'wenyu' }}></Banner>
);
