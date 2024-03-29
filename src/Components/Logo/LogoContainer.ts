import styled from 'styled-components';

export const LogoContainer = styled.figure`
  display: block;
  width: 56px;
  &.footer-logo {
    width: 56px;
  }
  @media screen and (max-width: 1440px) and (min-width: 1025px) {
    &:not(.sticky-logo):not(.footer-logo) {
      /* filter: invert(100%); */
    }
  }
  @media only screen and (max-width: 768px) and (min-width: 426px) {
    &:not(.sticky-logo):not(.footer-logo) {
      /* filter: invert(100%); */
    }
  }
  @media only screen and (max-width: 576px) {
    z-index: 10001;
  }
`;
