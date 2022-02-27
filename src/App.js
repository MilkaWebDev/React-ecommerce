import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Views
import Home from './views/Home/Home'
import Tienda from './views/Tienda/Tienda';
import ItemDetailContainer from './views/ItemDetail/ItemDetailContainer';
import Cart from './views/Cart/Cart'

import { ProductsProvider } from './CartContext' 


function App() {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          

          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tienda' component={Tienda} />
          <Route path='/detail/:id' component={ItemDetailContainer} />
          <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </Router>
      </ProductsProvider>
  );
}

export default App;
