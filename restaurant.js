'use strict';

// // VIDEO: 9:3

// const restaurant = {
//   name: 'Classico Italiano ',
//   categories: ['italian', 'pizzaria', 'organic'],
//   starterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//   mainMenu: ['pizza', 'pasta', 'risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }
// };
// console.log(restaurant.order(0, 0));

// const [starter,main]=restaurant.order(0, 0);
// console.log(starter,main);
// console.log(main,starter);

// // // default valu
// const [a=1,b=1,c=1]= [6,7];
// console.log(a,b,c);

// // // nested destructuring
// const nested =[2,4,[5,6]];
// const [i, ,[j,k]]=nested;
// console.log(i,j,k);

// // VIDEO: 9:5 //the spread operator

// const restaurant = {
//   name: 'Classico Italiano ',
//   categories: ['italian', 'pizzaria', 'organic'],
//   starterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//   mainMenu: ['pizza', 'pasta', 'risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   //CHALLENGE:
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
// };

// //join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //add element
// const newMenu = [...menu, 'Gnocci'];
// console.log(newMenu);

// //NOTE: Iterables : array , string , maps , sets, NOT objects

// const str = 'dina';
// const letters = [...str];
// console.log(letters);
// console.log(...str);

// //CHALLENGE:
// const ingredients = [
//   prompt("let's make pasta! ingredient 1 ?"),
//   prompt("let's make pasta! ingredient 2 ?"),
//   prompt("let's make pasta! ingredient 3 ?")
// ];
// restaurant.orderPasta(...ingredients);

// // VIDEO: 9:6 rest pattern and parameters

// const restaurant = {
//   name: 'Classico Italiano ',
//   categories: ['italian', 'pizzaria', 'organic'],
//   starterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//   mainMenu: ['pizza', 'pasta', 'risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingTimes: {
//     thu: {
//       open: 11,
//       close: 3,
//     },
//     fri: {
//       open: 13,
//       close: 6,
//     },
//     sat: {
//       open: 17,
//       close: 9,
//     },

     
//   },
// };

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , pasta, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, pasta, otherFood);

// //objects

// const { sat, ...otherTimes } = restaurant.openingTimes;
// console.log(otherTimes);

// //function

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum =0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log('sum=',sum);
// };
// add(2, 3);
// add(782, 543);
// add(872, 13);

// // VIDEO: 9:11 //Looping Array : the for of loop

// const restaurant = {
//   name: 'Classico Italiano ',
//   categories: ['italian', 'pizzaria', 'organic'],
//   starterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//   mainMenu: ['pizza', 'pasta', 'risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }
// };


// const menu = [...restaurant.starterMenu , ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()){
//     console.log(item);
// }

