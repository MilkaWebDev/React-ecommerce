import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = () => {
    return (
        <div >
            <Link to='/Cart' className='btn-nav'>
                <button  className='btn' ><i className="fas fa-shopping-cart"></i></button>
                <p>0 - $0.00</p>
            </Link>
        </div>
    )
}

export default Button
