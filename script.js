/* 
    Sintaks untuk print di Console
*/
// console.log('Hello'); 

/* 
    Sintaks untuk menampilkan alert di browser
*/
// window.alert('This is an alert');

/* 
Sintaks untuk input kalimat ke content tag html
*/ 
// document.getElementById('myH1').textContent = 'Hello!';
// document.getElementById('myP').textContent = 'I like pizza!';

/* 
    Variable,
    - Declaration
    - Assignment
    - Typeof
    - Print didalem string
    - Datatypes
*/
// let age = 25;
// let price = 10.99;
// let gpa = 3.67;

// console.log(`You are ${age} years old`);
// console.log(`Harganya Rp.${price}`);
// console.log(`IPK akhir saya ${gpa}`);

// let nama = 'Daffa';

// console.log(typeof nama);
// console.log(`nama saya ${nama}`)

// let x = false;
// console.log(`Bro is online: ${x}`)


/* 
Ganti isi elemen dari html pake js,
bisa pake innerHTML atau textContent,
nowadays harusnya pake textContent karena innerHTML gaaman
*/
// let nama = 'Daffa Arga';
// let umur = 23;
// let mahasiswa = false;

// document.getElementById('p1').innerHTML = `Nama anda adalah ${nama}`;
// document.getElementById('p2').textContent = `Umur anda ${umur}`;
// document.getElementById('p3').textContent = `Enroll: ${mahasiswa}`;

/* 
    Aritmatika, + - * / **
*/

// let siswa = 30;

// siswa **= 2;
// siswa++;

// console.log(siswa)

/* 
    Kurung dalam matematika,
    kuadrat, kali, bagi, kurang tambah
*/

// let res = 1 +  2 * 3 + 4 ** 2;

// console.log(res);

/* 
    Menerima inputan dari user
    - dari window.prompt
    - dari html textbox
*/

// let username = window.prompt('Nama kamu syp');
// window.alert(`nama kamu ${username}`);

// let username;
// document.getElementById('mySubmit').onclick = function() {
//     username = document.getElementById('myText').value;
//     document.getElementById('myH1').textContent = `Welcome, ${username}`;
// }

/* 
    dataatype conversion
*/

// let age = window.prompt('berapa umur lu?');
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

/* 
    const, variable yg tetap gabisa diganti
*/

// const phi = 3.14;
// let keliling;
// let Jarijari;

// document.getElementById('mySubmit').onclick = function() {
//     Jarijari = document.getElementById('myJarijari').value;
//     Jarijari = Number(Jarijari);

//     keliling = 2 * phi * Jarijari;
//     document.getElementById('myH4').textContent = `Keliling lingkaran adalah: ${keliling}`;
// }

/* 
    Program Counter Sederhana
*/

// const angka = document.getElementById('angka');
// const kurang = document.getElementById('kurang');
// const reset = document.getElementById('reset');
// const tambah = document.getElementById('tambah');
// let count = 0;

// kurang.onclick = function() {
//     count -= 1231;
//     angka.textContent = count;
// }

// reset.onclick = function() {
//     count = 0;
//     angka.textContent = count;
// }

// tambah.onclick = function() {
//     count += 31399319;
//     angka.textContent = count;
// }

/*
    Library Math
*/

// let random = Math.floor(Math.random()  * 100);

// console.log(random);

// const myButton = document.getElementById('myButton');
// const myLabel1 = document.getElementById('myLabel1');
// const myLabel2 = document.getElementById('myLabel2');
// const myLabel3 = document.getElementById('myLabel3');

// const min = 1;
// const max = 6;

// let random1;
// let random2;
// let random3;

// myButton.onclick = () => {
//     random1 = Math.floor(Math.random() * max) + min;
//     random2 = Math.floor(Math.random() * max) + min;
//     random3 = Math.floor(Math.random() * max) + min;
//     myLabel1.textContent = random1;
//     myLabel2.textContent = random2;
//     myLabel3.textContent = random3;
// }

/*
    IF ELSE
*/

// const myInput = document.getElementById('myInput');
// const submit = document.getElementById('submit');
// const hasil = document.getElementById('hasil');

// let age;

// submit.onclick = () => {
//     age = Number(myInput.value);
//     console.log(age, typeof age);

//     if (age >= 18) {
//         hasil.textContent = `Kamu berhak mengemudi`;
//     }
//     else if (age == 0) {
//         hasil.textContent = `Umur harus diatas 0`;
//     }
//     else if (age < 0) {
//         hasil.textContent = `Kamu belum cukup umur!`;
//     }
//     else {
//         hasil.textContent = `kamu goblok`;
//     }
// }

