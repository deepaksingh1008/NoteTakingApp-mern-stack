import React, { useState } from 'react'
import { Heading,Input,Button,Textarea,useToast} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addNote,getNotes } from '../features/notes/noteSlice';
const AddNote = () => {
  const dispatch = useDispatch();
  const storedData = localStorage.getItem('user');
  const parsedData = JSON.parse(storedData);
  const id = parsedData._id;
  const toast = useToast();
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [date,setDate]=useState('');
  const [col,setCol]=useState('');
  const handleAddNote=()=>{
       const obj = new Object({id,title,desc,date,col});
      // console.log(obj);
      dispatch(addNote(obj)).then((result)=>{
        if(result.payload){
          toast({
            title: 'Note Added',
            description: "Note Added Successfully",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        }
      })
      setTitle('');
      setDesc('');
      setDate('');
      setCol('');
     dispatch(getNotes()).then((result)=>{
      if(result.payload){
        console.log(result.payload);
      }
     })
  }
  return (
    <div>
      <Heading as="h1" size="xl">
        Add Note
      </Heading>
      <div>
      <Input placeholder='Enter Your Title' size='md' w={500} m={10} display={'block'} value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <Textarea placeholder='Write Your Description' size='md' w={500} h={200} m={10} display={'block'} value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      <Input type='datetime-local' placeholder='Enter Date' size='md' w={500} m={10} display={'block'} value={date} onChange={(e)=>setDate(e.target.value)}/>
      <Input type='color' placeholder='Enter Color' size='md' w={500} m={10} display={'block'} value={col} onChange={(e)=>setCol(e.target.value)}/>
      <Button colorScheme='blue' w={200} m={10} onClick={()=>handleAddNote()}>Add Note</Button>
      

      </div>
    </div>
  )
}

export default AddNote