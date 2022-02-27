import React from 'react'
import './grid.css'
import Tazas from '../../../assets/tazas.jpg'
import Floreros from '../../../assets/floreros.jpg'
import Platos from '../../../assets/platos.jpg'
import Jarra from '../../../assets/jarra.jpg'

const GridCatalogue = () => {
    return (
        <div className='grid'>
            <div><img src={Tazas} alt='tazas' /></div>
            <h1>TAZAS</h1>
            <h1>FLOREROS</h1>
            <img src={Floreros} alt='floreros' />
            <img src={Platos} alt='Platos' />
            <h1>PLATOS</h1>
            <h1>JARRAS</h1>
            <img src={Jarra} alt='Jarra' />
        </div>
    )
}

export default GridCatalogue
