import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component';
import Category from './routes/category/category.component';
import Product from './routes/product/product.component';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/Shop/Shop';
import './App.css'



function App() {
 


  
  return (
    <Routes>
       <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path= {`category/:title`} element={<Category />}/>
        <Route path= {`category/:title/:product`} element={<Product />}/>
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>

  );
}

export default App;
