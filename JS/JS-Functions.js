// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

const carpim = (a, b) => a * b;

console.log(carpim(4, 4)); 

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.

const kelimeSayisi = (cumle) => cumle.trim().split(' ').length;

console.log(kelimeSayisi("Bu bir örnek cümle"));


// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
let carpimm = 1;
function faktoriyel(sayi){
    if(sayi === 0 || sayi === 1)
        return 1;
    for (let i = 1; i <= sayi; i++) {
        carpimm *= i;
    }
    return carpimm;
}
console.log(faktoriyel(4));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

const asalMi = function(num) {
    for (let i = 2; i * i <= num; i ++) {
        if(num % i === 0)
            return console.log("Asal değildir");
    }
    return console.log("Asal");
};
console.log(asalMi(19));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

function enBuyukSayi(dizi){
    let enBuyuk = dizi[0];
    for (let i = 1; i <= dizi.length-1; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
}
console.log(enBuyukSayi([0, 1, 2, 3, 4, 5]));


// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

function topla(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += i;
    }
    return sum;
}
console.log(topla([0, 1, 2, 3, 4, 5]));

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

//5
const enBuyukSayi = (dizi) => {
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) { 
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
};

console.log(enBuyukSayi([0, 1, 2, 3, 4, 5])); 


//6
const topla = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]; // Dizinin elemanlarını toplamak için array[i] kullanmalısınız, i değil
    }
    return sum;
};

console.log(topla([0, 1, 2, 3, 4, 5])); // 15


// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

const tersCevir = (str) => str.split('').reverse().join('');

console.log(tersCevir("javascript")); 

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.



// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)




// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.