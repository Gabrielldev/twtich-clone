import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  );
};

export default HomePage;
