let str = 'Tell me somthing about yourself';

function lengt(str){

  let cleanStr = str.replace(/\W/g, ' '),
      res = cleanStr.split(' '),
      wordLength = '';
      
  
  for(let i = 0; i < res.length; i++){

    if(res[i].length > wordLength.length){
      wordLength = res[i];
    }

  }

  return wordLength.length;

}

function lengt2(str){
  let cleanStr2 = str.replace(/\W/g, ' '),
      wordArr = cleanStr2.split(' '),
      wordLength2 = '';

  for(words of wordArr){
    if(words.length > wordLength2.length){
      wordLength2 = words;
    }
  }    

  return wordLength2.length;
}

console.log(lengt(str));
console.log(lengt2(str));