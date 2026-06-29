import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../shared/layout/Layout'
import Seo from '../../shared/seo/Seo'
import snacks from "../../assets/Snaks.png"
import descartables from "../../assets/Descartable.png"
import tortas from "../../assets/Reposteria.png"
import cotillon from "../../assets/Cotillon.png"
import especiales from "../../assets/Fechas especiales.png"
import fondo from "../../assets/fondo.jpg"

import { FaLocationDot, FaStar } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa"
import { MdEmail, MdCake, MdShoppingBag, MdTheaterComedy, MdShoppingCart } from "react-icons/md"

import "./styles.css"

const Home = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const heroOpacity = Math.max(0, 1 - scrollY / 250)

    return (
        <>
            <Seo title="Home" description="Bienvenido a mi sitio web" />
            <Layout>

                {/* ── Hero ── */}
                <div className="md:h-screen h-[90vh] relative overflow-hidden">
                    <img
                        src={fondo}
                        alt="fondo home"
                        className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-black/50 z-0" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8 px-4">

                        {/* Título grande — se desvanece al scrollear */}
                        <div style={{ opacity: heroOpacity }} className="text-center select-none">
                            <h1 className="title-hero">
                                {/* <div>
                                    <span className="hero-letter red bend-left">A</span>
                                    <span className="hero-letter yellow">R</span>
                                    <span className="hero-letter blue bend-right">L</span>
                                    <span className="hero-letter yellow">E</span>
                                    <span className="hero-letter red">Q</span>
                                    <span className="hero-letter yellow bend-left">U</span>
                                    <span className="hero-letter blue">Í</span>
                                    <span className="hero-letter red bend-right">N</span>
                                </div> */}
                                <div>
                                    <span className="hero-letter yellow bend-left">C</span>
                                    <span className="hero-letter blue">O</span>
                                    <span className="hero-letter red">T</span>
                                    <span className="hero-letter yellow bend-right">I</span>
                                    <span className="hero-letter blue">L</span>
                                    <span className="hero-letter red bend-left">L</span>
                                    <span className="hero-letter yellow">O</span>
                                    <span className="hero-letter blue bend-right">N</span>
                                </div>
                                <div>
                                    <span className="hero-letter red bend-left">M</span>
                                    <span className="hero-letter yellow">A</span>
                                    <span className="hero-letter blue bend-right">Y</span>
                                    <span className="hero-letter yellow">O</span>
                                    <span className="hero-letter red">R</span>
                                    <span className="hero-letter yellow bend-left">I</span>
                                    <span className="hero-letter blue">S</span>
                                    <span className="hero-letter red bend-right">T</span>
                                    <span className="hero-letter yellow">A</span>

                                </div>
                            </h1>
                        </div>

                        {/* Barra de categorías */}
                        <div style={{ opacity: heroOpacity }} className="flex flex-wrap items-center justify-center gap-0 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                            <div className="hero-cat-item">
                                <MdTheaterComedy className="text-pink-400" size={22} />
                                <span>COTILLÓN</span>
                            </div>
                            <span className="text-white/30 px-1">|</span>
                            <div className="hero-cat-item">
                                <MdShoppingBag className="text-cyan-400" size={22} />
                                <span>DESCARTABLES</span>
                            </div>
                            <span className="text-white/30 px-1">|</span>
                            <div className="hero-cat-item">
                                <MdCake className="text-yellow-400" size={22} />
                                <span>REPOSTERÍA</span>
                            </div>
                            <span className="text-white/30 px-1">|</span>
                            <div className="hero-cat-item">
                                <FaStar className="text-yellow-300" size={22} />
                                <span>Y MUCHO MÁS</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            to="productos"
                            className="flex items-center gap-3 bg-[#e91e8c] hover:bg-[#c2185b] text-white px-10 py-4 rounded-full font-extrabold text-xl tracking-wider transition-all duration-200 shadow-xl hover:shadow-[0_8px_30px_rgba(233,30,140,0.55)] hover:scale-105 active:scale-95"
                        >
                            <MdShoppingCart size={26} />
                            VER CATÁLOGO
                        </Link>
                    </div>
                </div>

                {/* ── Featured categories ── */}
                <section className="py-16 px-6 max-w-screen-xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight" style={{ fontFamily: '"Titan One", sans-serif' }}>
                            Las más <span className="text-[#e91e8c]">buscadas</span>
                        </h2>
                        <p className="text-gray-500 mt-2 text-base md:text-lg font-medium">
                            Explorá las categorías más populares
                        </p>
                    </div>

                    <div className="grid-container">
                        <Link to="productos" className="item-1">
                            <img src={snacks} alt="snacks" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h2 className="text-white text-xl md:text-2xl font-black text-center">Snacks</h2>
                            </div>
                        </Link>
                        <Link to="productos" className="item-2">
                            <img src={descartables} alt="golosinas" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h2 className="text-white text-lg md:text-2xl font-black text-center">Descartables</h2>
                            </div>
                        </Link>
                        <Link to="productos" className="item-3">
                            <img src={especiales} alt="alquiler" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h2 className="text-white text-lg md:text-2xl font-black text-center">Fechas Especiales</h2>
                            </div>
                        </Link>
                        <Link to="productos" className="item-4">
                            <img src={tortas} alt="tortas" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h2 className="text-white text-lg md:text-2xl font-black text-center">Repostería</h2>
                            </div>
                        </Link>
                        <Link to="productos" className="item-5">
                            <img src={cotillon} alt="infantiles" />
                            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[#00000063]">
                                <h2 className="text-white text-lg md:text-2xl font-black text-center">Cotillon</h2>
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
