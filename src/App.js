import React from 'react';
import { Switch , Route} from 'react-router-dom';
import './App.css';
import Product from './Componenets/Product';
import ProductDetails from './Componenets/ProductDetails';
import BuyProduct from './Componenets/BuyProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Switch>
            <Route exact path="/" component={Product}/>
            <Route path="/learn/:id"  render={(props) => <ProductDetails {...props} />}/>
            <Route path="/shop/:id"render={(props) => <BuyProduct {...props} />}/>
          </Switch>
      </header>
    </div>
  );
}

export default App;
