import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundWrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  @media only screen and (max-width: 576px) {
    &.home {
      img {
        object-position: 30% 50%;
      }
    }
  }
`;

export default BackgroundWrapper;
