import React, { useState } from 'react';

import { SwitchProps } from './types';

import {
  Wrapper,
  Container,
  Dot,
} from './styles';


const Switch: React.FC<SwitchProps> = ({
  width, height, borderRadius,
  onChange, onClick,
}) => {
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const containerClasses: any = [
    isSwitchActive ? 'container_enable' : 'container_disable'
  ];
  const dotClasses: any = [
    isSwitchActive ? 'dot_enable' : 'dot_disable'  
  ];
  
  function handleisSwitchActive() {
    setIsSwitchActive(prev => !prev);
  };

  return (
    <Wrapper>
      <Container
        width={width}
        height={height}
        borderRadius={borderRadius}
        onClick={handleisSwitchActive}
        onChange={onChange}
        className={containerClasses}
      >
        <Dot className={dotClasses} />
      </Container>
    </Wrapper>
  );
};

export default Switch;
