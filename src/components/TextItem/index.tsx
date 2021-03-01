import React from 'react';

import { TextItemProps } from './types';
import { Container } from './styles';

const TextItem: React.FC<TextItemProps> = ({
  fontSize, fontWeight, lineHeight,
  color, margin, padding, textTransform,
  content,
}) => {
  return (
    <Container
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      margin={margin}
      padding={padding}
      textTransform={textTransform}
      content={content}
    >
      {content}
    </Container>
  );
};

export default TextItem;
