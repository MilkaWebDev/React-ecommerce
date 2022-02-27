import React from 'react'
import './navbar.css'
import Button from '../../btn/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleOnClick = () => {
    alert ('carrito vacio')
  }
    return (
        <nav className="navbar">
          <Link className='Link' to='/'>
            <h2 className="logo">INICIAR SESION | CREAR CUENTA</h2>
          </Link>
          
         <Button onClick={handleOnClick}/>
        
      </nav>
    )
}

export default Navbar
