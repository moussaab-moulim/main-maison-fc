import React, { useEffect } from 'react';

import Glide from '@glidejs/glide';
import Link from 'next/link';

import { ButtonLink } from '../../Components/Button/Button';
import { Heading2 } from '../../Components/Heading/Heading2';
import Image from '../../Components/Image';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { VerticalSpace } from '../../Components/Space/Space';
import { Text } from '../../Components/Text/Text';
import { ButtonType, VisionDataType, VisionType } from '../../utils/types';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { ButtonsContainer, CarouselWrapper } from './Visions.style';

interface VisionsProps extends VisionDataType {}

function VisionsSection(visionProps: VisionsProps) {
  useEffect(() => {
    const glide = new Glide('#glide_carousel', {
      type: 'slider',
      perView: 1,
      gap: 0,
      rewind: false,
    });
    glide.mount();
  });
  return (
    <Section id={visionProps.id}>
      <SectionInner>
        <CarouselWrapper>
          <div className="glide" id="glide_carousel">
            <Column className="slide__wrapper" type={2}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {visionProps.visions.map(
                    (vision: VisionType, index: number) => (
                      <li
                        className="glide__slide"
                        key={`glide__slide--key${index}`}
                      >
                        <Heading2>{vision.title}</Heading2>
                        <Text>{vision.description}</Text>
                        <ButtonsContainer>
                          <Link
                            href={vision.button?.url!}
                            passHref
                            prefetch={false}
                          >
                            <ButtonLink
                              style={{ maxWidth: 216 }}
                              buttonType={ButtonType.Dark}
                              target={vision.button?.target}
                            >
                              {vision.button?.text}
                            </ButtonLink>
                          </Link>
                          <VerticalSpace size={20} />
                          <div
                            className="glide__arrows"
                            data-glide-el="controls"
                          >
                            <button
                              className="glide__arrow glide__arrow--left"
                              data-glide-dir="<"
                              aria-label="prev"
                            >
                              <span className="prev_arrow"></span>
                            </button>
                            <button
                              className="glide__arrow glide__arrow--right"
                              data-glide-dir=">"
                              aria-label="next"
                            >
                              <span className="next_arrow"></span>
                            </button>
                          </div>
                        </ButtonsContainer>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Column>
            <Column
              className="glide__bullets"
              data-glide-el="controls[nav]"
              type={2}
            >
              <span className="inside-box">
                <span className="outside-box"></span>
                {visionProps.visions.map(
                  (vision: VisionType, index: number) => (
                    <button
                      className="glide__bullet"
                      data-glide-dir={`=${index}`}
                      key={`glide_bullet--key${index}`}
                    >
                      <Image
                        src={vision.image.url}
                        alt={vision.image.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </button>
                  )
                )}
              </span>
            </Column>
          </div>
        </CarouselWrapper>
      </SectionInner>
    </Section>
  );
}

export default VisionsSection;
