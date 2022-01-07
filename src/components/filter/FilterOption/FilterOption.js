import React from 'react';
import classes from "./FilterOption.module.css"

const FilterOption = ({filterState,filterName, filterList, setFilterState}) => {
    return (<div className={classes.container}>
        <label htmlFor={filterName}><b>{filterName}:</b></label>

        <select name={filterName} id={filterName} value={filterState} onChange={(e) => {
            setFilterState(e.target.value)
        }}>
            <option value={''}>--Please choose an option--</option>
            {filterList.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </select>
    </div>)
}

export default FilterOption;