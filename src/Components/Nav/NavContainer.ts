import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  ul {
    display: flex;
    list-style-type: none;
    li a {
      color: #3b3b3b;
      position: relative;
      font-size: 22px;
      font-family: ${(props) => props.theme.titleFont};
      font-weight: 300;
      padding: 10px;
      transition: 0.3s;
      &:hover {
        color: ${({ theme }) => theme.doreColor};
      }
      @media only screen and (max-width: 768px) {
        font-size: 24px;
      }
    }
  }

  &.footer-nav {
    @media only screen and (max-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
    }
    ul {
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &.header-nav {
    li a {
      &:hover::after {
        width: 100%;
      }
      &::after {
        content: '';
        height: 1px;
        width: 0;
        background: ${(props) => props.theme.doreColor};
        position: absolute;
        left: 0px;
        bottom: 0;
        transition: 0.5s;
      }
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      transform: translateX(0%);
      opacity: 0;
      padding-bottom: 40px;
      transition: all 0.5s ease-in-out;
      background-color: rgba(255, 255, 255, 1);
      position: fixed;
      height: 100%;
      width: 60%;
      z-index: 10000;
      flex-flow: column nowrap;
      justify-content: space-between;
      left: 100%;
      ul {
        display: flex;
        flex: 1;
        justify-content: center;
        flex-flow: column nowrap;
        gap: 2rem;
        list-style-type: none;
        align-items: center;
      }
      &.header-mobile {
        transform: translateX(-100%);
        opacity: 1;
      }
    }
    @media only screen and (max-width: 425px) {
      width: 100%;
    }
  }
`;
