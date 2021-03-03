import React from 'react';

import { FlexItemProps } from './types';
import { Container } from './styles';

const FlexItem: React.FC<FlexItemProps> = ({
  width, height, flexDirection, alignItems, justify,
  border, borderTop, borderBottom, borderLeft, borderRight,
  background, color, margin, padding, children, className,
  position, top, left, right, bottom, flexWrap, flex,
}) => {
  return (
    <Container
      width={width}
      height={height}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justify={justify}
      flexWrap={flexWrap}
      flex={flex}
      border={border}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
      background={background}
      color={color}
      position={position}
      margin={margin}
      padding={padding}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      className={className}
    >
      {children}
    </Container>
  );
};

export default FlexItem;
