
import React , {useEffect, useState} from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home/Home"
import About from './Pages/About/About';
// import Contact from './Pages/Contact/Contact';
import Contact from './Pages/Contact/ContactForm';
import './App.css';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import GameProduct from './Pages/ProductDetails/GameProduct';
import GameDetails from './Pages/ProductDetails/GameDetails';
import LoginComponent from './Pages/Login/LoginComponent';
import RegisterComponent from './Pages/Register/RegisterComponent';
import Dashboard from './Pages/Dashbord/Dashbord';

function App() {

  const [data, setData] = useState([]);

  async function fetchData(){
      const response = await fetch('http://localhost:3000/Products');
      const data = await response.json();
      const dataTransform = data.map((item) => {
          return {
            id : item.id,
            img : item.img,
            rate: item.rate,
            title : item.title,
            price : item.price,
            priceBeforeDiscount : item.priceBeforeDiscount
          }
        })
        
        setData(dataTransform);
  }
  // async function fetchOne(_id){
  //   const response = await fetch(`http://localhost:3000/Products/${_id}`);
  //   const data = await response.json();
  //   console.log(data);
    
  // }

      useEffect(() => {
        fetchData();

    },[])



  return (

    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home dataRef = {data} key={data.id}/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path="/Login" element={<LoginComponent />} />
            <Route path="/Register" element={<RegisterComponent />} />
            {/* <Route path="/" element={<LoginComponent />} /> Default route */}
            <Route path="/Dashboard" element={<Dashboard />} /> {/* Default route */}
              
{/*             
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/> */}
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Wishlist' element={<Wishlist/>}/>
            {/* <Route path='/ProductDetails' element={<ProductDetails/>}/> */}
            <Route path="/ProductDetails" element={<GameProduct />} />
            <Route path="/details" element={<GameDetails />} />
           
            {/* <Route path="/product-details/:id" element={<ProductDetails />} /> */}

        </Routes>
        {/* <Link onClick={fetchOne(1)} className='btn btn-primary'>fetch one</Link> */}
        <Footer/>
    </Router>
    



  );
}

export default App;







