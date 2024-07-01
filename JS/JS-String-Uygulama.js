let myStory = "Bugün JavaScript string methodlarina calistim, string methodlari listesi yaptim, string."

console.log(myStory.length); //1.
console.log(myStory.length-1); //2.

console.log(myStory.indexOf("string")); //3.
console.log(myStory.lastIndexOf("string"));

console.log(myStory.substring(0,15)); //4.
console.log(myStory.slice(0,15)); //4.

console.log(myStory.substring(15)); //5.
console.log(myStory.slice(15)); //5.

console.log(myStory.substring(11,21)); //7.

console.log(myStory.slice(0,-5)); //8.

console.log(myStory.includes("string")); //9. soru

console.log(myStory.replaceAll("i", "ı")); //10.

console.log(myStory.replace("a", "e")); //11.

console.log(myStory.toUpperCase()); //12.

console.log(myStory.toLowerCase()); //13.

let name = prompt("Lütfen isim giriniz:"); //14.
console.log("Hosgeldiniz " + name );
let degisken = `Benim adim: ${name}`;
console.log(degisken);

let string = "  string  "; //15.
console.log(string.trimStart());
console.log(string.trimEnd());
let yeniString = string.trim();
console.log(yeniString);

console.log(degisken.slice(0, 5).toUpperCase() + degisken.slice(5)); //16.

alert(degisken); //17.


// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
// 2- Hikayenin toplam index sayısı kaçtır.
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
// 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
// 8- Son 5 karakter haric hikayenizi yazdırın.
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
// 12- Bütün metni büyük harfe çevirin.
// 13- Bütün metni küçük harfe çevirin.
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// 16- 14. sorudaki Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
// 17- Ekrana, daha öncesinde bir değişkene atadığınız bir değeri yazdıran pop-up oluşturun.

