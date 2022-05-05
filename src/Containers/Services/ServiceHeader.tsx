import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import BackgroundWrapper from '../../Components/BackgroundWrapper';
import { Heading1 } from '../../Components/Heading/Heading1';
import Section from '../../Components/Section/Section';
import { ImageType } from '../../utils/types';

interface ServiceHeaderProps {
  image: ImageType;
  title: string;
}

const CardDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  h1 {
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.secondColor};
    text-align: center;
    margin: 0;
  }
  .post-date {
    font-size: ${({ theme }) => theme.smallFontSize};
    font-weight: 300;
    color: ${({ theme }) => theme.secondColor};
    text-align: center;
  }
  align-self: flex-end;
  width: 100%;
  max-height: 90px;
  height: 100%;
  backdrop-filter: blur(13.7px);
  background-color: rgba(0, 0, 0, 0.5);
`;
const ServiceHeader = (serviceHeaderProps: ServiceHeaderProps) => {
  return (
    <Section
      style={{
        height: '100vh',
        backgroundColor: 'transparent',
        paddingBottom: 0,
      }}
    >
      <BackgroundWrapper>
        <Image
          alt={serviceHeaderProps.image.alt}
          src={serviceHeaderProps.image.url}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </BackgroundWrapper>

      <CardDescription>
        <Heading1>{serviceHeaderProps.title}</Heading1>
      </CardDescription>
    </Section>
  );
};

export default ServiceHeader;
