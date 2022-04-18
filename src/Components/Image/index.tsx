import React from 'react';

import NextImage, { ImageProps } from 'next/image';
import styled from 'styled-components';

const ImageWrapper = styled(NextImage)({
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
});

const Image = ({ ...props }: ImageProps) => <ImageWrapper {...props} />;

export default Image;
