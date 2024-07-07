let myArray = [];
console.log(myArray); 

let myArraySecond = new Array(); // daha az kullanılan array oluşturma yöntemi
console.log(myArraySecond);

let students = ["Erdem", "Ahmet", "Mehmet", "Ayşe"];
let numbers = [1,2,3,4,5,6,7,8,9];
let multiArray = ["Hivda", 34434, true, [1,2,3], {key1: "value1"}, null]

console.table(students);
console.table(numbers);
console.table(multiArray);
console.clear();

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[students.length-1]);
console.clear();

let fruits = ["Karpuz", "Kayısı", "Elma", "Armut", "Kiraz"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[4]);
fruits[4]="Vişne";
console.log(fruits);
console.log(fruits[4]);
fruits[5]="Kiraz";
console.log(fruits); 

// fruits[15]="Kiraz" // gereksiz boş slot oluşturur

console.clear();

console.log(fruits)


//PUSH metodu
//elemanları sona ekler

fruits.push("Erik");
console.log(fruits);
console.log(fruits.push("Çilek")); //metod loglanırsa yeni lengthi yazdırır !!!!
console.log(fruits);


//POP() sondan silme yapar
fruits.pop();
console.log(fruits);
console.log(fruits.pop()); //metod loglanırsa silinen elemanı döner, ama önce siler sonra sildiğini gösterir, yani son sildiğini göstermek yerine tekrar siler sonra döner
console.log(fruits);


//UNSHIFT() başa eleman ya da elemanları ekler  
fruits.unshift("Havuç", "Muz");
console.log(fruits);
console.log(fruits.unshift("Havuç", "Muz"));