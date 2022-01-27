import React from 'react';
import {EditBtn, StyledTable} from "./Table.style";

const TableComponent = ({movies}) => {
    return (<StyledTable>
        <thead>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Release Year</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {movies.map((movie) => {
            return <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
                <td>{movie.release_year}</td>
                <td><EditBtn to={`edit/${movie.id}`}>Edit</EditBtn></td>
            </tr>
        })}
        </tbody>

    </StyledTable>)
};

export default TableComponent;