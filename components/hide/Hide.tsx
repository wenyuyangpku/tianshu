import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { HideSpec } from '../../type/topLevelSpec';

import { Content } from '../content/Content';

const ToggleBar = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  background: #eeeeee;
`;

export const Hide: FunctionComponent<HideSpec> = ({
  display,
  content,
}: HideSpec) => {
  const [displayState, toggle] = useState('none');

  return (
    <ToggleBar onClick={() => toggle(displayState === 'none' ? '' : display)}>
      <div
        style={{
          marginTop: '-20px',
          display: displayState,
        }}
      >
        {content.map((value, index) => (
          <Content key={index} {...value}></Content>
        ))}
      </div>
    </ToggleBar>
  );
};
