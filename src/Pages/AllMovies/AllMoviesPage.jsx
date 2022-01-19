import React, { useEffect, useState} from 'react';
import TableComponent from "../../components/table/TableComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent/PaginationComponent";
import FilteringComponent from "../../components/filter/FilteringComponent/FilteringComponent";
import classes from "./AllMoviesPage.module.css";
import {Link} from "react-router-dom";
import {movieList} from "../../ExternalData";
import {MoviesContextHoc} from "../../Context/AllMoviesStore";

const AllMoviesPage = MoviesContextHoc(({allMovies, dispatch}) => {

    const [filteredMovies, setFilteredMovies] = useState([...allMovies]);
    const [moviesOnPage, setMoviesOnPage] = useState([]);

    useEffect(() => {
        if (!allMovies.length) {
            dispatch({type: "LOAD-MOVIES", movies: movieList})
        }

    }, []);


    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Movies</h1>

            <div className={classes.header}>
                <FilteringComponent movieList={allMovies} updateMovies={setFilteredMovies}/>
                <Link className={classes.addButton} to="/add">Add New Movie</Link>
            </div>

            {moviesOnPage.length > 0 ? <TableComponent movies={moviesOnPage}/> :
                <h4>Sorry, no movies match your search!</h4>}

            <PaginationComponent filteredMovies={filteredMovies} setMoviesOnPage={setMoviesOnPage}/>
        </div>
    );
})

export default AllMoviesPage;