'use strict';

// function jediName(firstName, lastName) {
//     console.log(`${lastName.slice(0,3)}${firstName.slice(0,2)}`); 
// }
// jediName('Neill', 'Somerville');


// function beyond(num) {

//   if (!isFinite(num)) return 'And beyond';
//   if (isFinite(num) && num > 0) return 'To Infinity';
//   if (isFinite(num) && num < 0) return 'To Negative Infinity';
//   if (num === 0) return 'Staying home';
  
// }

// console.log(beyond(10));

function decode(word) {

  let newArr = word.split('');
  
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === 'a') {
      return 'a';
    }
  }
}

decode('s');

// How many days in a month
// 31 days Jan Mar May July Aug Oct Dec
// NOT 31 Feb Apr Jun Sept Nov

function daysInMonth(month, leapYear) {
  let feb = 28;
  if (leapYear) {
    feb = 29;
  } 

  switch(month) {
  case 'April': 
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days`;
    break;

  case 'February':
    return `${month} has ${feb} days`;
   
    break;
    // 
  default: 
    return `${month} has 31 days`;

  }

}

console.log(daysInMonth('April', true));