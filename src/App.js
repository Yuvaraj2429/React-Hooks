import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/Css/Style.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HookOne from './Components/Hooks/Hook1'
import HookTwo from './Components/Hooks/Hook2'
import HookThree from './Components/Hooks/Hook3'
import Myclassone from './Components/Classes/Classone';
import HookFour from './Components/Hooks/Hook4';
import HookFive from './Components/Hooks/Hook5';
import HookSix from './Components/Hooks/Hook6';
import MyBook from './Components/Hooks/MyBook';
import Cart from './Components/Hooks/CartTable';
import Myitem from './Components/Hooks/Hook8';
import Myclasstwo from './Components/Classes/Classtwo';
import Myclassthree from './Components/Classes/Classthree';
import Myclassfour from './Components/Classes/Classfour';
import Myclasssfive from './Components/Classes/Classfive';
import CitySelector from './Components/Hooks/Dropdown';
import citiesByState from './Components/Hooks/Dropdown';
import MyTable from './Components/Hooks/Filter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Hook1" element={<HookOne />} />
          <Route exact path="/Hook2" element={<HookTwo />} />
          <Route exact path="/Hook3" element={<HookThree />} />
          <Route exact path="/Hook4/:userid" element={<HookFour />} />
          <Route exact path="/Hook5/:id" element={<HookFive />} />
          <Route exact path="/Hook6" element={<HookSix />} />
          <Route exact path="/MyBook" element={<MyBook />} />
          <Route exact path="/CartTable" element={<Cart />} />
          <Route exact path="/Hook8" element={<Myitem />} />
          <Route exact path="/classone" element={<Myclassone/>} />
          <Route exact path="/classtwo" element={<Myclasstwo/>} />
          <Route exact path="/classthree" element={<Myclassthree/>} />
          <Route exact path="/classfour" element={<Myclassfour/>} />
          <Route exact path="/classfive" element={<Myclasssfive/>} />
          
          <Route exact path="/Filter" element={<MyTable/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
