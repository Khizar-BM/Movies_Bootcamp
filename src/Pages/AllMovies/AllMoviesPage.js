import React, {useState} from 'react';
import TableComponent from "../../components/table/TableComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent/PaginationComponent";
import classes from "./AllMoviesPage.module.css";
import FilteringComponent from "../../components/filter/FilteringComponent/FilteringComponent";
import {movieList} from "../../ExternalData"

const AllMoviesPage = ({allMovies}) => {

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

export default AllMoviesPage;