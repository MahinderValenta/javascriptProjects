console.log('hello');

// let , const, var

let a = 4;
const b = 10;
a = 20.5;

let sentence = 'how are you doing?';
// loosely type language

// let age = prompt('what is your age?');

// console.log(age);

// let firstname = document.getElementById('firstname');
// firstname.style.backgroundColor = 'blue';

// let date = new Date();

let dateToday = document.getElementById('date');
// dateToday.innerHTML = date;

// numbers
// strings
// arrays
// objects
// boolean = true / false

// let arr = ['name', '24', true];

// let obj = {
//     name = "mahi",
//     age = 23
// }

// + addition
// - subtraction
// * multiplication
// / division
// ** exponent
// % remainder

//conditionals

// let weatherdata = 'sunny';

// if (weatherdata == 'rainy') {  // sunny == rainy ?
//   console.log('take a umbrella');
// } else {
//   console.log('wear you sunglasses');
// }

//functions

// let othersum = function sum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// let sum = () => {
//   let firstno = document.getElementById('firstno');
//   let secondno = document.getElementById('secondno');
//   let result = document.getElementById('result');
//   // let sum = a + b;
//   // result.innerHTML = { sum };
//   console.log(firstno);
// };

// {
// }

// let buttonsum = document.getElementById('btn');
// btn.addEventListener('click', sum(firstno, secondno));
// let sum = (a, b) => a + b;

// let sum1 = sum(23,47);
// sum(1,2);

// variable scopes
// global , local, block scope

// Arrays
let cars = ['volvo', 'BMW', 'ferrari'];

// cars[0] = volvo
//cars[1] = BMW
//cars[2]= ferrari

// cars[3] = 'mercedes';
// cars[1] = 'BMQ x1';
// cars.push('x1');
// dateToday.innerHTML = cars;
// console.log(cars);

// console.log(cars.length);

// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i]);
// // }

// for (let car in cars) {
//   console.log(car);
// }

let sum = () => {
  let firstno = document.getElementById('firstno').value;
  let secondno = document.getElementById('secondno').value;
  let result = document.getElementById('result');
  let sum = Number(firstno) + Number(secondno);
  result.innerHTML = `sum : ${sum}`;
  // console.log(sum);
};

// console.log(`Name ${result} this is the result`)

// objects
const car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

// console.log(car.color);

// let arr = [
//   {
//     ype: 'Fiat',
//     model: '500',
//     color: 'white',
//   },
//   {
//     ype: 'volkswagen',
//     model: '500',
//     color: 'white',
//   },
// ];

let date = new Date().getDay();
console.log(date);
