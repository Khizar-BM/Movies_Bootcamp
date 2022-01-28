import React, {useEffect, useState} from 'react';
import Rating from '@mui/material/Rating';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";
import {TableFooter, TablePagination} from "@mui/material";
import classes from "./Table.module.css";

const TableComponent = ({movies}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - movies.length) : 0;

    useEffect(() => {
       setPage(0)
    }, [movies]);


    return (<TableContainer component={Paper} className={classes.table}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Genre</TableCell>
                    <TableCell align="center">Rating</TableCell>
                    <TableCell align="center">Release Year</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {(rowsPerPage > 0
                        ? movies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : movies
                ).map((movie) => (
                    <TableRow
                        key={movie.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            {movie.name}
                        </TableCell>
                        <TableCell align="center">{movie.genre}</TableCell>
                        <TableCell align="center">{<Rating name="rating" value={(movie.rating / 10 * 5)} precision={0.1}
                                                           readOnly/>}</TableCell>
                        <TableCell align="center">{movie.release_year}</TableCell>
                        <TableCell align="center"><IconButton component={Link}
                                                              to={`edit/${movie.id}`}><EditIcon/></IconButton></TableCell>
                    </TableRow>
                ))}
                {emptyRows > 0 && (
                    <TableRow style={{height: 53 * emptyRows}}>
                        <TableCell colSpan={6}/>
                    </TableRow>
                )}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={movies.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    </TableContainer>)
};

export default TableComponent;