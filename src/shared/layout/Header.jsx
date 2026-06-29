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
import { BsCart4 } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";

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
            <header className="w-full fixed top-0 z-100 flex flex-col">

                {/* Announcement bar — always visible */}
                <div className="bg-[#e91e8c] flex justify-center gap-4 text-white text-center py-2 px-4 text-xs md:text-sm font-bold tracking-widest uppercase">
                    <span className="flex items-center gap-1"><BsCart4 /> Compra mínima: <span style={{ color: "yellow" }}>$100.000</span></span>
                    <span className="text-white/40">|</span>
                    <span className="flex items-center gap-1"><MdLocalShipping /> Envíos a todo el país</span>
                </div>

                {/* Nav */}
                <div
                    className={`
                        w-full flex justify-between items-center
                        md:px-8 px-3
                        md:h-[80px] h-[56px]
                        transition-all duration-300 ease-in-out
                        ${scrollY > 200 || viewPath
                            ? "bg-white shadow-sm border-b border-gray-100"
                            : "bg-transparent"
                        }
                    `}
                >
                    <Link to={"/"} className='md:w-[8%] w-[26%]'>
                    <img src={logoSinFondo} alt="logo" />
                </Link>
                    <Link
                        to={"/"}
                        className="hidden md:flex transition-opacity duration-300"
                        style={{ opacity: scrollY > 150 || viewPath ? 1 : 0, pointerEvents: scrollY > 150 || viewPath ? 'auto' : 'none' }}
                    >
                        <h1 className="title">
                            <div>
                                <span className="letter red bend-left">A</span>
                                <span className="letter yellow">R</span>
                                <span className="letter blue bend-right">L</span>
                                <span className="letter yellow">E</span>
                                <span className="letter red">Q</span>
                                <span className="letter yellow bend-left">U</span>
                                <span className="letter blue">Í</span>
                                <span className="letter red bend-right">N</span>
                            </div>
                            <div>
                                <span className="letter yellow bend-left">C</span>
                                <span className="letter blue">O</span>
                                <span className="letter red">T</span>
                                <span className="letter yellow bend-right">I</span>
                                <span className="letter blue">L</span>
                                <span className="letter red bend-left">L</span>
                                <span className="letter yellow">O</span>
                                <span className="letter blue bend-right">N</span>
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

                </div>{/* end nav */}

            </header>

            {/* MODAL LOGIN */}
            <Login open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}

export default Header
