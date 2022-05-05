import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { Heading1 } from '../../Components/Heading/Heading1';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { Text } from '../../Components/Text/Text';
import { ImageType } from '../../utils/types';

interface PostHeaderProps {
  image: ImageType;
  title: string;
  date: string;
}

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 380px;
  align-self: flex-end;
  margin-top: 5px;

  @media only screen and (max-width: 425px) {
    max-width: unset;
    align-items: center;
    text-align: center;
  }
`;
const OfferImqgeContainer = styled.div`
  display: block;
  height: 100vh;
  max-height: 634px;
  overflow: hidden;
  position: relative;
  border-bottom: 4px solid ${({ theme }) => theme.doreColor};
  @media only screen and (max-width: 991px) {
    max-height: 480px;
  }
  @media only screen and (max-width: 767px) {
    max-height: 358px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const PostHeader = (postHeaderProps: PostHeaderProps) => {
  return (
    <Section
      style={{
        height: '100vh',
        backgroundColor: 'transparent',
      }}
      className="post-header"
    >
      <SectionInner className="post-page">
        <Column className="postHeader-column">
          <Heading1 style={{ textAlign: 'center' }}>
            {postHeaderProps.title}
          </Heading1>

          <OfferImqgeContainer>
            <Image
              src={postHeaderProps.image.url}
              alt={postHeaderProps.image.alt}
              layout="fill"
            />
            {/* TODO : picture title <Heading3>test</Heading3> */}
          </OfferImqgeContainer>

          <ContentContainer>
            <Text style={{ textAlign: 'right', fontWeight: '200' }}>
              {postHeaderProps.date}
            </Text>
          </ContentContainer>
        </Column>
      </SectionInner>
    </Section>
  );
};

export default PostHeader;
