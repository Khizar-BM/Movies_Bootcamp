import React from 'react';
import classes from "./FilterOption.module.css"

const FilterOption = ({title, filterState,filterName, filterList, setFilterState}) => {
    return (<div className={classes.container}>
        <label className={classes.inputLabel} htmlFor={filterName}><b>{title}:</b></label>

        <select name={filterName} id={filterName} value={filterState} onChange={setFilterState}>
            <option value={''}>--Please choose an option--</option>
            {filterList.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </select>
    </div>)
}

export default FilterOption;