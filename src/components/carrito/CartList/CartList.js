
import React, {useContext} from 'react'
import './cartList.css'
import CartItem from '../cartItem/CartItem'

import { ProductsContext } from '../../../CartContext'



const CartList = () => {

    const {cart, clearState} = useContext(ProductsContext);
    
   
    return (
        <div className='cartList'>
            {cart.map((cart) => {
                return <CartItem data={cart} key={Math.random().toString(36).substr(2, 9)} />
            })}
            

            <hr />
            <div className='footerCartList'>
                <button className='clearBtn' onClick={clearState}>limpiar carrito</button>
                <p>cantidad total de productos: </p>
                <h1>TOTAL $</h1>
            </div>
            <div>
                <button className='checkoutBtn'>checkout</button>
            </div>
        </div>
    )
}

export default CartList