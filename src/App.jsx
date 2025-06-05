import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import News from './pages/News/News';
import Footer from './components/Footer/Footer'
import Aboutus from './pages/Aboutus/Aboutus'
import Signup from './components/Navbar/Signup/Signup'
import Login from './components/Navbar/Login/Login'
import Watchlist from './pages/Watchlist/Watchlist';
import Trade from './pages/Trade/Trade';
import TechnicalAnalysis from './pages/TechnicalAnalysis/TechnicalAnalysis';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path="/news" element={<News />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path ='/coin/:coinId' element = {<Coin/>}/>
        <Route path="/technical-analysis/:coinId" element={<TechnicalAnalysis />} />
        <Route path="/trade/:coinId" element={<Trade />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App