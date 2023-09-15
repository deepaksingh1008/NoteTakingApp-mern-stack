import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendUserData } from '../features/user/userSlice'
import {useNavigate} from 'react-router-dom'
import { Input, Button,Heading } from '@chakra-ui/react'
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleRegister = ()=>{
        const obj = new Object({name,email,password});
        console.log("obj = ", obj);
        dispatch(sendUserData(obj)).then((result)=>{
          if(result.payload){
            navigate('/add');
          }
        });
  
        
    }
  return (
    <div className='register'>
        <div>
        <Heading as='h1' size='xl'>Register</Heading>
        </div>
        <div>
        <Input placeholder='Enter Your Name' size='md' w={500} m={10} display={'block'} value={name} onChange={(e)=>setName(e.target.value)}/>
        <Input placeholder='Enter Email' size='md' w={500} m={10} display={'block'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input placeholder='Enter Password' size='md' w={500} m={10} display={'block'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button colorScheme='blue' w={200} m={10} onClick={()=>handleRegister()}>Register</Button>
        </div>
    </div>
  )
}

export default Register