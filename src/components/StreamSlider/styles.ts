import styled from 'styled-components';
import { StreamSliderProps } from './types';

import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

export const Container = styled.div`
  width: 530px;
  height: 300px;
  margin: 0 auto;

  display: flex;
  -webkit-box-shadow: 0px 0px 56px -13px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 56px -13px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 56px -13px rgba(0,0,0,0.75);

  @media (min-width: 825px) {
    width: 750px;
  };

  // --GLOBAL-CLASSES-- //
  .icon_left {
    left: 0;
  };

  .icon_right {
    right: 0;
  };
`;

export const LeftWrapper = styled.div`
  width: 530px;
  height: 300px;
  transition: 0.2s;

  position: relative;
  
  display: flex;
  align-items: center;

  .stream_description {
    position: absolute;
    top: 25px;
    left: 12.5px;
    z-index: 4;

    display: none;
  };

  &:hover {
    opacity: 0.85;

    .stream_description {
      display: flex;
    };
  }
`;

export const RightWrapper = styled.div`
  width: 275px;
  height: 300px;
  padding: 10px;

  display: none;

  background: #17171A;

  @media (min-width: 825px) {
    display: initial;
  };
`;

export const IsLive = styled.span`
  padding: 2.5px 5px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;

  color: var(--white);
  background: red;
  border-radius: 4px;

  position: absolute;
  top: 15px;
  left: 12.5px;
  z-index: 5;
`;

export const IconWrapper = styled.button`
  width: 36px;
  height: 36px;

  position: absolute;
  top: 132.5px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--header);
  border-radius: 4px;

  > div {
    width: 36px;
    height: 36px;
    position: absolute;
    border-radius: 4px;

    &:hover {
      background: rgba(200, 200, 200, 0.3);
    }
  }
`;

export const ProfileImg = styled.img<StreamSliderProps>(({
  width,
  height,
}: StreamSliderProps) => ({
  width,
  height,

  borderRadius: '50%',
}));

// --ICONS-- //
export const ArrowBackIcon = styled(ArrowIosBackOutline)`
  width: 28px;
  height: 28px;

  color: var(--white);
`;

export const ArrowFrontIcon = styled(ArrowIosForwardOutline)`
  width: 28px;
  height: 28px;

  color: var(--white);
`;