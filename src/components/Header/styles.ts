import styled from 'styled-components';

import { Twitch } from '@styled-icons/bootstrap/Twitch';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { CheckboxMultipleBlank } from '@styled-icons/remix-line/CheckboxMultipleBlank';
import { Trophy } from '@styled-icons/boxicons-regular/Trophy';
import { MusicNoteBeamed } from '@styled-icons/bootstrap/MusicNoteBeamed';
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular/DotsHorizontalRounded';
import { Search } from '@styled-icons/evaicons-solid/Search';
import { VipCrown } from '@styled-icons/remix-line/VipCrown';
import { ShoppingBagOutline } from '@styled-icons/evaicons-outline/ShoppingBagOutline';
import { MessageAlt } from '@styled-icons/boxicons-regular/MessageAlt';
import { Diamond } from '@styled-icons/boxicons-regular/Diamond';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;

  background: var(--header);
  -webkit-box-shadow: 0px 0px 66px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 66px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 66px -2px rgba(0,0,0,0.75);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .border_right { border-right: 1px solid #303030; }

  .icon_hidden {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const LeftWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  padding: 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    > span {
      display: initial;
    }
  }

  > span {
    display: none;

    position: absolute;
    top: 27.5px;
    padding: 5px 10px;

    font-size: 12px;
    font-weight: 500;

    color: var(--black);
    border-radius: 4px;
    background: var(--white);
  }
`;

export const LinkWrapper = styled.a`
  padding: 5px 15px;

  display: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--white);

  &:hover { color: var(--purple) };

  @media (min-width: 1024px) {
    display: initial;
  }
`;

// --ICONS-- //
export const LogoIcon = styled(Twitch)`
  width: 32px;
  height: 32px;
  transition: 0.1s;

  color: var(--purple);

  &:hover {
    opacity: 0.85;
  }
`;

export const HeartIcon = styled(Heart)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const BoxIcon = styled(CheckboxMultipleBlank)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const TrophyIcon = styled(Trophy)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const MusicIcon = styled(MusicNoteBeamed)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const DotsIcon = styled(DotsHorizontalRounded)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const CrownIcon = styled(VipCrown)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const BagIcon = styled(ShoppingBagOutline)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const MessageIcon = styled(MessageAlt)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;

export const DiamondIcon = styled(Diamond)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  transition: 0.1s;

  color: var(--white);

  &:hover {
    color: var(--purple);
  }
`;