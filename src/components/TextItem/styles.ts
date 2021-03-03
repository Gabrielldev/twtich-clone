import styled from 'styled-components';
import { TextItemProps } from './types';

export const Container = styled.div<TextItemProps>(({
  fontSize,
  fontWeight,
  lineHeight,
  color,
  margin,
  padding,
  textTransform,
  textDecoration,
  cursor,
  className,
}: TextItemProps) => ({
  fontSize,
  fontWeight,
  lineHeight,
  color,
  margin,
  padding,
  textTransform,
  textDecoration,
  cursor,
  className,
}));
