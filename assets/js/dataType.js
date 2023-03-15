//NUMBER
let bil1 = 25;
let bil2 = 15;

//untuk mengetahui type bilangan
console.log(typeof bil1);
console.log(typeof bil2);
console.log(25 + 15);

let hasil = "Jumlah" + bil1;
console.log(typeof hasil);
console.log(hasil);

//String
let nama1 = "Anatasya";
let nama2 = "Eka";

console.log(nama1 + " dan " + nama2);

//BOLEEAN
let benar = true;
let salah = false;

let angka1 = 5;
let angka2 = 3;

console.log(angka1 + ">" + angka2 + "=" + benar);

//NULL
let boyfriend = null;
console.log(boyfriend);

//UNDEFINED
let name;
console.log(name);

//SYMBOL
let employee = Symbol("joko");

console.log(employee);
console.log(employee.description);

//OBJECT
let Data = {
    name: "Anastasya",
    age: 20,
    job: "web developer",
    isMarried: false,
    hobies: ["Cooking"],
};

console.log("My name is ${object.name} and me ${object.age} years old.");