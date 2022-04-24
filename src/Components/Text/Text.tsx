import { CSSProperties } from 'react';

import { RichText, RichTextProps } from 'prismic-reactjs';
import styled from 'styled-components';

interface TextPrismicProps {
  style?: CSSProperties;
  color?: string;
  size?: string;
  className?: string;
}

export const Text = styled.p`
  font-family: ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: 300;
  margin: 0 0 18px;
`;
const RichTextWrapper = styled.div<TextPrismicProps>`
  p {
    font-family: ${({ theme }) => theme.bodyFont};
    color: ${(props) => (props.color ? props.color : props.theme.textColor)};
    font-size: ${(props) =>
      props.size ? props.size : props.theme.normalFontSize};
    margin: 0 0 18px;
    font-weight: 300;
  }
`;

export const TextPrismic = (props: RichTextProps & TextPrismicProps) => (
  <RichTextWrapper {...props}>
    <RichText render={props.render} />
  </RichTextWrapper>
);

export default Text;
