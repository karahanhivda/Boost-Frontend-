import React, { useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'


const App = () => {
  const companyName = "HK Library";

  const data = [
    {
      id: "1",
      kitapAdi:"Körlük",
      kitapYazari: "Jose Saramago",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 320,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11911357/wh:true/wi:220",
      kitapAciklamasi: "Usta yazarın belki de en etkileyici yapıtı olan, sinemaya da uyarlanmış Körlük, toplumsal yaşamın nasıl bir vahşete dönüşebileceğini müthiş bir incelikle gözler önüne sererken, insana dair son umut kırıntısını da bir kadının tek başına örgütlediği dayanışma ve direniş örneğiyle sergileyen unutulmaz eserler arasında yerini almıştır."
    },
    {
      id: "2",
      kitapAdi:"Suç ve Ceza",
      kitapYazari: "Fyodor Mihailoviç Dostoyevski",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 1152,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:3846451/wh:true/wi:220",
      kitapAciklamasi: "Dostoyevski (1821-1881): Gerek 1840 ortalarından itibaren yayımlamaya başladığı Beyaz Geceler ve Öteki gibi uzun öykü-kısa romanlarıyla, gerekse ilkini elinizde tuttuğunuz Suç ve Ceza, Budala ve Karamazov Kardeşler gibi Sibirya sürgünü sonrası büyük romanlarıyla Dostoyevski, insanın karanlık yakasını kendinden sonraki bütün romancıları derinden etkileyecek biçimde dile getirmiş büyük bir 19. yüzyıl ustasıdır."
    },
    {
      id: "3",
      kitapAdi:"Kayıp Kıta Mu",
      kitapYazari: "James Churchward",
      kitapKategorisi: "Tarih",
      kitapSayfaSayisi: 400,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11673349/wh:true/wi:220",
      kitapAciklamasi: "Eskiden bilim adamları Pasifik Okyanusu’nun ortasında Mu gibi devasa bir kıtanın var olduğu fikrine oldukça kuşkuyla yaklaşıyorlardı. Ancak, bugüne dek yapılan araştırmalar sonucunda böyle bir kıtanın varlığını kanıtlayan verilere ulaşıldı.Hindistan’daki bir tapınakta bulunan ve bilgili bir rahibin yardımıyla şifreleri çözülen kutsal tabletler bu veriler arasında önemli bir yer tutar. Valmiki’nin kaleme aldığı klasik Hint destanı Ramayana gibi metinlerde de Mu’nun varlığı teyid edilir. Valmiki, ayrıca Ramayana’da Nakalların Burma’ya Pasifik Okyanusu’ndan geldikleri bilgisini de verir."
    },
    {
      id: "4",
      kitapAdi:"Doğru Hisse Seçimi",
      kitapYazari: "Çağlar Doğru, Serkan Ünal",
      kitapKategorisi: "Finans",
      kitapSayfaSayisi: 137,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11595665/wh:true/wi:220",
      kitapAciklamasi: "Günümüzde teknolojinin gelişimi finansal tablo analizini oldukça kolay, anlaşılır ve yaygın olarak ulaşılabilir hale getirmiştir. Diğer yandan şirketler hakkındaki bilgileri kamuya duyurulmadan önce içeriden öğrenme avantajı olan oyuncuların bu ortamda önemli bir avantajı söz konusudur. Bu koşullar, yatırımcılar arasındaki rekabet şartlarını ağırlaştırmakta ve sadece finansal tablo okuyarak, makro haber akışını takip ederek ve geleceğe dönük kısa vadeli tahminler yaparak başarılı olma şansını zamanla daha da düşürmektedir. Bu ortamda yalnızca finansal tablolara odaklanmak yerine, bir şirketin başarıya ulaşmasına etki eden faktörleri anlamak, tanımlamak ve buna göre yatırım stratejisi belirlemek; yatırımcıları rakiplerine kıyasla daha avantajlı bir pozisyona taşıyacaktır. Bu doğrultuda kitabın yazarları, yıllardır akademideki araştırmaları sırasında ve borsada yatırım yaparken elde ettikleri bilgi ve pratik tecrübeyi paylaşarak, okuyucunun şirket analiz bakış açısını geliştirmeyi hedeflemektedirler."
    },
    {
      id: "5",
      kitapAdi:"Veri Bilimi",
      kitapYazari: "Engin Bozaba",
      kitapKategorisi: "Yazılım",
      kitapSayfaSayisi: 280,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11587660/wh:true/wi:220",
      kitapAciklamasi: "Bu kitap ile Python programlama bilginizi kullanarak Veri Bilimi dünyasına ilk adımınızı atacaksınız. Kitapla birlikte başlangıç seviyesinden basamak basamak çıkarak uçtan uca bir veri bilimi proje geliştirebileceksiniz. Ve aynı zamanda bu yolda kullanacağımız araçları, kütüphaneleri ve yöntemleri beraber deneyimleyeceğiz. Ama bu kitap sadece sizin için bir başlangıçtır. Çünkü asıl kazanımlarınızı kitap sonrası kendi başınıza veya ekibinizle geliştirdiğiniz projelerde elde edeceksiniz."
    },
    {
      id: "6",
      kitapAdi:"İyi Hissetmek",
      kitapYazari: "Dr. David Burns",
      kitapKategorisi: "Psikoloji",
      kitapSayfaSayisi: 632,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11261099/wh:true/wi:256",
      kitapAciklamasi: "İşte size iyi bir haber; kendinizi kaygı, suçluluk, kötümserlik, erteleme, düşük benlik saygısı ve depresyonun diğer dipsiz kuyu lardan ilaçsız kurtarabilirsiniz! İyi Hissetmek'te, psikiyatrisst David Burns duygularınızı harekete geçirecek ve hayata daha olumlu bakmanızı sağlayacak, bilimsel olarak test edilmiş teknikler sunuluyor.Duygudurumunuzdaki dalgalanmaların nedenlerini anlayın, Olumsuz fikirleri kafanızdan silip atın, Suçluluk duygunuzla başa çıkın, Sevgi ve onay bağımlılığınızın üstesinden gelin, Özgüveninizi arttırın, Hiç bir şey yapmamak ile baş edin, Depresyonun acı veren girdabından kurtulun, Okunacak ve tekrar okunacak bir kitap!"
    },
    {
      id: "7",
      kitapAdi:"Uçurtma Avcısı",
      kitapYazari: "Khaled Hosseini",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 375,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11870173/wh:true/wi:220",
      kitapAciklamasi: "Emir ve Hasan, Kabil'de monarşinin son yıllarında birlikte büyüyen iki çocuk... Aynı evde büyüyüp, aynı sütanneyi paylaşmalarına rağmen Emir'le Hasan'ın dünyaları arasında uçurumlar vardır: Emir, ünlü ve zengin bir işadamının, Hasan ise onun hizmetkârının oğludur. Üstelik Hasan, orada pek sevilmeyen bir etnik azınlığa, Hazaralara mensuptur. Çocukların birbirleriyle kesişen yaşamları ve kaderleri, çevrelerindeki dünyanın trajedisini yansıtır. Sovyetler işgali sırasında Emir ve babası ülkeyi terk edip California'ya giderler. Emir böylece geçmişinden kaçtığını düşünür. Her şeye rağmen arkasında bıraktığı Hasan'ın hatırasından kopamaz. Uçurtma Avcısı arkadaşlık, ihanet ve sadakatin bedeline ilişkin bir roman. Babalar ve oğullar, babaların oğullarına etkileri, sevgileri, fedakârlıkları ve yalanları... Daha önce hiçbir romanda anlatılmamış bir tarihin perde arkasını yansıtan Uçurtma Avcısı, zengin bir kültüre ve güzelliğe sahip toprakların yok edilişini aşama aşama gözler önüne seriyor."
    },
    {
      id: "8",
      kitapAdi:"Şeker Portakalı",
      kitapYazari: "Jose Mauro De Vasconcelos",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 184,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:11462950/wh:true/wi:220",
      kitapAciklamasi: " “Ne güzel bir şeker portakalı fidanıymış bu! Hem bak, dikeni de yok. Pek de kişilik sahibiymiş, şeker portakalı olduğu ta uzaktan belli. Ben senin boyunda olsaydım başka şey istemezdim.” “Ama ben büyük bir ağaç istiyordum.” “İyi düşün, Zezé. Henüz gencecik bir fidan bu. Bir gün koca bir ağaca dönüşecek. Seninle beraber büyüyecek. İki kardeş gibi iyi anlaşacaksınız. Dalını gördün mü? Bir tanecik dalı olsa da sanki özellikle senin binmen için hazırlanmış bir ata benziyor.” Brezilya edebiyatının klasiklerinden Şeker Portakalı, José Mauro de Vasconcelos’un başyapıtı kabul edilir. Yetişkinler dünyasının sınırlamalarına hayal gücüyle meydan okuyan Zezé’nin yoksulluk, acı ve ümit dolu hikâyesi yazarın çocukluğundan derin izler taşır. Beş yaşındaki Zezé hemen her şeyi tek başına öğrenir: sadece bilye oynamayı ve arabalara asılmayı değil, okumayı ve sokak şarkıcılarının ezgilerini de. En yakın sırdaşıysa, anlattıklarına kulak veren ve Minguinho adını verdiği bir şeker portakalı fidanıdır…"
    }

  ]

  const [kitaplar, setKitaplar] = useState(data);

  const kitapEkle = (yeni) => {
    setKitaplar([...kitaplar, yeni])
  }

  const kitapSil = (id) => {
    setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id !== id))
  }

  return (
    <>
      <Navi navHead = {companyName}/>
      <Forms companyName = {companyName} kitapEkle={kitapEkle} kitaplar={kitaplar} /> 
      <CardList kitaplar = {kitaplar} kitapSil={kitapSil}/>
      {companyName} 
    </>
  )
}

export default App