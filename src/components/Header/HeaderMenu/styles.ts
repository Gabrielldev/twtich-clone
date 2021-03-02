import styled from 'styled-components';

export const Wrapper = styled.div`
  .open {
    display: initial;
  };

  .close {
    display: none;
  };

  .border_top {
    padding-top: 10px;
  }

  .border_bottom {
    padding-bottom: 10px;
    border-bottom: 1px solid #303030;
  }
`;

export const MenuContainer = styled.div`
  width: 200px;
  height: 690px;
  padding: 15px 10px;

  cursor: default;
  border-radius: 6px;
  background: var(--header);
  -webkit-box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);

  position: absolute;
  top: 25px;
  left: 0;
`;

export const MenuItem = styled.div`
  width: 100%;
  padding: 5px;

  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: rgba(200, 200, 200, 0.3);
  }
`;

export const MenuTitle = styled.h1`
  text-transform: uppercase;
  font-size: 13.5px;
  font-weight: 500;
  margin: 0 5px 5px 5px;

  color: var(--title-gray);
`;

export const MenuOption = styled.span`
  font-size: 13.5px;
  color: var(--white);
`;