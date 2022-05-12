import React from 'react';

import styled from 'styled-components';

import PostCard from '../../Components/Cards/PostCard';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { mainTheme } from '../../styles/theme';
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
    <Section style={{ backgroundColor: mainTheme.backgrounColor }}>
      <SectionInner>
        <Column style={{ alignItems: 'center' }}>
          <BlogHeaderContainer>
            {blogHeaderProps.posts.map((post, i) => (
              <PostCard
                key={i}
                title={post.title}
                postDate={post.documentMeta.firstPublicationDate!}
                postUrl={post.url}
                postImage={post.postImage}
              />
            ))}
          </BlogHeaderContainer>
          {/*  <Link href={'/blogHeader'} passHref prefetch={false}>
            <ButtonLink style={{ maxWidth: 210 }} buttonType={ButtonType.Dark}>
              {t('section-blogHeader-button-more')}
            </ButtonLink>
          </Link> */}
        </Column>
      </SectionInner>
    </Section>
  );
}

export default BlogHeader;
