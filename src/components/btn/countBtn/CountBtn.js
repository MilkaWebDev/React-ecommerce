import React, {useContext} from 'react'
import './countbtn.css'
import { ProductsContext } from '../../../CartContext'


const CountBtn =  () => {
    
    const {counter, handleMinus, handlePlus} = useContext(ProductsContext);
     
    return (
        
        <div className='botonera'>
            <button className='countBtn' onClick={handleMinus}>-</button>
            <h3>{counter}</h3>
            <button className='countBtn' onClick={handlePlus}>+</button>
        </div>
    )
}

export default CountBtn

