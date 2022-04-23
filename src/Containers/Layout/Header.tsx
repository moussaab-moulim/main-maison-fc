import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

import Button from '../../Components/Button/Button';
import LanguageSwitcher from '../../Components/Button/LanguageSwitcher';
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
} from '../../utils/types';

interface HeaderProps {
  logo?: ImageType;
  menuItems?: MenuType[];
  menuActions?: ButtonLink[];
  langData: LangDataType;
}

const HeaderContainer = styled.header`
  position: absolute;
  background: transparent;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-height: 80px;
  transition: 0.2s height, 0.4s background-color ease-in-out;
  z-index: 9998;

  &.sticky {
    position: fixed;
    background: #fff;
    height: 74px;
    max-height: 74px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .menu-inner {
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
`;

const MenuActionButton = styled(Button)`
  padding: 9px 24px;
  position: relative;
  color: ${(props) => props.theme.doreColor};
  background-color: transparent;
  font-family: ${(props) => props.theme.titleFont};
  font-weight: 300;
  cursor: pointer;
  font-size: 16px;

  border: none;
  &::before,
  &::after {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${(props) => props.theme.doreColor};
  }
  &::before {
    width: 100%;

    right: 0;
    top: 0;
  }
  &::after {
    width: 50%;
    right: 0;
    bottom: 0;
    transition-delay: 0.2s;
  }
  span {
    display: block;
    &::before,
    &::after {
      content: '';
      width: 1px;
      height: 0;
      position: absolute;
      transition: all 0.2s linear;
      background: ${(props) => props.theme.doreColor};
    }
    &::after {
      height: 100%;

      right: 0;
      bottom: 0;
    }
    ::before {
      transition-delay: 0s;
      left: 0;
      bottom: 0;
    }
  }
  :hover {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.doreColor};

    ::before,
    ::after {
      width: 100%;
    }
    ::after {
      transition-delay: 0s;
    }
    span {
      ::before,
      ::after {
        height: 100%;
      }
      ::before {
        transition-delay: 0.2s;
      }
    }
  }

  @media (max-width: 768px) {
    border: none;
    font-size: 18px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: ${(props) => props.theme.doreColor};
  border-radius: 300px;
  border: none;
  height: 40px;
  width: 40px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10001;
  }
`;

const Header = ({ logo, menuItems, menuActions, langData }: HeaderProps) => {
  const [offset, setOffset] = useState(0);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleToggle = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <HeaderContainer className={offset > 0 ? 'sticky' : ''}>
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
        <NavContainer
          className={`header-nav ${toggleMobileMenu ? 'header-mobile' : ''}`}
        >
          <ul>
            {menuItems &&
              menuItems.map((item: MenuType, index: number) => (
                <li key={index}>
                  <Link href={item.url} passHref>
                    <a onClick={handleToggle}>{item.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
          {menuActions &&
            menuActions.map((menuAction: ButtonLink, index: number) => (
              <Link key={index} href={menuAction.url} passHref>
                <MenuActionButton
                  buttonType={ButtonType.Light}
                  onClick={handleToggle}
                >
                  <span>{menuAction.text}</span>
                </MenuActionButton>
              </Link>
            ))}
          {langData && (
            <LanguageSwitcher {...langData} onClick={handleToggle} />
          )}
        </NavContainer>
        <MobileMenuButton onClick={handleToggle}>
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

export default Header;
