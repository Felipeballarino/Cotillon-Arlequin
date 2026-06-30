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

import { FaLocationDot } from "react-icons/fa6"
import { FaPhone, FaStar } from "react-icons/fa"
import { MdEmail, MdShoppingCart, MdTheaterComedy, MdShoppingBag, MdCake } from "react-icons/md"

import "./styles.css"

const TITLE_COLORS = ["#ff2e88", "#ff7a00", "#ffd400", "#3ad1c8", "#8a4dff", "#ff2e88", "#ffd400", "#8a4dff"]

const CATEGORIES = [
    { icon: <MdTheaterComedy size={22} className="text-pink-400" />, label: "COTILLÓN" },
    { icon: <MdShoppingBag size={22} className="text-cyan-400" />, label: "DESCARTABLES" },
    { icon: <MdCake size={22} className="text-yellow-400" />, label: "REPOSTERÍA" },
    { icon: <FaStar size={18} className="text-yellow-300" />, label: "Y MUCHO MÁS" },
]

const Home = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const heroOpacity = Math.max(0, 1 - scrollY / 350)

    return (
        <>
            <Seo title="Home" description="Bienvenido a mi sitio web" />
            <Layout>

                {/* ── Hero ── */}
                <section className="relative w-full overflow-hidden">

                    {/* Barra superior de anuncios*/}
                    <div className="flex flex-wrap h-10 items-center justify-center gap-x-10 gap-y-1 bg-[#ec0d7e] px-4 py-2 text-center text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
                    </div> 

                    {/* Hero con imagen de fondo */}
                    <div className="relative min-h-[640px] md:min-h-screen">
                        <img
                            src={fondo}
                            alt="fondo home"
                            className="w-full h-full object-cover absolute inset-0 z-0"
                        />
                        <div className="absolute inset-0 bg-black/20 z-0" />

                        <div
                            style={{ opacity: heroOpacity }}
                            className="relative z-10 flex flex-col items-center px-4 md:pt-1 pt-28 py-12 text-center"
                        >
                            {/* Título ARLEQUÍN con letras de colores */}
                            <h1
                                className="leading-none tracking-tight select-none"
                                style={{ fontFamily: '"Titan One", sans-serif' }}
                            >
                                <span className="sr-only">ARLEQUÍN</span>
                                <span
                                    aria-hidden
                                    className="flex flex-nowrap justify-center items-end"
                                    style={{
                                        fontSize: "clamp(40px, 11vw, 100px)",
                                        WebkitTextStroke: "3px #ffffff",
                                    }}
                                >
                                    {"ARLEQUÍN".split("").map((ch, i, arr) => {
                                        const mid = (arr.length - 1) / 2
                                        const off = i - mid
                                        return (
                                            <span
                                                key={i}
                                                className="flex-shrink-0"
                                                style={{
                                                    display: "inline-block",
                                                    color: TITLE_COLORS[i % TITLE_COLORS.length],
                                                    textShadow: "0 4px 0 rgba(0,0,0,.25), 0 8px 14px rgba(0,0,0,.45)",
                                                    transform: `rotate(${off * 1}deg) translateY(${off * off * 0.6}px)`,
                                                }}
                                            >
                                                {ch}
                                            </span>
                                        )
                                    })}
                                </span>
                            </h1>

                            {/* Subtítulo COTILLON */}
                            <h2
                                className="-mt-2 leading-none select-none"
                                style={{ fontFamily: '"Titan One", sans-serif' }}
                            >
                                <span className="sr-only">COTILLON</span>
                                <span
                                    aria-hidden
                                    className="flex flex-nowrap justify-center items-end"
                                    style={{
                                        fontSize: "clamp(28px, 8vw, 80px)",
                                        WebkitTextStroke: "2px #ec0d7e",
                                    }}
                                >
                                    {"COTILLON".split("").map((ch, i, arr) => {
                                        const mid = (arr.length - 1) / 2
                                        const off = i - mid
                                        return (
                                            <span
                                                key={i}
                                                className="flex-shrink-0"
                                                style={{
                                                    display: "inline-block",
                                                    color: "white",
                                                    textShadow: "0 4px 0 rgba(0,0,0,.25), 0 8px 14px rgba(0,0,0,.4)",
                                                    transform: `rotate(${off * 1}deg) translateY(${off * off * 0.6}px)`,
                                                }}
                                            >
                                                {ch}
                                            </span>
                                        )
                                    })}
                                </span>
                            </h2>

                            {/* Tagline */}
                            <p
                                className="mt-1"
                                style={{
                                    fontFamily: '"Lobster", cursive',
                                    fontSize: "clamp(24px, 5vw, 64px)",
                                    color: "white",
                                    textShadow: "0 3px 8px rgba(0,0,0,.5)",
                                }}
                            >
                                Mayorista Villa María
                            </p>

                            {/* Pills de categorías */}
                            <div className="md:flex hidden mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full bg-black/80 px-7 py-4 text-white shadow-xl backdrop-blur-sm">
                                {CATEGORIES.map((c, i) => (
                                    <div key={c.label} className="flex items-center gap-2">
                                        {i > 0 && (
                                            <span className="mr-4 hidden h-5 w-px bg-white/30 sm:inline-block" />
                                        )}
                                        <span className="text-lg">{c.icon}</span>
                                        <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
                                            {c.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                to="productos"
                                className="mt-8 inline-flex items-center gap-2 md:gap-3 rounded-full bg-[#ff1f8e] px-6 py-3 text-sm md:px-10 md:py-4 md:text-lg font-extrabold uppercase tracking-wide text-white shadow-[0_0_0_4px_rgba(255,31,142,0.35),0_10px_30px_rgba(255,31,142,0.5)] transition hover:scale-[1.03] hover:bg-[#ff3d9e]"
                            >
                                <MdShoppingCart size={18} className="md:hidden" />
                                <MdShoppingCart size={24} className="hidden md:inline" />
                                Ver catálogo
                            </Link>

                        </div>
                    </div>
                </section>

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
