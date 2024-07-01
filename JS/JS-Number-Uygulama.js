// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.

let sayi = -6;
let yeniSayi = Math.abs(sayi);
console.log(yeniSayi);

// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.

let sayi1 = 0.6688;
let yeniSayi1 = Math.ceil(sayi1);
console.log(yeniSayi1);

// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.

console.log(Math.floor(sayi1));

// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
 
console.log(Math.max(6, 15, -7, 0, 80, -35));

// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.

console.log(Math.min(6, 15, -7, 0, 80, -35));

// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.

console.log(sayi1.toFixed(3));

// 7-) bir sayının karekökünü bulun.

console.log(Math.sqrt(36));

// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)

console.log(Math.pow(2, 4)); 

// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.

let sayi2 = 123.456789;
console.log(sayi2.toPrecision(6));

// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.

console.log(parseInt(123.456789));
console.log(Math.trunc(123.456789));

// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)

console.log(Math.ceil(Math.random()*100));