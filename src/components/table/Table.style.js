import styled from "styled-components";
import {Link} from "react-router-dom";

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

export const EditBtn = styled(Link)`
  background-color: cadetblue;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
  color: white;
  border-radius: 0.5rem;
  margin: auto;
  border: None;
  outline: None;
  cursor: pointer;
  text-decoration: none;
  
  &:active{
    background-color: #418081;
  }

`