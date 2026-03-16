import Cookies from "js-cookie";
import { NEW_SALE } from "../../../constants/routes";


const armarBody = (user, cart, cartTotal) => {

    const detalles = cart.map((item) => {
        const precio = Number(item.precio_final);
        const cantidad = item.quantity;
        const total = precio * cantidad;

        return {
            codigo: item.codigo,
            descripcion: item.descripcion,
            importe: precio,
            descuento: item.descuento ? Number(item.descuento) : 0,
            importetotal: total,
            cantidad: cantidad,
            codtalle: 1,
            codoferta: 0
        };
    });

    return {
        codclientez: user.codclientez,
        codcliente: user.codusuario,
        importe: cartTotal,
        importetotal: cartTotal,
        observacion: "Pedido de prueba",
        detalles: detalles
    };
};

export const newSale = async (sale, cartTotal) => {
    const TOKEN_USER = Cookies.get('user_data_token');
    const user = JSON.parse(Cookies.get("user_data"));

    const saleBody = armarBody(user, sale, cartTotal);
    try {
        const res = await fetch(NEW_SALE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_USER}`
            },
            body: JSON.stringify(saleBody),
        });
        const data = await res.json();
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
};
