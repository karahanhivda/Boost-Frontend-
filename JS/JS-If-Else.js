// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

let sayi = 6;
if(sayi > 0){
    console.log(`${sayi} pozitif bir sayidir.`);
}
else if(sayi < 0){
    console.log(`${sayi} negatif bir sayidir.`);
}
else{
    console.log(`${sayi} sifirdir.`);
}



// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

let sayi1=6;
let sayi2=16;
if(sayi1>sayi2){
    console.log(`${sayi1} büyüktür.`);
}
else if(sayi1<sayi2){
    console.log(`${sayi2} büyüktür.`);
}
else{
    console.log(`${sayi1} = ${sayi2}`);
}

// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

// let string = "makam";   //"javascript";
// let newString = string.split("").reverse().join("");
// if(string === newString){
//     console.log(`${string} kelimesi palindromdur.`);
// }
// else{
//     console.log(`${string} kelimesinin tersi ${newString} olduğundan palindrom değildir.`);
// }

// 4- VKI Hesabı
//Kullanıcıdan boy,kilo,yaş,cinsiyet
//VKI = kilo/(boy/100)**2
//18,5 düşükse zayıf
//18,5 ile 24,9 arası normal
//25 ile 29,9 arası kilolu
//30 ile 34,9 arası obez
//35 üstü ise aşırı obez
//Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.

//50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
//60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!


// let boy = prompt("Lütfen boyunuzu cm cinsinden giriniz: ");
// let kilo = prompt("Lütfen kilonuzu kg cinsinden giriniz: ");
// let yas = prompt("Lütfen yasinizi giriniz: ");
// let vki = kilo/(boy/100)**2;
// if(vki<=18.5){
//     console.log("Zayif");
// }
// else if(vki>18.5 && vki<=24.9){
//     console.log("Normal");
// }
// else if(vki>24.9 && vki<=29.9){
//     console.log("Kilolu");
// }
// else if(vki>29.9 && vki<=34.9){
//     console.log("Obez");
// }
// else{
//     console.log("Asiri obez");
// }



// 5- Hesap Makinesi
// Kullanıcıdan iki sayı ve bir işlem türü (+, -, *, /) girmesini isteyin. Girilen işlem türüne göre iki sayı üzerinde matematiksel işlem gerçekleştirin ve sonucu gösterin. Eğer kullanıcı geçersiz bir işlem türü girerse, hata mesajı verin.

// let num1 = Number(prompt("Birinci sayiyi giriniz: "));
// let num2 = Number(prompt("İkinci sayiyi giriniz: "));
// let operator = prompt("Yaptirmak istediginiz islemi giriniz (+, -, *, /) : ")
// let result;
// if(operator == "+"){
//     result = num1 + num2;
// }
// else if(operator == "-"){
//     result = num1 - num2;
// }
// else if(operator == "*"){
//     result = num1 * num2;
// }
// else if(operator == "/"){
//     result = num1 / num2;
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`);


