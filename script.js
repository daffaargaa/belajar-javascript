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

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct() {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price}`);
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.1;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 30);

// const total = product2.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);


/**
 * static, keyword yanbg mendefinisikan method atau properti
 * tersebut dimiliki oleh class;
 * (class owns anything static, not the objects);
 */

// class User {
//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello() {
//         console.log(`Hello! my name is ${this.username}`);
//     }

//     static getUserCount() {
//         console.log(`There are ${this.userCount} users`);
//     }
// }

// const user1 = new User("Daffa");
// const user2 = new User("Arga");

// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);

// user2.sayHello();
// User.getUserCount();


/**
 * Inheritance, nurunin properties dan method dari parent
 */

// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {
//     name = 'Rabbit';
//     age = 23;
// }

// class Fish extends Animal {
//     name = 'Fish';
// }

// const rabbit = new Rabbit();
// const fish = new Fish();


// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();

/**
 * SUPER keyword  
 */

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`The ${this.name} moves at a speed of ${speed} km/h`)
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
    
//     run() {
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// const rabbit = new Rabbit('rabbit', 1, 25);
// const fish = new Fish('fish', 2, 12);

// rabbit.run();
// fish.swim();

/**
 * getter and setter
 * getter, bisa dibaca
 * setter, bisa ditulis
 */

// 
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         }
//         else {
//             console.error('Width must be a positive number');
//         }
//     }

//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         }
//         else {
//             console.error('Height must be a positive number');
//         }
//     }

//     get width() {
//         return this._width;
//     }

//     get height() {
//         return this._height;
//     }

//     get area() {
//         return this._width * this._height;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = 5;
// rectangle.height = 4;


// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

/**
 * destructuring, destruktur elemen
 */

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a)
// console.log(b)

// const colors = ["red", "green", "blue"];

// [colors[0], colors[2]] = [colors[2], colors[0]];

// console.log(colors);

// const person1 = {
//     firstName: "Daffa",
//     age: 30
// }

// const person2 = {
//     firstName: "Salsa",
//     age: 60
// }

// const {firstName, age} = person1;

// console.log(age)

/**
 * nested objects, objek didalam objek
 */

// const person = {
//     fullName: "Daffa",
//     age: 23,
//     isStudent: false,
//     hobbies: ['Valorant', 'Bucin'],
//     address: {
//         street: 'Barokah I',
//         city: 'Tangerang',
//         country: 'Indonesia'
//     }
// }
// console.log(person.address);

/**
 * Array of objects
 */

// const fruits = [
//     {name: 'apple', color: 'red'}, 
//     {name: 'orange', color: 'orange'}, 
//     {name: 'banana', color: 'yellow'}
// ];
// fruits.push({name: 'grape', color: 'purple'});

// fruits.forEach(fruit => console.log(fruit.color));
// const fruitNames = fruits.map(fruit => fruit.name);
// const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');


/**
 * Sort method, sort element array
 */

// let fruits = ['apple', 'orange', 'banana'];
// let numbers = [1,3,2,4,5,6,75,8,9,23];

// console.log(
//     numbers.sort((a, b) => b - a)
// );

// const fruits = [
//     {name: 'apple', color: 'red'}, 
//     {name: 'orange', color: 'orange'}, 
//     {name: 'banana', color: 'yellow'}
// ];

// fruits.sort((a, b) => a.name.localeCompare(b.name));

// console.log(fruits);

/**
 * Dates object
 */

// const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getDay());

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(3);

// console.log(date);

/**
 * Closure, function yang didefinsiikan
 * didalam function itu PENTING NIH
 * 
 * kek jadi bikin function best practice
 * biar ga asal bikin ada setter getter 
 * lebih dinamis
 */

// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points) {
//         score -= points;
//         console.log(`+${points}pts`);
//     }

//     function getScore() {
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};
// }


// const game = createGame();

// game.increaseScore(3);
// game.decreaseScore(300);
// game.increaseScore(30000);

// console.log(`${game.getScore()}`);

/**
 * setTimeout(callback, delay); buat menjadwalkan
 * kapan kita bisa berentiin, entah itu countdown
 * atau dari klik manuisianya.
 */

// setTimeout(() => window.alert('Hello'), 3500);

// const timeoutId = setTimeout(() => window.alert('Hello'), 3500);

// clearTimeout(timeoutId);

// let timeoutId;

// function startTimer() {
//     timeoutId = setTimeout(() => window.alert('Hello'), 3000);
//     console.log('Starter');
// }

// function clearTimer() {
//     clearTimeout(timeoutId);
//     console.log('cleared');
// }

/**
 * skip stopwatch dan jam dunia
 * 
 * ES6 Modules
 */

// import {phi, getCircumference, getArea, getVolume} from './mathUtil.js';

// const circumference = getCircumference(10);

// console.log(phi);
// console.log(`${circumference.toFixed(2)} cm`);
// console.log(getArea(10));
// console.log(getVolume(10));

/**
 * synchronous, jalankan perintah berurutan
 * yang menunggu sebuah perintah untuk selesai
 * 
 * asynchronous, jalankan perintah masing2
 * tanpa harus nunggu flow lain untuk
 * selesai
 */

// function func1(callback) {
//     setTimeout(() => {console.log("Task 1");
//         callback()}, 3000);
// }

// function func2() {
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);

/**
 * Error handling try catch
 * try, coba kode yg error
 * catch, buat jalanin kalo try gabisa
 * finally, selalu dijalankan
 */

// try {
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if(divisor == 0) {
//         throw new Error('You cant divice by Zero');
//     }
//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error('values harus angka');
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error) {
//     console.error(error);
// }

/**
 * Sampe dom, 8.00.00
 */

// const username = "Daffa Arga";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? 'Guest' : username;

/**
 * Element Selector,
 * manipulate html elements bisa milih satu atau 
 * multiple elements
 */

// const myHeading = document.getElementById('my-heading');

// myHeading.style.backgroundColor = 'yellow';
// myHeading.style.textAlign = 'center';

// console.log(myHeading);

// const fruits = document.getElementsByClassName('fruits');

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = 'yellow';
// });

const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');

// h4Elements[0].style.backgroundColor = 'yellow';


// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = 'Yellow';
// }

// for (let liElement of liElements) {
//     liElement.style.backgroundColor = 'lightgreen';
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = 'Yellow';
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = 'lightgreen';
// });

// const element = document.querySelector(".fruits");
// element.style.backgroundColor = 'yellow';

// const fruits = document.querySelectorAll('.fruits');

// fruits.forEach(food => {
//     food.style.backgroundColor = 'yellow';
// })

/**
 * DOM Navigation, navigasi struktur dari
 * element HTML dengan js
 */

// const element = document.getElementById('vegetables');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = 'yellow';

// const ulElements = document.querySelectorAll('ul');
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = 'yellow';
// });

// const element = document.getElementById('fruits');
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = 'yellow';

// const ulElements = document.querySelectorAll('ul');

// ulElements.forEach(ulElement => {
//     ulElement.lastElementChild.style.backgroundColor = 'yellow';
// })

// const element = document.getElementById('fruits');
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = 'yellow';

// const element = document.getElementById('vegetables');

// element.previousElementSibling.style.backgroundColor = 'yellow';

// const element = document.getElementById('fruits');
// const parent = element.parentElement;
// const children = element.children;
// parent.style.backgroundColor = 'Yellow';
// children[0].style.backgroundColor = 'red';


/**
 * Create HTML
 */

// const newH1 = document.createElement('h1');
// newH1.textContent = 'I like Pizza';
// newH1.id = 'myH1';
// newH1.style.color = 'tomato';
// newH1.style.textAlign = 'center';

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById('box1').append(newH1);
// document.getElementById('box1').prepend(newH1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[0]);

// document.getElementById('box1').removeChild(newH1);

// const newListItem = document.createElement('li');

// newListItem.textContent = 'coconut';
// newListItem.id = 'coconut';
// newListItem.style.fontWeight = 'bold';
// newListItem.style.backgroundColor = 'lightgreen';

// document.body.prepend(newListItem);
// document.getElementById('fruits').prepend(newListItem);
// const banana = document.getElementById('banana');
// document.getElementById('fruits').insertBefore(newListItem, banana);

// const listItems = document.querySelectorAll('#fruits li');
// document.getElementById('fruits').insertBefore(newListItem, listItems[1]);

// document.getElementById('fruits').removeChild(newListItem);


/**
 * Mouse Events
 */

// const myBox = document.getElementById('myBox');
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', event => {
//     myBox.style.backgroundColor = 'tomato';
//     myBox.textContent = 'ouchh!';
// });

// myButton.addEventListener('mouseover', event => {
//     myBox.style.backgroundColor = 'yellow';
//     myBox.textContent = 'Dont do it';
// })

// myButton.addEventListener('mouseout', event => {
//     myBox.style.backgroundColor = 'lightgreen';
//     myBox.textContent = 'Click me';
// });

/**
 * keydown keyup events
 */

// const myBox = document.getElementById('myBox');

// document.addEventListener('keydown', event => {
//     myBox.textContent = '😮';
//     myBox.style.backgroundColor = 'tomato';
// });

// document.addEventListener('keyup', event => {
//     myBox.textContent = '😃';
//     myBox.style.backgroundColor = 'lightblue';
// });

// const moveAmount = 10;

// let x = 0;
// let y = 0;

// document.addEventListener('keydown', event => {
//     myBox.textContent = '😮';
//     myBox.style.backgroundColor = 'tomato';
// });

// document.addEventListener('keyup', event => {
//     myBox.textContent = '😃';
//     myBox.style.backgroundColor = 'lightblue';
// });

// document.addEventListener('keydown', event => {

//     event.preventDefault();
    
//     if (event.key.startsWith('Arrow')) {

//         switch (event.key) {
//             case 'ArrowUp':
//                 y -= moveAmount;   
//                 break; 
//             case 'ArrowDown':
//                 y += moveAmount;
//                 break; 
//             case 'ArrowLeft':
//                 x -= moveAmount;
//                 break;
//             case 'ArrowRight':
//                 x += moveAmount;
//                 break;
//         }

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });

/**
 * Hide show images
 */

// const myButton = document.getElementById('myButton');
// const myImg = document.getElementById('myImg');

// myButton.addEventListener('click', event => {
//     if (myImg.style.visibility === 'hidden') {
//         myImg.style.visibility = 'visible';
//         myButton.textContent = 'Hide';
//     }
//     else {
//         myImg.style.visibility = 'hidden';
//         myButton.textContent = 'Show';
//     }

// })

/**
 * Node List, static collection of html, bisa dibuat
 * dengan querySelectorAll()
 * mirip array. 
 */

// let buttons = document.querySelectorAll('.myButton');

// buttons.forEach(button => {
//     button.style.backgroundColor = 'green';
//     button.textContent = '😃';
// });

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.style.backgroundColor = 'tomato';
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('mouseover', event => {
//         event.target.style.backgroundColor = 'hsl(202, 100%, 40%)';
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('mouseout', event => {
//         event.target.style.backgroundColor = 'hsl(202, 100%, 60%)';
//     });
// });

// const newButton = document.createElement('button'); // STEP 1
// newButton.textContent = 'Button 5';
// newButton.classList = 'myButton'; // STEP 2
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll('.myButton');

// console.log(buttons);

// Remove Element

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.remove();
//         buttons = document.querySelectorAll('.myButton');
//         console.log(buttons);
//     });
// })

/**
 * classList, property element di javascript 
 * buat interaksi dengan list element dari class
 * (CSS ClasS)
 */

// const myH1 = document.getElementById('myH1');
// const myButton = document.getElementById('myButton');

// myButton.classList.add('enabled');
// myButton.classList.remove('enabled');

// myButton.addEventListener('mouseover', event => {
//     event.target.classList.toggle('hover');
// })
// myButton.addEventListener('mouseout', event => {
//     event.target.classList.toggle('hover');
// })

// myH1.classList.add('enabled')
// myButton.classList.add('enabled');

// myButton.addEventListener('click', event => {
//     if (event.target.classList.contains('disabled')) {
//         event.target.textContent += '❤️';
//     }
//     else {
//         event.target.classList.replace('enabled', 'disabled');
//     }
// });

// myH1.addEventListener('click', event => {
//     if (event.target.classList.contains('disabled')) {
//         event.target.textContent += '❤️';
//     }
//     else {
//         event.target.classList.replace('enabled', 'disabled');
//     }
// });

// let buttons = document.querySelectorAll('.myButtons');

// buttons.forEach(button => {
//     button.classList.add('enabled');
// });

// buttons.forEach(button => {
//     button.addEventListener('mouseover', event => {
//         event.target.classList.toggle('hover');
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('mouseout', event => {
//         event.target.classList.toggle('hover');
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('click', event => {

//         if (event.target.classList.contains('disabled')) {
//             event.target.textContent += '🤬';
//         }
//         else {
//             event.target.classList.replace('enabled', 'disabled');
//         }

//     });
// });

/**
 * Rock paper scissors
 */

// const choices = ['rock', 'paper', 'scissors'];
// const playerDisplay = document.getElementById('playerDisplay');
// const computerDisplay = document.getElementById('computerDisplay');
// const resultDisplay = document.getElementById('resultDisplay');
// const playerScoreDisplay = document.getElementById('playerScoreDisplay');
// const computerScoreDisplay = document.getElementById('computerScoreDisplay');
// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice) {
//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     let result = "";

//     if (playerChoice === computerChoice) {
//         result = "It's a tie!";
//     }
//     else {
//         switch (playerChoice) {
//             case "rock":
//                 result = (computerChoice === 'scissors') ? 'You win' : 'You lose';
//             break;
//             case "paper":
//                 result = (computerChoice === 'rock') ? 'You win' : 'You lose';
//             break;
//             case "scissors":
//                 result = (computerChoice === 'paper') ? 'You win' : 'You lose';
//             break;
//         }
//     }

//     playerDisplay.textContent = `Player: ${playerChoice}`;
//     computerDisplay.textContent = `Computer: ${computerChoice}`;
//     resultDisplay.textContent = result;

//     resultDisplay.classList.remove('greenText', 'redText');

//     switch (result) {
//         case 'You win':
//             resultDisplay.classList.add('greenText');
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore;
//             break;
//         case 'You lose':
//             resultDisplay.classList.add('redText');
//             computerScore++;
//             computerScoreDisplay.textContent = computerScore;
//             break;
//     }
// }

/**
 * Image Slider
 */

// const slides = document.querySelectorAll('.slides img');
// let slideIndex = 0;
// let intervalId = null;


// document.addEventListener('DOMContentLoaded', initializeSlider);

// function initializeSlider() {

//     if (slides.length > 0) {
//         slides[slideIndex].classList.add('displaySlide');
//         intervalId = setInterval(nextSlide, 1000);
//     }
// }

// function showSlide(index) {

//     if (index >= slides.length) {
//         slideIndex = 0;
//     }
//     else if (index < 0) {
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove('displaySlide')
//     });
//     slides[slideIndex].classList.add('displaySlide');
// }

// function prevSlide() {
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide() {
//     clearInterval(intervalId);
//     slideIndex++;
//     showSlide(slideIndex);
// }`


