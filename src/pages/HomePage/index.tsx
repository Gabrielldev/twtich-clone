import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import StreamSlider from '../../components/StreamSlider';
import StreamList from '../../components/StreamList';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <SideBar />
      
      <main>
        <StreamSlider />
        <StreamList />
      </main>
    </Container>
  );
};

export default HomePage;
