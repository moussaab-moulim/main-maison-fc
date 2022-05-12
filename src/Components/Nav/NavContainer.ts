import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-bottom: 0px;
  ul {
    display: flex;
    list-style-type: none;
    &.nested-menu {
      display: none;
      flex-flow: column nowrap;
    }
    li {
      padding: 10px;
      a,
      span {
        color: #3b3b3b;
        position: relative;
        font-size: 18px;
        font-family: ${(props) => props.theme.titleFont};
        font-weight: 300;

        transition: 0.3s;
        color: ${({ theme }) => theme.doreColor};
        &:hover {
          color: ${({ theme }) => theme.doreColor};
        }
        @media only screen and (max-width: 768px) {
          font-size: 24px;
        }
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
    li {
      position: relative;
      &.menu-item::after {
        content: '';
        height: 1px;
        width: 0;
        background: ${(props) => props.theme.doreColor};
        position: absolute;
        left: 0px;
        bottom: 0;
        transition: 0.5s;
      }
      &.has-menu {
        .nested-menu-item {
          padding-inline: 30px;
        }
      }
      &:hover {
        &.menu-item:not(.has-menu)::after {
          width: 100%;
        }

        &.has-menu {
          .nested-menu {
            position: absolute;
            top: 100%;
            display: flex;
            min-width: 210px;
            width: 100%;
            background-color: ${({ theme }) => theme.secondColor};
            .nested-menu-item {
              &:hover {
                background-color: rgb(223 223 223 / 26%);
              }
            }
          }
        }
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
