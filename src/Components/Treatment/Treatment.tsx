import React from 'react';

import styled from 'styled-components';

import { TreatmentType } from '../../utils/types';
import { Heading3 } from '../Heading/Heading3';
import { TextPrismic } from '../Text/Text';

interface TreatmentProps extends TreatmentType {}
interface TreatmentContainerProps {
  dots: number;
}
const TreatmentContainer = styled.div<TreatmentContainerProps>`
  width: 100%;
  .treatment-header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 425px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
    .treatment-title {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      h3 {
        margin-bottom: 0;
      }
      gap: 4px;
      @media only screen and (max-width: 425px) {
        width: 100%;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
      .circle {
        border: solid 2px ${({ theme }) => theme.doreColor};
        border-radius: 50%;
        width: 26px;
        height: 26px;
      }
      .dots {
        /* style these as you wish, made simple for demo */
        border-top: dotted 2px ${({ theme }) => theme.textColor};
        flex: 1;
        @media only screen and (max-width: 425px) {
          display: none;
        }
      }
    }

    .treatment-price {
      min-width: 88px;
      max-width: ${({ dots }) => dots}px;
      color: ${({ theme }) => theme.doreColor};
      font-size: 14px;
      @media only screen and (max-width: 425px) {
        max-width: 100%;
      }
    }
    margin-bottom: 20px;
  }

  > div {
    text-align: center;
    @media only screen and (max-width: 425px) {
      text-align: left;
    }
  }
`;

export const Treatment = ({
  treatment,
  price,
  description,
}: TreatmentProps) => (
  <TreatmentContainer dots={price.length * 4}>
    <div className="treatment-header">
      <div className="treatment-title">
        <div className="circle" />
        <Heading3>{treatment}</Heading3>
        <div className="dots" />
      </div>
      <div className="treatment-price">{price}</div>
    </div>
    {description && <TextPrismic render={description} />}
  </TreatmentContainer>
);
