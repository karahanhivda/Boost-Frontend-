import React from 'react'
import Card from './Card'
import '../assets/style/cardList.scss'

//veriyi tutup saklayıp sonra kullanmamızı sağlayan yapı => state
//proplar => üst componentten alt componente veri kullanımını sağlar {kitaplar} bir propdur

const CardList = ( {kitaplar, kitapSil} ) => {

  return (
    <div className='card-list'>
      {
        kitaplar.map(kitap=>
          <Card kitap={kitap} kitapSil={kitapSil} key={kitap.id} />
        )
      }
      
    </div>
  )
}

export default CardList