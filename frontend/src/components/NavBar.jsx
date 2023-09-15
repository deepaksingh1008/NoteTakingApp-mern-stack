import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
const NavBar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const user = JSON.parse(auth);
 // const userName = user.name!=null?user.name:'';
  const logout = ()=>{
    localStorage.clear();
    navigate('/register');
  }
  
  return (
    <div className='navbar'>
        <div className='logo'>
        <p>Note Taking App</p>
        </div>
        {
          auth?(
        <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/add">Add Data</Link>
        <Link to='/show'>Show Data</Link>
        <Link to='/logout' onClick={logout}>Logout({user.name})</Link>
        </div>):(<div className='nav'>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
          </div>)
       }
    </div>
  )
}

export default NavBar