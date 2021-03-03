import styled from 'styled-components';

export const Container = styled.div`
  > main {
    width: 100%;
    height: 100vh;
    padding: 70px 20px 10px 70px;

    overflow-x: hidden;
    overflow-y: auto;
    
    @media (min-width: 1200px) {
      padding-left: 260px;
    };
  }
`;
