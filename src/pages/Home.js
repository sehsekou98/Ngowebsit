import React from 'react'
import Annocument from '../components/Annocument.js';
import Categories from '../components/Categories.jsx';
import Navbar from '../components/Navbar.jsx';
import Slider from '../components/Slider.js';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Annocument />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter /> 
        <Footer />
    </div>
  )
}

export default Home;
