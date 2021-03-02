import styled from 'styled-components';

import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { Users } from '@styled-icons/heroicons-solid/Users';

export const Container = styled.div`
  width: 50px;
  height: 100vh;
  padding: 60px 0 10px 0;

  background: var(--header);
  
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 240px;

    .break_point {
      display: flex !important;
    }
  };

  .break_point {
    display: none;
  }

  .item_hover {
    cursor: pointer;

    &:hover {
      background: rgba(200, 200, 200, 0.3);
    }
  };
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
  border-radius: 50%;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;

  background: red;
  border-radius: 50%;
`;

// --ICONS-- //
export const HeartIcon = styled(Heart)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;

  color: #707070;
`;

export const UsersIcon = styled(Users)`
  width: 20px;
  height: 20px;
  margin-top: 5px;

  color: #707070;
`;