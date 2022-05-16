import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import Image from '../../Components/Image';
import { LogoContainer } from '../../Components/Logo/LogoContainer';
import Column from '../../Components/Section/Column';
import SectionInner from '../../Components/Section/SectionInner';
import { TextPrismic } from '../../Components/Text/Text';
import { DocumentMeta, FooterDataType, LangDataType } from '../../utils/types';

interface FooterProps extends FooterDataType {
  langData: LangDataType;
  documentMeta: DocumentMeta;
}
const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: ${(props) => props.theme.thirdColor};
`;
const FooterInner = styled(SectionInner)`
  position: relative;
  padding-top: 69px;
  padding-bottom: 20px;
  &.footer-copyright {
    padding-top: 20px;
    align-items: center;
  }
`;
const FooterText = styled(TextPrismic)`
  p {
    text-align: left;
    margin-bottom: 10px;
  }
  &.copyright-text {
    p {
      text-align: right;
      margin: 0;
    }
    a {
      text-decoration: underline;
      text-decoration-color: '#3b3b3b';
    }
  }
  @media only screen and (max-width: 768px) {
    p,
    &.copyright-text p {
      text-align: center;
    }
  }
`;
/* const FooterHeading = styled(Heading2)`
  text-align: left;
  font-size: 22px;
  margin-bottom: 28px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`; */
const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #cbcbcb;
`;
const Footer = ({
  // contactGroup,
  // menuItems,
  logo,
  copyrightText,
}: // langData,
// documentMeta,
FooterProps) => {
  // const { t } = useTranslation('common');
  return (
    <FooterContainer>
      {/**        <FooterInner>
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
          <FooterHeading>{t('section-footer-contact-title')}</FooterHeading>
          {contactGroup.map((contactField, index) => (
            <FooterText key={index} render={contactField} />
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
          <NavContainer className="footer-nav">
            <ul>
              {menuItems &&
                menuItems.map((item: MenuType, index: number) => (
                  <li key={index}>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          </NavContainer>
           <SubscriptionForm /> 
          {langData && documentMeta.alternateLanguages.length > 0 && (
            <LanguageSwitcher
              meta={documentMeta.meta}
              className="footer"
              {...langData}
            />
          )}
        </Column>
      </FooterInner>
      */}
      <Line />
      <FooterInner className="footer-copyright">
        <Column type={4}>
          <LogoContainer className="footer-logo">
            <Link href="/" passHref>
              <a>
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </a>
            </Link>
          </LogoContainer>
        </Column>
        <Column type={4 / 3}>
          <FooterText className="copyright-text" render={copyrightText} />
        </Column>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
