import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, ButtonGroup, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components'


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});


function Appbar() {

    //states
    const [anchorEl, setAnchorEl] = useState(null);

    //event handlers
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Div>
            <ThemeProvider theme={darkTheme}>
                <AppBar elevation={10} color="primary" position="static">
                    <Toolbar>

                        <Typography
                            variant="h6"
                            style={{ flexGrow: 1, textDecoration: 'none', color: "#FFFFFF" }}
                            component={Link}
                            to='/'>
                            Travel Log
                        </Typography>

                        <IconButton
                        className="menu-icon"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>

                        <ButtonGroup
                            variant="text"
                            aria-label="text button group">
                            <Button color="inherit" className="menu-item" component={Link} to="/">See Experiences</Button>
                            <Button color="inherit" className="menu-item" component={Link} to="/own-exp">Add Experience</Button>
                        </ButtonGroup>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem component={Link} to='/' onClick={handleClose}>SEE EXPERIENCES</MenuItem>
                            <MenuItem component={Link} to='/own-exp' onClick={handleClose}>ADD EXPERIENCES</MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Div>
    )
}

const Div = styled.div`
.menu-icon{
    display:none;
}
@media (max-width:998px){
    .menu-item{
        display:none;
    }
    .menu-icon{
        display:block;
    }
}

`

export default Appbar