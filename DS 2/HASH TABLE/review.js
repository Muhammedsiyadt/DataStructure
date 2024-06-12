
function mergeSort(array) {
  if(array.length <= 1){
    return array
  }

  const mid = Math.floor(array.length / 2)
  const leftArray = array.slice(0 , mid)
  const rightArray = array.slice(mid)

  return merge(mergeSort(leftArray) , mergeSort(rightArray))
}

function merge(leftArray , rightArray){
  const sorted = []

  while(leftArray.length && rightArray.length){
    if(leftArray[0] <= rightArray[0]){
      sorted.push(leftArray.shift())
    }else{
      sorted.push(rightArray.shift()) 
    }
  }

  return [...sorted,...leftArray,...rightArray] 
}

const array = [9,5,1,2,3,4,7,8,6,5,2]
console.log(mergeSort(array));  