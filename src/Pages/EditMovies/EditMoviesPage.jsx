import React, {useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import classes from "./EditMoviesPage.module.css";
import MovieForm from "../../components/MovieForm/MovieForm";
import MoviesContextHOC from "../../Utils/MoviesContextHOC";

const EditMoviesPage = MoviesContextHOC(({allMovies, dispatch}) => {
    const params = useParams();
    const navigate = useNavigate()

    const [movie, setMovie] = useState(allMovies.filter(movie => movie.id === parseInt(params.movieId))[0]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "EDIT", movie: movie})
        navigate("/", {replace: true});

    }

    return (<div className={classes.container}>
        <h1 className={classes.title}>Edit Movie</h1>
        <MovieForm movie={movie} setMovie={setMovie} onFormSubmit={onFormSubmit} btnText={"Save"}/>
    </div>)
})


export default EditMoviesPage;