import React from 'react'
import './btnAgregar.css'

const BtnAgregar = ({btnAdd}) => {
    return (
        <div>
            <button onClick={btnAdd} className='btnAgregar'>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default BtnAgregar
