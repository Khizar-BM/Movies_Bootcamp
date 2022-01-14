import React from 'react';
import {Link} from 'react-router-dom'
import classes from './TableComponent.module.css'
const TableComponent = ({movies}) => {
    return (<table>
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
                <td><Link className={classes.editButton} to={`edit/${movie.id}`}>Edit</Link></td>
            </tr>
        })}
        </tbody>

    </table>)
};

export default TableComponent;