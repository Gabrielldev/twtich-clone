import styled from 'styled-components';

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

export const Container = styled.div`
  width: 100%;
  margin-top: 45px;

  > h1 {
    font-size: 20px;
    padding: 5px 0;
    margin-left: 5px;
  };
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 20px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .border {
    width: 45%;
    height: 1px;

    background: #303030;
  };

  .footer_middle {
    padding: 5px 12.5px;
    border-radius: 4px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 13px;
      font-weight: 500;
      color: var(--purple-light);
    }

    &:hover {
      background: rgba(200, 200, 200, 0.3);
    }
  }
`;

// --ICONS-- //
export const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 20px;
  height: 20px;
  
  color: var(--purple-light);
`;