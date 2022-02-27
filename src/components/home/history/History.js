import React from 'react'
import './history.css'
import Nosotros from '../../../assets/nosotros.jpg'

const History = () => {
    return (
        <div className='history'>
            <img src={Nosotros} alt='nosortos' />
            <div className='text'>
                <h3>Nuestra historia</h3>
                <p>Todas nuestras piezas son hechas y pintadas a mano en Buenos Aires, Argentina, por artesanos de la zona.</p>
                <p>Usamos tecnicas de alfarería tradicional, minimizando al máximo nuestra huella ambiental.
                Nuestras Cerammikas están hechas de arcilla local y son decoradas con pigmentos naturales.</p>
            </div>
            
        </div>
    )
}

export default History
