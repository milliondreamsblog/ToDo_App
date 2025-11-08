import React, { useState } from 'react'
import './DropArea.css'

export const DropArea = ({onDrop}) => {
    const [activeDropBox, setactiveDropBox] = useState(false)
  return (
    <section 
    onDragEnter={() => setactiveDropBox(true)}
    onDragLeave={() => setactiveDropBox(false)}
    onDrop={() =>{
        onDrop();
        setactiveDropBox(false);
    }}
    onDragOver={e => e.preventDefault()}


    className={activeDropBox? 'drop_area' : 'hide_area'}
    
    >DropArea</section>
  )
}