/**
 * Callhack Helllll, fungsi yang manggil fungsi lain
 * setelah fungsi itu dijalankan.
 */

// function task1(callback) {
//     setTimeout(() => {
//         console.log('task 1 complete');
//         callback();
//     }, 2000);
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log('task 2 complete');
//         callback();
//     }, 2000);
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log('task 3 complete');
//         callback();
//     }, 2000);
// }
// function task4(callback) {
//     setTimeout(() => {
//         console.log('task 4 complete');
//         callback();
//     }, 2000);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log('all tasks complete'));
//         });
//     });
// });

/**
 * PROMISES, OBJECT yang mengatur operasi async
 */

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = false;

//             if (dogWalked) {
//                 resolve(`You walk the dog 🐕`);
//             }
//             else {
//                 reject('You didnt walk the dog');
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;

//             if (kitchenCleaned) {
//                 resolve(`You clean the kitchen 🔪`);
//             }
//             else {
//                 reject('You did not clean the kitchen');
//             } 
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = true;

//             if (trashTakenOut) {
//                 resolve('You take out the trash 🗑️');
//             }
//             else {
//                 reject('You did not take out the trash')
//             }
//         }, 500);
//     });
// }

// walkDog()
//     .then(value => {console.log(value); return cleanKitchen()})
//     .then(value => {console.log(value); return takeOutTrash()})
//     .then(value => {console.log(value); console.log('You finish all the chores')})
    // .catch(error => console.error(error));

