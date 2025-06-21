// Sonni 2 ga Ko'paytirib Beradi

function twoTimes(x) {
  return x * 2;
}
// console.log(twoTimes(5));

// Ob Havoni Hisoblaydi

function toCelsius(f) {
  return ((f - 32) * 5) / 9;
}
// console.log(toCelsius(100));

// Juft Yoki Toqligini Aniqlaydi

function isEven(num) {
  return num % 2 === 0;
}
// console.log(isEven(2));

// Toq Sonni Aniqlovchi

function isOdd(num) {
  return num % 2 === 1;
}
// console.log(isOdd(3));

// Tepadagi Funksiyani If Else Bilan Yozilishi

function issOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
// console.log(isOdd(3));

// Berilgan Sonni Kvadratini Hisoblaydi

function square(num) {
  return num * num;
}
// console.log(square(10));

// Foydalanuchi Ismini Olib Unga Salom Beradigan

function greetUser(name) {
  return "Salom, " + name + "!";
}
// console.log(greetUser("Bahodirxon"));

// Age True / False

function isAdult(age) {
  return age >= 18;
}
// console.log(isAdult(19));

// Vazifasi: Ikki sonni solishtirib, eng kattasini qaytarsin.

function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// console.log(getMax(5, 9));

//                                                   Masla Ishlashni O'rganish

// Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30

function rectangle(a, b) {
  let yuza = a * b; // Yuzasini Topish Uchun Berilgan Inputni Bir Biriga  Ko'paytiriladi
  let perimetr = 2 * (a + b); // Perimetrini Topish Uchun
  return yuza + " ," + perimetr; // Biri Birini Yonma Yon Chiqarish uchun
}
// console.log(rectangle(6, 9));

// Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)

function triangle(a) {
  let perimetr = 3 * a;
  let yuza = (Math.sqrt(3) / 4) * a * a; // Math.sqrt(3) — bu 3 ning kvadrat ildizi     a * a — a ning kvadrati
  return yuza.toFixed(2) + ", " + perimetr; //  .toFixed(2) — yuzani 2 xonagacha kesadi (masalan, 15.588457 → 15.59)
}
// console.log(triangle(6));

// Func3.  1 dan n ga sonlar yig’indisini qaytaruvchi sum(n) nomli funksiya hosil qiling. QY

function sum(n) {
  let yigindi = 0; //  Yig'indini saqlash uchun o'zgaruvchi  (for) 1 dan n gacha bo'lgan sonlarni ketma-ket aylanish
  for (let i = 0; i <= n; i++) {
    yigindi += i; //  3. Har bir sonni yig'indiga qo'shish (yigindi = yigindi + i)
  }
  return yigindi; //  Oxirida yig'indini qaytarish
}
// console.log(sum(5));

// Yoshini Aytib Beraddigan Funksiya

function calcAge(birthYear, firstName) {
  const age = 2025 - birthYear;
  console.log(`${firstName} Siz ${age} Yoshdasiz`);
  return age;
}
// const age = calcAge(2006, "Bahdirxon");

//                                        [ARRAY]

// let mevalar = ["olma", "banan", " uzum"];
// mevalar.push("gilos"); // Oxiriga Qo'shadi
// // mevalar.pop(); //  Oxiridagini O'chiradi
// mevalar.unshift("O'rik"); // Boshiga Qo'shadi
// mevalar.shift(0); // O'chiradi
// console.log(mevalar);
// console.log(mevalar.includes("banan")); // Bor Yo'qligini Tekshiradi
// console.log(mevalar.includes("olma"));

//                                      [ARRAY UCHUN OSON MASALALAR]

// Arr.1 Oxiriga 'Gilos'ni Qo'shish

// let mevalar = ["olma", "banan"];
// mevalar.push("Gilos");
// console.log(mevalar);

// Arr.2 Boshidagi elementni olib tashlash

// let sonlar = [10, 20, 30];
// sonlar.shift(0);
// console.log(sonlar);

// Arr.3  Massivdagi elementni chiqarish

// let ranglar = ["qizil", "yashil", "ko'k"];
// console.log(ranglar[1]);

// Arr.4   Element borligini tekshirish

