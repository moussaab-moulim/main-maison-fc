import React, { ReactNode } from 'react';

import { Variants, Variant, motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { useAnimateInView } from '../../../hooks/animateInView';
import { mainTheme } from '../../styles/theme';
import { fadeInUp, motionParams } from '../../utils/animations';
import { ImageType } from '../../utils/types';
import { Heading3 } from '../Heading/Heading3';
import { Text } from '../Text/Text';
import IconWithCircleAnimation from './IconWithCircleAnimation';

interface IconCardProps {
  icon?: ImageType;
  title?: string;
  subTitle?: string;
  description?: string;
  cardUrl?: string;
  index: number;
}
interface ServiceBoxProps {
  children: ReactNode;
  index: number;
  link?: string;
  variants?: Variants & Variant;
}

const ServiceBoxWrapper = styled(motion.a)<ServiceBoxProps>`
  --side-margin: 15px;
  flex-basis: 25%;
  margin: 24px var(--side-margin);
  transition: all 0.2s linear;
  position: relative;
  cursor: pointer;
  .second {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    padding: 40px 24px;
    @media only screen and (max-width: 576px) {
      padding: 0;
    }
  }
  &::before,
  &::after,
  .first::before,
  .first::after,
  .second::before,
  .second::after {
    content: '';
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${({ theme }) => theme.doreColor};
  }
  /* creating the animeted border lines */
  &::before {
    width: 2px;
    height: ${({ index }) => (index % 2 === 0 ? '0%' : '70%')};
    top: ${({ index }) => (index % 4 === 2 || index % 4 === 3 ? 0 : 'unset')};
    bottom: ${({ index }) =>
      index % 4 === 0 || index % 4 === 1 ? 0 : 'unset'};
    left: ${({ index }) => (index % 4 === 0 || index % 4 === 1 ? 0 : 'unset')};
    right: ${({ index }) => (index % 4 === 2 || index % 4 === 3 ? 0 : 'unset')};
    transition-delay: ${({ index }) => (index % 2 === 0 ? '0s' : '0.2s')};
  }
  &::after {
    height: 2px;
    width: ${({ index }) => (index % 2 === 1 ? '0%' : '70%')};
    bottom: 0;
    top: ${({ index }) => (index % 4 === 1 || index % 4 === 2 ? 0 : 'unset')};
    bottom: ${({ index }) =>
      index % 4 === 0 || index % 4 === 3 ? 0 : 'unset'};
    left: ${({ index }) => (index % 4 === 1 || index % 4 === 2 ? 0 : 'unset')};
    right: ${({ index }) => (index % 4 === 0 || index % 4 === 3 ? 0 : 'unset')};
    transition-delay: ${({ index }) => (index % 2 === 1 ? '0s' : '0.2s')};
  }

  /* creating the fixed border lines */
  .first::before {
    width: 0;
    height: 2px;
    width: ${({ index }) =>
      index % 4 === 1 || index % 4 === 2 ? '70%' : '100%'};
    top: 0;
    left: ${({ index }) => (index % 4 === 1 ? 'unset' : 0)};
    right: ${({ index }) => (index % 4 === 1 ? 0 : 'unset')};
  }
  .first::after {
    width: 0;
    height: 2px;
    width: ${({ index }) =>
      index % 4 === 0 || index % 4 === 3 ? '70%' : '100%'};
    bottom: 0;
    left: ${({ index }) => (index % 4 === 0 ? 'unset' : 0)};
    right: ${({ index }) => (index % 4 === 0 ? 0 : 'unset')};
  }
  .second::before {
    width: 2px;
    height: 0;
    height: ${({ index }) =>
      index % 4 === 0 || index % 4 === 1 ? '70%' : '100%'};
    left: 0;
    top: ${({ index }) => (index % 4 === 0 ? 0 : 'unset')};
    bottom: ${({ index }) => (index % 4 === 0 ? 'unset' : 0)};
  }
  .second::after {
    width: 2px;
    height: 0;
    height: ${({ index }) =>
      index % 4 === 2 || index % 4 === 3 ? '70%' : '100%'};
    right: 0;
    top: ${({ index }) => (index % 4 === 2 ? 'unset' : 0)};
    bottom: 0;
  }

  &:hover,
  .hover {
    /* animating the border lines */
    &::before {
      height: ${({ index }) => (index % 2 === 0 ? '30%' : '100%')};
      transition-delay: ${({ index }) => (index % 2 === 1 ? '0s' : '0.2s')};
    }
    &::after {
      width: ${({ index }) => (index % 2 === 1 ? '30%' : '100%')};
      transition-delay: ${({ index }) => (index % 2 === 0 ? '0s' : '0.2s')};
    }
    svg {
      color: #999;
    }
    /* border: 1px solid ${({ theme }) => theme.doreColor}; */
    .icon-background {
      background-color: ${({ theme }) => theme.doreColor};
    }
    img {
      filter: brightness(0) invert(1);
      transition: all 0ms ease;
    }
    .anicircle {
      stroke-dashoffset: 140;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-basis: calc(50% - (var(--side-margin) * 2));
  }
  @media only screen and (max-width: 576px) {
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
function IconCard(iconCardProps: IconCardProps) {
  const { ref, inView } = useInView();
  const animation = useAnimateInView(inView);

  return (
    <Link href={iconCardProps.cardUrl ?? '#'} passHref>
      <ServiceBoxWrapper
        variants={fadeInUp()}
        ref={ref}
        {...motionParams}
        animate={animation}
        index={iconCardProps.index}
      >
        <span className="first">
          <span className="second">
            {!!iconCardProps.icon && (
              <IconWithCircleAnimation icon={iconCardProps.icon} />
            )}
            <Heading3
              style={{ marginBottom: iconCardProps.subTitle ? '0' : '25px' }}
            >
              {iconCardProps.title}
            </Heading3>
            {iconCardProps.subTitle && (
              <Text
                style={{
                  fontFamily: "'Atlantic Cruise',sans-serif",
                  fontSize: '18px',
                  color: mainTheme.textColorCmall,
                }}
              >
                {iconCardProps.subTitle}
              </Text>
            )}
            <CardDescription>{iconCardProps.description}</CardDescription>
          </span>
        </span>
      </ServiceBoxWrapper>
    </Link>
  );
}

export default IconCard;
