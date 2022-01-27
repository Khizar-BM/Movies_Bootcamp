import React from 'react';
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

const TableComponent = ({movies}) => {
    return (<TableContainer component={Paper}>
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
                {movies.map((movie) => (
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
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={11}
                        rowsPerPage={5}
                        page={0}
                        onPageChange={() => {
                        }}
                        onRowsPerPageChange={() => {
                        }}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    </TableContainer>)
};

export default TableComponent;