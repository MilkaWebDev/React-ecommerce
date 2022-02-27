import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    //itemList
    const [products, setProducts] = useState ([]);

    
    useEffect (() =>{
        axios('https://fakestoreapi.com/products').then((json) =>
        setProducts(json.data)
        );
    }, []);

    
    //itemDetailContaier
        //peticion
        const [item, setItem] = useState({});
        const [path, setPath] = useState('');

        useEffect(() => {
            async function ShowDetail () {
                const resp = await axios(
                    `https://fakestoreapi.com/products/${path}`
                );
                
                setItem(resp.data);
                
            }
            if(path) ShowDetail();
        }, [path]);

        //counter
        const [counter, setCounter] = useState(1);
        
        
            
        function handlePlus(){
            const stock = 5
            if (counter < stock){
                setCounter(counter + 1)
            } else if (counter === stock){
                alert('no hay mas stock disponible')
            }
        }

        function handleMinus(){
            if (counter > 1){
                setCounter(counter - 1)
            } else if (counter === 1){
                alert('Quieres eliminar el producto del carrito?')
            }
        }

        
    //Carrito
    const [cart, setCart] = useState ([]);
    const [q, setQ] = useState([]);

    
    const addCantidades = () => {
        const precios = [];
        for(let i = 0; i < cart.length; i++){
            precios.push(cart[i].price * cart[i].counter)
        }
        let totalPrice = precios.reduce((a, b) => a + b, 0);

        const cantidad = [];
        for(let i = 0; i < cart.length; i++){
            cantidad.push(cart[i].counter)
        }
        let quantity = cantidad.reduce((a, b) => a+b, 0);


        setQ([totalPrice, quantity]);

        console.log(q);
    }


    const btnAdd = (id) => {
        let idCarrito = cart.find(element => element.id === id);
        if(idCarrito){
            alert('este producto ya esta en el carrito')
            } else {
                item.counter = counter;
                setCart([...cart, item]);
                alert('se agrego al carrito');
               
            }
            addCantidades();
        }

     /*

    const precioTotal = () => {
        const precios = [];
        for(let i = 0; i < cart.length; i++){
            precios.push(cart[i].price * cart[i].counter)
        }
        let sumaPrecios = precios.reduce((a, b) => a + b, 0);

    }

    
    const cantidadTotal = () => {
        const cantidad = [];
        for(let i = 0; i < cart.length; i++){
            cantidad.push(cart[i].counter)
        }
        let suma = cantidad.reduce((a, b) => a+b, 0)
        return suma;
    }
*/

    const clearState = () => {
        setCart([]);
        addCantidades();

    }



    const RemoveFromCart = (dataID) => {
        setCart(cart.filter(elemento => elemento.id !== dataID));
    } 
    

    return (
        <ProductsContext.Provider value={{products, setProducts, item, setItem, path, setPath, counter, handleMinus, handlePlus, btnAdd, cart, clearState, RemoveFromCart, q}}>
            {children}
        </ProductsContext.Provider>
    )
};