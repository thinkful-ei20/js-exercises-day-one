'use strict';

// function jediName(firstName, lastName) {
//   console.log(`${lastName.slice(0,3)}${firstName.slice(0,2)}`); 
// }
// jediName('Neill', 'Somerville');


// function beyond(num) {

//   if (!isFinite(num)) return 'And beyond';
//   if (isFinite(num) && num > 0) return 'To Infinity';
//   if (isFinite(num) && num < 0) return 'To Negative Infinity';
//   if (num === 0) return 'Staying home';
  
// }

// console.log(beyond(10));

// function decode(string) {

//   let words = string.split(' ');
//   let newString = "";
//   for (let i = 0; i < words.length; i++) {    
//     //console.log(words[i][0]);
//     switch(words[i][0]) {
//     case 'a':
//       newString += words[i][1];
//       break;
//     case 'b':
//       newString += words[i][2];
//       break;
//     case 'c':
//       newString += words[i][3];
//       break;
//     case 'd':
//       newString += words[i][4];
//       break;
//     default:
//       newString += ' ';
//     } 
//   }
//   return newString;
// }
// console.log(decode('craft block argon meter bells brown croon droop'));

// How many days in a month
// 31 days Jan Mar May July Aug Oct Dec
// NOT 31 Feb Apr Jun Sept Nov

// function daysInMonth(month, leapYear) {
//   let feb = 28;
//   if (leapYear) {
//     feb = 29;
//   } 

//   switch(month) {
//   case 'April': 
//   case 'June':
//   case 'September':
//   case 'November':
//     return `${month} has 30 days`;
//     break;

//   case 'February':
//     return `${month} has ${feb} days`;
   
//     break;
//     // 
//   default: 
//     return `${month} has 31 days`;

//   }

// }

//console.log(daysInMonth('April', true));


function rockPaperScissors(choice) {
  if (typeof choice !== 'number' || choice < 0 || choice > 4) {
    throw Error('Invalid input. Enter a number between 1 and 3.');
  }
  const randomNo = Math.floor(Math.random() * 3) + 1;
  
  if (choice !== randomNo)
  {
    switch(choice) {
    case 1:
      if (randomNo === 2) return 'Computer wins, Paper beats rock.';
      return 'You win, Rock beats scissors';
    case 2:
      if (randomNo === 1) return 'You win, Paper beats rock';
      return 'Computer wins, Scissors beats paper';
    case 3:
      if (randomNo === 1) 'Computer wins, Rock beats scissors';
      return 'You win, Scissors beats paper';
    }
  } else {
    return 'Tie game.';
  }
}
console.log(rockPaperScissors(1));