// let shaharlar = ["Toshkent", "Samarqand", "Buxoro"];
// console.log(shaharlar.includes("Xiva"));

// Arr.5  Massiv uzunligini topish

// let raqamlar = [1, 2, 3, 4, 5];
// console.log(raqamlar.length);

// Arr.5  Juft sonlarni chiqarish

// let sonlar = [1, 4, 7, 10, 13, 16];

// for (let i = 0; i < sonlar.length; i++) {
//   if (sonlar[i] % 2 === 0) {
//     console.log(sonlar[i]);
//   }
// }

// Arr.6 Massiv elementlarini teskari chiqarish

// let harflar = ["a", "b", "c", "d"];
// console.log(harflar.reverse());

// Arr.7  Massivdagi elementlarni 2 ga ko‘paytirish

// let sonlar = [2, 4, 6];
// let yangiMassiv = [];

// for (let i = 0; i < sonlar.length; i++) {
//   yangiMassiv.push(sonlar[i] * 2);
// }
// console.log(yangiMassiv);

// Arr.8  Massivda so‘z borligini tekshiruvchi funksiya yozing

// let soz = prompt("Qaysi Meva Kerak");
// let mevalar = ["olma", "banan", "gilos"];
// if (mevalar.includes(alert)) {
//   console.log("Bor");
// } else {
//   console.log("Yo'q");
// }

// forEach

// const ismlar = ["ahror", "doniyor", "asror", "asad"];
// const newIsmlar = [];

// ismlar.forEach(function (ism) {
//   const newIsm =
//     ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + "bek";
//   newIsmlar.push(newIsm);
// });
// console.log(newIsmlar);

// const mehmonlar = ["aziz", "akrom", "ahror", "asror"];
// const newMehmonlar = [];

// mehmonlar.forEach(function (mehmon) {
//   const newMehmon =
//     mehmon.charAt().toUpperCase() + mehmon.slice(1).toLowerCase() + "xon";
//   newMehmonlar.push(newMehmon);
// });
// console.log(newMehmonlar);

//      Object
const movies = [
  { name: "Avatar", Layklar: 777 },
  { name: "Indiana Jons", Layklar: 500 },
  { name: "Ip man", Layklar: 200 },
  { name: "Snayper", Layklar: 500 },
];
// movies.forEach((allMovie) => {
//   const result = `Kino Nomi: ${allMovie.name}, ${allMovie.Layklar} ta Layk Yeg'gan `;
//   console.log(result);
// });

const user = {
  name: "Bahodirxon",
  family: "Mahmudov",
  age: 19,
  number: 998775007434,
  location: "Farg'ona",
  email: "bahodirxon.nahnudov1@gmail.com",
  movies: [
    { name: "Avatar", rate: 9 },
    { name: "Snayper", rate: 7 },
    { name: "Indiana Jons", rate: 8 },
  ],
  // login: function () {
  //   console.log("Siz Bu Saytdagi Sahifangizga Kirdingiz");
  // },
  // logout: function () {
  //   console.log("Siz Bu Saytdagi Sahifangizdan Chiqib Ketdingiz");
  // },
};
// user.logout();
// user.login();
const moviesText = "ning Yoqtirgan Kinolari";
// console.log(user.name, moviesText, user.movies);

const cars = [
  { name: "Mersedez-Benz", price: 15000 },
  { name: "Toyoyta", price: 10000 },
  { name: "Lexus", price: 7000 },
  { name: "Chevrolet", price: 5000 },
  { name: "Audi", price: 3000 },
];
// cars.forEach((car) => {
//   const result = `Avtomobil Markasi ${car.name}, Narxi ${car.price}`;
//   console.log(result);
// });

// textContent
const title = document.getElementById("title");
title.textContent += " New Developer";

const list = document.querySelectorAll("#list");
list.forEach((item) => {
  item.textContent += " Darslari";
});

// innerHTML
const names = ["Asror", "Ahror", "Akrom"];
const ul = document.querySelector("ul");

names.forEach((name) => {
  ul.innerHTML += `<li>${name}</li>`;
});

const newList = document.querySelector("#title");
console.log(newList.style);
newList.style.color = "red";
newList.style.margin = "50px";
