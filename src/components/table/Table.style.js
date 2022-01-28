import styled from "styled-components";

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;

  thead th {
    width: 30%;
  }

  tbody tr:nth-child(odd) {
    background-color: #d7d4d4;
  }

  th, td {
    padding: 20px;
    text-align: center;
  }
`