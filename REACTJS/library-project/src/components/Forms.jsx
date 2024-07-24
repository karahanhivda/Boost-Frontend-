import React, { useState } from 'react'
import '../assets/style/forms.scss'

const Forms = ( {companyName, kitapEkle, kitaplar} ) => {
const [kitapAdi, setKitapAdi] = useState("");
const [kitapYazari, setKitapYazari] = useState("");
const [kitapKategorisi, setKitapKategorisi] = useState("Kategori Seçiniz");
const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState("");
const [kitapResmi, setKitapResmi] = useState("");
const [kitapAciklamasi, setKitapAciklamasi] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  kitapEkle({
    id: (Number(kitaplar[kitaplar.length-1].id)+1).toString(),
    kitapAdi: kitapAdi,
    kitapYazari: kitapYazari,
    kitapKategorisi: kitapKategorisi,
    kitapSayfaSayisi: kitapSayfaSayisi,
    kitapResmi: kitapResmi,
    kitapAciklamasi: kitapAciklamasi
  });
  setKitapAdi("");
  setKitapYazari("");
  setKitapKategorisi("Kategori Seçiniz");
  setKitapResmi("");
  setKitapSayfaSayisi("");
  setKitapAciklamasi("");
} 

  return (
    <form onSubmit={handleSubmit}>
      <h3>{companyName} - Kitap Ekle</h3>
      <input value={kitapAdi} onChange={e=>setKitapAdi(e.target.value)} type="text" placeholder='Kitap Adı' />
      <input value={kitapYazari} onChange={e=>setKitapYazari(e.target.value)} type="text" placeholder='Kitap Yazarı' />
      <select value={kitapKategorisi} onChange={e=>setKitapKategorisi(e.target.value)}>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Finans</option>
        <option>Diğer</option>
      </select>
      <input value={kitapSayfaSayisi} onChange={e=>setKitapSayfaSayisi(e.target.value)} type="text" placeholder='Sayfa Sayısı'/>
      <input value={kitapResmi} onChange={e=>setKitapResmi(e.target.value)} type="text" placeholder='Kitap Resmi (url)'/>
      <textarea value={kitapAciklamasi} onChange={e=>setKitapAciklamasi(e.target.value)} placeholder='Kitap Açıklaması'/>
      <input type="submit" value="Ekle" />
    </form>
    
  )
}

export default Forms