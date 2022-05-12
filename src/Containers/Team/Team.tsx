import React from 'react';

import { RichTextBlock } from 'prismic-reactjs';
import styled from 'styled-components';

import IconCard from '../../Components/Cards/IconCard';
import { Heading2 } from '../../Components/Heading/Heading2';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';
import { MemberData } from '../../utils/types';

interface TeamProps {
  id: string;
  title: string;
  members: MemberData[];
  description: RichTextBlock[];
}

export const TeamContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function Team(teamProps: TeamProps) {
  return (
    <Section id={teamProps.id} style={{ marginBottom: 130 }}>
      <SectionInner>
        <Heading2>{teamProps.title}</Heading2>
        <TextPrismic render={teamProps.description} className={'middle_text'} />
        <TeamContainer>
          {teamProps.members.map((e, i) => (
            <IconCard
              key={i}
              title={e.memberName}
              subTitle={e.memberRole}
              description={e.memberText}
              icon={e.memberImage}
              index={i}
            />
          ))}
        </TeamContainer>
      </SectionInner>
    </Section>
  );
}

export default Team;
