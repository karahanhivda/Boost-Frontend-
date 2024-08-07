import React from 'react'
import '../assets/style/card.scss'

const Card = ( {kitap, kitapSil} ) => {
  
  return (
        <div className="card">
          <button onClick={()=>kitapSil(kitap.id)} className='delete'>SİL</button>
          <button className='edit'>EDİT</button>
          <img src={kitap.kitapResmi}    alt={kitap.kitapAdi + "_kapak"} />
          <div className="card-body">
            <h4>{kitap.kitapAdi}</h4>
            <p>Yazarı: {kitap.kitapYazari}</p>
            <p>Kategori: {kitap.kitapKategorisi}</p>
            <p>Sayfa Sayısı: {kitap.kitapSayfaSayisi}</p>
            <p>Açıklaması: {kitap.kitapAciklamasi.substring(0, kitap.kitapAciklamasi.substring(0,100).lastIndexOf(" ")) + "..."}</p>
          </div>
        </div>
    )
}

export default Card