/**
 * Async and Await
 */

// function walkDog() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const dogWalked = true;
    
//                 if (dogWalked) {
//                     resolve(`You walk the dog 🐕`);
//                 }
//                 else {
//                     reject('You didnt walk the dog');
//                 }
//             }, 1500);
//         });
// }
    
// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;

//             if (kitchenCleaned) {
//                 resolve(`You clean the kitchen 🔪`);
//             }
//             else {
//                 reject('You did not clean the kitchen');
//             } 
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = true;

//             if (trashTakenOut) {
//                 resolve('You take out the trash 🗑️');
//             }
//             else {
//                 reject('You did not take out the trash')
//             }
//         }, 500);
//     });
// }

// async function doChores() {
//     try {
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log(`You finish all the chores!`);
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// doChores();

/**
 * JSON Files
 */

// const jsonNames = `["Spongebob", "Patrick" , "Squidward", "Sandy"]`;
// const jsonPerson = `{
//     "name" : "Spongebob",
//     "age" : 30,
//     "isEmployed" : true,
//     "hobbies" : [
//         "Jellyfishing", "Cooking", "Karate"
//     ]
// }`;
// const jsonPeople = `[{
//     "name" : "Spongebob",
//     "age" : 30,
//     "isEmployed" : true
// },
// {
//     "name" : "Patrick",
//     "age" : 34,
//     "isEmployed" : false
// }]`;

