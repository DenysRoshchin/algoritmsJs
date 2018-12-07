let str1 = 'Reverse string',
    str2 = 'Second reverse';

function rev(str){
  return str.split(' ').reverse().join(' ');
}

console.log(rev(str1));
console.log(rev(str2));