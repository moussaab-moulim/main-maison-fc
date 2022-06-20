import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Heading2 = styled(motion.h2)`
  margin: 0 0 18px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 36px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  @media only screen and (max-width: 576px) {
    font-size: 30px;
  }
`;
