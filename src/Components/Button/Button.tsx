import styled, { css } from 'styled-components';

import { ButtonType } from '../../utils/types';

interface ButtonProps {
  buttonType?: ButtonType;
}

const buttonCss = (props: ButtonProps & any) => css`
  cursor: pointer;
  text-align: center;
  padding: 12px 30px;
  padding-bottom: 18px;
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
  &:hover,
  &.hover {
    background-color: ${props.buttonType === ButtonType.Dark
      ? props.theme.secondColor
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
