import styled from "styled-components";

export const StyledForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  margin: 0.75rem;
  padding: 0.5rem;
  width: 80%;
`
export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  width: 80%;
`
export const MultiInputContainer = styled.div`
  margin: 0.75rem;
  padding: 0.5rem;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
`
export const FormBtn = styled.button`
  background-color: #8a8989;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: black;
  border-radius: 0.5rem;
  margin: auto;
  border: None;
  outline: None;
  cursor: pointer;
  text-decoration: none;

  &:active {
    background-color: #418081;
  }
`
export const StyledInput = styled.input`
  width: 100%;
  height: 1.8rem;
  border: 0.025rem solid #575555;
  border-radius: 0.25rem;
  padding-left: 0.75rem;
`
export const StyledLabel = styled.label`
  padding: 0 0 0.5rem 0;
`