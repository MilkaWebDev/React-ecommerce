import React from 'react'
import CartList from '../../components/carrito/CartList/CartList'
import PortadaCarrito from '../../components/carrito/portada/PortadaCarrito'


const Cart = () => {
    return (
        <div>
            <PortadaCarrito />
            <CartList />
        </div>
    )
}

export default Cart
