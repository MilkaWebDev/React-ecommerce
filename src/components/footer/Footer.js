import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h3>Contacto</h3>
                <ul>
                    <li>info@ceramikkas.com.ar</li>
                    <li>Av. Congreso, CABA</li>
                </ul>
            </div>
            <div>
                <h3>Redes Sociales</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </div><div>
                <h3>Preguntas Frecuente</h3>
                <ul>
                    <li>Terminos y condiciones</li>
                    <li>Envios</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
