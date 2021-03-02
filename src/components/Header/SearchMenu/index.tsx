import React, { useState, useEffect, useRef } from 'react';

import Input from '../../Input';

import {
  Wrapper,
  MenuContainer,
} from './styles';

declare global {
  interface Window {
    handleIsSearchMenuActive: (() => void) | undefined;
  }
};

const SearchMenu: React.FC = () => {
  const [isSearchMenuActive, setIsSearchMenuActive] = useState(false);
  const classes: any = [ isSearchMenuActive ? 'open' : 'close' ];
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsSearchMenuActive(false);
      };
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  function handleIsSearchMenuActive() {
    setIsSearchMenuActive(prev => !prev);
  };

  window.handleIsSearchMenuActive = handleIsSearchMenuActive;

  return (
    <Wrapper>
      <MenuContainer
        ref={menuRef}
        className={classes}
      >
        <Input />
      </MenuContainer>
    </Wrapper>
  );
};

export default SearchMenu;
