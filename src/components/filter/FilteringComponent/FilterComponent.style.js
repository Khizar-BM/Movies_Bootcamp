import styled from "styled-components";
import {devices} from "../../../utils/MediaQueries";

export const FilterContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;

  @media only screen and ${devices.mobileL}{
    flex-direction: column;
    width: 100%;

  }

`