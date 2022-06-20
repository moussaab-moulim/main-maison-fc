import React, { useEffect, useState, useCallback } from 'react';

import Link from 'next/link';

import { MenuActionButton } from '../../Components/Button/Button';
import LanguageSwitcher from '../../Components/Button/LanguageSwitcher';
import { HeaderContainer } from '../../Components/Header/HeaderContainer';
import Image from '../../Components/Image';
import { LogoContainer } from '../../Components/Logo/LogoContainer';
import { NavContainer } from '../../Components/Nav/NavContainer';
import SectionInner from '../../Components/Section/SectionInner';
import {
  ImageType,
  MenuType,
  LangDataType,
  ButtonType,
  ButtonLink,
  DocumentMeta,
} from '../../utils/types';

interface HeaderProps {
  logo?: ImageType;
  menuItems?: MenuType[];
  menuActions?: ButtonLink[];
  langData: LangDataType;
  documentMeta: DocumentMeta;
}

const Header = ({
  logo,
  menuItems,
  menuActions,
  langData,
  documentMeta,
}: HeaderProps) => {
  const [offset, setOffset] = useState(0);
  const onScroll = useCallback(() => setOffset(window.pageYOffset), []);

  useEffect(() => {
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <HeaderContainer
      className={
        offset > 0 || ['service', 'about'].includes(documentMeta.meta.type)
          ? 'sticky'
          : ''
      }
    >
      <SectionInner className="menu-inner">
        {logo && (
          <LogoContainer className={`${offset > 0 ? 'sticky-logo' : ''}`}>
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
        )}
        <NavContainer className={`header-nav`}>
          <ul>
            {menuItems &&
              menuItems.map((item: MenuType, index: number) => (
                <li
                  key={index}
                  className={`menu-item ${
                    item.children.length > 0 ? 'has-menu' : ''
                  }`}
                >
                  {item.clickabale ? (
                    <Link href={item.url} passHref>
                      <a>{item.label}</a>
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {item.children.length > 0 && (
                    <ul className="nested-menu">
                      {item.children.map(
                        (itemChild: MenuType, indexChild: number) => (
                          <li className="nested-menu-item" key={indexChild}>
                            {itemChild.clickabale ? (
                              <Link href={itemChild.url} passHref>
                                <a>{itemChild.label}</a>
                              </Link>
                            ) : (
                              <span>{itemChild.label}</span>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
          {menuActions &&
            menuActions.map((menuAction: ButtonLink, index: number) => (
              <Link key={index} href={menuAction.url} passHref>
                <MenuActionButton buttonType={ButtonType.Light}>
                  <span>{menuAction.text}</span>
                </MenuActionButton>
              </Link>
            ))}
          {langData && documentMeta.alternateLanguages.length > 0 && (
            <LanguageSwitcher {...langData} documentMeta={documentMeta} />
          )}
        </NavContainer>
      </SectionInner>
    </HeaderContainer>
  );
};

export default Header;
