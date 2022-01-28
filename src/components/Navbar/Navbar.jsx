import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography, Box, Menu,
} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from "@mui/material/MenuItem";


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky">
            <CssBaseline/>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', sm: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"> <Button variant="text" component={Link} to="/"
                                                                    sx={{color: "black"}}>Movie
                                Store</Button></Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"><Button variant="text" component={Link} to="/add"
                                                                   sx={{color: "black", justifySelf: "center"}}>Add
                                Movie</Button></Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"><Button variant="text" component={Link} to="/"
                                                                   sx={{color: "black"}}>About</Button></Typography>
                        </MenuItem>


                    </Menu>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'flex'}, flexGrow:1}}>
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
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;