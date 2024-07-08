import React from 'react'
import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Exmp from './components/Exmp';

//(jsx => javascript syntax extension) bu yapı jsx yapısıdır, arka tarafta js olarak saklanıyor fakat html kadar hızlı olsun diye jsx yazıyoruz
//jsx özellikleri: birden fazla tag kapsayıcı içinde yazılmalı, ayrı ayrı olursa hata verir
//react fragment: boş kapsayıcı <></>, div e ihtiyaç yoksa kullanma 8 temmuz pzt 11.13-11.20

function App() {
  
  return (   
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
