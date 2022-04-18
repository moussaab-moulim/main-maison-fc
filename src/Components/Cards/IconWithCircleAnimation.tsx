import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

const IconWrapper = styled.div`
  position: relative;
  padding: 16px;
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  .icon-background {
    background-color: ${({ theme }) => theme.thirdColor};
    border-radius: 50%;
    width: 62px;
    height: 62px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  svg {
    position: absolute;
    transform: translate(-50%, -50%) rotate(-87deg);
    left: 50%;
    top: 50%;
    .anicircle {
      fill: none;
      stroke-width: 2px;
      stroke: ${({ theme }) => theme.doreColor};
      stroke-dasharray: 300 300;
      stroke-dashoffset: 300;
      transition: stroke-dashoffset 500ms;
    }
  }

  svg:hover .anicircle {
    stroke-dashoffset: 140;
  }
`;
interface IconProps {
  iconUrl: string;
}
const IconWithCircleAnimation = ({ iconUrl }: IconProps) => (
  <IconWrapper>
    <div className="icon-background" />
    <Image src={iconUrl} alt={''} height={36} width={36} />
    <svg width="72px" height="72px" viewBox="0 0 72 72">
      <circle className="anicircle" cx="36" cy="36" r="35" />
    </svg>
  </IconWrapper>
);

export default IconWithCircleAnimation;
