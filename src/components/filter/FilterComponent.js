import React, {useRef} from 'react';
import classes from "./FilterComponent.module.css"
const FilterComponent = ({filterName, filterList, onOptionChange}) => {
    const option = useRef();
    return (<div className={classes.container}>
        <label htmlFor={filterName}><b>{filterName}:</b></label>

        <select name={filterName} id={filterName} onChange={()=>onOptionChange(option.current.value)} ref={option}>
            <option value={null}>--Please choose an option--</option>
            {filterList.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </select>
    </div>)
}

export default FilterComponent;