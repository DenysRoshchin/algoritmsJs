let str = 'hello',
    str2 = 'goodbye';

function alphabetOrder(str){
  let aplhabetOrderArr = str.split('');
  let newArr = aplhabetOrderArr.sort();

  return newArr.join(' ')
}

function alphabetOrder2(str){
  return str.split('').sort().join(' ');
}

function alphabetOrder3(str){
  let strToArr = [...str];
  let newArr = strToArr.sort();
  return newArr.join(' ');
}

function alphabetOrder4(str){
  return [...str].sort().join(' ');
}
