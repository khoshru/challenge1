////functions
// function fruitProcess(apple, orange){
//     const juice =  `juice with ${apple} apple and ${orange} orange.`;
//     return juice;
// }
// const juiceProcess = fruitProcess(4,3);
// console.log(juiceProcess);
// console.log(fruitProcess(6,5));

// //function declaration
// function calcAge1(birthyear){
//     return 2023 - birthyear;
// }
// const myAge1 = calcAge1(2002);
// console.log(myAge1);
// console.log(calcAge1(2001));

// //function expression
// const calcAge2 = function(birthyear){
//     return 2023 - birthyear;
// }
// const myAge2 = calcAge2(2003);
// console.log(myAge1,myAge2)
// arrow function
// const calAge3 = birthyear => 2023 -birthyear;
// console.log(calAge3(2002));
// const yearsUntilRetirement = birthyear =>{
//     const age= 2023 - birthyear;
//     const retirement = 65 -age ;
//     return retirement;
// }
// console.log(yearsUntilRetirement(2002));

// // function calling function
// function cutFruitPieces(fruit){
//     return fruit*3;
// }
// function fruitProcess(apple, orange){
//     const applePieces = cutFruitPieces(apple);
//     const orangePieces = cutFruitPieces(orange);
//     const juice =  `juice with ${applePieces} apple and ${orangePieces} orange.`;
//     return juice;
// }
// const juiceProcess = fruitProcess(4,3);
// console.log(juiceProcess);
// console.log(fruitProcess(6,5));

// //reviewing function
// const yearsUntilRetirement = function(birthyear,firstName){
//     const age = 2023 - birthyear;
//     const retirement = 65 -age ;
//     if (retirement> 0){
//         console.log( `${firstName} you are retires in ${retirement}years`);
//     } else{
//         console.log( `${firstName} you are retired`)
//         return -1;
//     }
//     return retirement;
// }
// console.log(yearsUntilRetirement(2002,'dina'));
// console.log(yearsUntilRetirement(1930,'mina'));
