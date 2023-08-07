import styled from 'styled-components';

export const Statistic = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  background-color: #ffffffbd;
  padding: 10px 0 10px 0;
`;
export const StatisticsLists = styled.ul`
  display: flex;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  padding: 0;
    :nth-child(1) {
    background-color: #ff0000ab;
  }

  :nth-child(2) {
    background-color: #0000ffa1;
  }

  :nth-child(3) {
    background-color: #008000ba;
  }

  :nth-child(4) {
    background-color: #ffa500ad;
  }
  :nth-child(5) {
    background-color: #800080bd;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  height: 50px;
  padding-top: 5px;


  }
`;

export const Statistics = styled.span`
  font-weight: 700;
`;