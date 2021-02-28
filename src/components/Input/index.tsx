import React from 'react';

import {
  Container,
  SearchContainer,
  SearchIcon
} from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <input
        title="Buscar na Twitch"
        placeholder="Buscar"
      />

      <SearchContainer>
        <SearchIcon />
      </SearchContainer>
    </Container>
  );
};

export default Input;