// const jsonString = JSON.stringify(people);
// console.log(jsonString)

// const parsedData = JSON.parse(jsonPeople);
// console.log(jsonPeople);
// console.log(parsedData);

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.name)))

/**
 * Fetch data from pokemon API
 */



// async function fetchData() {
//     try {
//         const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById('pokemonSprite');

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";

//     }
//     catch (error) {
//         console.error(error);
//     }
// }

/**
 * Weather Apps
 */

// const weatherForm = document.querySelector('.weatherForm');
// const cityInput = document.querySelector('.cityInput');
// const card = document.querySelector('.card');
// const apiKey = '';

// weatherForm.addEventListener('submit', async event => {

//     event.preventDefault();
    
//     const city = cityInput.value;

//     if (city) {
//         try {
//             const weatherData = await getWeatherData(city);
//             displayWeatherInfo(weatherData);
//         }
//         catch (error) {
//             console.error(error);
//             displayError(error);
//         }
//     }
//     else {
//         displayError("Please enter a city");
//     }

// });

// async function getWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//         throw new Error('Could not fetch weather Data');
//     }

//     return await response.json();

// }

// function displayWeatherInfo(data) {
//     const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

//     card.textContent = '';
//     card.style.display = 'flex';
    
//     const cityDisplay = document.createElement('h1');
//     const tempDisplay = document.createElement('p');
//     const humidityDisplay = document.createElement('p');
//     const descDisplay = document.createElement('p');
//     const weatherEmoji = document.createElement('p');
    
