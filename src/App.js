
import './App.css';

// contexts
import ProductContetProvider from './context/ProductContetProvider';
import CartContextProvider from './context/CartContextProvider';

//components
import Store from './components/Store';
import Details from './components/Details'
import Header from './components/Header';
import Shopcart from './components/Shopcart';

//router
import {Switch , Route , Redirect} from 'react-router-dom'

function App() {
  return (
   <ProductContetProvider>
    <CartContextProvider>

      <Header  />

    <Switch>
       <Route path='/products/:id' component={Details} />
       <Route path='/products' component={Store} />
       <Route path='/shope' component={Shopcart} />

       <Redirect from='/' to='/products' />
    </Switch>
  
    </CartContextProvider>
   </ProductContetProvider>
  );
}

export default App;
