import React, { useState } from 'react'
import '../assets/style/forms.scss'

const Forms = ( {companyName} ) => {
const [kitapAdi, setKitapAdi] = useState("");
const [kitapYazari, setKitapYazari] = useState("");
const [kitapKategorisi, setKitapKategorisi] = useState("Kategori Seçiniz");
const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState("");
const [kitapResmi, setKitapResmi] = useState("");
const [kitapAciklamasi, setKitapAciklamasi] = useState("");

  return (
    <form>
      <h3>{companyName} - Kitap Ekle</h3>
      <input onChange={e=>setKitapAdi(e.target.value)} type="text" placeholder='Kitap Adı' />
      <input onChange={e=>setKitapYazari(e.target.value)} type="text" placeholder='Kitap Yazarı' />
      <select onChange={e=>setKitapKategorisi(e.target.value)}>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Finans</option>
        <option>Diğer</option>
      </select>
      <input onChange={e=>setKitapSayfaSayisi(e.target.value)} type="text" placeholder='Sayfa Sayısı'/>
      <input onChange={e=>setKitapResmi(e.target.value)} type="text" placeholder='Kitap Resmi (url)'/>
      <textarea onChange={e=>setKitapAciklamasi(e.target.value)} placeholder='Kitap Açıklaması'/>
      <input type="submit" value="Ekle" />
    </form>
    
  )
}

export default Forms