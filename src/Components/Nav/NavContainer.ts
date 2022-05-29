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

    li {
      padding: 10px;

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
      }
      .nested-menu {
        display: none;
        flex-flow: column nowrap;
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
  }
`;
export const NavContainerMobile = styled.nav`
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
  align-items: center;
  left: 100%;
  gap: 15px;
  margin-bottom: 0px;
  ul {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    flex-flow: column nowrap;
    gap: 0rem;
    list-style-type: none;
    align-items: center;
    &.main_menu {
      margin-top: 70px;
    }
    li {
      padding: 10px;

      position: relative;
      a,
      span {
        font-size: 24px;
        color: #3b3b3b;
        position: relative;
        font-family: ${(props) => props.theme.titleFont};
        font-weight: 300;
        position: relative;
        width: fit-content;
        transition: 0.3s;
        color: ${({ theme }) => theme.doreColor};
        &:hover {
          color: ${({ theme }) => theme.doreColor};
        }
      }
      &.has-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        .nested-menu-item {
          padding-inline: 30px;
        }
        .nested-menu {
          display: none;
          flex-flow: column nowrap;
        }
        .arrow-open-close {
          position: absolute;
          left: 100%;
          top: 50%;
          width: 35px;
          cursor: pointer;
          margin-left: 10px;
          &:before,
          &:after {
            transition: 0.15s all ease-in-out;
            position: absolute;
            content: '';
            width: 54%;
            height: 2px;
            background: ${({ theme }) => theme.doreColor};
            top: 49%;
            border-radius: 5px;
          }

          &:before {
            transform: rotate(210deg);
            left: 0;
          }
          &:after {
            transform: rotate(-210deg);
            right: 0;
          }
        }
      }
      &.toggle {
        &.menu-item:not(.has-menu)::after {
          width: 100%;
        }

        &.has-menu {
          .nested-menu {
            position: relative;
            display: flex;
            min-width: 210px;
            width: 100%;
            margin-block: 10px;
            background-color: ${({ theme }) => theme.secondColor};
            .nested-menu-item {
              padding-block: 0;
              &:hover {
                background-color: rgb(223 223 223 / 26%);
              }
            }
          }

          .arrow-open-close {
            &:before {
              transform: rotate(150deg);
              left: 0;
            }
            &:after {
              transform: rotate(-150deg);
              right: 0;
            }
          }
        }
      }
    }
  }
  &.toggle-menu {
    transform: translateX(-100%);
    opacity: 1;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;
