import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderContainer = styled(motion.header)`
  position: absolute;
  background: transparent;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 71px;
  max-height: 71px;
  transition: 0.2s height, 0.4s background-color ease-in-out;
  z-index: 9998;

  &.sticky {
    position: fixed;
    background: #fff;
    height: 74px;
    max-height: 74px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .menu-inner {
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
`;
