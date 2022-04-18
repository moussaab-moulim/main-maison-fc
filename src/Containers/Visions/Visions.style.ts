import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 162px 0 200px;

  @media only screen and (max-width: 1440px) {
    padding: 120px 0 160px;
  }

  @media only screen and (max-width: 767px) {
    padding: 82px 0 41px;
  }

  header {
    text-align: left;
    padding-bottom: 60px;
    @media only screen and (max-width: 1440px) {
      padding-bottom: 56px;
    }
    @media only screen and (max-width: 991px) {
      padding-bottom: 40px;
    }
  }
`;

export const VisionsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  > button {
    font-weight: 400;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    > button {
      max-width: 100%;
      width: 100%;
      margin-right: 0px;
    }
  }
`;
export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  width: 100%;

  .glide {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      display: block;
    }
    @media only screen and (max-width: 991px) {
      /* width:  */
      flex-direction: column;
    }

    .slide__wrapper {
      display: block;
      width: 50%;
      padding: 85px 90px 90px 70px;
      background-color: #fff;
      position: relative;
      @media only screen and (max-width: 1440px) {
        padding: 70px 60px;
      }
      @media only screen and (max-width: 1200px) {
        width: 50%;
        padding: 56px 50px;
      }
      @media only screen and (max-width: 991px) {
        width: 100%;
      }
      @media only screen and (max-width: 667px) {
        margin-right: 0;
        padding: 0;
        box-shadow: none;
      }
    }
    .glide__track {
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
    .glide__arrows {
      position: relative;
      display: flex;
      align-items: center;
      margin-left: 10px;
      @media only screen and (max-width: 768px) {
        margin-left: 0;
      }
      > button {
        background-color: transparent;
        &:hover {
          background-color: #f4f4f4;
        }
        &.glide__arrow--right {
          border-top-right-radius: 300px;
          border-bottom-right-radius: 300px;
          border: 1px solid #d7d7d7;
          height: 47px;
          padding-right: 15px;
          border-left: 0;
        }
        &.glide__arrow--left {
          border-top-left-radius: 300px;
          border-bottom-left-radius: 300px;
          border: 1px solid #d7d7d7;
          height: 47px;
          padding-left: 15px;
          padding-right: 15px;
          outline: none;
        }
        > span {
          background-color: ${(props) => props.theme.firstColor};
          &::before,
          &::after {
            background-color: ${(props) => props.theme.firstColor};
            width: 5px;
            height: 2px;
          }
          &.next_arrow {
            background-color: ${(props) => props.theme.firstColor};

            &::before {
              background-color: ${(props) => props.theme.firstColor};
              transform: rotate(42deg) !important;
            }

            &::after {
              transform: rotate(-42deg) !important;
              background-color: ${(props) => props.theme.firstColor};
              transform-origin: 5px 2px !important;
            }
          }
          &.prev_arrow {
            &::before {
              transform: rotate(-42deg);
            }
            &::after {
              transform: rotate(42deg);
            }
          }
        }
      }
    }

    .glide__bullets {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      height: 531px;
      position: relative;
      @media only screen and (max-width: 1024px) {
        height: 346px;
      }
      @media only screen and (max-width: 768px) {
        height: 535px;
      }
      > button {
        width: 100%;
        max-width: 574px;
        height: 531px;
        overflow: hidden;
        border: 0;
        padding: 0;
        cursor: pointer;
        background: transparent;
        left: 100%;
        transform: translateX(-100%);
        position: absolute;
        top: 0;
        transition: all 0.27s ease;
        @media only screen and (max-width: 1024px) {
          max-width: 373.1px;
          height: 345.15px;
        }
        @media only screen and (max-width: 768px) {
          width: 85%;
          max-width: 85%;
          height: 531px;
          left: 50%;
          transform: translateX(-50%);
        }
        @media only screen and (max-width: 425px) {
          height: 335px;
        }
        @media only screen and (max-width: 375px) {
          height: 289px;
        }
        @media only screen and (max-width: 320px) {
          height: 238px;
        }

        img {
          overflow: hidden;
        }
        z-index: 5;

        &.glide__bullet--active {
          z-index: 88;
        }
        &:not(.glide__bullet--active) {
          box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
            rgba(17, 17, 26, 0.1) 0px 8px 24px,
            rgba(17, 17, 26, 0.1) 0px 16px 56px;
          margin-left: 30px;
          margin-top: -30px;
          @media only screen and (max-width: 768px) {
            margin-left: 20px;
            margin-top: -20px;
          }
          @media only screen and (max-width: 425px) {
            margin-left: -20px;
            margin-top: 20px;
          }
        }

        &:focus {
          outline: 0;
        }
      }
    }
  }
`;

export default SectionWrapper;
