import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 16px;

  thead {
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
  }

  thead > tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  td,
  th {
    padding: 15px 10px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-radius: 2px;
    border: none;
  }

  tbody > tr {
    &:hover {
      background-color: rgba(242, 242, 242, 0.5);
    }
    :nth-child(odd) {
    }
  }

  tbody > tr > td {
    border: solid 1px #ddeeee;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
  }
`;

export default StyledTable;
