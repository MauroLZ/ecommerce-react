import React from 'react';
// import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import pages
import Home from './pages/Home';
import WomenClothing from './pages/WomenClothing';
import MenClothing from './pages/MenClothing';
import ProductDetails from './pages/ProductDetails';
// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";

const App = () => {
    return <div className='overflow-hidden'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
                <Route path='/women-clothing' element={<WomenClothing/>}/>
                <Route path='/men-clothing' element={<MenClothing/>}/>
            </Routes>
            <Sidebar/>
            <Footer/>
        </Router>
    </div>;
};

export default App;
