let arr1 = [1,2,3,4,5,6,7,8,9,10],
    arr2 = [23,42,554,65,76,88,90];

function odd(arr){
  let res = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      res.push(arr[i]);
    }
  }

  return res;
}

function odd2(arr){
  return arr.filter((item) =>{
    return item % 2 === 0;
  })
}

console.log(odd(arr1));
console.log(odd(arr2));
console.log(odd2(arr2));
console.log(odd2(arr1));
console.log(arr1, arr2);