import styled from 'styled-components';
import { SwitchProps } from './types';

export const Wrapper = styled.div`
  .container_enable {
    transition: 0.2s;
    border: 2.5px solid var(--purple);
  }

  .container_disable {
    transition: 0.2s;
  }

  .dot_enable {
    transition: 0.2s;
    background: var(--purple);
    margin-left: 50%;
  }

  .dot_disable {
    transition: 0.2s;
  }
`;

export const Container = styled.div<SwitchProps>(({
  width,
  height,
  borderRadius,
}: SwitchProps) => ({
  width,
  height,

  cursor: 'pointer',
  borderRadius,
  border: '2.5px solid var(--title-gray)',
  background: 'var(--black)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 2px;

  background: var(--white);
  border-radius: 50%;
`;