//     cityDisplay.textContent = city;
//     tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
//     humidityDisplay.textContent = `Humidity: ${humidity}%`;
//     descDisplay.textContent = description;
//     weatherEmoji.textContent = getWeatherEmoji(id);

//     cityDisplay.classList.add('cityDisplay');
//     tempDisplay.classList.add('tempDisplay');
//     humidityDisplay.classList.add('humidityDisplay');
//     descDisplay.classList.add('descDisplay');
//     weatherEmoji.classList.add('weatherEmoji');

//     card.appendChild(cityDisplay);
//     card.appendChild(tempDisplay);
//     card.appendChild(humidityDisplay);
//     card.appendChild(descDisplay);
//     card.appendChild(weatherEmoji);

// }

// function getWeatherEmoji(weatherId) {
//     switch (true) {
//         case (weatherId >= 200 && weatherId < 300):
//             return '🌧️';
//         case (weatherId >= 300 && weatherId < 400):
//             return '🌧️';
//         case (weatherId >= 500 && weatherId < 600):
//             return '🌧️';
//         case (weatherId >= 600 && weatherId < 700):
//             return '❄️';
//         case (weatherId >= 700 && weatherId < 800):
//             return '🍃';
//         case (weatherId === 800):
//             return '☀️';
//         case (weatherId >= 801 && weatherId < 810):
//             return '☁️';
//         default: 
//             return '😮';
//     }
// }

// function displayError(message) {
    
//     const errorDisplay = document.createElement('p');
//     errorDisplay.textContent = message;
//     errorDisplay.classList.add('errorDisplay');

//     card.textContent = "";
//     card.style.display = 'flex';
//     card.appendChild(errorDisplay);

// }