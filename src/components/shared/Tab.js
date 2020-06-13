import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTab = styled(Link)`
  display: inline-block;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 16px 30px;
  cursor: pointer;
  opacity: 0.4;
  font-weight: 800;
  text-decoration: none;
  color: inherit;

  ${(props) =>
    props.selected
      ? css`
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          cursor: default;
          opacity: 1;
          border-bottom: #0088dd solid 3px;
        `
      : ''}
  :hover: {
    opacity: 1;
  }
`;
const Tab = ({ label, selectedTab, to }) => {
  const selected = selectedTab === label;
  return (
    <StyledTab selected={selected} to={to}>
      {label}
    </StyledTab>
  );
};

export default Tab;
