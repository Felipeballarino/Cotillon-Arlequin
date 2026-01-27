import React from 'react'
import logoSinFondo from "../../assets/arlequin.png"
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <footer className='border-t py-4 bg-[#ea3a3a] text-white flex justify-center'>
            <Link to={"/"} className='md:w-[10%] w-[30%] '>
                <img src={logoSinFondo} alt="logo" />
            </Link>
        </footer>
    )
}

export default Footer
