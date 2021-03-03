import styled from 'styled-components';

import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded';

export const Container = styled.div`
  max-width: 400px;
  height: 100%;
  max-height: 335px;
  margin: 5px;

  display: flex;
  flex-direction: column;
  flex: 1 1 275px;

  position: relative;
`;

export const TopWrapper = styled.div`
  width: 100%;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-7.5px) translateX(7.5px);
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
`;

export const StreamImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
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
  top: 10px;
  left: 10px;
  z-index: 5;
`;

export const Views = styled.span`
  padding: 2.5px 5px;
  font-size: 13px;
  font-weight: 500;

  color: var(--white);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  position: absolute;
  bottom: 77.5px;
  left: 10px;
  z-index: 5;
`;

export const SubTitle = styled.span`
  font-size: 12px;
  color: var(--title-gray);

  &:hover {
    color: var(--purple);
  };
`;

// --ICONS-- // 
export const DotsIcon = styled(DotsVerticalRounded)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  color: var(--white);

  position: absolute;
  top: 0px;
  right: -2px;

  &:hover {
    color: var(--purple);
  }
`;