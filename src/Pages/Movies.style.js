import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 35px ;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({width})=> width};
  margin: auto;
  padding: 1.5rem;
`