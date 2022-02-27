import React from 'react'
import './portada.css'
import Navbar from './NavBar/Navbar'
import NavPie from '../NavPortada/NavPie'

const Portada = () => {
    return (
        <div className='Portada'>
            <Navbar />
            <NavPie/>
        </div>
    )
}

export default Portada
