import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import BackgroundWrapper from '../../Components/BackgroundWrapper';
import { ButtonLink } from '../../Components/Button/Button';
import { Heading1 } from '../../Components/Heading/Heading1';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { Text } from '../../Components/Text/Text';
import { HeaderDataType } from '../../utils/types';

interface HeaderProps extends HeaderDataType {}

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 380px;
  @media only screen and (max-width: 425px) {
    max-width: unset;
    align-items: center;
    text-align: center;
  }
`;

const Header = (headerProps: HeaderProps) => {
  return (
    <Section
      id={headerProps.id}
      style={{ height: '100vh', backgroundColor: 'transparent' }}
    >
      <BackgroundWrapper>
        <Image
          alt=""
          src={headerProps.backgroundUrl}
          layout="fill"
          objectFit="cover"
          quality={100}
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
                style={{ maxWidth: 210 }}
                target={headerProps.button?.target}
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
