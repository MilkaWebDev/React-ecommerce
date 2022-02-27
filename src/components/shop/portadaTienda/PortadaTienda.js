import React from 'react'
import './portadaTienda.css'
import Navbar from '../../portada/NavBar/Navbar'
import PiePortada from '../../portada/piePortada/PiePortada'

const PortadaTienda = () => {
    return (
        <div className='portadaTienda'>
            <Navbar />
            <PiePortada sectionTitle={'Tienda'} />
        </div>
    )
}

export default PortadaTienda
