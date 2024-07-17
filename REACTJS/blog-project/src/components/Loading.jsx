import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/ank16/anasayfa");
        },2000)
    })
  return (
    <div className='loading'>
        <div className='loader'></div>
    </div>
  )
}

export default Loading