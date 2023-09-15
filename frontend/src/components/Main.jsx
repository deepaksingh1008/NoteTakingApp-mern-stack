import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import NavBar from './NavBar'
import Home from './Home'
import AddNote from './AddNote'
import ShowNote from './ShowNote'
import UpdateNote from './UpdateNote'
import Private from './Private';

const Main = () => {
  //const auth = localStorage.getItem('user');
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route element={<Private/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddNote/>}/>
        <Route path='/show' element={<ShowNote/>} />
        <Route path='/update' element={<UpdateNote/>}/>
        <Route path='/logout' element={<Register/>}/>
        <Route path='/update/:id' element={<UpdateNote/>} />
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    
  )
}

export default Main