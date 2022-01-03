import React from 'react';
import classes from "./PaginationButtonComponent.module.css";
const PaginationButtonComponent = ({pageNumber, onClick}) => {
    return(<button className={classes.btn} onClick={()=> onClick(pageNumber)}>{pageNumber}</button>)
}

export default PaginationButtonComponent;