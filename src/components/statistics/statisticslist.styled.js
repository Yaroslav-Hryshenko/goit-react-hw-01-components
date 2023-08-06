import styled from 'styled-components';

export const Statistic = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  background-color: #f0f3f5;
  padding: 10px 0 10px 0;
`;
export const StatisticsLists = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;

  border-radius: 0 0 10px 10px;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  height: 100px;

  :nth-of-type(1) {
    background-color: #03b6fc;
    height: 50px;
    
  }

  :nth-of-type(2) {
    background-color: #e5f054;
    height: 50px;
  }

  :nth-of-type(3) {
    background-color: #008000ba;
  }

  :nth-of-type(4) {
    background-color: #ffa500ad;
  }

  :nth-of-type(5) {
    background-color: #800080bd;
  }
`;

export const Statistics = styled.span`
  font-weight: 700;

`;
