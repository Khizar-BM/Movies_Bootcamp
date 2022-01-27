import React, {useEffect, useState} from 'react';
import FilterOption from "../FilterOption/FilterOption";
import {ratingList, genreList, yearList} from "../../../ExternalData"
import {FilterContainer} from "./FilterComponent.style";


const FilteringComponent = ({movieList, updateMovies}) => {
    const [filters, setFilters] = useState({
        rating: "",
        genre: "",
        year: ""
    });
    const [filterLists, setFilterLists] = useState({genreList: genreList, ratingList: ratingList, yearList: yearList});

    useEffect(() => {
        let tempMovies = [...movieList];
        if (filters.genre) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.genre === filters.genre);
        }
        if (filters.rating) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.rating >= filters.rating);
        }
        if (filters.year) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.release_year === filters.year);
        }
        updateMovies([...tempMovies])
    }, [filters, movieList]);

    const onFilterChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }
    return (
        <FilterContainer>
            <FilterOption title='Genre' filterName='genre' filterList={filterLists.genreList}
                          filterState={filters.genre} setFilterState={onFilterChange}/>
            <FilterOption title='Rating' filterName='rating' filterList={filterLists.ratingList}
                          filterState={filters.rating} setFilterState={onFilterChange}/>
            <FilterOption title='Year' filterName='year' filterList={filterLists.yearList} filterState={filters.year}
                          setFilterState={onFilterChange}/>
        </FilterContainer>);
}

export default FilteringComponent;