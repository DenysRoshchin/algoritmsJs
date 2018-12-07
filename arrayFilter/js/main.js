let arr = [1, 'one', 2, 'two', 3, 'three'],
    arr2 = [22, 're', 33, 'the'];

function arrFilter(arr){

  let resultArr = [];

  for(let items of arr){
    if(typeof items === 'number'){
      resultArr.push(items);
    }
  }

  return resultArr;

}

function arrFilter2(arr){
  let resultArr = [];

  for(let items of arr){
    if(Number.isInteger(items)){
      resultArr.push(items);
    }
  }

  return resultArr;
}

function arrFilter3(arr){
  return arr.filter((item) => {
    return typeof item === 'number';
  })
}
