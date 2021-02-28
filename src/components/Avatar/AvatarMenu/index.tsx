import React, { useState, useEffect, useRef } from 'react';

import {
  Wrapper,
  MenuContainer,
} from './styles';

declare global {
  interface Window {
    handleIsAvatarMenuActive: (() => void) | undefined;
  }
};

const AvatarMenu: React.FC = () => {
  const [avatarMenuActive, setAvatarMenuActive] = useState(false);
  const classes: any = [avatarMenuActive ? 'open' : 'close'];
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setAvatarMenuActive(false);
      };
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  function handleIsAvatarMenuActive() {
    setAvatarMenuActive(prev => !prev);
  };

  window.handleIsAvatarMenuActive = handleIsAvatarMenuActive;

  return (
    <Wrapper>
      <MenuContainer
        ref={menuRef}
        className={classes}
        onClick={handleIsAvatarMenuActive}
      >
        
      </MenuContainer>
    </Wrapper>
  );
};

export default AvatarMenu;
