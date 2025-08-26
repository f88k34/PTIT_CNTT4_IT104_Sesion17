import React, { useState } from 'react'

export default function Toggle() {
    const[show, setShow] = useState<boolean>(true);
    const handleShow=()=>{
        setShow(!show);
    }
  return (
    <div>
        <p style={{display:show?"block":"none"}}>Ẩn đi</p>
      <button onClick={handleShow}>...</button>
    </div>
  )
}


