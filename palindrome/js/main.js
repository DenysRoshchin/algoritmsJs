let plaindr = 'Eva, Can  I Stab Bats In A Cave?',
    plaindr2 = 'Was It A Rat I Saw',
    plaindr3 = 'not true';

function palindrome(str){
  let pureStr = str.replace(/\W/g, '');
  let caseSens = pureStr.toLowerCase();
  let reverseStr = caseSens.split('').reverse().join('');

  return caseSens === reverseStr;
}

function palindrome2(str){
  let pureStr2 = str.replace(/\W/g, '');
  let caseSens2 = pureStr2.toLowerCase();
  let reverseStr2 = '';

  for(let i = caseSens2.length - 1; i >= 0; i--){
    reverseStr2 += caseSens2[i];
  }

  return reverseStr2 === caseSens2;
}

function palindrome3(str){
  let pureStr3 = str.replace(/\W/g, '');
  let caseSens3 = pureStr3.toLowerCase();
  let reverseStr3 = '';

  for(let letter of caseSens3){
    reverseStr3 = letter + reverseStr3;
  }
  
  return reverseStr3 === caseSens3;
}

console.log(palindrome(plaindr));
console.log(palindrome(plaindr2));
console.log(palindrome(plaindr3));
console.log('----');
console.log(palindrome2(plaindr));
console.log(palindrome2(plaindr2));
console.log(palindrome2(plaindr3));
console.log('----');
console.log(palindrome3(plaindr));
console.log(palindrome3(plaindr2));
console.log(palindrome3(plaindr3));