/*
    Checked Propertym checkbox,
    and Ternary also
*/

// const myCheckbox = document.getElementById('myCheckbox');
// const visaButton = document.getElementById('visaButton');
// const mastercardButton = document.getElementById('mastercardButton');
// const paypalButton = document.getElementById('paypalButton');
// const mySubmit = document.getElementById('mySubmit');
// const subResult = document.getElementById('subResult')
// const paymentResult = document.getElementById('paymentResult');

// mySubmit.onclick = () => {
//     subResult.textContent = myCheckbox.checked 
//     ? `You are subscribed!` : `You are NOT subscribed!`;

//     paymentResult.textContent = 
//     visaButton.checked ? `You are paying with Visa` : 
//     mastercardButton.checked ? `You are paying with Mastercard` : 
//     paypalButton.checked ? `You are paying with Paypal` : 
//     `Select one please!`;
// }

/*
    Switch case, buat mencegah if else yang kebanyakan
*/

// const myDay = document.getElementById('myDay');
// let day = 4;

// switch(day) {
//     case 1:
//         myDay.textContent = `Sekarang hari Senin`;
//         break;
//     case 2:
//         myDay.textContent = `Sekarang hari Selasa`;
//         break;
//     default:
//         myDay.textContent = `${day} bukan hari!`;
// }

/*
    String methods
*/

// let username = "daffaarga";

// console.log(username.charAt(0));
// console.log(username.indexOf('d'));
// console.log(username.lastIndexOf('a'));
// console.log(username.length);
// username = username.trim();
// username = username.toUpperCase();
// username = username.toLowerCase();
// username = username.repeat(3);

// let result = username.startsWith(' ');

// if (result) {
//     console.log(`depannya gaboleh spasi`)
// }
// else {
//     console.log(username)
// }

// let result = username.endsWith(' ')

// if (result) {
//     console.log(`belakangnya gaboleh spasi`)
// }
// else {
//     console.log(username)
// }

// console.log(result);

// let phoneNumber = '+6281383094129';

// phoneNumber = phoneNumber.replaceAll('+62', '0');
// phoneNumber = phoneNumber.padStart(20, '0')


// console.log(phoneNumber);
// console.log(phoneNumber.length);

/* 
    String Slicing, sama kek Python string.[]
*/

// const fullName = "Daffa Arga";

// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6, 10);

// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lastName = fullName.slice(fullName.indexOf(' ' ) + 1);

// console.log(lastName);

/*
    Method chaining, manggil method satu dan yang lain
    sekali panggil
*/

// let username = window.prompt('Masukkan nama anda: ');

// username = username.trim();
// let firstChar = username.charAt(0);
// firstChar = firstChar.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = firstChar + extraChars;

// console.log(username);

// With Method Chaining,

// username = 
// username.trim().charAt(0).toUpperCase() +
// username.trim().slice(1).toLowerCase();

// console.log(username);

/*
    Logical Operators, 
    and &&
    or || 
    not !=
*/


/*
    Sama dengan,
    = buat inisiasi
    == buat perbandingan tapi gaharus strict
    === buat perbandingan tapi strict, tipe data sama
    != gasama tapi ga strict
    !== gamasa tapi strict;
*/

// const phi = 3.14;

// if (phi == '3.14') {
//     console.log(`ini phi`)
// }
// else {
//     console.log(`bukan phi`)
// }



/*
    Loop
*/

// let loggedIn = false;
// let username;
// let password;

// do {
//     username = window.prompt('username: ');
//     password = window.prompt('password: ');

//     if (username === 'daffaargaa' && password === '123') {
//         loggedIn = true;
//         console.log('you are logged in!');
//     }
//     else {
//         console.log('Username atau password anda salah!');
//     }
// } while (!loggedIn);

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

/*
    Aplikasi Tebak angka
*/

// const min = 1;
// const max = 20;
// const answer = Math.floor(Math.random() *  (max - min + 1)) + min;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//     guess = Number(window.prompt(`Tebak angka dari ${min} - ${max}`));

