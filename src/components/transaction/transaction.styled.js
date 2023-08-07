import styled from 'styled-components';

export const Transaction = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: white;
  padding: 20px 0 20px 0;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 2px solid white;
`;
export const TransactionHead = styled.thead`
  background-color: #03b6fc;
  height: 50px;
`;
export const TransactionsTb = styled.tbody`
  text-align: center;
  height: 30px;
  background-color: #f0f3f5;
  :nth-of-type(2n) {
    background-color: #e5f054;
  }
  :hover {
    color: blue;
  }
`;
export const TransactionTd = styled.td`
  border: 2px solid white;
`;
