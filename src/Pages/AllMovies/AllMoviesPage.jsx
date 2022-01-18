import React, {useContext, useEffect, useState} from 'react';
import TableComponent from "../../components/table/TableComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent/PaginationComponent";
import FilteringComponent from "../../components/filter/FilteringComponent/FilteringComponent";
import classes from "./AllMoviesPage.module.css";
import {Link} from "react-router-dom";
import {AllMoviesContext} from "../../Context/AllMoviesStore";
import {movieList} from "../../ExternalData";

const AllMoviesPage = () => {
    const {allMovies, dispatch} = useContext(AllMoviesContext)

    const [filteredMovies, setFilteredMovies] = useState([...allMovies]);
    const [moviesOnPage, setMoviesOnPage] = useState([]);

    useEffect(() => {
        if (allMovies.length === 0) {
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
};

export default AllMoviesPage;