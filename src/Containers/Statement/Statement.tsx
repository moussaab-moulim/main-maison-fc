import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';
import { mainTheme } from '../../styles/theme';
import { StatementDataType } from '../../utils/types';

interface StatementProps extends StatementDataType {}
const StatementText = styled(TextPrismic)`
  padding-right: 180px;
  @media only screen and (max-width: 768px) {
    padding-right: 60px;
  }
  @media only screen and (max-width: 425px) {
    padding-right: 0px;
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
        <Column type={2} className="right">
          <StatementText
            render={statementProps.text}
            color={mainTheme.secondColor}
            size="16px"
          />
        </Column>
      </SectionInner>
    </Section>
  );
};

export default Statement;
