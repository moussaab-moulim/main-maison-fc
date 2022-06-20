import { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

import { motionParams } from '../src/utils/animations';

export const useAnimateInView = (inView: boolean) => {
  const animation = useAnimation();
  // const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start(motionParams.animate);
    } else {
      animation.start(motionParams.initial);
    }
    console.log('inviez', inView);

    return () => {
      animation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return animation;
};
