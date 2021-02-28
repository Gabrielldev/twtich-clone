import styled from 'styled-components';

export const Wrapper = styled.div`
  .open {
    opacity: 1;
    z-index: 10;

    transition: 0.2s;
  };

  .close {
    opacity: 0;
    z-index: -10;

    transition: 0.2s;
  };
`;

export const MenuContainer = styled.div`
  width: 200px;
  height: 700px;

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
