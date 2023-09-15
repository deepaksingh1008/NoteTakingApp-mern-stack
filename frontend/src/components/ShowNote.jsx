import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getNotes,deleteNote,searchNotes,sortNote } from '../features/notes/noteSlice';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  useToast,
  Input,
  Button,
} from '@chakra-ui/react'
import { DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom';
const ShowNote = () => {
 const toast = useToast();
 const data = useSelector((state)=>state.note.notes);
//  console.log(data);
const navigate = useNavigate();
const userData = localStorage.getItem('user');
const parseData = JSON.parse(userData);
const Id=parseData._id;
const dispatch = useDispatch();
//  const data = useSelector((state)=>state.note.notes);
const [val,setValue]=useState('');
  useEffect(()=>{
     dispatch(getNotes(Id));
    console.log(data);
  })
  const handleDelete=(id)=>{
    dispatch(deleteNote(id)).then((result)=>{
      if(result.payload){
        toast({
          title: 'Note',
          description: "Note Deleted Successfully",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
    })
    console.log(id);
    //navigate('/show')
   }
  const handleSearch=(e)=>{
     setValue(e.target.value);
     dispatch(searchNotes(val)).then((result)=>{
      if(!result.payload){
         dispatch(getNotes());
      }
     });
  }
  const handleSort=()=>{
    dispatch(sortNote());
  }
  return (
    <div>
    <div className='search'>
      <Heading>All Records {data.length}</Heading>
      <Input w={400} m={8} placeholder='Search Notes By tittle and description'/>
      <Button  onClick={handleSearch}>Search</Button>
      <Button m={4} p={6} onClick={handleSort}>Sort</Button>
    </div>
      <div>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>All Notes</TableCaption>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Title</Th>
        <Th>Description</Th>
        <Th>Date</Th>
        <Th>Color</Th>
        <Th>Operation</Th>

      </Tr>
    </Thead>
    <Tbody>
      {data.length>0?data.map((item)=>(
        <Tr key={item._id} bg={item.col}>
        <Td>{item._id}</Td>
        <Td>{item.title}</Td>
        <Td>{item.desc}</Td>
        <Td>{item.date}</Td>
        <Td>{item.col}</Td>
        <Td><DeleteIcon onClick={()=>{handleDelete(item._id)}} m={2}/><Link to={`/update/${item._id}`}><EditIcon m={2}/></Link></Td>
      </Tr>
      )):<Tr><Td>No Record Found</Td></Tr>
}
    </Tbody>
  </Table>
</TableContainer>

      </div>
    </div>
  )
}

export default ShowNote