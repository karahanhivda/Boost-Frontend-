import React from 'react'
import Brand from '../assets/img/logo.png'
import '../assets/style/navi.scss'

const Navi = () => {
  return (
    <nav>
        <div className="brand">
            <img src={Brand} alt="marka" />
            <h3>HK Library</h3>
        </div>
        <ul className="liste">
          <li>Yazılım</li>
          <li>Tarih</li>
          <li>Roman</li>
          <li>Finans</li>
          <li>Diğer</li>
        </ul>
    </nav>
  )
}

export default Navi