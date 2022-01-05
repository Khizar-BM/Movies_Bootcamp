import React, {useEffect, useState} from 'react';
import classes from "../../dashboard/DashboardComponent.module.css";
import FilterComponent from "../FilterComponent/FilterComponent";
import {ratingList, genreList, yearList} from "../../../ExternalData"


const FilteringLogicComponent = ({movieList, updateMovies}) => {
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
    }, [genre, rating, year]);


    return (
        <div className={classes.filtercontainer}>
            <FilterComponent filterName='Genre' filterList={filters.genreList} filterState={genre} onOptionChange={setGenre}/>
            <FilterComponent filterName='Rating' filterList={filters.ratingList} filterState={rating} onOptionChange={setRating}/>
            <FilterComponent filterName='Year' filterList={filters.yearList} filterState={year} onOptionChange={setYear}/>
        </div>);
}

export default FilteringLogicComponent;