import React, { useEffect, useState, useCallback } from 'react';

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

import {
  MenuActionButton,
  MobileMenuButton,
} from '../../Components/Button/Button';
import LanguageSwitcher from '../../Components/Button/LanguageSwitcher';
import { HeaderContainer } from '../../Components/Header/HeaderContainer';
import Image from '../../Components/Image';
import { LogoContainer } from '../../Components/Logo/LogoContainer';
import { NavContainerMobile } from '../../Components/Nav/NavContainer';
import SectionInner from '../../Components/Section/SectionInner';
import { fadeInDown } from '../../utils/animations';
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

const HeaderMobile = ({
  logo,
  menuItems,
  menuActions,
  langData,
  documentMeta,
}: HeaderProps) => {
  const [offset, setOffset] = useState(0);
  const onScroll = useCallback(() => setOffset(window.pageYOffset), []);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [toggleMobileNestedMenu, setToggleMobileNestedMenu] = useState(false);
  const handleToggleNested = () => {
    setToggleMobileNestedMenu(!toggleMobileNestedMenu);
  };
  const handleToggleMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
    setToggleMobileNestedMenu(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <HeaderContainer
      initial="initial"
      animate="animate"
      variants={fadeInDown()}
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
        <NavContainerMobile
          className={`header-nav ${toggleMobileMenu ? 'toggle-menu' : ''}`}
        >
          <ul className="main_menu">
            {menuItems &&
              menuItems.map((item: MenuType, index: number) => (
                <li
                  key={index}
                  className={`menu-item ${
                    toggleMobileNestedMenu ? 'toggle' : ''
                  } ${item.children.length > 0 ? 'has-menu' : ''}`}
                >
                  {item.clickabale ? (
                    <Link href={item.url} passHref>
                      <a onClick={handleToggleMenu}>{item.label}</a>
                    </Link>
                  ) : (
                    <span onClick={handleToggleNested}>
                      {item.label} <div className="arrow-open-close"></div>
                    </span>
                  )}

                  {item.children.length > 0 && (
                    <ul className={`nested-menu `}>
                      {item.children.map(
                        (itemChild: MenuType, indexChild: number) => (
                          <li className="nested-menu-item" key={indexChild}>
                            {itemChild.clickabale ? (
                              <Link href={itemChild.url} passHref>
                                <a onClick={handleToggleMenu}>
                                  {itemChild.label}
                                </a>
                              </Link>
                            ) : (
                              <span onClick={handleToggleMenu}>
                                {itemChild.label}
                              </span>
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
                <MenuActionButton
                  buttonType={ButtonType.Light}
                  onClick={handleToggleMenu}
                >
                  <span>{menuAction.text}</span>
                </MenuActionButton>
              </Link>
            ))}
          {langData && documentMeta.alternateLanguages.length > 0 && (
            <LanguageSwitcher
              {...langData}
              documentMeta={documentMeta}
              onClick={handleToggleMenu}
            />
          )}
        </NavContainerMobile>
        <MobileMenuButton onClick={handleToggleMenu}>
          {toggleMobileMenu ? (
            <FaTimes size={20} color="#fff" />
          ) : (
            <FaBars size={20} color="#fff" />
          )}
        </MobileMenuButton>
      </SectionInner>
    </HeaderContainer>
  );
};

export default HeaderMobile;
