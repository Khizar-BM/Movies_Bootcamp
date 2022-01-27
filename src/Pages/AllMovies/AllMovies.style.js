import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const AddBtn = styled(Link)`
  width: 7rem;
  background-color: cadetblue;
  padding: 0.35rem 0.5rem;
  font-size: 0.85rem;
  color: white;
  border-radius: 0.5rem;
  margin: 1.95rem auto 0;
  border: None;
  outline: None;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  align-content: flex-end;

  &:active {
    background-color: #418081;
  }
`