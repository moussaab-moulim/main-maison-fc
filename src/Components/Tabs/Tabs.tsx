import React, { ReactNode, useState } from 'react';

import styled from 'styled-components';

import Button from '../Button/Button';

export const TabsNavigationContainer = styled.div`
  display: flex;
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
    }
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
        <Button
          key={index}
          onClick={() => props.onNavClick(item)}
          style={{ maxWidth: 160 }}
          noBorder={props.activeTabTitle !== item}
        >
          {item}
        </Button>
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
