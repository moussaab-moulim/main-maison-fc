import styled, { css } from 'styled-components';

interface MainColumnProps {
  type?: number; // column type if 2 then the column will be 50% is 4 then its 25%;
}
export interface ColumnProps extends MainColumnProps {
  responsive?: { breakpoints: Record<number, MainColumnProps> };
}
function generateQueries(responsive?: {
  breakpoints: Record<number, MainColumnProps>;
}) {
  let styles = '';

  if (responsive) {
    const cssCodes = Object.entries(responsive.breakpoints);
    for (let i = 0; i < cssCodes.length; i += 1) {
      styles += `
      @media only screen and (max-width: ${cssCodes[i]?.[0]}px) {
        
        width: ${100 / (cssCodes[i]?.[1].type ?? 1)}%;
  flex-basis:${100 / (cssCodes[i]?.[1].type ?? 1)}% ;
      }
       
     `;
    }
  }

  return css`
    ${styles}
  `;
}
const Column = styled.div<ColumnProps>`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  width: calc(
    (${(props) => (props.type ? `${100 / props.type}%` : '100%')}) - 15px
  );
  flex-basis: calc(
    (${(props) => (props.type ? `${100 / props.type}%` : '100%')}) - 15px
  );
  margin: 10px 0;
  &.right {
    margin-left: auto;
    @media only screen and (max-width: 425px) {
      margin-left: unset;
    }
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    flex-basis: 100%;
    align-items: center;
    text-align: center;
  }
  ${(props) => generateQueries(props.responsive)}
`;

export default Column;
