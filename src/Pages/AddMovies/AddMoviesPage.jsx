import React, { useState} from 'react';
import classes from "../EditMovies/EditMoviesPage.module.css";
import MovieForm from "../../components/MovieForm/MovieForm";
import {useNavigate} from "react-router-dom";
import MoviesContextHOC from "../../Utils/MoviesContextHOC";

const AddMoviesPage = MoviesContextHOC(({dispatch}) => {
    const navigate = useNavigate()

    const [movie, setMovie] = useState({
        id: "",
        name: "",
        genre: "",
        rating: "",
        release_year: ""
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD", movie: movie})
        navigate("/", {replace: true});

    }


    return (<div className={classes.container}>
        <h1 className={classes.title}>Add Movie</h1>
        <MovieForm movie={movie} setMovie={setMovie} onFormSubmit={onFormSubmit} btnText={"Add"}/>
    </div>)
})

export default AddMoviesPage;