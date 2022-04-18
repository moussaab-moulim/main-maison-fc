import React from 'react';

import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0 0 18px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 34px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;
export const Heading1 = ({ ...props }) => <Heading {...props} />;
