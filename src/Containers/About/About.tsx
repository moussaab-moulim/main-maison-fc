import React, { Fragment, useState } from 'react';

import Link from 'next/link';
import { CSSProperties } from 'styled-components';

import { ButtonLink } from '../../Components/Button/Button';
import GlideCarousel from '../../Components/GlideCarousel';
import GlideSlide from '../../Components/GlideCarousel/glideSlide';
import { Heading2 } from '../../Components/Heading/Heading2';
import Image from '../../Components/Image';
import Lightbox from '../../Components/Lightbox/Lightbox';
import { VerticalSpace } from '../../Components/Space/Space';
import { TextPrismic } from '../../Components/Text/Text';
import { AboutDataType, ButtonType } from '../../utils/types';
import AboutWrapper, {
  Container,
  ContentArea,
  CarouselArea,
} from './about.style';

interface AboutProps extends AboutDataType {
  className?: string;
  style?: CSSProperties;
}
const About = (aboutProps: AboutProps) => {
  const [lightBoxToggle, setLightBoxToggle] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const glideOptions = {
    type: 'slider',
    rewind: true,
    autoplay: false,
    animationDuration: 1000,
    rewindDuration: 2000,
    hoverpause: true,
    bound: true,
    perView: 3,
    gap: aboutProps.className === 'dark' ? 0 : 20,
    breakpoints: {
      1024: {
        perView: 2,
      },
      425: {
        perView: 1,
        autoplay: false,
      },
    },
  };

  const handleImageClick = (index: number) => {
    setLightBoxToggle(true);
    setLightboxIndex(index);
  };
  // add button from prismic
  return (
    <AboutWrapper
      id={aboutProps.id}
      className={aboutProps.className ?? ''}
      style={aboutProps.style}
    >
      <Container className={aboutProps.className ?? ''}>
        <ContentArea>
          {/* <Fade direction="up" delay={30}> */}
          {aboutProps.title && <Heading2>{aboutProps.title}</Heading2>}
          <TextPrismic
            render={aboutProps.description}
            className={aboutProps.className ?? ''}
          />

          {aboutProps.button && (
            <Fragment>
              <VerticalSpace size={40} />
              <Link href={aboutProps.button?.url!} passHref prefetch={false}>
                <ButtonLink
                  buttonType={ButtonType.Dark}
                  target={aboutProps.button?.target}
                >
                  {aboutProps.button?.text}
                </ButtonLink>
              </Link>
              <VerticalSpace size={60} />
            </Fragment>
          )}

          {/* </Fade> */}
        </ContentArea>

        <CarouselArea className={aboutProps.className ?? ''}>
          <GlideCarousel
            carouselSelector={`home-about_carousel`}
            options={glideOptions}
            numberOfBullets={aboutProps.images.length}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
            controls={true}
            bullets={false}
          >
            <Fragment>
              {aboutProps.images.map((item, index) => (
                <GlideSlide key={`carousel_key${index}`}>
                  {/* TODO : picture pop up */}
                  <div
                    onClick={() => handleImageClick(index)}
                    className="item_wrapper"
                  >
                    <Image src={item.url} alt={item.alt} layout="fill" />
                    {/* TODO : picture title <Heading3>test</Heading3> */}
                  </div>
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouselArea>
        <Lightbox
          toogle={lightBoxToggle}
          onClose={() => {
            setLightBoxToggle(false);
          }}
          image={aboutProps.images[lightboxIndex]!}
        />
      </Container>
    </AboutWrapper>
  );
};

export default About;
