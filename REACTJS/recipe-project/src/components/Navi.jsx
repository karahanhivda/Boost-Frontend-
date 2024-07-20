import React from 'react'
import Brand from '../assets/img/icon.png'
import { Link } from 'react-router-dom'

const Navi = () => {
  return (
    <nav>
        <div className='brand'>
            <img src={Brand} alt="marka" />
            <h3>MAGIC RECIPES</h3>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hakkimizda">About</Link></li>
            <li><Link to="/iletisim">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navi