//     if (isNaN(guess)) {
//         window.alert('Masukin angka!!')
//     }
//     else if (guess < min || guess > max) {
//         window.alert('Masukin angka yg bener!')
//     }
//     else {
//         attempts++;
//         if (guess < answer) {
//             window.alert('masih dibawah, coba lagi!');
//         }
//         else if (guess > answer) {
//             window.alert('kebanyakan, coba lagi');
//         }
//         else {
//             window.alert(`yeyy benerr! jawabannya ${answer}, total percobaan: ${attempts}`);
//             running = false;
//         }
//     }
// }

/*
    Function
*/

// function isEven(num) {
//     return num % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//     return email.includes('@') ? true : false;
// }

/*
    Variabe Scope, intinya kalo diluar function
    itu jadi milih global
    kalo didalem function
    itu jadi milik function gabisa dipanggil
    diluar function tapi bisa direturn;
*/


/*
    Temperature Conversion Program
*/

// const textBox = document.getElementById('textBox');
// const toFahrenheit = document.getElementById('toFahrenheit');
// const toCelcius = document.getElementById('toCelcius');
// const result = document.getElementById('result');
// let temp;

// function convert() {
//     if (toFahrenheit.checked) {
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + '°F';
//     }
//     else if (toCelcius.checked) {
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(1) + '°C';
//     }
//     else {
//         result.textContent = "Select an unit";
//     }
// }

/*
    Array
*/

// let fruits = ['apple', 'orange', 'banana'];

// fruits.push('mango'); akhir
// fruits.pop();

// fruits.unshift('mango'); awal
// fruits.shift();

// console.log(fruits.indexOf('banana'));

// fruits.sort().reverse();

// for (let fruit of fruits) {
//     console.log(fruit);
// }

/* 
    Spread Operator, mecah element dari aray
*/

// let numbers = [1, 2];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// let username = "Daffa arga";
// let letters = [...username].join("-");

// console.log(letters);

// let fruits = ['Mangga', 'Salak'];
// let veggie = ['Daun Bawang'];

// let things =[...fruits, ...veggie, 'Daffa'];

// console.log(things);

/*
    Rest Parameters, gabung elemen ke array
*/

// const food1 = 'pizza1';
// const food2 = 'pizza2';
// const food3 = 'pizza3';

// const openFridge = (...foods) => {
//     console.log(foods);
// }

// openFridge(food1, food2, food3);

// const getFood = (...foods) => {
//     return foods;
// }

// const foods = getFood(food1, food2, food3);
// console.log(foods);

// function sum(...nums) {
//     let result = 0;
//     for (let num of nums) {
//         result += num;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(`Your total is: ${total}`);

// KALO FOR PAKE OF, ITU NUMBER, KALO IN PAKE STRING

/*
    Dice Roller Program
*/

// function rollDice() {
//     const numOfDice = document.getElementById('numOfDice').value;
//     const diceResult = document.getElementById('diceResult');
//     const diceImages = document.getElementById('diceResult');
//     const values = [];
//     const images = [];

//     for (let i = 0; i < numOfDice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images/Dice-${value}.png" alt="Dice-${value}">`);
//     }
    
//     diceResult.textContent = `dice: ${values.join(', ')}`;
//     diceImages.innerHTML = images.join('');
// }

/*
    Random Password Generator
*/

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
//     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
//     const uppercaseChars = lowercaseChars.toUpperCase();
//     const numberChars = '0123456789';
//     const symbolChars = '!@#$%^&*()_=-+';

//     let allowedChars = '';
//     let password = '';

//     allowedChars += includeLowercase ? lowercaseChars : '';

//     allowedChars += includeUppercase ? uppercaseChars : '';

//     allowedChars += includeNumbers ? numberChars : '';

//     allowedChars += includeSymbols ? symbolChars : '';

//     if (length <= 0) {
//         return `(password length must be at least 1)`;
//     }

//     if (allowedChars.length === 0) {
//         return `(At least 1 set of character needs to be selected);`
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
    
//     return password;
// }

// const passwordLength = 12;
// const includeLowercase = false;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = false;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

// console.log(password);


/*
    Callback, fungsi yang dipanggil ketika fungsi tersebut selesai di eksekusi
 */

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// sum(displayPage, 1033, 20);

// function displayPage(result) {
//     // document.getElementById('myH1').textContent = result;
// }

// const sum2 = (callback, x, y) => {
//     let result = x + y;
//     callback(result);
// }

// const displayPage2 = (result) => {
//     document.getElementById('myH1').textContent = result;
// }

// sum2(displayPage2, 10, 20333);

/* 
    forEach() = method yang digunakan untuk mengulang elemen di array dan
    menjalankan fungsi yang ditentukan ke setiap element;
*/

