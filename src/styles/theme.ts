import { createGlobalStyle } from 'styled-components';

export const mainTheme = {
  firstColor: '#000000',
  secondColor: '#ffffff',
  thirdColor: '#eaeaea',
  backgrounColor: '#F1F1F1',
  doreColor: '#827252',
  whiteColor: '#f2f1ea',

  textColor: '#0a0a0a',
  textColorLite: '#727272',
  textColorCmall: '#a19fad',

  h1FontSize: '34px',
  h2FontSize: '36px',
  h3FontSize: '21px',
  normalFontSize: '15px',
  smallFontSize: '13px',
  buttonFontSize: '25px',

  titleFont: "'Atlantic Cruise',sans-serif",
  bodyFont: "'Montserrat',sans-serif",
};

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Atlantic Cruise";
  src: url("/fonts/AtlanticCruise/AtlanticCruise.woff2");
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-ExtraLight.woff2");
  font-style: normal;
  font-weight: 200;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-Light.woff2");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-Regular.woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-Medium.woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-SemiBold.woff2");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}
@font-face {
  font-family: "PT Sans";
  src: url("/fonts/PTSans/PTSans-Bold.woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "PT Sans";
  src: url("/fonts/PTSans/PTSans-Regular.woff2");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
*{
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth; 
}

::-webkit-scrollbar {
  height: 0.35rem;
  width: 0.35rem;
}
::-webkit-scrollbar-thumb {
  background-color: #b3b3b3;
  border-radius: 10px;
}
::selection {
  color:#fff;
  background-color: var(--first-color);
}
  body {
    color: ${({ theme }) => theme.textColor};
    font-family: 'Montserrat','PT Sans', sans-serif;
    transition: all 0.50s linear;
    background-color: #fff ;
  }
  a{text-decoration: none;}

    /* ------------------------------- */
  /* Glide controls style */
  /* ------------------------------- */
  .glide {
    .glide__controls {
      margin-top: 30px;
    }

    .glide__controls > div,
    .glide__arrows > button {
      height: 18px;
      padding: 0;
      border: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: transparent;

      .prev_arrow,
      .next_arrow {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${({ theme }) => theme.textColorLite};
        transition: width 0.3s ease;
        position: relative;
        @media only screen and (max-width: 667px) {
          width: 20px;
        }

        &::before,
        &::after {
          content: '';
          display: block;
          width: 14px;
          height: 2px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.textColorLite};
          position: absolute;
          z-index: 1;
          transition: all 0.3s ease;
        }

        &.next_arrow {
          &::before {
            right: 0;
            transform: rotate(0);
            transform-origin: top right;
          }
          &::after {
            right: 0;
            transform: rotate(0);
            transform-origin: 14px 2px;
          }
        }

        &.prev_arrow {
          &::before {
            left: 0;
            transform: rotate(0);
            transform-origin: top left;
          }
          &::after {
            left: 0;
            transform: rotate(0);
            transform-origin: 0 2px;
          }
        }
      }

      .next_arrow {
        margin-left: 15px;
      }

      &:hover {
        > span {
          width: 45px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.firstColor};
          @media only screen and (max-width: 667px) {
            width: 30px;
          }

          &::before,
          &::after {
            background-color: ${({ theme }) => theme.firstColor};
          }

          &.prev_arrow {
            &::before {
              transform: rotate(-42deg);
            }
            &::after {
              transform: rotate(42deg);
            }
          }

          &.next_arrow {
            &::before {
              transform: rotate(42deg);
            }
            &::after {
              transform: rotate(-42deg);
            }
          }
        }
      }
    }
  }

`;
