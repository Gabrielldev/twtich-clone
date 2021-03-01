import React, { useState, useEffect, useRef } from 'react';

import {
  Wrapper,
  MenuContainer,
  MenuItem,
  MenuTitle,
  MenuOption,
} from './styles';

declare global {
  interface Window {
    handleIsHeaderMenuActive: (() => void) | undefined;
  }
};

const HeaderMenu: React.FC = () => {
  const [headerMenuActive, setHeaderMenuActive] = useState(false);
  const classes: any = [ headerMenuActive ? 'open' : 'close' ];
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setHeaderMenuActive(false);
      };
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  function handleIsHeaderMenuActive() {
    setHeaderMenuActive(prev => !prev);
  };

  window.handleIsHeaderMenuActive = handleIsHeaderMenuActive;

  return (
    <Wrapper>
      <MenuContainer
        ref={menuRef}
        className={classes}
      >
        <MenuTitle>Geral</MenuTitle>        

        <div className="border_bottom">
          <MenuItem>
            <MenuOption>Anunciantes</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Baixar Aplicativos</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Blog</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Caverna do Loot - Loja</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Desenvolvedores</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Empregos</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>IGDB</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Imprensa</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Parceiros</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Sobre</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Turbo</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Twitch Gift Card</MenuOption>
          </MenuItem>
        </div>

        <div className="border_top">
          <MenuTitle>Ajuda e Jurídico</MenuTitle>
          
          <MenuItem>
            <MenuOption>Ajuda</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>
              Declaração de
              Acessibilidade
            </MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Diretrizes da Comunidade</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Opções de Anúncios</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Política de Cookies</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Política de Privacidade</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Segurança</MenuOption>
          </MenuItem>

          <MenuItem>
            <MenuOption>Termos</MenuOption>
          </MenuItem>
        </div>
      </MenuContainer>
    </Wrapper>
  );
};

export default HeaderMenu;
