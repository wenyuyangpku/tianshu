import React from 'react';
import { GlobalStyle } from '../components/shared/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];
