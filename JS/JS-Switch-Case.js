// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

// let ay = prompt("Gününü ögrenmek istediginiz ayin adini giriniz: ").toLowerCase();
// switch(ay){
//     case "ocak":console.log("31 gün");break;
//     case "şubat":console.log("28 gün");break;
//     case "mart":console.log("31 gün");break;
//     case "nisan":console.log("30 gün");break;
//     case "mayıs":console.log("31 gün");break;
//     case "haziran":console.log("30 gün");break;
//     case "temmuz":console.log("31 gün");break;
//     case "ağustos":console.log("31 gün");break;
//     case "eylül":console.log("30 gün");break;
//     case "ekim":console.log("31 gün");break;
//     case "kasım":console.log("30 gün");break;
//     case "aralık":console.log("31 gün");break;
//     default: console.log("Hatalı metin girdiniz!");
// }



// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin. 

let markaString = prompt("Marka bilgisini giriniz (Bmw, Mercedes, Audi): ").toUpperCase();
let renkString = prompt("Renk bilgisini giriniz (Siyah, Beyaz, Mavi, Kırmzı): ").toLowerCase();
let stokDurumu;
switch(markaString){
    case "BMW" :
        switch(renkString){ 
            case "mavi": stokDurumu = "stokta var"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`); break;
            case "beyaz": stokDurumu = "stokta var"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`); break;
            case "siyah": stokDurumu = "stokta var"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`); break;
            case "kırmızı":stokDurumu = "stokta yok"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`);break;
            default: console.log("Hatalı renk bilgisi girdiniz!");
        }
    break;
    case "MERCEDES" :
        switch(renkString){ 
            case "mavi": stokDurumu = "stokta yok"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`);break;
            case "beyaz": stokDurumu = "stokta yok"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`);break;
            case "siyah": stokDurumu = "stokta var"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`);break;
            case "kırmızı":stokDurumu = "stokta yok"; console.log(`${markaString} markasının ${renkString} rengi ${stokDurumu}.`);break;
            default: console.log("Hatalı renk bilgisi girdiniz!");
        }
    break;
    case "AUDİ" :
        switch(renkString){ 
            case "mavi": stokDurumu = "stokta var"; break;
            case "beyaz": stokDurumu = "stokta yok"; break;
            case "siyah": stokDurumu = "stokta yok"; break;
            case "kırmızı":stokDurumu = "stokta var"; break;
            default: console.log("Hatalı renk bilgisi girdiniz!");
        }
    break;
    default: console.log("Hatalı marka bilgisi girdiniz!");
}