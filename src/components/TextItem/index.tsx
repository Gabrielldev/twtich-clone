import React from 'react';

import { TextItemProps } from './types';
import { Container } from './styles';

const TextItem: React.FC<TextItemProps> = ({
  fontSize, fontWeight, lineHeight,
  color, margin, padding, textTransform,
  content, textDecoration, cursor,
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
      textDecoration={textDecoration}
      cursor={cursor}
    >
      {content}
    </Container>
  );
};

export default TextItem;
