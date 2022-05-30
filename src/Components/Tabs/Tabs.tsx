import React, { ReactNode, useState } from 'react';

import styled from 'styled-components';

import Button from '../Button/Button';

export const TabsNavigationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0 30px;
  gap: 10px;
`;
export const TabsContainer = styled.div``;
export const TabsContentContainer = styled.div`
  &.prices-tabs {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10%;
    > div {
      max-width: 40%;
      @media only screen and (max-width: 576px) {
        max-width: 100%;
        justify-content: flex-start;
      }
    }
  }
`;
const TabButton = styled(Button)`
  color: ${({ theme }) => theme.doreColor};
  border-color: ${({ theme }) => theme.doreColor};
  border: none;
  max-width: unset;
  min-width: unset;
  width: fit-content;
  @media only screen and (max-width: 576px) {
    padding: 6px 12px;
  }
  &:hover,
  &.hover {
    border: solid 1px;
    border-color: ${({ theme }) => theme.doreColor};
    color: ${({ theme }) => theme.doreColor};
    background-color: transparent;
  }
`;

interface NavigationProps {
  tabsTitles: string[];
  onNavClick: Function;
  activeTabTitle: string;
}

export const Navigation = (props: NavigationProps) => {
  return (
    <TabsNavigationContainer>
      {props.tabsTitles.map((item: string, index: number) => (
        <TabButton
          key={index}
          onClick={() => props.onNavClick(item)}
          className={props.activeTabTitle === item ? 'hover' : ''}
        >
          {item}
        </TabButton>
      ))}
    </TabsNavigationContainer>
  );
};
interface TabsProps {
  titles: string[];
  contents: Map<string, ReactNode[]>;
  className: string;
}
export const Tabs = (props: TabsProps) => {
  const [activeTabTitle, setActiveTabTitle] = useState<string>(
    props.titles[0] ?? ''
  );

  return (
    <TabsContainer>
      {props.titles.length > 0 && (
        <Navigation
          tabsTitles={props.titles}
          onNavClick={setActiveTabTitle}
          activeTabTitle={activeTabTitle}
        />
      )}
      {(props.contents.get(activeTabTitle)?.length ?? 0) > 0 && (
        <TabsContentContainer className={props.className}>
          {props.contents.get(activeTabTitle)}
        </TabsContentContainer>
      )}
    </TabsContainer>
  );
};
