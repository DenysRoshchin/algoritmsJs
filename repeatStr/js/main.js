let str1 = 'one',
    str2 = 'two';

function rep(str, numb){
  let newStr = '';

  for(let i = 0; i < numb; i++){
      newStr += str;
  }

  return newStr;
}

console.log(rep(str1, 3));
console.log(rep(str2, 0));
console.log(rep(str2, 2));
