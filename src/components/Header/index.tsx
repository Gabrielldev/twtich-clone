import React from 'react';
import { Link } from 'react-router-dom';

import SearchMenu from './SearchMenu';
import HeaderMenu from './HeaderMenu';
import Avatar from '../Avatar';
import Input from '../Input';

import {
  Container,
  LeftWrapper,
  RightWrapper,
  IconWrapper,
  LinkWrapper,
  LogoIcon,
  HeartIcon,
  BagIcon,
  BoxIcon,
  CrownIcon,
  DiamondIcon,
  DotsIcon,
  MessageIcon,
  MusicIcon,
  SearchIcon,
  TrophyIcon,
} from './styles';

const Header: React.FC = () => {
  function menuActive () {
    if (window.handleIsHeaderMenuActive)
    window.handleIsHeaderMenuActive();
  };

  function searchMenuActive () {
    if (window.handleIsSearchMenuActive)
    window.handleIsSearchMenuActive();
  };

  return (
    <Container>
      <LeftWrapper>
        <Link to="/">
          <LogoIcon />
        </Link>

        <IconWrapper className="icon_hidden">
          <HeartIcon />

          <span>Seguindo</span>
        </IconWrapper>
        
        <LinkWrapper href="/">Seguindo</LinkWrapper>

        <IconWrapper className="border_right icon_hidden">
          <BoxIcon />

          <span>Procurar</span>
        </IconWrapper>

        <LinkWrapper href="/" className="border_right">Procurar</LinkWrapper>

        <IconWrapper className="icon_hidden">
          <TrophyIcon />

          <span>Esports</span>
        </IconWrapper>

        <LinkWrapper href="/">Esports</LinkWrapper>

        <IconWrapper className="icon_hidden">
          <MusicIcon />

          <span>Música</span>
        </IconWrapper>

        <LinkWrapper href="/">Música</LinkWrapper>

        <IconWrapper>
          <DotsIcon onClick={menuActive} />

          <span>Mais</span>

          <HeaderMenu />
        </IconWrapper>
      </LeftWrapper>

      <div className="input_visible">
        <Input />
      </div>

      <RightWrapper>
        <IconWrapper>
          <SearchIcon onClick={searchMenuActive} />

          <span>Buscar</span>

          <SearchMenu />
        </IconWrapper>

        <IconWrapper>
          <CrownIcon />

          <span>Prime</span>
        </IconWrapper>

        <IconWrapper>
          <BagIcon />

          <span>Notificações</span>
        </IconWrapper>

        <IconWrapper>
          <MessageIcon />

          <span>Sussurros</span>
        </IconWrapper>

        <IconWrapper>
          <DiamondIcon />

          <span>Bits</span>
        </IconWrapper>

        <Avatar />
      </RightWrapper>
    </Container>
  );
};

export default Header;
