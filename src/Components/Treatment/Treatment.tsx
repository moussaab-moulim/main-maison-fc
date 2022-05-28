import React from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styled from 'styled-components';

import { ButtonType, TreatmentType } from '../../utils/types';
import { ButtonLink } from '../Button/Button';
import { Heading3 } from '../Heading/Heading3';
import { TextPrismic } from '../Text/Text';

interface TreatmentProps extends TreatmentType {}
interface TreatmentContainerProps {
  dots: number;
}
const TreatmentContainer = styled.div<TreatmentContainerProps>`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  > div * {
    text-align: left;
    margin: 0;
  }
  a {
    margin: 0;
  }
  .treatment-header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
        min-height: 26px;
        min-width: 26px;
      }
      .dots {
        /* style these as you wish, made simple for demo */
        border-top: dotted 2px ${({ theme }) => theme.textColor};
        flex: 1;
        margin-right: 6px;
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
  }
`;

export const Treatment = ({
  treatment,
  price,
  description,
  button,
}: TreatmentProps) => {
  const { t } = useTranslation('common');
  return (
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
      {button && (
        <Link href={button.url} passHref prefetch={false}>
          <ButtonLink target={button.target} buttonType={ButtonType.Dark}>
            {t('treatment-button-text')}
          </ButtonLink>
        </Link>
      )}
    </TreatmentContainer>
  );
};
