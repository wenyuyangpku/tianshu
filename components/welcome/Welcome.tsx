import React, { FunctionComponent, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { typography } from '../shared/styles';

const WelcomeContainer = styled.div`
  background: #eeeeee;
  font-size: ${typography.size.l1}px;
  margin-top: 20px;
  padding: 10px;
`;

export const Welcome: FunctionComponent = () => {
  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <WelcomeContainer onClick={() => toggle(!state)}>
      <animated.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: x.interpolate({ output: [0.05, 1], range: [0, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        <div>热烈欢迎X6的战友们！</div>
        <div>以及各位老板们！</div>
      </animated.div>
    </WelcomeContainer>
  );
};
