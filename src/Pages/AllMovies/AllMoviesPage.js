import React, {useState} from 'react';
import TableComponent from "../../components/table/TableComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent/PaginationComponent";
import FilteringComponent from "../../components/filter/FilteringComponent/FilteringComponent";
import {movieList} from "../../ExternalData"
import classes from "./AllMoviesPage.module.css";
import {Link} from "react-router-dom";

const AllMoviesPage = ({allMovies}) => {

    const [filteredMovies, setFilteredMovies] = useState([...movieList]);
    const [moviesOnPage, setMoviesOnPage] = useState([]);

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