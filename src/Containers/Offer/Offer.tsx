import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { ButtonLink } from '../../Components/Button/Button';
import { Heading2 } from '../../Components/Heading/Heading2';
import Image from '../../Components/Image';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';
import { mainTheme } from '../../styles/theme';
import { ButtonType, OfferDataType } from '../../utils/types';

interface OfferProps extends OfferDataType {}
const OfferText = styled(TextPrismic)`
  padding-right: 180px;
  @media only screen and (max-width: 1024px) {
    padding-right: 60px;
  }
  @media only screen and (max-width: 768px) {
    padding-right: 60px;
  }
  @media only screen and (max-width: 576px) {
    padding-right: 0px;
  }
`;
const OfferImqgeContainer = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  max-height: 421px;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
const OfferSectionInner = styled(SectionInner)`
  @media only screen and (max-width: 576px) {
    position: relative;
  }
`;
const OfferImageColumn = styled(Column)`
  @media only screen and (max-width: 576px) {
    position: absolute;
    z-index: -1;
    opacity: 0.5;
  }
`;
const OfferContentColumn = styled(Column)`
  @media only screen and (max-width: 576px) {
    margin-top: 30px;
  }
`;

const Offer = (offerProps: OfferProps) => {
  // > button function

  return (
    <Section
      id={offerProps.id}
      style={{ backgroundColor: 'transparent', marginTop: '60px' }}
    >
      <OfferSectionInner>
        <OfferImageColumn type={2} style={{ padding: 16 }}>
          <OfferImqgeContainer>
            <Image
              src={offerProps.offerImage.url}
              alt={offerProps.offerImage.alt}
              layout="fill"
            />
            {/* TODO : picture title <Heading3>test</Heading3> */}
          </OfferImqgeContainer>
        </OfferImageColumn>
        <OfferContentColumn
          type={2}
          style={{ padding: 16, justifyContent: 'center' }}
        >
          <Heading2 style={{ color: mainTheme.doreColor }}>
            {offerProps.offerTitle}
          </Heading2>
          <OfferText render={offerProps.offerDescription} />
          {offerProps.offerButton && (
            <Link href={offerProps.offerButton.url} passHref prefetch={false}>
              <ButtonLink
                target={offerProps.offerButton.target}
                buttonType={ButtonType.Dark}
              >
                {offerProps.offerButton.text}
              </ButtonLink>
            </Link>
          )}
        </OfferContentColumn>
      </OfferSectionInner>
    </Section>
  );
};

export default Offer;
