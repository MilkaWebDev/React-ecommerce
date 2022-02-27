import React from 'react'
import './item.css'

const Item = ({ data }) => {
    return (
        <div className='cardContainer'>
            <img src={data.image} alt='imagen del producto' className='cardImg' />
        
            <header className='cardTitle'>{data.title}</header>
            <div>
            <p>No quiero que esta descripcion sea mas de una oracion</p>
            <p className='cardPrice'>${data.price}</p>
            
            
            </div>
        </div>
    )
}

export default Item
