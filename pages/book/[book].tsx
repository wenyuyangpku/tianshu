import React, { FunctionComponent } from 'react';
import * as IntroTS from '../../data/Intro TS.json';

import { Banner } from '../../components/banner/Banner';
import { Page } from '../../components/page/Page';
import { TopLevelSpec } from '../../type/topLevelSpec';

const Book: FunctionComponent = () => {
  return (
    <div>
      <Banner {...{ title: IntroTS.title, author: IntroTS.author }}></Banner>
      <Page {...(IntroTS as TopLevelSpec)}></Page>
    </div>
  );
};

export default Book;
