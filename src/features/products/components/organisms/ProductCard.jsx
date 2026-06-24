import { formatearPrecio } from '../../../../utils/helpers'
import { useCartStore } from '../../../../store/cartStore'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import { Image } from "antd";
import imgNoDisp from "../../../../assets/nodisp.jpg"

const ProductCard = ({ product }) => {
    const { addToCart } = useCartStore()

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col">

            {/* Discount badge */}
            {product.descuento && product.descuento !== "0.00" && (
                <div className="absolute top-3 left-3 bg-[#e53935] text-white text-xs font-black py-1 px-3 rounded-full z-10 shadow-md">
                    {product.descuento}% OFF
                </div>
            )}

            {/* Image */}
            <div className="overflow-hidden relative bg-gray-50">
                <Image
                    style={{ objectFit: "cover", display: "block" }}
                    width="100%"
                    height="200px"
                    src={product.img1 || imgNoDisp}
                    alt={product.nombre}
                    preview={{ mask: "Ver imagen" }}
                />
                {/* Add to cart button */}
                <button
                    onClick={handleAddToCart}
                    className="
                        absolute bottom-3 right-3 z-10
                        w-10 h-10 rounded-full
                        bg-[#e53935] text-white
                        flex items-center justify-center
                        shadow-md
                        opacity-100 translate-y-0
                        md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
                        transition-all duration-300
                        hover:bg-[#c62828]
                        active:scale-90
                        cursor-pointer
                    "
                    title="Agregar al carrito"
                >
                    <AddShoppingCartIcon sx={{ fontSize: 18 }} />
                </button>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-1 flex-1">
                <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2 min-h-[2.5rem]">
                    {product.descripcion}
                </h3>
                <p className="text-[#e53935] text-xl font-black mt-1">
                    {formatearPrecio(product.precio_final)}
                </p>
            </div>

        </div>
    )
}

export default ProductCard
