import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Inventory from './components/inventory/Inventory';
import Cart from './components/cart/Cart';
import Nomatch from './components/nomatch/Nomatch';
import Order from './components/orderReview/Order';
import PlaceOrder from './components/placeOrder/PlaceOrder';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './contex/AuthProvider';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Shipping from './components/shipping/Shipping';


function App() {
  return (
    <div className="App">
     <AuthProvider>

     <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route path='/home'><Home></Home></Route>

        <Route path='/inventory'><Inventory></Inventory></Route>
        
        <Route path='/shop'><Products></Products></Route>
        
        <Route path='/cart'><Cart></Cart></Route>

        <Route path='/login'><Login></Login></Route>
        <Route path='/register'><Register></Register></Route>

        <PrivateRoute path='/order'><Order></Order></PrivateRoute>
        
        <PrivateRoute path='/shipping'><Shipping></Shipping></PrivateRoute>

        <PrivateRoute path='/orderplace'><PlaceOrder></PlaceOrder></PrivateRoute>
        
        <Route exact path='/'><Home></Home></Route>

        <Route path='*'><Nomatch></Nomatch></Route>



      </Switch>
      <Footer></Footer>
    
      </BrowserRouter>



     </AuthProvider>
      
    </div>
  );
}

export default App;
