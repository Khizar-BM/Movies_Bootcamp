import React from 'react';
import classes from "./FilterComponent.module.css"

const FilterComponent = ({filterState,filterName, filterList, onOptionChange}) => {
    return (<div className={classes.container}>
        <label htmlFor={filterName}><b>{filterName}:</b></label>

        <select name={filterName} id={filterName} value={filterState} onChange={(e) => {
            onOptionChange(e.target.value)
        }}>
            <option value={''}>--Please choose an option--</option>
            {filterList.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </select>
    </div>)
}

export default FilterComponent;