import React, { useState } from 'react'
import NoteContext from './notecontex'
const NoteState= (props) => {
    
    const[note,setNote]=useState([])

    const getnotes=async()=>{
        const response=await fetch("http://localhost:5000/api/notes/fetchallnotes",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem('token')
            }
        })
    const json=await response.json()
    console.log(json)
    
    }
  return (
    <div>
    <NoteContext.Provider value={{getnotes,note}}>
     {props.children}
     </NoteContext.Provider>
     </div>
  )
}

export default NoteState
