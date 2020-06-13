import React from 'react';
import styled from 'styled-components';
import User from './User';

const StyledHeader = styled.header`
  background-color: black;
  width: 100%;
  color: white;
  height: 20px;
  padding: 10px 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <User />
    </StyledHeader>
  );
};

export default Header;
