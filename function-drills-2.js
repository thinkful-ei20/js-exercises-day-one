'use strict';

function jediName(firstName, lastName) {
    console.log(`${lastName.slice(0,3)}${firstName.slice(0,2)}`); 
}
jediName('Neill', 'Somerville');

function beyond(num) {

  if (!isFinite(num)) return 'And beyond';
  if (isFinite(num) && num > 0) return 'To Infinity';
  if (isFinite(num) && num < 0) return 'To Negative Infinity';
  if (num === 0) return 'Staying home';
  
}

console.log(beyond(10));