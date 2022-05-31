import React from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FiInstagram } from 'react-icons/fi';
import styled from 'styled-components';

import { ButtonLink } from '../../Components/Button/Button';
import PostCard from '../../Components/Cards/PostCard';
import { Heading2 } from '../../Components/Heading/Heading2';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { mainTheme } from '../../styles/theme';
import { InstagramDataType, ButtonType } from '../../utils/types';

interface InstagramProps extends InstagramDataType {}

export const InstagramContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: flex-start;
  gap: 0px;
  width: 100%;
  overflow-x: hidden;
  a {
    width: calc(100vw / 5);
    height: calc(100vw / 5);
    flex-basis: 100%;
    margin: 0 !important;
    padding: 0 !important;
    display: unset !important;
    @media only screen and (max-width: 768px) {
      width: calc(100vw / 3);
      height: calc(100vw / 3);
    }
    @media only screen and (max-width: 567px) {
      width: calc(100vw / 2);
      height: calc(100vw / 2);
    }
  }
  @media only screen and (max-width: 768px) {
    overflow-x: scroll;
  }
`;

function Instagram({ title, id, images, instagramUrl }: InstagramProps) {
  const { t } = useTranslation('common');
  return (
    <Section
      style={{ backgroundColor: mainTheme.backgrounColor, paddingTop: 80 }}
      id={t(id)}
    >
      <SectionInner style={{ maxWidth: '100%', gap: 0, padding: 0 }}>
        <Column
          style={{ alignItems: 'center', width: '100%', flexBasis: '100%' }}
        >
          <Heading2
            style={{
              color: mainTheme.doreColor,
              alignItems: 'flex-end',
              display: 'flex',
              gap: '10px ',
            }}
          >
            {t(title)} <FiInstagram color={mainTheme.doreColor} size={35} />
          </Heading2>
          <InstagramContainer>
            {images.map((image, i) => (
              <PostCard
                key={i}
                postUrl={image.linkTo!}
                postImage={image}
                isExternalLink
              />
            ))}
          </InstagramContainer>
          <Link href={instagramUrl} passHref prefetch={false}>
            <ButtonLink
              style={{ maxWidth: 210 }}
              buttonType={ButtonType.Dark}
              target="_blank"
            >
              {t('section-instagram-button-more')}
            </ButtonLink>
          </Link>
        </Column>
      </SectionInner>
    </Section>
  );
}

export default Instagram;
