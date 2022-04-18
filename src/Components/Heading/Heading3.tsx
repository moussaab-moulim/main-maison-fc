import React from 'react';

import styled from 'styled-components';

export const Heading = styled.h3`
  margin: 0 0 18px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 21px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

export const Heading3 = ({ ...props }) => <Heading {...props} />;
