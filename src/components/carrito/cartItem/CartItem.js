import React, {useContext} from 'react'
import './cartItem.css'
import { ProductsContext } from '../../../CartContext'


const CartItem = ( {data} ) => {

    const {RemoveFromCart} = useContext(ProductsContext);

    

    return (
        <div>
            <div className='CartItem'>
                <img src={data.image} alt='imagen producto' className='cartimg' />
                <h2>{data.title} </h2>
                <p>cantidad: {data.counter}</p>
                <h2>${data.counter * data.price}</h2>
                
            </div>  
            <button className='deleteBtn' onClick= {() => RemoveFromCart(data.id)}>eliminar</button>

        </div>
    )
}

export default CartItem;