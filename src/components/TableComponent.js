import React from 'react';
import classes from "./TableComponent.module.css";
const TableComponent = ({movies}) => {
    return (<table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Release Year</th>
        </tr>
        </thead>
        <tbody>
        {movies.map((movie) => {
            return <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
                <td>{movie.release_year}</td>
            </tr>
        })}
        </tbody>

    </table>)
};

export default TableComponent;