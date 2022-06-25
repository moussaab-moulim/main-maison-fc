import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import BackgroundWrapper from '../../Components/BackgroundWrapper';
import { ButtonLink } from '../../Components/Button/Button';
import { Heading1 } from '../../Components/Heading/Heading1';
import Image from '../../Components/Image';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { Text } from '../../Components/Text/Text';
import { motionParams, zoomIn } from '../../utils/animations';
import { ButtonType, HeaderDataType } from '../../utils/types';

interface HeaderProps extends HeaderDataType {}

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  max-width: 380px;
  @media only screen and (max-width: 576px) {
    max-width: unset;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    padding: 25px 11px;
  }
`;

const Header = (headerProps: HeaderProps) => {
  return (
    <Section
      id={headerProps.id}
      style={{ height: '100vh', backgroundColor: 'transparent' }}
    >
      <BackgroundWrapper variants={zoomIn()} {...motionParams}>
        <Image
          alt=""
          src={headerProps.backgroundUrl}
          layout="fill"
          objectFit="cover"
          quality={70}
          priority
        />
      </BackgroundWrapper>
      <SectionInner>
        <Column type={2} className="right header-column">
          <ContentContainer>
            <Heading1>{headerProps.title}</Heading1>
            <Text>{headerProps.description}</Text>
            <Link href={headerProps.button?.url!} passHref prefetch={false}>
              <ButtonLink
                style={{ maxWidth: 216 }}
                target={headerProps.button?.target}
                buttonType={ButtonType.Dark}
              >
                {headerProps.button?.text}
              </ButtonLink>
            </Link>
          </ContentContainer>
        </Column>
      </SectionInner>
    </Section>
  );
};

export default Header;
