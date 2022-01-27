import React, {useEffect, useState} from 'react';
import TableComponent from "../../components/table/TableComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent/PaginationComponent";
import FilteringComponent from "../../components/filter/FilteringComponent/FilteringComponent";
import {movieList} from "../../ExternalData";
import {MoviesContextHoc} from "../../Context/AllMoviesStore";
import {Container, Title} from "../Movies.style";
import {Header} from "./AllMovies.style";
import {Link} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from "@mui/material/IconButton";

const AllMoviesPage = MoviesContextHoc(({allMovies, dispatch}) => {

    const [filteredMovies, setFilteredMovies] = useState([...allMovies]);
    const [moviesOnPage, setMoviesOnPage] = useState([]);

    useEffect(() => {
        if (!allMovies.length) {
            dispatch({type: "LOAD-MOVIES", movies: movieList})
        }

    }, []);


    return (
        <Container width='60%'>
            <Title>Movies</Title>
            <Header>
                <FilteringComponent movieList={allMovies} updateMovies={setFilteredMovies}/>
                <IconButton component={Link}
                            to="/add" sx={{padding: "16px", ml:"10px"}}><AddCircleIcon color="primary"
                                                                            fontSize="large"/></IconButton>
            </Header>

            {moviesOnPage.length > 0 ? <TableComponent movies={moviesOnPage}/> :
                <h4>Sorry, no movies match your search!</h4>}

            <PaginationComponent filteredMovies={filteredMovies} setMoviesOnPage={setMoviesOnPage}/>
        </Container>
    );
})

export default AllMoviesPage;