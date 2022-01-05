import React, {useEffect, useState} from 'react';
import classes from "./FilteringComponent.module.css";
import FilterOption from "../FilterOption/FilterOption";
import {ratingList, genreList, yearList} from "../../../ExternalData"


const FilteringComponent = ({movieList, updateMovies}) => {
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');
    const [filters, setFilters] = useState({genreList: genreList, ratingList: ratingList, yearList: yearList});

    useEffect(() => {
        let tempMovies = [...movieList];
        if (genre) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.genre === genre);
        }
        if (rating) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.rating >= rating);
        }
        if (year) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.release_year === year);
        }
        updateMovies([...tempMovies])
    }, [genre, rating, year, movieList, updateMovies]);


    return (
        <div className={classes.filtercontainer}>
            <FilterOption filterName='Genre' filterList={filters.genreList} filterState={genre} onOptionChange={setGenre}/>
            <FilterOption filterName='Rating' filterList={filters.ratingList} filterState={rating} onOptionChange={setRating}/>
            <FilterOption filterName='Year' filterList={filters.yearList} filterState={year} onOptionChange={setYear}/>
        </div>);
}

export default FilteringComponent;