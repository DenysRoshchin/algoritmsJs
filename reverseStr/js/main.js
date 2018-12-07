let str = 'car';

function reversStr(str){
  let strToArr = str.split('');
  let reversArr = strToArr.reverse();

  return reversArr.join('');
}

function reversStr2(str){
  return str.split('').reverse().join('');
}

function reversStr3(str){
  return [...str].reverse().join('');
}

function reversStr4(str){
  let revStr = '';

  for(let i = str.length - 1; i >= 0; i--){
    revStr += str[i];
  }

  return revStr;
}

function reversStr5(str){
  let result = '';

  for(let char of str){
    result = char + result;
  }

  return result;
}

console.log(reversStr(str));
console.log(reversStr2(str));
console.log(reversStr3(str));
console.log(reversStr4(str));
console.log(reversStr5(str));