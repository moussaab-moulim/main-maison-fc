import React, { ReactNode, useMemo } from 'react';

import { Heading2 } from '../../Components/Heading/Heading2';
import Section from '../../Components/Section/Section';
import SectionInner from '../../Components/Section/SectionInner';
import { Tabs } from '../../Components/Tabs/Tabs';
import { Treatment } from '../../Components/Treatment/Treatment';
import { TreatmentType, PricesDataType } from '../../utils/types';

interface PricesProps extends PricesDataType {}

const Prices = (pricesProps: PricesProps) => {
  const titles: string[] = useMemo(
    () =>
      Array.from(
        new Set(pricesProps.pricesList.map((offer) => offer.category!))
      ),
    [pricesProps.pricesList]
  );
  const tabsContents: Map<string, ReactNode[]> = useMemo(() => {
    const OffersByCategory = new Map<string, ReactNode[]>();
    pricesProps.pricesList.forEach((item: TreatmentType) => {
      const key = item.category!;
      const collection = OffersByCategory.get(key);
      if (!collection) {
        OffersByCategory.set(key, [<Treatment key={0} {...item} />]);
      } else {
        collection.push(<Treatment key={collection.length} {...item} />);
      }
    });
    return OffersByCategory;
  }, [pricesProps.pricesList]);
  // > button function
  return (
    <Section
      id={pricesProps.id}
      style={{ backgroundColor: 'transparent', marginTop: '60px' }}
    >
      <SectionInner>
        <Heading2>{pricesProps.pricesTitle}</Heading2>
        <Tabs titles={titles} contents={tabsContents} className="prices-tabs" />
      </SectionInner>
    </Section>
  );
};

export default Prices;
