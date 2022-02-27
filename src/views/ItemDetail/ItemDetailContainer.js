import React, {useEffect, useContext} from 'react'
import './itemDetail.css'
import PortadaTienda from '../../components/shop/portadaTienda/PortadaTienda'
import BtnAgregar from '../../components/btn/agregar/BtnAgregar'
import CountBtn from '../../components/btn/countBtn/CountBtn'

import { ProductsContext } from '../../CartContext'


const ItemDetailContainer = ({match}) => {


    //peticion
    let itemID = match.params.id;
    

    const {item, setPath, btnAdd} = useContext(ProductsContext);

    useEffect(() => {
        setPath(itemID);
      }, [itemID]);



      //counter
      

    return (
    <div>
        <PortadaTienda />
            <div className='itemDetail'>
                <img src={item.image} alt='imagen del producto' className='detailImg' />
                <div>
                    <h2 className='detailTitle'>{item.title}</h2>
                    <p className='detailDescription'>{item.description}</p>
                    <h2>${item.price}</h2>
                    <CountBtn/>

                    <BtnAgregar btnAdd={() => btnAdd(item.id)}/>
                    
                </div>
            </div>
    </div>)

    
    
}

export default ItemDetailContainer