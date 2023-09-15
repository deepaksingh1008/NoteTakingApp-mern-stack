import React, { useEffect, useState } from 'react'
import { Heading,Input,Button,Textarea,useToast} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote,getNotes, getSingleNotes, updateNote } from '../features/notes/noteSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const UpdateNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const storedData = localStorage.getItem('user');
  // const parsedData = JSON.parse(storedData);
  // const id = parsedData._id;
  const id1 = useParams();
  const id =id1.id;
  const data = useSelector((state)=>state.note.notes);
  console.log("data",data)
  // const updateData = data.filter((item)=>item._id===id)
  // console.log("update Data",updateData);
  // const noteObj = updateData[0];
  const toast = useToast();
  // const [title,setTitle]=useState('');
  // const [desc,setDesc]=useState('');
  // const [date,setDate]=useState('');
  // const [col,setCol]=useState('');
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [date,setDate]=useState('');
  const [col,setCol]=useState('');
  useEffect(()=>{
    getSingleNoteFromdb(); 
  },[])
  const getSingleNoteFromdb = ()=>{
    // dispatch(getSingleNotes(id)).then(data=>{
    //   console.log("single notes",data.payload);
    // })
    const updateData = data.filter((item)=>item._id===id)
    console.log("update Data",updateData);
    setTitle(updateData[0].title);
    setDesc(updateData[0].desc);
    setDate(updateData[0].date);
    setCol(updateData[0].col);
  }

  function handleUpdate(){
      //  console.log(noteObj)
      //  console.log(id);
       const obj = new Object({title,desc,date,col});
       console.log(obj);
       const obj1={
        id:id,
        data:obj,
       }
       console.log(obj1);
       dispatch(updateNote(obj1)).then((result)=>{
        console.log("this i--->",result);
        if(result.payload){
          console.log(result.payload);
          toast({
            title: 'Note Update',
            description: "Note Update Successfully",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          navigate('/show');
        }
        else{
          toast({
            title: 'Note Update',
            description: "Note Not Update",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        }
      })
      // setTitle('');
      // setDesc('');
      // setDate('');
      // setCol('');
    //  dispatch(getNotes()).then((result)=>{
    //   if(result.payload){
    //     console.log(result.payload);
    //   }
    //  })
  }
  
  return (
    <div>
    <Heading as="h1" size="xl">
      Update Note
    </Heading>
    <div>
    <Input placeholder='Enter Your Title' size='md' w={500} m={10} display={'block'} value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <Textarea placeholder='Write Your Description' size='md' w={500} h={200} m={10} display={'block'} value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    <Input type='datetime-local' placeholder='Enter Date' size='md' w={500} m={10} display={'block'} value={date} onChange={(e)=>setDate(e.target.value)}/>
    <Input type='color' placeholder='Enter Color' size='md' w={500} m={10} display={'block'} value={col} onChange={(e)=>setCol(e.target.value)}/>
    <Button colorScheme='blue' w={200} m={10} onClick={handleUpdate}>Update Note</Button>
    

    </div>
  </div>
  )
}

export default UpdateNote