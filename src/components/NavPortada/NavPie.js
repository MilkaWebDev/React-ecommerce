import React from 'react'
import './navpie.css'
import { Link } from 'react-router-dom'


const NavPie = () => {
    return (
        <div className='navpie'>
            <ul>
            <Link className='Linkpie' to='/'>
              Coleccion
            </Link>
            <Link className='Linkpie' to='/tienda'>
              Tienda
            </Link>
            <Link className='Linkpie' to='/'>Contacto</Link>
            </ul>
            
        </div>
    )
}

export default NavPie
