import { Link } from 'react-router-dom'
import Layout from '../../shared/layout/Layout'
import Seo from '../../shared/seo/Seo'
import FondoHome from "../../assets/fondoHome.png"
import snacks from "../../assets/Snaks.png"
import descartables from "../../assets/Descartable.png"
import tortas from "../../assets/Reposteria.png"
import cotillon from "../../assets/Cotillon.png"
import especiales from "../../assets/Fechas especiales.png"

import { FaLocationDot } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoTimeSharp } from "react-icons/io5"

import "./styles.css"

const Home = () => {
    return (
        <>
            <Seo title="Home" description="Bienvenido a mi sitio web" />
            <Layout>

                {/* ── Hero ── */}
                <div className="md:h-screen h-[90vh] relative overflow-hidden">
                    <img
                        src={FondoHome}
                        alt="fondo home"
                        className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-black/45 z-0" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-60">
                        <div className="bg-black text-white w-full flex text-center justify-center font-semibold py-1">
                            <p className="whitespace-pre-wrap md:text-[16px] text-[12px] md:tracking-[0.1rem]">
                                COTILLON  -  DESCARTABLES  -  REPOSTERIA Y MUCHO MAS
                            </p>
                        </div>
                        <div>
                            <Link
                                to="productos"
                                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-extrabold text-2xl cursor-pointer"
                            >
                                VER CATÁLOGO
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Featured categories ── */}
                <section className="py-16 px-6 max-w-screen-xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight" style={{ fontFamily: '"Titan One", sans-serif' }}>
                            Las más <span className="text-[#e53935]">buscadas</span>
                        </h2>
                        <p className="text-gray-500 mt-2 text-base md:text-lg font-medium">
                            Explorá las categorías más populares
                        </p>
                    </div>

                    <div className="grid-container">
                        <Link to="productos" className="item-1">
                            <img src={snacks} alt="snacks" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h3 className="text-white text-xl md:text-2xl font-black text-center">Combos de Snacks</h3>
                            </div>
                        </Link>
                        <Link to="productos" className="item-2">
                            <img src={descartables} alt="golosinas" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h3 className="text-white text-lg md:text-xl font-black text-center">Combos Descartables</h3>
                            </div>
                        </Link>
                        <Link to="productos" className="item-3">
                            <img src={especiales} alt="alquiler" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h3 className="text-white text-lg md:text-xl font-black text-center">Fechas Especiales</h3>
                            </div>
                        </Link>
                        <Link to="productos" className="item-4">
                            <img src={tortas} alt="tortas" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h3 className="text-white text-lg md:text-xl font-black text-center">Combos reposteros</h3>
                            </div>
                        </Link>
                        <Link to="productos" className="item-5">
                            <img src={cotillon} alt="infantiles" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h3 className="text-white text-lg md:text-xl font-black text-center">Cotillon</h3>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* ── Contact ── */}
                <section id="contacto" className="bg-white py-16 px-6 md:px-20">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 items-start">

                        {/* Map */}
                        <div className="md:w-1/2 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13473.845547979869!2d-63.24802294896131!3d-32.406797038942194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc42ea80316a31%3A0x61280e31ac35531d!2sMendoza%202123%2C%20X5900%20Villa%20Mar%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1769538185101!5m2!1sen!2sar"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="md:w-1/2 w-full">
                            <h2 className="text-4xl md:text-5xl text-gray-900 mb-2" style={{ fontFamily: '"Titan One", sans-serif' }}>
                                Contacto
                            </h2>
                            <p className="text-gray-500 font-medium mb-8">Estamos para ayudarte</p>

                            <div className="space-y-5">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                        <FaLocationDot size={18} className="red" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Dirección</p>
                                        <p className="font-semibold text-gray-800">Mendoza 2123, Villa María — Cba.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <FaPhone size={16} className="blue" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Teléfono</p>
                                        <p className="font-semibold text-gray-800">+54 9 3534 59-0005</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                                        <MdEmail size={20} className="yellow" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                                        <p className="font-semibold text-gray-800 break-all">arlequin.cotillonvillamaria@gmail.com</p>
                                    </div>
                                </div>

                                {/* <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                        <IoTimeSharp size={20} className="green" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Horarios</p>
                                        <p className="font-semibold text-gray-800">Lun a Vie · 8am–12pm y 15:30–19:30</p>
                                    </div> */}
                                {/* </div> */}
                        </div>
                    </div>

                </div>
                </section>

            </Layout>
        </>
    )
}

export default Home
