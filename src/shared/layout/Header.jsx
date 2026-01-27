import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Login from '../../features/auth/components/Login'
import { useAuthStore } from '../../store/authStore'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import IconButton from '@mui/material/IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import logoSinFondo from "../../assets/arlequin.png"

import "./styles.css"



const Header = ({ showDrawer }) => {
    const location = useLocation()
    const [modalOpen, setModalOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [scrollY, setScrollY] = useState(0)
    const open = Boolean(anchorEl);

    const { user, logout } = useAuthStore()

    const viewPath = location.pathname == "/productos"

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <header
                className={`
                    w-full flex justify-between items-center
                    md:px-5 px-2 md:py-2 py-4
                    fixed top-0 z-100 md:h-[130px]
                    transition-colors duration-300 ease-in-out
                    ${scrollY > 200 || viewPath ? "bg-white" : "bg-transparent"}
                `}
            >
                <Link to={"/"} className='md:w-[10%] w-[30%] '>
                    <img src={logoSinFondo} alt="logo" />
                </Link>
                <Link to={"/"} className="hidden md:flex">
                    <h1 class="title">
                        <div >
                            <span class="letter red bend-left">M</span>
                            <span class="letter yellow">A</span>
                            <span class="letter yellow bend-right">Y</span>
                            <span class="letter yellow">O</span>
                            <span class="letter blue">R</span>
                            <span class="letter red bend-left">I</span>
                            <span class="letter red">S</span>
                            <span class="letter red">T</span>
                            <span class="letter yellow">A</span>
                        </div>
                        <div className='villa-maria'>
                            <div>
                                <span class="letter yellow bend-left">V</span>
                                <span class="letter yellow">I</span>
                                <span class="letter yellow bend-right">L</span>
                                <span class="letter yellow">L</span>
                                <span class="letter yellow">A</span>
                            </div>
                            <div>
                                <span class="letter blue bend-left">M</span>
                                <span class="letter blue">A</span>
                                <span class="letter blue">R</span>
                                <span class="letter yellow">I</span>
                                <span class="letter blue">A</span>

                            </div>
                        </div>
                    </h1>

                </Link>
                <div className='flex'>
                    <IconButton onClick={showDrawer}>
                        <LocalMallIcon
                            fontSize="large"
                            sx={{
                                color: `${scrollY > 200 || viewPath ? "#231f1e" : "white"}`,
                                transition: "color 300ms ease"
                            }} />
                    </IconButton>
                    <IconButton
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircleIcon
                            fontSize="large"
                            sx={{
                                color: `${scrollY > 200 || viewPath ? "#231f1e" : "white"}`,
                                transition: "color 300ms ease"

                            }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >

                        {user?.codusuario != 0 ?
                            <>
                                <MenuItem onClick={logout}>
                                    Cerrar Sesion
                                </MenuItem>

                            </>
                            :
                            <MenuItem onClick={() => setModalOpen(true)}>
                                Iniciar Sesion
                            </MenuItem>
                        }
                    </Menu>
                </div>

            </header >

            {/* MODAL LOGIN */}
            <Login open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}

export default Header
