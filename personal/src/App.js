import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './components/secondPage/About';
import Home from './components/home/home';

function App() {
  return (
    <div className="App w-full h-screen">
    <Header/>
    <Home/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
  