import React from 'react';

import styled from 'styled-components';

import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Image from '../../Components/Image';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';
import { mainTheme } from '../../styles/theme';
import { StatementDataType } from '../../utils/types';

interface StatementProps extends StatementDataType {}
const StatementText = styled(TextPrismic)`
  text-align: center;
  padding: 0 10rem;
  @media only screen and (max-width: 576px) {
    p {
      font-size: 21px;
    }
  }
  p:nth-child(2) {
    margin-top: 20px;
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 5rem;
  }
  @media only screen and (max-width: 576px) {
    padding: 0px;
  }
`;
const StatementBackground = styled(BackgroundWrapper)`
  @media only screen and (max-width: 768px) {
    img {
      object-position: 0% 50%;
    }
  }
  @media only screen and (max-width: 768px) {
    img {
      object-position: 0% 50%;
    }
  }
`;

const Statement = (statementProps: StatementProps) => {
  // > button function

  return (
    <Section
      id={statementProps.id}
      style={{ backgroundColor: 'transparent', marginTop: '60px' }}
    >
      <StatementBackground>
        <Image
          alt={statementProps.background.alt}
          src={statementProps.background.url}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </StatementBackground>
      <SectionInner>
        <Column>
          <StatementText
            render={statementProps.text}
            color={mainTheme.secondColor}
            size="30px"
          />
        </Column>
      </SectionInner>
    </Section>
  );
};

export default Statement;
