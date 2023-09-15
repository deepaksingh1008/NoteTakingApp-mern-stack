import React from 'react'
import { Input } from '@chakra-ui/react'
const Search = () => {
    const [val,setValue]=useState('');
    const handleSearch = (e)=>{
        console.log("hello World")
    }
    
  return (
    <div>
         <Input w={400} m={8} placeholder='Search Notes By tittle and description' value={val} onChange={(e)=>handleSearch(e)}/>
    </div>
  )
}

export default Search