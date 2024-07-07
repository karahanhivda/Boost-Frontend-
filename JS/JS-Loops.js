// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangicSayi = Number(prompt("Başlangic icin sayi giriniz: "));
// let bitisSayi = Number(prompt("Bitis icin sayi giriniz: "));
// let toplam = 0;
// for (let index = baslangicSayi; index <= bitisSayi; index++) {
//     toplam += baslangicSayi;
// }
// console.log(`${baslangicSayi} sayisindan ${bitisSayi} sayisina kadar olan sayilarin toplami ${toplam}'dir.`);


// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let ogrenciNotu;
// let toplamm = 0;
// let ortalama;
// let sayac = 0;
// for (let i = 1;  i<=5; i++) {
//     ogrenciNotu = Number(prompt(`${i}. öğrenci için not giriniz: `));
//     toplamm += ogrenciNotu;
//     if(ogrenciNotu<60){
//         sayac += 1;
//     }
// }
// ortalama = toplamm /5;
// console.log(`Ortalama: ${ortalama}`);
// console.log(`Kalan öğrenci sayisi: ${sayac}`);


// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

let randomSayi = Math.ceil(Math.random()*10 + 1);
console.log(randomSayi);
let tahminiSayi;
let sayac =3;
while (sayac>0) {
    tahminiSayi = Number(prompt("1-10 arasinda bir sayi giriniz: "));
    if(tahminiSayi===randomSayi){
        console.log("Doğru!");
        break;
    }
    else{
        sayac--;
        console.log(`${sayac} kadar hakkınız kaldı.`);
    }
}


// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

