import React from 'react';

import styled from 'styled-components';

const Heading = styled.h2`
  margin: 0 0 18px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 36px;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  @media only screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Heading2 = ({ ...props }: any) => <Heading {...props} />;
