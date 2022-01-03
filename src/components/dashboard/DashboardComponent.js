import React, {useEffect, useState} from 'react';
import movies from "../../MovieList";
import TableComponent from "../table/TableComponent";
import PaginationButtonComponent from "../../utils/pagination/PaginationButtonComponent";
import classes from "./DashboardComponent.module.css";
import FilterComponent from "../filter/FilterComponent";

function DashboardComponent() {
    const [pageCount, setPageCount] = useState(0);
    const [moviesOnPage, setMoviesOnPage] = useState([]);
    useEffect(() => {
        if (movies.length > 5) {
            setMoviesOnPage(movies.slice(0, 5));
            setPageCount(Math.ceil(movies.length / 5));
        } else {
            setMoviesOnPage(movies);
            setPageCount(0);
        }

    }, []);

    const changePage = (pageNumber) => {
        setMoviesOnPage(movies.slice((pageNumber - 1) * 5, pageNumber * 5));

    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Movies</h1>
            <FilterComponent filterName='Genre' filterList={[...new Set(movies.map(movie => movie.genre))]}/>
            <FilterComponent filterName='Rating' filterList={[...new Set(movies.map(movie => movie.rating))]}/>
            <FilterComponent filterName='Year' filterList={[...new Set(movies.map(movie => movie.release_year))]}/>
            <TableComponent movies={moviesOnPage}/>
            {pageCount !== 0 ? <div className={classes.btncontainer}>
                {[...Array(pageCount)].map((x, i) =>
                    <PaginationButtonComponent key={i} pageNumber={i + 1} onClick={changePage}/>
                )}
            </div> : ''}
        </div>
    );
}

export default DashboardComponent;