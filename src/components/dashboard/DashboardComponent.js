import React, {useEffect, useState} from 'react';
import moviesConstant from "../../MovieList";
import TableComponent from "../table/TableComponent";
import PaginationButtonComponent from "../../utils/pagination/PaginationButtonComponent";
import classes from "./DashboardComponent.module.css";
import FilterComponent from "../filter/FilterComponent";

function DashboardComponent() {
    const [pageCount, setPageCount] = useState(0);
    const [moviesOnPage, setMoviesOnPage] = useState([]);
    const [movies, setMovies] = useState([...moviesConstant]);
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
    const onGenreChange = (genre) => {
        setMovies(movies.filter(movie => movie.genre === genre));
    }
    const onRatingChange = (rating) => {
        setMovies(movies.filter(movie => movie.rating >= rating));
    }
    const onYearChange = (year) => {
        setMovies(movies.filter(movie => movie.release_year === year));
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Movies</h1>
            <div className={classes.filtercontainer}>
                <FilterComponent filterName='Genre' filterList={[...new Set(moviesConstant.map(movie => movie.genre))].sort()} onOptionChange={onGenreChange}/>
                <FilterComponent filterName='Rating' filterList={[...new Set(moviesConstant.map(movie => movie.rating))].sort()} onOptionChange={onRatingChange}/>
                <FilterComponent filterName='Year' filterList={[...new Set(moviesConstant.map(movie => movie.release_year))].sort()} onOptionChange={onYearChange}/>
            </div>
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