import styled from 'styled-components';

import { User } from '@styled-icons/boxicons-regular/User';

export const Container = styled.div`
  width: 30px;
  height: 30px;

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

  border: 2px solid #404040;
  border-radius: 50%;
  background: #808080;

  position: absolute;
  bottom: -1px;
  right: -1px;
`;

// --ICONS-- //
export const UserIcon = styled(User)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;