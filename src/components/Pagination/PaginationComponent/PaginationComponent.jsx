import React, {useEffect,useState} from 'react';
import classes from "./PaginationComponent.module.css";
import PaginationButton from "../PaginationButton/PaginationButton";

const PaginationComponent = ({setMoviesOnPage, filteredMovies}) => {

    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        if (filteredMovies.length > 5) {
            setMoviesOnPage(filteredMovies.slice(0, 5));
            setPageCount(Math.ceil(filteredMovies.length / 5));
        } else {
            setMoviesOnPage(filteredMovies);
            setPageCount(0);
        }

    }, [filteredMovies]);


    const changePage = (pageNumber) => {
        setMoviesOnPage(filteredMovies.slice((pageNumber - 1) * 5, pageNumber * 5));
    }

    return(pageCount !== 0 ? <div className={classes.btncontainer}>
        {[...Array(pageCount)].map((x, i) =>
            <PaginationButton key={i} pageNumber={i + 1} onClick={changePage}/>
        )}
    </div> : <></> )
}

export default PaginationComponent;