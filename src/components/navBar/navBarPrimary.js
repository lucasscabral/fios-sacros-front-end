import { useState, useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../../assets/images/logo-fios-sacros.png"
import useContextAPI from '../../contexts/useContext';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import axios from "axios";
import { Link } from 'react-router-dom';


export default function NavBarPrimary() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { token, setToken, dataUser, categories, setCategories } = useContext(useContextAPI)
    const [anchorEl, setAnchorEl] = useState(null);


    const pages = ['Category'];
    const settings = ['Profile', 'Logout'];
    const authentication = ['Entrar', 'Inscreva-se'];

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logOut = (setting) => {
        if (setting === "Logout") {
            setToken("")
        }
    }

    useEffect(() => {
        const getAllCategories = axios.get(`https://fios-sacros.herokuapp.com/categories`)
        getAllCategories.then((res) => {
            const categorias = res.data
            setCategories(categorias)
        }).catch((_) => {
            alert("Falha ao tentar buscar todas as categorias")
        })
    }, [])

    return (
        <AppBar position="fixed" style={{ backgroundColor: "lightpink" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={"/"}>
                        <Avatar alt='logo' src={Logo} sx={{
                            width: 60,
                            height: 60,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }} />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            onClose={handleClose}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {categories?.map((category) => (
                                <MenuItem key={category?.name} onClick={handleClose}>
                                    <a style={{ textDecoration: "none", color: "black" }} href={`#${category?.name}`}>{category?.name}</a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Avatar alt='logo' src={Logo} sx={{ width: 60, height: 60 }} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            id="button-category"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Categorias
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-category"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'button-category',
                            }}
                        >
                            {categories?.map((category) => (
                                <MenuItem key={category?.name} onClick={handleClose}>
                                    <a style={{ textDecoration: "none", color: "black" }} href={`#${category?.name}`}>{category?.name}</a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0, marginRight: 3 }}>
                        <IconButton >
                            <Link to={"/shopping-cart"}>
                                <LocalGroceryStoreOutlinedIcon sx={{ m: 1, width: 35, height: 35, color: "white" }} />
                            </Link>
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {token === "" ? <Avatar alt="Profile" sx={{ m: 1, bgcolor: 'lightgray', width: 50, height: 50 }} /> : <Avatar alt="logado" src={dataUser?.profile_url} sx={{ width: 50, height: 50 }} />}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {token === "" ? authentication.map((auth, id) => (
                                <MenuItem key={id} >
                                    {auth === 'Entrar' ?
                                        <Link to={"/signin"} key={auth} style={{ textDecoration: "none", color: "black", textAlign: "center" }}>
                                            {auth}
                                        </Link>
                                        :
                                        <Link to={"/signup"} key={auth} style={{ textDecoration: "none", color: "black", textAlign: "center" }}>
                                            {auth}
                                        </Link>
                                    }
                                </MenuItem>
                            )) : settings.map((setting, id) => (
                                <MenuItem key={id} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={() => logOut(setting)} >{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
