import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const rotate = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

const grow = keyframes`
	50% {
		transform: scale(1);
	}
`;

export const CircleLoader = styled.div`
  animation: ${rotate} 3s linear infinite;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  transform-origin: bottom center;

  .circle {
    animation: ${grow} 1.5s linear infinite;
    background-color: ${({ theme }) => theme.firstColor};
    border-radius: 50%;
    display: inline-block;
    margin: -9px;
    height: 40px;
    width: 40px;
    transform: scale(0);

    &:nth-of-type(2) {
      animation-delay: 0.75s;
      background-color: ${({ theme }) => theme.secondColor};
    }
  }

  &.alt {
    .circle {
      &:nth-of-type(2) {
        background-color: ${({ theme }) => theme.textColor};
      }
    }
  }
`;

const AboutWrapper = styled.section`
  padding-top: 90px;
  margin-bottom: 81px;
  background-color: ${({ theme }) => theme.backgrounColor};
  &.dark {
    background-color: ${({ theme }) => theme.firstColor};
  }
  @media only screen and (max-width: 1440px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 768px) {
    padding: 135px 0 82px;
    margin-bottom: 42px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1580px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1600px) {
    padding: 0 81px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 991px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 767px) {
    /* flex-direction: column; */
  }
  &.dark {
    padding: 0;
    min-height: auto;
  }
`;

export const ContentArea = styled(motion.div)`
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 1600px) {
    /* width: 560px; */
  }
  @media only screen and (max-width: 1360px) {
    /* width: 40%; */
  }
  @media only screen and (max-width: 1200px) {
    /* width: 45%; */
  }
  @media only screen and (max-width: 768px) {
    /* width: 100%; */
    padding-right: 0px;
  }
  @media only screen and (max-width: 576px) {
    padding-right: 0;
    /* text-align: center; */
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 30px;
    + p {
      margin: 0;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 50px;
  @media only screen and (max-width: 767px) {
    margin-top: 25px;
    margin-bottom: 54px;
  }

  .reusecore__button {
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    &:first-child {
      margin-right: 20px;
      &:hover {
        opacity: 0.95;
      }
    }

    &:hover {
      .btn-icon {
        animation: ${shake} 1s infinite;
      }
    }
  }
`;

export const CarouselArea = styled(motion.div)`
  width: calc(100% - 595px);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  &.dark {
    max-width: 100%;
    .glide__controls {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      margin: 0 !important;
      justify-content: space-between !important;
      > div {
        background: rgb(255 255 255 / 50%);
        padding: 10px;
        height: 100px;
        width: 50px;
        transition: all 0.2s ease-in;
        > span {
          width: 0 !important;

          &::before,
          &::after {
            background-color: #000;
            width: 30px;
          }
          &.prev_arrow {
            transform: translateX(-15px);
          }
          &.next_arrow {
            transform: translateX(10px);
            &::after {
              transform-origin: 30px 2px;
            }
          }
        }
        &:hover {
          background: rgb(255 255 255 / 80%);
        }
      }
    }
  }
  @media only screen and (max-width: 1600px) {
    width: calc(100%);
  }
  @media only screen and (max-width: 1360px) {
    width: 60%;
  }
  @media only screen and (max-width: 1200px) {
    width: 60%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .carousel_selector[id$='_carousel'] {
    .glide__slide {
      .item_wrapper {
        display: block;
        height: 100vh;
        max-height: 421px;
        /*  border-radius: 20px; */
        overflow: hidden;
        position: relative;
        @media only screen and (max-width: 1440px) {
          /* max-height: 460px; */
        }
        @media only screen and (max-width: 1200px) {
          max-height: 420px;
        }
        @media only screen and (max-width: 991px) {
          max-height: 400px;
        }
        @media only screen and (max-width: 767px) {
          max-height: 380px;
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 30%;
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.8)
          );
          position: absolute;
          bottom: 0;
          left: 0;
          transition: height 0.3s ease;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h4 {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 0;
          padding: 25px 30px;
          color: ${({ theme }) => theme.textColorLite};
          font-weight: 600;
          z-index: 1;
          transition: bottom 0.3s ease;

          @media only screen and (max-width: 1440px) {
            font-size: 20px;
          }
        }
      }

      &:hover {
        .item_wrapper {
          &::after {
            height: 70%;
          }

          img {
            transform: scale(1.1);
          }

          h4 {
            color: ${({ theme }) => theme.secondColor};
            bottom: 10px;
          }
        }
      }
    }

    .glide__controls {
      display: flex;
      justify-content: center;
      margin: 30px 0;
      > div {
        > span {
          /*   &.next_arrow,
          &.prev_arrow {
            width: 45px;
            background-color: ${({ theme }) => theme.firstColor};
            @media only screen and (max-width: 667px) {
              width: 30px;
            }

            &::before {
              background-color: ${({ theme }) => theme.firstColor};
              transform: rotate(42deg);
            }

            &::after {
              background-color: ${({ theme }) => theme.firstColor};
              transform: rotate(-42deg);
            }
          } */
        }
      }
    }
  }
`;

export default AboutWrapper;
