import React, { Fragment } from 'react';

import styled from 'styled-components';

import { ImageType } from '../../utils/types';
import Image from '../Image';

interface LightboxProps {
  toogle: boolean;
  onClose: () => void;
  image: ImageType;
}
const LightboxContainer = styled.div`
  &,
  & .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    position: fixed;
  }
  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }

  .close_button {
    background: transparent;
    border: none;
    position: absolute;
    left: 90%;
    top: 0;
    font-size: 44px;
    color: #fff;
  }

  .gallery_image {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-height: 640px;
    padding: 0 1.25rem;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
const Lightbox = ({ toogle, onClose, image }: LightboxProps) => {
  return (
    <Fragment>
      {toogle && (
        <LightboxContainer className="gallery">
          <div onClick={onClose} className="overlay">
            <button className="close_button" onClick={onClose}>
              &times;
            </button>

            <div className="gallery_image">
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </LightboxContainer>
      )}
    </Fragment>
  );
};

export default Lightbox;
