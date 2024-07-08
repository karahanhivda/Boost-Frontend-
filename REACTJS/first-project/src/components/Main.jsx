import React from 'react'

export const Main = () => {
  return (
    <>
    <h4>JSx Özellikleri</h4>
      <ol>
        <li>Componentin returnü içerisindeki html benzeri yapi, jsx, mutlaka fragment (bir kapsayici) içerisine yazilmalidir.</li>
        <li>JSx yapisi içerisinde JS kodlari süslü parantez {`{JS Kodu}`} içine yazilir.  2+4={2+4}</li>
        <li style={{color:'red', fontSize:'20px'}}>JSx içerisinde inline css yazmak için çift süslü parantez kullanilir. {`style={{JS olarak css kodu}}`}</li>
      </ol>
    </>
  )
}
export default Main