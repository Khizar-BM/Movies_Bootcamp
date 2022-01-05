import React, {useEffect, useState} from 'react';
import TableComponent from "../table/TableComponent";
import PaginationButtonComponent from "../../utils/pagination/PaginationButtonComponent";
import classes from "./DashboardComponent.module.css";
import FilteringLogicComponent from "../filter/FilteringLogicComponent/FilteringLogicComponent";
import {movieList} from "../../ExternalData"

function DashboardComponent() {

    const [pageCount, setPageCount] = useState(0);
    const [moviesOnPage, setMoviesOnPage] = useState([]);
    const [movies, setMovies] = useState([...movieList]);

    useEffect(() => {
        if (movies.length > 5) {
            setMoviesOnPage(movies.slice(0, 5));
            setPageCount(Math.ceil(movies.length / 5));
        } else {
            setMoviesOnPage(movies);
            setPageCount(0);
        }

    }, [movies]);


    const changePage = (pageNumber) => {
        setMoviesOnPage(movies.slice((pageNumber - 1) * 5, pageNumber * 5));
    }



    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Movies</h1>
            <FilteringLogicComponent movieList={movieList} updateMovies={setMovies}/>
            {movies.length > 0 ? <TableComponent movies={moviesOnPage}/> : <h4>Sorry, no movies match your search!</h4>}
            {pageCount !== 0 ? <div className={classes.btncontainer}>
                {[...Array(pageCount)].map((x, i) =>
                    <PaginationButtonComponent key={i} pageNumber={i + 1} onClick={changePage}/>
                )}
            </div> : ''}
        </div>
    );
}

export default DashboardComponent;