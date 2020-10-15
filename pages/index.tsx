import React, { FunctionComponent } from 'react';

import { Banner } from '../components/banner/Banner';
import { Page } from '../components/page/Page';
import IntroTS from '../data/Intro TS.json';
import { TopLevelSpec } from '../type/topLevelSpec';

const Home: FunctionComponent = () => {
  return (
    <div>
      <Banner {...{ title: IntroTS.title, author: IntroTS.author }}></Banner>
      <Page {...(IntroTS as TopLevelSpec)}></Page>
    </div>
  );
};

export default Home;
