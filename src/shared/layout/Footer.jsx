import { Link } from 'react-router-dom'
import logoSinFondo from "../../assets/arlequin.png"
import { FaLocationDot, FaPhone } from "react-icons/fa6"
import { IoTimeSharp } from "react-icons/io5"

const Footer = () => {
    return (
        <footer className="bg-[#e91e8c] text-white">
            <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <Link to="/">
                        <img src={logoSinFondo} alt="Arlequín Cotillón" className="w-24" />
                    </Link>
                    <p className="text-white/80 text-sm font-medium leading-relaxed max-w-[220px] text-center md:text-left">
                        El mayorista de cotillón más completo de Villa María, Córdoba.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h3 className="font-black text-base uppercase tracking-widest mb-2">Navegación</h3>
                    <Link to="/" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200">
                        Inicio
                    </Link>
                    <Link to="/productos" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200">
                        Catálogo
                    </Link>
                    <a href="/#contacto" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200">
                        Contacto
                    </a>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h3 className="font-black text-base uppercase tracking-widest mb-2">Contacto</h3>
                    <p className="flex items-center gap-2 text-white/80 text-sm font-medium">
                        <FaLocationDot size={14} /> Mendoza 2123, Villa María — Cba.
                    </p>
                    <p className="flex items-center gap-2 text-white/80 text-sm font-medium">
                        <FaPhone size={14} /> +54 9 353 5637241
                    </p>
                    {/* <p className="flex items-center gap-2 text-white/80 text-sm font-medium">
                        <IoTimeSharp size={14} /> Lun–Vie · 8am–12pm / 15:30–19:30
                    </p> */}
                </div>

            </div>

            <div className="border-t border-white/20 py-4 text-center text-white/50 text-xs font-medium">
                © {new Date().getFullYear()} Arlequín Cotillón · Villa María, Córdoba
            </div>
        </footer>
    )
}

export default Footer
