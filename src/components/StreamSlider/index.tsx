import React from 'react';
import { Link } from 'react-router-dom';

import Profile from '../../assets/images/profile.jpg';

import FlexItem from '../FlexItem';
import TextItem from '../TextItem';

import {
  Container,
  LeftWrapper,
  RightWrapper,
  IsLive,
  IconWrapper,
  ArrowBackIcon,
  ArrowFrontIcon,
  ProfileImg,
} from './styles';

const StreamSlider: React.FC = () => {
  return (
    <Container>
      <LeftWrapper>
        <Link to="/">
          <video
            width={530}
            height={300}
            controls
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />

          <IsLive>Ao vivo</IsLive>

          <Link to="/">
            <IconWrapper className="icon_left">
              <ArrowBackIcon />

              <div />
            </IconWrapper>
          </Link>

          <Link to="/">
            <IconWrapper className="icon_right">
              <ArrowFrontIcon />

              <div />
            </IconWrapper>
          </Link>

          <div className="stream_description">
            <ProfileImg
              src={Profile}
              alt="Gabriel"
              width={64}
              height={64}
            />

            <FlexItem
              flexDirection="column"
              margin="0 0 0 10px"
            >
              <TextItem
                fontSize={20}
                color="var(--white)"
                textDecoration="underline"
                content="Gabriel Lima"
              />

              <TextItem
                fontSize={14}
                color="var(--white)"
                margin="2.5px 0 0 0"
                content="
                  Dark Souls III No Hit Run!
                  !lasthit
                  !setup
                "
              />
            </FlexItem> 
          </div>
        </Link>
      </LeftWrapper>

      <RightWrapper>
        <FlexItem>
          <ProfileImg
            src={Profile}
            alt="Gabriel"
            width={50}
            height={50}
          />

          <FlexItem
            margin="0 0 0 10px"
            flexDirection="column"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              color="var(--purple)"
              content="Gabriel Lima"
              cursor="pointer"
            />

            <TextItem
              fontSize={12.5}
              color="var(--purple)"
              content="Dark Souls III"
              cursor="pointer"
            />

            <TextItem
              fontSize={12}
              color="var(--white)"
              content="329 espectadores"
            />
          </FlexItem>
        </FlexItem>

        <TextItem
          fontSize={13.5}
          lineHeight="20px"
          color="var(--white)"
          margin="10px 0 0 0"
          content="
            O Ogro é um narrador de E-Sports
            que apresenta jogos variados e tem
            foco em construir uma comunidade madura
            e saudável que curte jogar junta todos
            os dias. Interação e humor são os pilares
            deste canal.
          "
        />
      </RightWrapper>
    </Container>
  );
};

export default StreamSlider;
