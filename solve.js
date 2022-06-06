// // problem 1: ana to vori 

// function anaToVori (ana){
//   if ( typeof ana != 'number'){
//     return 'Error!! Please give a numbeer ';
//   }
//   if (ana < 0){
//     return 'Please enter a positive number greater than 0'
//   }
//     var vori = ana * 0.0625 ; // 1 ana = 0.0625 vori  or 1 vori = 16 ana 
//     return vori;
// }

// var onekGulaVori = anaToVori (-2);
// console.log(onekGulaVori);


// // Problem 2: Panda cost

// function pandaCost (singara, somucha, jilapi) {
//     const perSingaraPrice = 7;
//     const perSomuchaPrice = 10;
//     const perJilabiPrice = 15;
   
//     const totalSingara = singara * perSingaraPrice;
//     const totalSomucha = somucha * perSomuchaPrice;
//     const totalJilapi = jilapi * perJilabiPrice;
   
//     const totalPrice = totalSingara+ totalSomucha + totalJilapi;
//     return totalPrice;
// }

// const onekGulaKhabar = pandaCost(2, 2, 2);
// console.log(onekGulaKhabar);

// // Problem 3: Picnic Budget 

// function picnicBudget (people){
// const firstHeadCount = 5000;
// const secondHeadCount = 4000;
// const thirdHeadCount = 3000;

// if (people <= 100){
//     const preHeadPrice = people * firstHeadCount;
//     return preHeadPrice;
// }
// else if (people <= 200){
//     const firstHundredPeople = 100 * firstHeadCount;
//     const restOfThePeople = people - 100;
//     const secondHundredPeople = restOfThePeople * secondHeadCount;
//     const totalSecondHeadPrice = firstHundredPeople + secondHundredPeople;
//     return totalSecondHeadPrice;
// }
// else (people > 200);{
//     const firstHundredPeople = 100 * firstHeadCount;
//     const secondHundredPeople = 100 * secondHeadCount;
//     const restOfThePeople = people - 200;
//     const restOfTheHundredPeople = restOfThePeople * thirdHeadCount;
//     const totalRestOfTheHeadPrice = firstHundredPeople + secondHundredPeople + restOfTheHundredPeople;
//     return totalRestOfTheHeadPrice;
// }

// }
// const totalPrice = picnicBudget (120);
// console.log(totalPrice);

// Problem 4: Odd Friend 

// let names = ['ronnie', 'jojo', 'sadia', 'mhadi', 'isha', 'sadi', 'alamin','mily'];

// function oddFriend (names){
//   if ( typeof names == 'number' ||typeof names != 'object'){
//     return 'Error!! Please give a parameter or the right parameter ';
//   }
// let unique = [];
// for(let element of names)
//   {
//      if(element.length % 2 == 1)
//      {
//      unique.push(element)
//      break
//      }
//   }
//     return unique;
// }

// const uniqueNames = oddFriend(names);
// console.log(uniqueNames);
