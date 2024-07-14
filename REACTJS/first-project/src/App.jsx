import React from 'react'
import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


//(jsx => javascript syntax extension - js sözdizimi uzantısı) bu yapı jsx yapısıdır, arka tarafta js olarak saklanıyor fakat html kadar hızlı olsun diye jsx yazıyoruz
//jsx özellikleri: birden fazla tag kapsayıcı içinde yazılmalı, ayrı ayrı olursa hata verir
//react fragment: boş kapsayıcı <></>, div e ihtiyaç yoksa kullanma (8 temmuz pzt 11.13-11.20)
// !!! projeyi kapatmadan yeniden başlatmak için terminale öncelikle projeyi durdurmak için ctrl + c yazmalı, sonrasında tekrar ayağa kaldırmak için npm run dev'lediğimizde vs code kapatmadan yeniden başlatmış oluruz

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
