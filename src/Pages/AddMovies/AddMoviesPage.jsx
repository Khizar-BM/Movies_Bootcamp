import React, {useState} from 'react';
import MovieForm from "../../components/MovieForm/MovieForm";
import {useNavigate} from "react-router-dom";
import {MoviesContextHoc} from "../../Context/AllMoviesStore";
import {Container, Title} from "../Movies.style";

const AddMoviesPage = MoviesContextHoc(({dispatch}) => {
    const navigate = useNavigate()

    const [movie, setMovie] = useState({
        id: "",
        name: "",
        genre: "",
        rating: 0,
        release_year: ""
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD", movie: movie})
        navigate("/", {replace: true});

    }


    return (<Container width="80%">
        <Title>Add Movie</Title>
        <MovieForm movie={movie} setMovie={setMovie} onFormSubmit={onFormSubmit} btnText={"Add"}/>
    </Container>)
})

export default AddMoviesPage;