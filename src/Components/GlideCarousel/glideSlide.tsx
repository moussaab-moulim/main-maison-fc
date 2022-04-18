import React from 'react';

import { GlideSlideWrapper } from './glide.style';

// Glide Slide wrapper component
const GlideSlide = ({ children }: GlideSlideProps) => {
  return (
    <GlideSlideWrapper className="glide__slide">{children}</GlideSlideWrapper>
  );
};

interface GlideSlideProps {
  /** Children. */
  children: any;
}

export default GlideSlide;
