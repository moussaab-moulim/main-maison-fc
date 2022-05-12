import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { ImageType } from '../../utils/types';
import { Heading3 } from '../Heading/Heading3';
import Image from '../Image';

interface PostCardProps {
  postUrl: string;
  title: string;
  postDate: string;
  postImage: ImageType;
  className?: string;
}

const PostBoxWrapper = styled.a`
  cursor: pointer;
  position: relative;
  --side-margin: 15px;
  flex-basis: calc(33% - var(--side-margin));

  display: flex;
  height: 100vh;
  max-height: 401px;
  overflow: hidden;
  position: relative;
  &.post-blog {
    flex-basis: calc(100% - var(--side-margin));
    &.right {
      height: 817px;
      max-height: 817px;
    }
  }
  @media only screen and (max-width: 1440px) {
    /* max-height: 460px; */
  }
  @media only screen and (max-width: 1200px) {
    max-height: 420px;
  }
  @media only screen and (max-width: 1024px) {
    &:nth-child(3) {
      display: none;
    }
    flex-basis: calc(50% - (var(--side-margin) * 2));
  }
  @media only screen and (max-width: 991px) {
    max-height: 400px;
  }
  @media only screen and (max-width: 768px) {
    max-height: 380px;
  }
  @media only screen and (max-width: 425px) {
    flex-basis: calc(100% - (var(--side-margin) * 2));
    margin: 10px var(--side-margin);
    padding: 25px 24px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const CardDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  h3 {
    font-size: ${({ theme }) => theme.h3FontSize};
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
// TODO : ALT text
function PostCard(postCardProps: PostCardProps) {
  return (
    <Link href={postCardProps.postUrl} passHref>
      <PostBoxWrapper className={postCardProps.className ?? ''}>
        <Image
          src={postCardProps.postImage.url}
          alt={postCardProps.postImage.alt}
          layout="fill"
        />

        <CardDescription>
          <Heading3>{postCardProps.title}</Heading3>
          <div className="post-date">{postCardProps.postDate}</div>
        </CardDescription>
      </PostBoxWrapper>
    </Link>
  );
}

export default PostCard;
