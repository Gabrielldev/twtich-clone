import React, { useState, useEffect, useRef } from 'react';

import {
  Wrapper,
  MenuContainer,
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
        
      </MenuContainer>
    </Wrapper>
  );
};

export default HeaderMenu;
