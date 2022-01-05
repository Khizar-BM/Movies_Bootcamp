import React, {useEffect, useState} from 'react';
import {externalData,ratingList,genreList,yearList} from "../../ExternalData";
import TableComponent from "../table/TableComponent";
import PaginationButtonComponent from "../../utils/pagination/PaginationButtonComponent";
import classes from "./DashboardComponent.module.css";
import FilterComponent from "../filter/FilterComponent";

function DashboardComponent() {
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [moviesOnPage, setMoviesOnPage] = useState([]);
    const [movies, setMovies] = useState([...externalData]);
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

    useEffect(() => {
        let tempMovies = [...externalData];
        if (genre) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.genre === genre);
        }
        if (rating) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.rating >= rating);
        }
        if (year) {
            tempMovies = tempMovies.filter(tempMovie => tempMovie.release_year === year);
        }
        setMovies([...tempMovies])
    }, [genre, rating, year]);


    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Movies</h1>
            <div className={classes.filtercontainer}>
                <FilterComponent filterName='Genre' filterList={genreList} onOptionChange={setGenre}/>
                <FilterComponent filterName='Rating' filterList={ratingList} onOptionChange={setRating}/>
                <FilterComponent filterName='Year' filterList={yearList} onOptionChange={setYear}/>
            </div>
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