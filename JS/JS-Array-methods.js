// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler

let myArray = ["Hivda", "Karahan", "25", "Ankara", "Çilek", "Kivi", "Mantı", "Pizza", "Mavi", "Siyah", "Resim"];

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.

myArray[0] = "Hivv";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.

console.log(myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

let newLenght = myArray.push("Kirpi");
console.log(newLenght);

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

let newLenght1 = myArray.unshift("Kedi");
console.log(newLenght1);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let silinenSon = myArray.pop();
console.log(silinenSon);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let silinenIlk = myArray.shift();
console.log(silinenIlk);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)

let newArray = [silinenIlk, silinenSon, newLenght, newLenght1];

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

let toplamDizi = [...myArray, ...newArray];

// 10- myArray içerisinde eleman olarak "Veli" var mı ?

console.log(myArray.includes("Veli"));

// 11- myArray içersinide 4.elemandan itibaren patates var mı?

console.log(myArray.slice(4).includes("patates"));

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?

let meyveArray = myArray.slice(4,6);
console.log(meyveArray[0]);

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.

let newArray1 = newArray.slice(0,3);
console.log(newArray1);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.

newArray1.splice(1, 1, 'Köpek', 'Kaplumbaga'); //değişiklik yapılacak başlangıç indeksi, kaç öge silineceği


 // 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']

//  console.log(elemanlar);

newArray1.pop();
newArray1.splice(0, 1, 'Karinca');
newArray1.push("Panda");
console.log(newArray1);

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

let newStringArr = newArray1.join(' + ');
console.log(newStringArr);
