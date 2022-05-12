import React from 'react';

import styled from 'styled-components';

import IconCard from '../../Components/Cards/IconCard';
import { Heading2 } from '../../Components/Heading/Heading2';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { ServicesDataType } from '../../utils/types';

interface ServicesProps extends ServicesDataType {}

export const ServicesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function Services(servicesProps: ServicesProps) {
  return (
    <Section id={servicesProps.id}>
      <SectionInner>
        <Heading2>{servicesProps.title}</Heading2>
        <ServicesContainer>
          {servicesProps.services.map((e, i) => (
            <IconCard
              key={i}
              title={e.title}
              description={e.description}
              icon={e.icon}
              cardUrl={e.serviceUrl}
              index={i}
            />
          ))}
        </ServicesContainer>
      </SectionInner>
    </Section>
  );
}

export default Services;
