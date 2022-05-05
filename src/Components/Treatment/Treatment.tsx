import React from 'react';

import styled from 'styled-components';

import { TreatmentType } from '../../utils/types';
import { Heading3 } from '../Heading/Heading3';
import { TextPrismic } from '../Text/Text';

interface TreatmentProps extends TreatmentType {}

const TreatmentContainer = styled.div`
  width: 100%;
  .treatment-header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    .treatment-title {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-end;
      h3 {
        margin-bottom: 0;
      }
    }
    .dots {
      /* style these as you wish, made simple for demo */
      border-top: dotted 2px ${({ theme }) => theme.textColor};
      flex: 1;
      margin: 0 4px;
    }
    .treatment-price {
      min-width: 88px;
      color: ${({ theme }) => theme.doreColor};
      font-size: 14px;
    }
    margin-bottom: 20px;
  }

  > div {
    text-align: center;
  }
`;

export const Treatment = (props: TreatmentProps) => (
  <TreatmentContainer>
    <div className="treatment-header">
      <div className="treatment-title">
        <Heading3>{props.treatment}</Heading3>
        <div className="dots" />
      </div>
      <div
        className="treatment-price"
        style={{ maxWidth: props.price.length * 4 }}
      >
        {props.price}
      </div>
    </div>
    <TextPrismic render={props.description} />
  </TreatmentContainer>
);
