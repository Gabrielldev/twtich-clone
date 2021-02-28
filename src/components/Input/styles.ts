import styled from 'styled-components';

import { Search } from '@styled-icons/evaicons-solid/Search';

export const Container = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }

  > input {
    width: 100%;
    max-width: 355px;
    min-width: 150px;
    height: 37.5px;

    &::placeholder { color: var(--white); };

    transition: 0.2s all;
    padding: 0 10px;
    font-size: 14px;
    color: var(--white);

    border: 2px solid transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: rgba(80, 80, 80, 1);
    
    &:hover {
      border: 2px solid rgba(200, 200, 200, 0.2);
    }

    &:focus {
      background: var(--black);
      border: 2px solid var(--purple);
    }
  }
`;

export const SearchContainer = styled.button`
  padding: 0 5px;
  height: 37.5px;

  border-left: 1px solid #000;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #303030;
`;

// --ICONS-- //
export const SearchIcon = styled(Search)`
  width: 16px;
  height: 16px;

  color: #707070;
`;