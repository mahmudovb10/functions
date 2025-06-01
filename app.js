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
