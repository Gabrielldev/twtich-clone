import styled from 'styled-components';

import { User } from '@styled-icons/boxicons-regular/User';
import { UserVoice } from '@styled-icons/boxicons-solid/UserVoice';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { RemoteControl } from '@styled-icons/remix-fill/RemoteControl';
import { Users } from '@styled-icons/heroicons-solid/Users';
import { Star } from '@styled-icons/boxicons-regular/Star';
import { CheckboxMultipleBlank } from '@styled-icons/remix-line/CheckboxMultipleBlank';
import { Wallet } from '@styled-icons/boxicons-regular/Wallet';
import { Settings } from '@styled-icons/ionicons-outline/Settings';
import { World } from '@styled-icons/boxicons-regular/World';
import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { Exit } from '@styled-icons/ionicons-outline/Exit';

export const Wrapper = styled.div`
  .open {
    display: initial;
  };

  .close {
    display: none;
  };
`;

export const MenuContainer = styled.div`
  width: 245px;
  height: 510px;
  padding: 10px 15px;

  cursor: default;
  border-radius: 6px;
  background: var(--header);
  -webkit-box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 27px -4px rgba(0,0,0,0.75);

  position: absolute;
  top: 32.5px;
  right: 0px;
`;

export const MenuHeader = styled.header`
  width: 100%;
  height: 90px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid #303030;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  border-radius: 4px;

  > div {
    > span {
      font-size: 13px;
      margin-left: 5px;
    }
  }

  &:hover {
    background: rgba(200, 200, 200, 0.3);
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 12.5px;

  position: relative;
  cursor: pointer;
  border-radius: 50%;
  background: var(--violet);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 5px;

  border: 2px solid #404040;
  border-radius: 50%;
  background: #808080;
`;

// --ICONS-- //
export const UserIcon = styled(User)`
  width: 34px;
  height: 34px;

  color: var(--white);
`;

export const UserVoiceIcon = styled(UserVoice)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const StudioIcon = styled(Menu)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const RemoteIcon = styled(RemoteControl)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const UsersIcon = styled(Users)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const StarIcon = styled(Star)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const BoxIcon = styled(CheckboxMultipleBlank)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const WalletIcon = styled(Wallet)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const SettingsIcon = styled(Settings)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const WorldIcon = styled(World)`
  width: 24px;
  height: 24px;
  
  color: var(--white);
`;

export const ArrowRightIcon = styled(KeyboardArrowRight)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const MoonIcon = styled(Moon)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const ExitIcon = styled(Exit)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;