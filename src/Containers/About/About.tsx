import React, { Fragment, useState, useEffect } from 'react';

import Link from 'next/link';

import { ButtonLink } from '../../Components/Button/Button';
import GlideCarousel from '../../Components/GlideCarousel';
import GlideSlide from '../../Components/GlideCarousel/glideSlide';
import { Heading2 } from '../../Components/Heading/Heading2';
import Image from '../../Components/Image';
import Lightbox from '../../Components/Lightbox/Lightbox';
import { VerticalSpace } from '../../Components/Space/Space';
import { TextPrismic } from '../../Components/Text/Text';
import { AboutDataType } from '../../utils/types';
import AboutWrapper, {
  Container,
  ContentArea,
  CarouselArea,
  CircleLoader,
} from './about.style';

interface AboutProps extends AboutDataType {}
const About = (aboutProps: AboutProps) => {
  const [lightBoxToggle, setLightBoxToggle] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const glideOptions = {
    type: 'slider',
    rewind: true,
    autoplay: 3000,
    animationDuration: 1000,
    rewindDuration: 2000,
    hoverpause: true,
    bound: true,
    perView: 3,
    gap: 20,
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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const handleImageClick = (index: number) => {
    setLightBoxToggle(true);
    setLightboxIndex(index);
  };
  // add button from prismic
  return (
    <AboutWrapper id={aboutProps.id}>
      <Container>
        <ContentArea>
          {/* <Fade direction="up" delay={30}> */}
          <Heading2>{aboutProps.title}</Heading2>

          <TextPrismic render={aboutProps.description} />
          <VerticalSpace size={20} />
          <Link href={aboutProps.button?.url!} passHref prefetch={false}>
            <ButtonLink target={aboutProps.button?.target}>
              {aboutProps.button?.text}
            </ButtonLink>
          </Link>
          <VerticalSpace size={20} />
          {/* </Fade> */}
        </ContentArea>

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
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
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
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
