import React, {useState} from 'react';
import TableComponent from "../table/TableComponent";
import PaginationComponent from "../Pagination/PaginationComponent/PaginationComponent";
import classes from "./DashboardComponent.module.css";
import FilteringComponent from "../filter/FilteringComponent/FilteringComponent";
import {movieList} from "../../ExternalData"

const DashboardComponent = () => {

    const [allMovies, setAllMovies] = useState([...movieList]); // Global state that will only be changed when movieList is requested from backend
    const [filteredMovies, setFilteredMovies] = useState([...movieList]);
    const [moviesOnPage, setMoviesOnPage] = useState([]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Movies</h1>
            <FilteringComponent movieList={allMovies} updateMovies={setFilteredMovies}/>
            {moviesOnPage.length > 0 ? <TableComponent movies={moviesOnPage}/> : <h4>Sorry, no movies match your search!</h4>}
           <PaginationComponent filteredMovies={filteredMovies} setMoviesOnPage={setMoviesOnPage} />
        </div>
    );
};

export default DashboardComponent;