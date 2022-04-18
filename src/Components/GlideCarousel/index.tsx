import React, { Fragment, useEffect } from 'react';

import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

import GlideWrapper, {
  ButtonControlWrapper,
  ButtonWrapper,
  BulletControlWrapper,
  BulletButton,
  DefaultBtn,
} from './glide.style';

const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  prevWrapper,
  nextWrapper,
  bullets,
  numberOfBullets,
  buttonWrapperStyle,
  bulletWrapperStyle,
  bulletButtonStyle,
  carouselSelector,
}: GlideCarouselProps) => {
  // Add all classs to an array
  const addAllClasses = ['glide'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // number of bullets loop
  const totalBullets = [];
  if (numberOfBullets) {
    for (let i = 0; i < numberOfBullets; i += 1) {
      totalBullets.push(i);
    }
  }
  // Load glide
  useEffect(() => {
    const glide = new Glide(
      carouselSelector ? `#${carouselSelector}` : '#glide',
      {
        ...options,
      }
    );
    glide.mount();
  });

  return (
    <GlideWrapper
      className={addAllClasses.join(' ')}
      id={carouselSelector || 'glide'}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>

      {/** if controls prop true then show glide controls nav */}
      {controls && (
        <ButtonControlWrapper
          className="glide__controls"
          data-glide-el="controls"
          {...buttonWrapperStyle}
        >
          <ButtonWrapper
            {...prevWrapper}
            className="glide__prev--area"
            data-glide-dir="<"
            aria-label="prev"
          >
            {prevButton || <DefaultBtn>Prev</DefaultBtn>}
          </ButtonWrapper>
          <ButtonWrapper
            {...nextWrapper}
            className="glide__next--area"
            data-glide-dir=">"
            aria-label="next"
          >
            {nextButton || <DefaultBtn>Next</DefaultBtn>}
          </ButtonWrapper>
        </ButtonControlWrapper>
      )}

      {/** if bullets prop true then show glide bullets nav */}
      {bullets && (
        <BulletControlWrapper
          className="glide__bullets"
          data-glide-el="controls[nav]"
          {...bulletWrapperStyle}
        >
          <Fragment>
            {totalBullets.map((index) => (
              <BulletButton
                key={index}
                className="glide__bullet"
                data-glide-dir={`=${index}`}
                aria-label={`bullet${index + 1}`}
                {...bulletButtonStyle}
              />
            ))}
          </Fragment>
        </BulletControlWrapper>
      )}
    </GlideWrapper>
  );
};

interface GlideCarouselProps {
  /** className of the GlideCarousel. */
  className?: string;

  /** Children. */
  children?: any;

  /** You can add your custom glid options using this prop. */
  options?: object;

  /** Hide || show controls nav. */
  controls?: boolean;

  /** Hide || show bullets nav. */
  bullets?: boolean;

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets?: number;

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle?: object;

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle?: object;

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper?: object;

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper?: object;

  /** Set previous button for glide carousel. */
  prevButton?: string | object;

  /** Set next button for glide carousel. */
  nextButton?: string | object;

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle?: object;
  carouselSelector?: any;
}

export default GlideCarousel;
