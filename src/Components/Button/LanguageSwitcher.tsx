import React, { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { linkResolver, hrefResolver } from '../../../prismicConfiguration';
import { LangDataType } from '../../utils/types';

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

const LanguageSwitcher = ({
  onClick,
  languages,
  currentLanguage,
  className,
}: LangDataType & ComponentPropsWithoutRef<'div'>) => {
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
        {currentLanguage}
      </Flag>
      <ul className="dropdown">
        {languages.map(
          (language: string, index: number) =>
            language !== currentLanguage && (
              <li key={index}>
                <Link
                  locale={language}
                  as={linkResolver(language)}
                  href={hrefResolver(language)}
                  passHref
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
                      {language}
                    </Flag>
                  </a>
                </Link>
              </li>
            )
        )}
      </ul>
    </LanguageContainer>
  );
};
export default LanguageSwitcher;
