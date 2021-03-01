import React from 'react';

import AvatarMenu from './AvatarMenu';

import {
  Container,
  Dot,
  UserIcon,
} from './styles';

const Avatar: React.FC = () => {
  function menuActive () {
    if (window.handleIsAvatarMenuActive)
    window.handleIsAvatarMenuActive();
  };

  return (
    <Container onClick={menuActive}>
      <UserIcon />

      <Dot />

      <AvatarMenu />
    </Container>
  );
};

export default Avatar;
