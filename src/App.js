import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Inventory from './components/inventory/Inventory';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route path='/home'><Home></Home></Route>
        <Route path='/inventory'><Inventory></Inventory></Route>
        <Route path='/shop'><Products></Products></Route>
        
        <Route path='/cart'><Cart></Cart></Route>



      </Switch>
      <Footer></Footer>
    
      </BrowserRouter>



      
    </div>
  );
}

export default App;
