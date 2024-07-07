for(let i = 0; i < 10; i++){
    console.log(i);
    console.log("eSb");
}
console.clear();

for(let i=0; i<100; i++){
    // if(i%10===0){
    //     console.log(i);
    // }
    i%10===0&&console.log(i);
}

console.clear();

for(let i=30; i>0; i--){
    if(i%7===0){
        console.log(i);
    }
    else{
        console.log("XXX");
    }
}
console.clear();

for(let i= 20; i > 0; i--){
    if(i===15){
        break;  //dur
    }
    console.log(i);
}

console.clear();

for(let i= 20; i > 0; i--){
    if(i===15){
        continue;  //atla
    }
    console.log(i);
}

console.clear();

//WHİLE
//forile yapılan herşey while ile de yapılır

let i=0;
while(i<10){
    console.log(i);
    i++;
}
console.clear();

// while(true){
//     let input = prompt(`
//         İşlemler
//         1- Kişi Arama
//         2 - Mesaj Gönderme
//         3 - Çikiş
//     `)
//     if(input==="1"){
//         console.clear();
//         console.log("Kişi araniyor...")
//         break;
//     }
//     else if(input==="2"){
//         console.clear();
//         console.log("Mesaj gönderiliyor...");
//         break;
//     }
//     else if(input==="3"){
//         console.clear();
//         console.log("Hoşçakalin");
//         break;
//     }
//     else{
//         console.clear();
//         console.log("Hatali metin girdiniz, tekrar deneyiniz");
//         break;
//     }
// }


//DO-WHİLE
//yanlış olsa bile yani koşul sağlanmasa bile döngü en az 1 kere çalışır
let j = 0;
do{
    console.log(j);
    j++;
}while(j<10)