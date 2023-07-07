import React, { useContext, useEffect } from 'react'
import NoteContext from './context/noteContext'

const Note = () => {
    const context=useContext(NoteContext)
    const{getnotes}=context
useEffect(()=>{
    getnotes()
},[])
  return (
    <div>
      
    </div>
  )
}

export default Note
