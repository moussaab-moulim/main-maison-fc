import React from 'react';

import styled from 'styled-components';

import { Heading3 } from '../Heading/Heading3';
import IconWithCircleAnimation from './IconWithCircleAnimation';

interface IconCardProps {
  iconUrl?: string;
  title?: string;
  description?: string;
  cardUrl?: string;
}

const ServiceBox = styled.div`
  --side-margin: 15px;
  flex-basis: 25%;
  text-align: center;
  margin: 24px var(--side-margin);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 40px 24px;
  transition: border 100ms ease;
  &:hover {
    cursor: pointer;
    svg {
      color: #999;
    }
    border: 1px solid ${({ theme }) => theme.doreColor};
    .icon-background {
      background-color: ${({ theme }) => theme.doreColor};
    }
    img {
      filter: brightness(0) invert(1);
    }
    .anicircle {
      stroke-dashoffset: 140;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-basis: calc(50% - (var(--side-margin) * 2));
  }
  @media only screen and (max-width: 425px) {
    flex-basis: calc(100% - (var(--side-margin) * 2));
    margin: 10px var(--side-margin);
    padding: 25px 24px;
  }
`;

const CardDescription = styled.div`
  font-family: ${({ theme }) => theme.bodyFont};
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;
// TODO : ALT text
function IconCard(iconCardProps: IconCardProps) {
  return (
    <ServiceBox>
      {!!iconCardProps.iconUrl && (
        <IconWithCircleAnimation iconUrl={iconCardProps.iconUrl} />
      )}
      <Heading3 style={{ marginBottom: '25px' }}>
        {iconCardProps.title}
      </Heading3>
      <CardDescription>{iconCardProps.description}</CardDescription>
    </ServiceBox>
  );
}

export default IconCard;
