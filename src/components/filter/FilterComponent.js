import React from 'react';

const FilterComponent = ({filterName, filterList}) => {
    return (<div>
        <label htmlFor={filterName}>{filterName}:</label>

        <select name={filterName} id={filterName}>
            <option value={null}>--Please choose an option--</option>
            {filterList.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </select>
    </div>)
}

export default FilterComponent;