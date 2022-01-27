import React from 'react';
import {Button} from "./PaginationButton.style";

const PaginationButton = ({pageNumber, onClick}) => {
    return (
        <Button onClick={() => onClick(pageNumber)}>{pageNumber}</Button>)
}

export default PaginationButton;