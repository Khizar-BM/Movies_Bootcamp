import React from 'react';
import {Container, StyledLabel, StyledSelect} from "./FilterOptions.style";

const FilterOption = ({title, filterState, filterName, filterList, setFilterState}) => {
    return (<Container>
        <StyledLabel htmlFor={filterName}><b>{title}:</b></StyledLabel>

        <StyledSelect name={filterName} id={filterName} value={filterState} onChange={setFilterState}>
            <option value={''}>--Please choose an option--</option>
            {filterList.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </StyledSelect>
    </Container>)
}

export default FilterOption;