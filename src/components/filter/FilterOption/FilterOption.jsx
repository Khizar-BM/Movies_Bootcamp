import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterOption = ({title, filterState, filterName, filterList, setFilterState}) => {
    return (
        <FormControl variant="standard" sx={{m: 1, minWidth: 210}}>
            <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                name={filterName}
                id={filterName}
                value={filterState}
                onChange={setFilterState}
                label={title}
            >
                <MenuItem value="">
                    None
                </MenuItem>
                {filterList.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default FilterOption;