import React from 'react'
import { NavLink } from 'react-router-dom'


const Navi = () => {
  return (
    <nav>
        <ul>
            <li><NavLink style={({isActive})=>({color: isActive?"greenyellow":"white"})} to="/">Anasayfa</NavLink></li> 
            <li><NavLink to="galeri">Galeri</NavLink></li> 
            <li><NavLink to="blog">Blog</NavLink></li> 
            <li><NavLink to="iletisim">Iletisim</NavLink></li> 
        </ul>
    </nav>
  )
}

export default Navi