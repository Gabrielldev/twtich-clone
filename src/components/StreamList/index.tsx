import React, { useState } from 'react';

import StreamItem from './StreamItem';
import FlexItem from '../FlexItem';

import {
  Container,
  Footer,
  ArrowDownIcon,
} from './styles';

const StreamList: React.FC = () => {
  const [listContentVisible, setListContentVisible] = useState(false);

  return (
    <Container>
      <h1>Canais ao vivo que achamos que vai gostar</h1>

      <FlexItem flexWrap="wrap">
        <StreamItem />
        <StreamItem />
        <StreamItem />
        <StreamItem />

        {listContentVisible &&
        <>
          <StreamItem />
          <StreamItem /> 
          <StreamItem /> 
          <StreamItem /> 
          <StreamItem /> 
          <StreamItem /> 
        </>}
      </FlexItem>

      <Footer>
        {!listContentVisible &&
          <>
            <div className="border" />

            <div
              className="footer_middle"
              onClick={() => setListContentVisible(true)}
            >
              <span>Mostrar mais</span>
              <ArrowDownIcon />
            </div>
          
            <div className="border" />
          </>
        }
      </Footer>
    </Container>
  );
};

export default StreamList;
