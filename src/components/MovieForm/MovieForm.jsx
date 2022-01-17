import React, {useState} from 'react';
import classes from "./MovieForm.module.css";
import FilterOption from "../filter/FilterOption/FilterOption";
import {genreList, yearList} from "../../ExternalData";

const MovieForm = ({movie, onFormSubmit, setMovie, btnText}) => {
    const [filters, setFilters] = useState({genreList: genreList, yearList: yearList});

    const onFormChange = (e) => {
        if (!isNaN(e.target.value) && e.target.name === "rating")
            setMovie({...movie, [e.target.name]: parseFloat(parseFloat(e.target.value).toFixed(1))})
        else
            setMovie({...movie, [e.target.name]: e.target.value})


    }
    return (<form action="" className={classes.formExample} onSubmit={onFormSubmit}>

            <div className={classes.inputContainer}>
                <label htmlFor="name" className={classes.inputLabel}><b>Movie Title:</b> </label>
                <input type="text" placeholder="Enter movie title" name="name" id="name" value={movie.name} onChange={onFormChange} required/>
            </div>

            <div className={classes.inputContainer}>
                <label htmlFor="rating" className={classes.inputLabel}><b>Rating:</b> </label>
                <input type="number" placeholder="Enter movie rating" name="rating" id="email" max={10} min={1} step={0.1}
                       value={isNaN(movie.rating) ? "" : movie.rating} onChange={onFormChange} required/>
            </div>

            <div className={classes.inputMultiContainer}>
                <FilterOption title='Genre' filterName='genre' filterList={filters.genreList} filterState={movie.genre}
                              setFilterState={onFormChange}/>

                <FilterOption title='Year' filterName='release_year' filterList={filters.yearList}
                              filterState={movie.release_year} setFilterState={onFormChange}/>
            </div>

            <div className={classes.btnContainer}>
                <button className={classes.btn}>{btnText}</button>
            </div>

        </form>
    );
}

export default MovieForm;