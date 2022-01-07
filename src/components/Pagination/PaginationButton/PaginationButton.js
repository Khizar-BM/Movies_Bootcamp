import React from 'react';
import classes from "./PaginationButton.module.css";
const PaginationButton = ({pageNumber, onClick}) => {
    return(
        <button className={classes.btn} onClick={()=> onClick(pageNumber)}>{pageNumber}</button>)
}

export default PaginationButton;