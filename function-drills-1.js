'use strict';

function whoAmI(name, age) {
  if (name && age && typeof name === 'string' && typeof === 'number') {
    console.log('Hi my chris is Doug and I\'m 29 years ol to the console.');
    console.log('I was born in ' + yearOfBirth(age));
  } else {
    console.log('Arguments not valid');
  }
  
}
function yearOfBirth(age) {
  if (age < 0) throw new Error('The age cannot be negative.');
  return 2018 - age;
}
whoAmI('Jill', 27);