// let numbers = [1, 2, 3, 4, 5];

// function displayNumbers(element) {
//     console.log(element);
// }

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = element * element;
// }

// // numbers.forEach(double);
// // numbers.forEach(square);
// // numbers.forEach(displayNumbers);

// let nama = ['Daffa', 'Arga'];

// function uppercase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function display(element) {
//     console.log(element);
// }

// nama.forEach(uppercase);
// nama.forEach(display);


/*
.map() = menerima callback dan jalanin fungsi ke setiap element dari array,
dan mengembalikan array baru, bedanya sama foreach dia ga balikin array baru
*/

// const numbers = [1, 2, 3, 4, 5];

// function square(element) {
//     return Math.pow(element, 3);
// }

// const squares = numbers.map(square);

// console.log(squares);

// const students = ['daffa', 'wubiy'];

// function upperCase(element) {
//     return element.toUpperCase();
// }

// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper)

// const date = ['09-06-2000', '08-06-1999'];

// function formatDate(element) {
//     const parts = element.split('-');
//     return `${parts[0]}/${parts[1]}/${parts[2]}`;
// }

// const formattedDate = date.map(formatDate);
// console.log(formattedDate);

/**
 * .filter(), bikin array baru hasil filteran
 */

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// function isEven(element) {
//     return element % 2 === 0;
// }

// let evenNumbers  = numbers.filter(isEven);
// console.log(evenNumbers);

/**
 * .reduce(), apa yg dilakuin ke element dari kiri ke kanan,
 * .reduceRight(), apa yg dilakuin ke element dair kanan ke kiri,
 */

// const prices = [5000, 7000, 10000, 20000];

// const total = prices.reduceRight(sumPrices);

// function sumPrices(x, y) {
//     return x - y;
// }

// console.log(total);

/**
 * function declaration = define a reusable block of code
 *                        that performs a specific task
 * 
 * function expressions = a way to define functions as
 *                        values or variables
 */

// setTimeout(function() {
//     console.log('Hello');
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const squares = numbers.map(function(element) {
//     return Math.pow(element, 2);
// });

// console.log(squares);

// const evenNums = numbers.filter(function(element) {
//     return element % 2 === 0;
// });

// console.log(evenNums);

/**
 * arrow functions 
 */

// function hello(name) {
//     console.log(`Hello ${name}`);
// }

// const hello = (name) => console.log(`Hello, ${name}`);
// hello('daffa');

// setTimeout(() => console.log('hello!'), 3000); 

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const total = numbers.reduceRight((x, y) => x + y);

// console.log(squares);
// console.log(evenNums);
// console.log(total);

/**
 * 
 *  Object, sebuah koleksi data bisa berisi nilai atau function
 * 
 */

// const person1 = {
//     firstName: 'Daffa',
//     lastName: 'Arga',
//     age: 23,
//     isStudent: false,
//     sayHello: () => console.log(`Hi! My name is Daffa Arga`),
// }

// const person2 = {
//     firstName: 'Salsa',
//     lastName: 'Nabila',
//     age: 24,
//     isStudent: true,
//     sayHello: function() {console.log(`Nama aku ${this.firstName}`)}
// }

// person1.sayHello();
// person2.sayHello();

/**
 * this = mengarah ke object pemiliknya
 * 
 */

// const person1 = {
//     name: 'Daffa',
//     favFood: 'Dadar',
//     sayHello: function() {console.log(`Hi! I am ${person1.name}`)}
// }

// person1.sayHello();

/**
 * constructor, method khusus untuk mendefisinikan properti
 * dan method dari object tersebut (template)
 */

// function Person(firstName, lastName, age, isStudent) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.isStudent = isStudent
//     this.sayHi = function() {console.log(`Halo aku ${firstName}`)};
// }

// const person1 = new Person('Daffa', 'Arga', 23, false);
// const person2 = new Person('Salsa', 'Nabila', 24, true);

// console.log(person1.firstName + person2.firstName);
// person2.sayHi();

/**
 * class, 5.17.51
 */

 
/**
 * Iseng coba countdown
 */

// const countdownDate = new Date("Jan 29, 2024 19:00:00");

// const x = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = countdownDate - now;

//     const days = Math.floor(distance / (1000 *  60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById('myH1').textContent = days + 'd ' + hours + 'h ' + 
//     minutes + 'm ' + seconds + ' s';
// }, 1000);
