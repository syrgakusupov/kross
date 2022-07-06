import React, { useEffect, useState
 } from 'react';
import {BrowserRouter, Routes,Route,} from 'react-router-dom'
import Header from './components/header/Header'
import style from '../src/app.module.scss'
import HomePage from './pages/HomePage/HomePage';
import Basket from '../src/pages/Basket/Basket'
// import cross from '../src/img/cross/image1.svg'
function App() {

  const [bd, setBd] = useState([])
  useEffect(() => {
    async function fetchData(){
      const resp = await fetch('http://localhost:3000/db.json')
      const bd = await resp.json()
      setBd(bd)
    } 
    fetchData()
  }, [])
  return (
    <BrowserRouter>
    <div className={style.phonts}>
      <div className={style.Content}>
        <Header/>
        <Routes>
        <Route path='/'element={<HomePage bd={bd}/>}/>
        <Route path='/Basket'element={<Basket/>}/>
        </Routes>
        
      </div>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
