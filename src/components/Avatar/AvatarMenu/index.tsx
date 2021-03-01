import React, { useState, useEffect, useRef } from 'react';

import FlexItem from '../../FlexItem';
import TextItem from '../../TextItem';
import Switch from '../../Switch';

import {
  Wrapper,
  MenuContainer,
  MenuHeader,
  MenuItem,
  Avatar,
  Dot,
  UserIcon,
  UserVoiceIcon,
  StudioIcon,
  RemoteIcon,
  UsersIcon,
  StarIcon,
  BoxIcon,
  WalletIcon,
  SettingsIcon,
  WorldIcon,
  ArrowRightIcon,
  MoonIcon,
  ExitIcon,
} from './styles';

declare global {
  interface Window {
    handleIsAvatarMenuActive: (() => void) | undefined;
  }
};

const AvatarMenu: React.FC = () => {
  const [avatarMenuActive, setAvatarMenuActive] = useState(false);
  const classes: any = [avatarMenuActive ? 'open' : 'close'];
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setAvatarMenuActive(false);
      };
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  function handleIsAvatarMenuActive() {
    setAvatarMenuActive(prev => !prev);
  };

  window.handleIsAvatarMenuActive = handleIsAvatarMenuActive;

  return (
    <Wrapper>
      <MenuContainer
        ref={menuRef}
        className={classes}
        onClick={handleIsAvatarMenuActive}
      >
        <MenuHeader>
          <FlexItem
            width="100%"
            height={40}
            alignItems="center"
          >
            <Avatar>
              <UserIcon />
            </Avatar>

            <FlexItem
              height={30}
              flexDirection="column"
              justify="space-between"
            >
              <TextItem
                fontSize={13.5}
                fontWeight={500}
                lineHeight="15px"
                content="bielskiny"
              />

              <FlexItem alignItems="center">
                <Dot />

                <TextItem
                  fontSize={13.5}
                  fontWeight={500}
                  color="var(--title-gray)"
                  content="Offline"
                />
              </FlexItem>
            </FlexItem>
          </FlexItem>

          <FlexItem
            width="100%"
            alignItems="center"
            justify="space-between"
          >
            <TextItem
              fontSize={13.5}
              fontWeight={500}
              content="Online"
            />

            <Switch
              width={35}
              height={20}
              borderRadius={25}
            />
          </FlexItem>
        </MenuHeader>

        <FlexItem
          width="100%"
          flexDirection="column"
          padding="10px 0"
          borderBottom="1px solid #303030"
        >
          <MenuItem>
            <div>
              <UserVoiceIcon />

              <span>Canal</span>
            </div>  
          </MenuItem>

          <MenuItem>
            <div>
              <StudioIcon />

              <span>Estúdio de Vídeo</span>
            </div>
          </MenuItem>

          <MenuItem>
            <div>
              <RemoteIcon />

              <span>Painel de controle do criador</span>
            </div>
          </MenuItem>
        </FlexItem>

        <FlexItem
          width="100%"
          flexDirection="column"
          padding="10px 0"
          borderBottom="1px solid #303030"
        >
          <MenuItem>
            <div>
              <UsersIcon />

              <span>Amigos</span>
            </div>  
          </MenuItem>

          <MenuItem>
            <div>
              <StarIcon />

              <span>Inscrições</span>
            </div>
          </MenuItem>

          <MenuItem>
            <div>
              <BoxIcon />

              <span>Drops</span>
            </div>
          </MenuItem>

          <MenuItem>
            <div>
              <WalletIcon />

              <span>Twitch Wallet</span>
            </div>
          </MenuItem>
        </FlexItem>

        <FlexItem
          width="100%"
          flexDirection="column"
          padding="10px 0"
          borderBottom="1px solid #303030"
        >
          <MenuItem>
            <div>
              <SettingsIcon />

              <span>Configurações</span>
            </div>
          </MenuItem>

          <MenuItem>
            <div>
              <WorldIcon />

              <span>Idiomas</span>
            </div>
            
            <ArrowRightIcon />
          </MenuItem>

          <MenuItem>
            <div>
              <MoonIcon />

              <span>Tema Escuro</span>
            </div>
            
            <Switch
              width={35}
              height={20}
              borderRadius={25}
            />
          </MenuItem>
        </FlexItem>

        <FlexItem
          width="100%"
          flexDirection="column"
          padding="10px 0"
        >
          <MenuItem>
            <div>
              <ExitIcon />

              <span>Sair</span>
            </div>
          </MenuItem>
        </FlexItem>
      </MenuContainer>
    </Wrapper>
  );
};

export default AvatarMenu;
