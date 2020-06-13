import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const StyledTabs = styled.div`
  padding-left: 0,
  list-style: "none",
  margin: 0
`;
const Tabs = ({ items, selected }) => {
  const [selectedTab, selectTab] = useState(selected);
  useEffect(() => selectTab(selected), [selected]);

  const tabs = items.map((item) => (
    <Tab
      key={item.language}
      label={item.language}
      selectedTab={selectedTab}
      to={item.to}
    />
  ));

  return (
    <StyledTabs>
      <ol>{tabs}</ol>
    </StyledTabs>
  );
};

export default Tabs;
