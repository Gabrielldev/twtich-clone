import styled from 'styled-components';

export const Wrapper = styled.div`
  .open {
    display: flex;
  };

  .close {
    display: none;
  };

  @media (min-width: 1024px) {
    .open {
      display: none;
    };
  }
`;

export const MenuContainer = styled.div`
  width: 250px;
  height: 40px;
  padding: 25px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: default;
  border-radius: 6px;
  background: var(--header);
  -webkit-box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);

  position: absolute;
  top: 25px;
  left: -100px;
`;
