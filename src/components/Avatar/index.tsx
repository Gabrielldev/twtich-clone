import React from 'react';

import {
  Container,
  Dot,
  UserIcon,
} from './styles';

const Avatar: React.FC = () => {
  return (
    <Container>
      <UserIcon />

      <Dot />
    </Container>
  );
};

export default Avatar;
