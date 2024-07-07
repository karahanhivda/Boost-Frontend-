// 1 - function decleration
//fonksiyonlar invoke edilmeden çalışmazlar! (fonksiyon invoke edilmesi = çağrılması)
//hoisting özelliği vadır => tanımlanmadan invoke edilebilir

yazdir(); // hoisting 
function yazdir(){
    console.log("Yazdirma işlemi yapildi!");
}
yazdir();

function kare(sayi){
    console.log(sayi**2);
}
kare(3);
kare(12);

function kup(sayi){
    return sayi**3;
}
kup(4);
console.log(kup(4));

kare(kup(3));

//argüman ve parametre farkı => argüman fonknun aldığı parametre değeridir
// sayi bir parametredir, 4 bir argümandır

// 2 - function expression ----- tanımlamadan erişilemez, hoisting yoktur

const print = function(){
    console.log("printing...");
}
print();

const welcome = function(isim, soyisim){
    return "merhaba " + isim + " " + soyisim;
}
console.log(welcome("hivda", "karahan"));

console.clear();

const selamlama = function(isim = "Ziyaretçi"){
    console.log(`Hoşgeldiniz, ${isim}`);
}
selamlama("Hivda");
selamlama();
console.clear();


// const birth = function(){
//     let input = Number(prompt("Doğum yili: "));
//     return 2024-input;
// }
// // console.log(birth());

// let birthdate = Number(prompt("Yil: "));
// const birth2 = function(year){
//     return 2024-year;
// }

// console.log(birth2(birthdate));


//ES6 expression function ARROW FUNC(fat arrrow =>)
let hello = function(fullName){return "Hoşgeldiniz " + fullName} 

// hello = (fullName) => {return "Hoşgeldiniz " + fullName}
// hello = fullName => {return "Hoşgeldiniz " + fullName}
hello = fullName => "Hoşgeldiniz " + fullName // returnde tek ifade varsa return ve süslü paranteze ihtiyaç yok

console.log(hello("eSb"));

let pow = x=>x**2;
console.log(pow(8));

// function pow(x){ //yukarıdaki arrow functionın decleration func hali
//     return x**2;
// }
// console.log(pow(8));

let powSec = (x,y) =>x**y;
console.log(powSec(2,3));
console.clear();


// 3 - IIFE (inmediately invoked function expression) -> anında tetiklenen

(
    function(first, second){
        console.log(first,second);
    }
)("bilgeadam", "ank16")


//callBack
const hesapla = (sayi1, sayi2, opr)=>{
    if(opr==="topla"){
        return sayi1+sayi2;
    }
    else if(opr==="çıkar"){
        return sayi1-sayi2;
    }
    else if(opr==="çarp"){
        return sayi1*sayi2;
    }
    else if(opr==="böl"){
        return sayi1/sayi2;
    }
    else{
        console.log("Hatalı işlem");
    }
}
console.log(hesapla(10,2,"topla"));

const topla = (x,y) => x+y;
const cikar = (x,y) => x-y;
const carp = (x,y) => x*y;
const bol = (x,y) => x/y;

const calculate = (a,b,cb) => cb(a,b)
console.log(calculate(10,2,topla));