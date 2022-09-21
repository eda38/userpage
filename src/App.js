import 'bootstrap/dist/css/bootstrap.css';
import MainContent from "./components/MainContent";
import Card from "./components/Card"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import Side from "./components/Side";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import Talep from "./Pages/Talep"
import MainPage from "./components/MainPage";


function App() {

  return <>
   <BrowserRouter>
     <Routes>
     <Route path="/" element={<MainPage/>}>
       <Route path="/talep" element={<Talep/>}/>
         <Route index element={<Tab/>}/>
     </Route>
     </Routes>
   </BrowserRouter>
  </>
}
export default App;
