import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { Input, Button,Heading } from '@chakra-ui/react'

const Login = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const dispatch = useDispatch();
     const data = useSelector((state)=>state.user.users);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const HandleLogin =()=>{
        const obj=new Object({email,password});
        dispatch(getUser(obj)).then((result)=>{
          if(result.payload){
            navigate('/');
          }
        })
        console.log(data);
        // navigate('/login');
    }
    // if(auth){
    //   navigate('/');
    // }
  
    return (
    <div className='login'>
    <div>
      <Heading as='h1' size='xl'>Login</Heading>
      </div>
    <div>
    <Input placeholder='Enter Email' size='md' w={500} m={10} display={'block'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Input placeholder='Enter Password' size='md' w={500} m={10} display={'block'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <Button colorScheme='blue' w={200} m={10} onClick={()=>HandleLogin()}>Login</Button>
    </div>
    </div>
  )
}

export default Login