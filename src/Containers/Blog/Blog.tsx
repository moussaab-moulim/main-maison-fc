import React from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styled from 'styled-components';

import { ButtonLink } from '../../Components/Button/Button';
import PostCard from '../../Components/Cards/PostCard';
import { Heading2 } from '../../Components/Heading/Heading2';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { mainTheme } from '../../styles/theme';
import { BlogDataType, ButtonType } from '../../utils/types';

interface BlogProps extends BlogDataType {}

export const BlogContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  @media only screen and (max-width: 425px) {
    flex-flow: row wrap;
  }
`;

function Blog(blogProps: BlogProps) {
  const { t } = useTranslation('common');
  return (
    <Section
      style={{ backgroundColor: mainTheme.backgrounColor }}
      id={t(blogProps.id)}
    >
      <SectionInner>
        <Column style={{ alignItems: 'center' }}>
          <Heading2>{t(blogProps.blogTitle)}</Heading2>
          <BlogContainer>
            {blogProps.posts.map((post, i) => (
              <PostCard
                key={i}
                title={post.title}
                postDate={post.documentMeta.firstPublicationDate!}
                postUrl={post.url}
                postImage={post.postImage}
              />
            ))}
          </BlogContainer>
          <Link href={'/blog'} passHref prefetch={false}>
            <ButtonLink style={{ maxWidth: 210 }} buttonType={ButtonType.Dark}>
              {t('section-blog-button-more')}
            </ButtonLink>
          </Link>
        </Column>
      </SectionInner>
    </Section>
  );
}

export default Blog;
