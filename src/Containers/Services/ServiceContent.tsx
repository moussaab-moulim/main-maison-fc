import React from 'react';

import styled from 'styled-components';

import Image from '../../Components/Image';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { Treatment } from '../../Components/Treatment/Treatment';
import { TreatmentType } from '../../utils/types';

interface ServiceContentProps {
  treatments: TreatmentType[];
}

const ColumnImage = styled(Column)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 531px;
  position: relative;
  @media only screen and (max-width: 1024px) {
    height: 346px;
  }
  @media only screen and (max-width: 768px) {
    height: 535px;
  }
  .inside-box {
    display: block;
    &::before,
    &::after {
      content: '';
      position: absolute;
      transition: all 0.2s linear;
      background: #fff;
      z-index: 3;
    }
    &::before {
      width: 4px;
      height: 90%;
      left: 5%;
      bottom: 10%;
    }
    &::after {
      width: 95%;
      height: 4px;
      bottom: 10%;
      left: 5%;
    }
    .outside-box {
      display: block;
      width: 100%;
      height: 100%;
      border: 4px solid ${({ theme }) => theme.doreColor};
      position: absolute;
      top: -10%;
      left: 5%;
      z-index: 1;
      &::before,
      &::after {
        content: '';
        position: absolute;
        transition: all 0.2s linear;
        background: ${({ theme }) => theme.doreColor};
        z-index: 2;
      }
      &::before {
        width: 4px;
        height: 10%;
        left: -4px;
        top: -4px;
      }
      &::after {
        width: 5%;
        height: 4px;
        bottom: -4px;
        right: -4px;
      }
    }
  }
  .image_container {
    width: 100%;
    max-width: 413px;
    height: 393px;
    border: 0;
    padding: 0;

    background: transparent;

    position: relative;

    @media only screen and (max-width: 1024px) {
      max-width: 353.1px;
      height: 325.15px;
    }
    @media only screen and (max-width: 768px) {
      width: 85%;
      max-width: 85%;
      height: 531px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media only screen and (max-width: 425px) {
      height: 335px;
    }
    @media only screen and (max-width: 375px) {
      height: 289px;
    }
    @media only screen and (max-width: 320px) {
      height: 238px;
    }

    img {
      overflow: hidden;
    }
    z-index: 5;

    &:focus {
      outline: 0;
    }
  }
`;

const ServiceContent = ({ treatments }: ServiceContentProps) => {
  return (
    <Section
      style={{ backgroundColor: 'transparent', flexFlow: 'column nowrap' }}
    >
      {treatments.map((treatment: TreatmentType, index: number) => (
        <SectionInner key={index} className="service-page">
          <Column
            style={{ justifyContent: 'center', order: index % 2 === 0 ? 1 : 2 }}
            type={10 / 6}
          >
            <Treatment {...treatment} />
          </Column>
          <ColumnImage
            index
            style={{ justifyContent: 'center', order: index % 2 === 1 ? 1 : 2 }}
            type={10 / 4}
          >
            <div className="image_container">
              <span className="inside-box">
                <span className="outside-box"></span>
                <Image
                  src={treatment.image!.url}
                  alt={treatment.image!.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </span>
            </div>
          </ColumnImage>
        </SectionInner>
      ))}
    </Section>
  );
};

export default ServiceContent;
