import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {

    return (
        <AppBar position="static">
            <CssBaseline/>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Button variant="text" component={Link} to="/" sx={{color: "white"}}>Movie Store</Button>
                </Typography>
                <Typography variant="h6" component="div">
                    <Button variant="text" component={Link} to="/add" sx={{color: "white", justifySelf: "center"}}>Add
                        Movie</Button>
                </Typography>
                <Typography variant="h6" component="div">
                    <Button variant="text" component={Link} to="/" sx={{color: "white"}}>About</Button>
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;