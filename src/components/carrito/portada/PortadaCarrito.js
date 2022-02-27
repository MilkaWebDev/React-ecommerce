import React from 'react'
import './portadaCarrito.css'
import Navbar from '../../portada/NavBar/Navbar'
import PiePortada from '../../portada/piePortada/PiePortada'


const PortadaCarrito = () => {
    return (
        <div className='PortadaCarrito'>
            <Navbar />
            <PiePortada sectionTitle={'Carrito'} />
        </div>
    )
}

export default PortadaCarrito
