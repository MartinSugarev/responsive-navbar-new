import './App.css';
import React from 'react'
import Header from './components/header-parts/header'
import Facebook from './components/navbar-components/facebook'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Header />
     <Routes>
       <Route  path="/facebook" element={<Facebook/>} />
     </Routes>
    </>
  );
}

