import React, {useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import MovieForm from "../../components/MovieForm/MovieForm";
import {MoviesContextHoc} from "../../Context/AllMoviesStore";
import {Container, Title} from "../Movies.style";


const EditMoviesPage = MoviesContextHoc(({allMovies, dispatch}) => {
    const params = useParams();
    const navigate = useNavigate()

    const [movie, setMovie] = useState(allMovies.filter(movie => movie.id === parseInt(params.movieId))[0]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "EDIT", movie: movie})
        navigate("/", {replace: true});

    }

    return (<Container width="80%">
        <Title>Edit Movie</Title>
        <MovieForm movie={movie} setMovie={setMovie} onFormSubmit={onFormSubmit} btnText={"Save"}/>
    </Container>)
})


export default EditMoviesPage;