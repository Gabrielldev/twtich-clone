import React from 'react';
import { Link } from 'react-router-dom';

import FlexItem from '../../FlexItem';
import TextItem from '../../TextItem';

import ItemImage from '../../../assets/images/stream-item.jpg';
import Profile from '../../../assets/images/profile.jpg';

import {
  Container,
  TopWrapper,
  BottomWrapper,
  StreamImage,
  IsLive,
  DotsIcon,
  Avatar,
  SubTitle,
  Views,
} from './styles';

const StreamItem: React.FC = () => {
  return (
    <Container>
      <Link to="/gabriellima">
        <TopWrapper>
          <StreamImage
            src={ItemImage}
            alt="Dark Souls III"
          />
        </TopWrapper>

        <IsLive color="var(--white)">Ao vivo</IsLive>

        <Views>21.5 mil espectadores</Views>
      </Link>

      <BottomWrapper>
        <FlexItem
          width="100%"
          padding="5px 0"
        >
          <Link to="/">
            <Avatar
              src={Profile}
              alt="Gabriel Lima"
            />
          </Link>

          <FlexItem
            flex={1}
            flexDirection="column"
            position="relative"
            margin="0 0 0 7.5px"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              color="var(--white)"
              content="Dark Souls III: No Hit Run Attempts"
            />

            <DotsIcon />

            <Link to="/gabriellima" style={{ width: 75 }}>
              <SubTitle>Gabriel Lima</SubTitle>
            </Link>

            <Link to="/darksouls" style={{ width: 75 }}>
              <SubTitle>Dark Souls III</SubTitle>
            </Link>
          </FlexItem>
        </FlexItem>
      </BottomWrapper>
    </Container>
  );
};

export default StreamItem;
