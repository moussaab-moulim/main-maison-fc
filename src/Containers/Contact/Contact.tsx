import React from 'react';

import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import ContactForm from '../../Components/Form/ContactForm';
import { Heading2 } from '../../Components/Heading/Heading2';
import Column from '../../Components/Section/Column';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';
import { mainTheme } from '../../styles/theme';
import { ContactDataType } from '../../utils/types';

interface ContactProps extends ContactDataType {}
const ContactText = styled(TextPrismic)`
  p {
    text-align: left;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;
const TitleWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;
const Contact = (contactProps: ContactProps) => {
  const { t } = useTranslation('common');
  return (
    <Section
      id={contactProps.id}
      style={{
        flexDirection: 'column',
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: mainTheme.thirdColor,
      }}
    >
      <SectionInner>
        <TitleWrapper>
          <Heading2 style={{ color: mainTheme.doreColor }}>
            {t('section-contact-title')}
          </Heading2>
        </TitleWrapper>
      </SectionInner>
      <SectionInner>
        <Column
          type={4}
          responsive={{
            breakpoints: {
              768: {
                type: 1,
              },
            },
          }}
        >
          {contactProps.contactGroup.map((contactField, index) => (
            <ContactText key={index} render={contactField} />
          ))}
        </Column>
        <Column
          type={4 / 3}
          responsive={{
            breakpoints: {
              768: {
                type: 1,
              },
            },
          }}
        >
          <ContactForm />
        </Column>
      </SectionInner>
      {/*       <SectionInner
        style={{
          maxWidth: '100%',
          width: '100%',
          marginBottom: '-54px',
          padding: 0,
        }}
      >
        <Map mapEmbedLink={contactProps.mapEmbedUrl} />
      </SectionInner> */}
    </Section>
  );
};

export default Contact;
