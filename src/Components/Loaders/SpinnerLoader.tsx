import React from 'react';

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
		transform: rotate(0turn);
	}
	to {
		transform: rotate(-1turn);
	}
`;
const outline = keyframes`
0% {
		stroke-dashoffset: 0;
	}
	5% {
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dashoffset: 300;
	}
	95% {
		stroke-dashoffset: 600;
	}
	100% {
		stroke-dashoffset: 600;
	}
`;
const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  position: absolute;
  svg {
    width: 100%;
    max-width: 6rem;
    animation: ${rotate} 3.4s linear infinite;
    circle {
      fill: none;
      stroke: ${({ theme }) => theme.doreColor};
      stroke-width: 4px;
      stroke-dasharray: 300;
      animation: ${outline} 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
    }
  }
`;
const SpinnerLoader = () => (
  <SvgWrapper>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" />
    </svg>
  </SvgWrapper>
);

export default SpinnerLoader;
