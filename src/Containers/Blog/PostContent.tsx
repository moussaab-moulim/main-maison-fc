import React from 'react';

import { RichTextBlock } from 'prismic-reactjs';
import styled from 'styled-components';

import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';

interface PostContentProps {
  content: RichTextBlock[];
}

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  h2 {
    font-family: ${({ theme }) => theme.titleFont};
    font-size: 36px;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
    margin: 20px 0;
    @media only screen and (max-width: 425px) {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 425px) {
    align-items: center;
  }
`;
const PostText = styled(TextPrismic)``;

const PostContent = (postContentProps: PostContentProps) => {
  return (
    <Section style={{ backgroundColor: 'transparent' }}>
      <SectionInner className="post-page">
        <Column className="postContent-column">
          <ContentContainer>
            <PostText render={postContentProps.content} />
          </ContentContainer>
        </Column>
      </SectionInner>
    </Section>
  );
};

export default PostContent;
