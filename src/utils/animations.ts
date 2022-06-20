import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' = 'up'): Variants => {
  return {
    initial: { y: direction === 'up' ? 40 : -60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        bounce: 0.3,
      },
    },
  };
};

export const fadeInUp = (): Variants => fadeIn('up');
export const fadeInDown = (): Variants => fadeIn('down');

export const zoom = (direction: 'in' | 'out' = 'in'): Variants => {
  return {
    initial: { scale: direction === 'in' ? 1 : 1.1, opacity: 0 },
    animate: {
      scale: direction === 'in' ? 1.1 : 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
};
export const zoomIn = (): Variants => zoom('in');
export const zoomOut = (): Variants => zoom('out');

export const stagerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};

export const motionParams = {
  initial: 'initial',
  animate: 'animate',
};
