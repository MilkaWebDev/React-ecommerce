
import React, { useContext } from 'react'
import './itemList.css'
import Item from '../Item/Item'
import { ProductsContext } from '../../../CartContext'

import { Link } from 'react-router-dom';

const ItemList = () => {
    

    const {products} = useContext(ProductsContext);
    
   

    return (
        <div className='itemList'>
            <div className='cardsContainer'>
                {products.map((products) => {
                    return(
                        <div key={products.id}>
                            <Link to={`/detail/${products.id}`} className='CardLink'>
                                <Item data={products} />
                            </Link>
                        </div>
                    )
                })}
        </div>

    </div>
    )
}

export default ItemList