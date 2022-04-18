import styled from 'styled-components';

interface SpaceProps {
  size: number;
}
export const VerticalSpace = styled.div<SpaceProps>`
  display: block;
  height: ${(props) => props.size}px;
`;
export const HorizontalSpace = styled.div<SpaceProps>`
  display: inline;
  width: ${(props) => props.size}px;
`;
