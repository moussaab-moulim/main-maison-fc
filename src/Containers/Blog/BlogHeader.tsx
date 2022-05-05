import React from 'react';

import styled from 'styled-components';

import PostCard from '../../Components/Cards/PostCard';
import { Heading1 } from '../../Components/Heading/Heading1';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { BlogDataType, PageSettings } from '../../utils/types';

interface BlogHeaderProps extends BlogDataType, PageSettings {}

export const BlogHeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

function BlogHeader(blogHeaderProps: BlogHeaderProps) {
  // const { t } = useTranslation('common');
  return (
    <Section
      style={{
        backgroundColor: 'transparent',
      }}
      className="blog-header"
    >
      <SectionInner>
        <Heading1 style={{ width: '100%', textAlign: 'center' }}>
          {blogHeaderProps.title}
        </Heading1>
        <Column type={3} style={{ alignItems: 'center' }}>
          <BlogHeaderContainer>
            {[blogHeaderProps.posts[1], blogHeaderProps.posts[2]].map(
              (post, i) => (
                <PostCard
                  key={i}
                  title={post!.title}
                  postDate={post!.documentMeta.firstPublicationDate!}
                  postUrl={post!.url}
                  postImage={post!.postImage}
                  className="post-blog"
                />
              )
            )}
          </BlogHeaderContainer>
        </Column>
        <Column type={3 / 2} style={{ alignItems: 'center' }}>
          <BlogHeaderContainer>
            {[blogHeaderProps.posts[0]].map((post, i) => (
              <PostCard
                key={i}
                title={post!.title}
                postDate={post!.documentMeta.firstPublicationDate!}
                postUrl={post!.url}
                postImage={post!.postImage}
                className="post-blog right"
              />
            ))}
          </BlogHeaderContainer>
        </Column>
      </SectionInner>
    </Section>
  );
}

export default BlogHeader;
