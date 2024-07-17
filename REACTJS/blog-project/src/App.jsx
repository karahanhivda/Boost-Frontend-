import React from 'react'
import Navi from './components/Navi'
import Anasayfa from './components/Anasayfa'
import Blog from './components/Blog'
import Galeri from './components/Galeri'
import Iletisim from './components/Iletisim'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navi/>
      <Routes>
          <Route path='/' element={ <Anasayfa/> }/>
          <Route path='/blog' element={ <Blog/> }/>
          <Route path='/galeri' element={ <Galeri/> }/>
          <Route path='/iletisim' element={ <Iletisim/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App