import styled, { css } from 'styled-components';

import { ButtonType } from '../../utils/types';

interface ButtonProps {
  buttonType?: ButtonType;
  noBorder?: boolean;
}

const buttonCss = (props: ButtonProps & any) => css`
  position: relative;
  cursor: pointer;
  text-align: center;
  padding: 12px 30px;
  min-width: 157px;
  max-width: 157px;
  background-color: ${props.buttonType === ButtonType.Dark
    ? props.theme.doreColor
    : 'transparent'};
  border-radius: 300px;
  border: solid 1px #707070;
  margin: 10px 0;

  color: ${props.buttonType === ButtonType.Dark
    ? props.theme.secondColor
    : props.theme.firstColor};
  font-size: ${props.theme.buttonFontSize};
  font-family: ${props.theme.titleFont};
  font-weight: 300;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  &.border-animation {
    border-radius: 0px;
    border: none;
    &::before,
    &::after {
      content: '';
      width: 0;
      height: 1px;
      position: absolute;
      transition: all 0.2s linear;
      background: ${props.theme.doreColor};
    }
    &::before {
      width: 100%;

      right: 0;
      top: 0;
    }
    &::after {
      width: 50%;
      right: 0;
      bottom: 0;
      transition-delay: 0.2s;
    }
    span {
      display: block;
      &::before,
      &::after {
        content: '';
        width: 1px;
        height: 0;
        position: absolute;
        transition: all 0.2s linear;
        background: ${props.theme.doreColor};
      }
      &::after {
        height: 100%;

        right: 0;
        bottom: 0;
      }
      ::before {
        transition-delay: 0s;
        left: 0;
        bottom: 0;
      }
    }
    &:hover {
      border: none;
      background: transparent;
      color: ${props.theme.doreColor};

      ::before,
      ::after {
        width: 100%;
      }
      ::after {
        transition-delay: 0s;
      }
      span {
        ::before,
        ::after {
          height: 100%;
        }
        ::before {
          transition-delay: 0.2s;
        }
      }
    }
  }
  &:hover,
  &.hover {
    background-color: ${props.buttonType === ButtonType.Dark
      ? 'transparent'
      : props.theme.doreColor};
    border-color: ${props.buttonType === ButtonType.Dark
      ? props.theme.firstColor
      : props.theme.doreColor}!important;
    color: ${props.buttonType === ButtonType.Dark
      ? props.theme.firstColor
      : props.theme.secondColor};
  }
`;

export const ButtonLink = styled.a<ButtonProps>`
  ${(props) => buttonCss(props)}
`;
const Button = styled.button<ButtonProps>`
  ${(props) => buttonCss(props)}
`;

export default Button;
