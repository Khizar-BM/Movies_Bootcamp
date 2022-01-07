import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import classes from "./EditMoviesPage.module.css";
import {genreList, yearList} from "../../ExternalData";
import FilterOption from "../../components/filter/FilterOption/FilterOption";

const EditMoviesPage = ({allMovies, setAllMovies}) => {
    const params = useParams();
    const navigate = useNavigate()

    const [filters, setFilters] = useState({genreList: genreList, yearList: yearList});
    const [movie, setMovie] = useState({
        id: "",
        name: "",
        genre: "",
        rating: "",
        release_year: ""
    });

    useEffect(() => {
        setMovie(...allMovies.filter(movie => movie.id === parseInt(params.movieId)))
    }, []);

    const onFormChange = (e) => {
        if (!isNaN(e.target.value) && e.target.name === "rating")
            setMovie({...movie, [e.target.name]: parseFloat(parseFloat(e.target.value).toFixed(1))})
        else
            setMovie({...movie, [e.target.name]: e.target.value})


    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        setAllMovies(allMovies.map(movieItem => (movieItem.id === movie.id ? movie : movieItem)))
        navigate("/", {replace: true});

    }

    return (<div className={classes.container}>
        <h1 className={classes.title}>Edit Movie</h1>
        <form action="" className={classes.formExample} onSubmit={onFormSubmit}>
            {/*Input field for movie title*/}
            <div className={classes.inputContainer}>
                <label htmlFor="name" className={classes.inputLabel}><b>Movie Title:</b> </label>
                <input type="text" name="name" id="name" value={movie.name} onChange={onFormChange} required/>
            </div>
            {/*Input field for movie rating*/}
            <div className={classes.inputContainer}>
                <label htmlFor="rating" className={classes.inputLabel}><b>Rating:</b> </label>
                <input type="number" name="rating" id="email" max={9.9} min={1} step={0.1}
                       value={isNaN(movie.rating) ? "" : movie.rating} onChange={onFormChange} required/>
            </div>
            {/*Reused filter option component*/}
            <div className={classes.inputMultiContainer}>
                    <FilterOption title='Genre' filterName='genre' filterList={filters.genreList} filterState={movie.genre}
                                  setFilterState={onFormChange}/>
                    <FilterOption title='Year' filterName='release_year' filterList={filters.yearList}
                                  filterState={movie.release_year} setFilterState={onFormChange}/>
            </div>

            <div className={classes.btnContainer}>
                <button className={classes.btn}>Save</button>
            </div>
        </form>


    </div>)
}


export default EditMoviesPage;