import React from 'react';

import FlexItem from '../../components/FlexItem';
import TextItem from '../../components/TextItem';

import Profile from '../../assets/images/profile.jpg';

import {
  Container,
  ProfileImage,
  HeartIcon,
  UsersIcon,
  Dot,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <FlexItem
        width="100%"
        alignItems="center"
        flexDirection="column"
      >
        <HeartIcon />

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

        <FlexItem
          width="100%"
          alignItems="center"
          padding="6px 10px"
          className="item_hover"
          position="relative"
        >
          <ProfileImage
            src={Profile}
            alt="Bielskiny"
          />

          <FlexItem
            flexDirection="column"
            margin="0 0 0 10px"
            className="break_point"
          >
            <TextItem
              fontSize={14}
              fontWeight={500}
              content="Gabriel Lima"
            />

            <TextItem
              fontSize={13}
              color="var(--title-gray)"
              textTransform="uppercase"
              content="Dark Souls III"
            />
          </FlexItem>

          <FlexItem
            width={55}
            alignItems="center"
            justify="space-between"
            position="absolute"
            top={5}
            right={10}
            className="break_point"
          >
            <Dot />

            <TextItem
              fontSize={12}
              color="var(--title-gray)"
              content="21,5 mil"
            />
          </FlexItem>
        </FlexItem>

      </FlexItem>

      <UsersIcon />
    </Container>
  );
};

export default SideBar;
