import React, { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { linkResolver } from '../../../prismicConfiguration';
import { DocumentMeta, IMeta, LangDataType } from '../../utils/types';

interface ContainerProps {
  count: number;
}
const LanguageContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  .dropdown {
    transition: 0.5s ease-in-out;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 0;
    width: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    li > a {
      display: block;
    }
    @media only screen and (max-width: 768px) {
      width: auto;
      li {
        margin: 0;
        display: block;
      }
    }
  }

  &:hover {
    .dropdown {
      width: ${(props) => (100 / props.count) * (props.count - 1)}%;

      li {
        margin: 0;
        display: block;
      }
    }
  }
  &.footer {
    .dropdown {
      width: auto;
      li {
        margin: 0;
        display: block;
      }
    }
  }
`;
interface FlagProps {
  current?: boolean;
}
const Flag = styled.div<FlagProps>`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 100px;
  cursor: ${(props) => (props.current ? 'default' : 'pointer')};
  background-color: ${({ theme }) => theme.doreColor};
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
interface LanguageSwitcherProps
  extends LangDataType,
    ComponentPropsWithoutRef<'div'> {
  documentMeta: DocumentMeta;
}
const LanguageSwitcher = ({
  onClick,
  languages,

  className,
  documentMeta,
}: LanguageSwitcherProps) => {
  return (
    <LanguageContainer className={className} count={languages.length}>
      <Flag current>
        {/* <Image
          src={`/assets/icons/${currentLanguage}.svg`}
          alt={currentLanguage}
          width={30}
          height={30}
          layout="responsive"
        /> */}
        {documentMeta.meta.lang}
      </Flag>
      <ul className="dropdown">
        {documentMeta.alternateLanguages.map((doc: IMeta, index: number) => (
          <li key={index}>
            <Link
              locale={doc.lang}
              href={linkResolver(doc)}
              passHref
              prefetch={false}
            >
              <a>
                <Flag onClick={onClick}>
                  {/* <Image
                        src={`/assets/icons/${language}.svg`}
                        alt={language}
                        width={30}
                        height={30}
                        layout="responsive"
                      /> */}
                  {doc.lang}
                </Flag>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </LanguageContainer>
  );
};
export default LanguageSwitcher;
