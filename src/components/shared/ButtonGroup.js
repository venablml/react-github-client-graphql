import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: inline-block;
  & > button {
    margin: 16px;
  }

  & :last-child) {
    margin-right: 0px;
  }
`;

export default ButtonGroup;
