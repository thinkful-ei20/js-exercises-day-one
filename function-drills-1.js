'use strict';

function whoAmI(name, age) {
  console.log('Hi my chris is Doug and I\'m 29 years ol to the console.');
  console.log('I was born in ' + yearOfBirth(age));
}
function yearOfBirth(age) {
  try {
    if (age < 0) throw new Error('The age cannot be negative.');
  } catch (e) {
    throw new Error('Age must be a positive number');
  }
}
whoAmI('chris', "25");