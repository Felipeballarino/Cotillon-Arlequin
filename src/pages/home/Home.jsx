import { Link } from 'react-router-dom'
import Layout from '../../shared/layout/Layout'
import Seo from '../../shared/seo/Seo'
import FondoHome from "../../assets/fondoHome.png"
import snack from "../../assets/snaks.jpg"
import golosinas from "../../assets/caramelos.jpg"
import tortas from "../../assets/tortas.jpg"
import infantiles from "../../assets/infantiles.jpg"
import alquiler from "../../assets/alquiler.jpg"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

import "./styles.css"

const Home = () => {
    return (
        <>
            <Seo title="Home" description="Bienvenido a mi sitio web" />
            <Layout>
                <div className="md:h-screen h-[85vh] relative">
                    <img
                        src={FondoHome}
                        alt="fondo home"
                        className="md:h-screen h-full w-full object-cover absolute top-0 left-0 z-0"
                    />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-60">
                        <div className='bg-black text-white w-full flex text-center justify-center font-semibold py-1 '>
                            <p className='whitespace-pre-wrap md:text-[16px] text-[12px] md:tracking-[0.1rem]'>COTILLON  -  DESCARTABLES  -  REPOSTERIA Y MUCHO MAS</p>
                        </div>

                        <div >
                            <Link to={"productos"} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-extrabold text-2xl cursor-pointer">
                                VER CATÁLOGO
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' pt-10 px-6'>
                    <h1 className='md:text-6xl text-4xl text-[#e53935] text-shadow-black text-shadow-2xs'>LAS MAS BUSCADAS</h1>
                    <div className="grid-container">
                        <Link to={"productos"} className="item-1">
                            <img src={snack} alt="snakcs" />
                            <div className='w-full h-full flex items-center justify-center relative z-10 bg-[#00000063] text-white'>
                                <h1 className='text-white md:text-3xl text-xl text-center'>Combos de Snaks</h1>
                            </div>
                        </Link>
                        <Link to={"productos"} className="item-2">
                            <img src={golosinas} alt="glosinas" />
                            <div className='w-full h-full flex items-center justify-center relative z-10 bg-[#00000063] text-white'>
                                <h1 className='text-white md:text-3xl text-xl text-center'>Golosinas importadas</h1>
                            </div>
                        </Link>
                        <Link to={"productos"} className="item-3">
                            <img src={alquiler} alt="alquiler" />
                            <div className='w-full h-full flex items-center justify-center relative z-10 bg-[#00000063] text-white'>
                                <h1 className='text-white md:text-3xl text-xl text-center'>Alquileres</h1>
                            </div>
                        </Link>
                        <Link to={"productos"} className="item-4">
                            <img src={tortas} alt="tortas" />
                            <div className='w-full h-full flex items-center justify-center relative z-10 bg-[#00000063] text-white'>
                                <h1 className='text-white md:text-3xl text-xl text-center'>Combos reposteros</h1>
                            </div>
                        </Link>
                        <Link to={"productos"} className="item-5">
                            <img src={infantiles} alt="infantiles" />
                            <div className='w-full h-full flex items-center justify-center relative z-10 bg-[#00000063] text-white'>
                                <h1 className='text-white md:text-3xl text-xl text-center'>Tematicas infantiles</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div id='contacto' className="flex flex-col md:flex-row px-6 md:px-20 py-16 gap-12 items-start">

                    {/* MAPA */}
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[420px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13473.845547979869!2d-63.24802294896131!3d-32.406797038942194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc42ea80316a31%3A0x61280e31ac35531d!2sMendoza%202123%2C%20X5900%20Villa%20Mar%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1769538185101!5m2!1sen!2sar"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>

                    {/* CONTACTO */}
                    <div className="md:w-1/2 w-full">
                        <h2 className='md:text-6xl text-4xl text-[#1e88e5] text-shadow-black text-shadow-2xs'>
                            Contacto
                        </h2>

                        {/* Info */}
                        <div className="mt-8 space-y-8 text-gray-700 text-2xl">
                            <p className='flex items-center gap-2'><FaLocationDot size={35} className='red' /> Mendoza 2123 Villa María - Cba.</p>
                            <p className='flex items-center gap-2'><FaPhone size={35} className='blue' /> +54 9 353 5637241</p>
                            <p className='flex items-center gap-2'><MdEmail size={35} className='yellow' /> arlequin.cotillonvillamaria@gmail.com</p>
                            <p className='flex items-center gap-2'><IoTimeSharp size={35} className='green' /> Lun a Vie · 8am - 12pm y 15:30pm - 19:30pm</p>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}

export default Home
