import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Heading1 = styled(motion.h1)`
  margin: 0 0 18px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 34px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;
