
// function bubbleSort (array){
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if(array[i] > array[j]){
//         let temp = array[i]
//         array[i] = array[j] 
//         array[j] = temp
//       }
//     }
//   }
//   return  array
// }

// const array = [8,2,3,6,4,7,9,2,1] 
// console.log(bubbleSort(array)); 


// function insertionSort(array){
//   for (let i = 1; i < array.length; i++) {
//     let current = array[i]
//     let j = i - 1
//     while(j >= 0 && array[j] > current){
//       array[j + 1] = array[j]  
//       j--
//     }
//     array[j + 1] = current
//   }
//   return array
// }

// const array = [8,2,3,6,4,7,9,2,1] 
// console.log(insertionSort(array)); 

// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let min = i
//     for (let j = i + 1; j < array.length; j++) {
//       if(array[min] > array[j]){
//         min = j
//       }
//     }
//     [array[min] , array[i]] = [array[i] , array[min]]
//   }
//   return array
// } 

// const array = [8,2,3,6,4,7,9,2,1] 
// console.log(selectionSort(array)); 


// function quickSort(array){
//   if(array.length <= 1){
//     return array
//   }

//   const pivot = array[Math.floor(array.length / 2)]
//   const left = []
//   const right = []
//   const middle = []

//   for (let i = 0; i < array.length; i++) {
//     if(array[i] < pivot){
//       left.push(array[i])
//     }else if(array[i] > pivot){
//       right.push(array[i])
//     }else{
//       middle.push(array[i])
//     }
//   }
//   return [...quickSort(left) , ...middle , ...quickSort(right)]  
// }

// const array = [8,2,3,6,4,7,9,2,1] 
// console.log(quickSort(array));


// function mergeSort(array) {
//   if(array.length <= 1){
//     return array
//   }

//   const mid = Math.floor(array.length / 2)
//   const leftArray = array.slice(0 , mid)
//   const rightArray = array.slice(mid)

//   return merge(mergeSort(leftArray) , mergeSort(rightArray))
// }

// function merge(leftArray,rightArray){
//   const sorted = []

//   while(leftArray.length && rightArray.length){
//     if(leftArray[0] <= rightArray[0]){
//       sorted.push(leftArray.shift())
//     }else{
//       sorted.push(rightArray.shift()) 
//     }
//   }

//   return [...sorted,...leftArray,...rightArray] 
// }

// const array = [8,2,3,6,4,7,9,2,1] 
// console.log(mergeSort(array)); 


class Hash{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key , value){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key , value]]
    }else{
      const sameItem = bucket.find(item  => item[0] === key)
      if(sameItem){
        sameItem[1] = value
      }else{
        bucket.push([key , value]) 
      }
    }
  }

  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      const sameItem = bucket.find(item => item[0] === key)
      if(sameItem){
        return sameItem[1]
      }
    }
    return undefined
  }

  remove(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      const sameItem = bucket.find(item => item[0] === key)
      if(sameItem){
        bucket.splice(bucket.indexOf(sameItem) , 1) 
      }
    }
  }

  display(){
    for (let i = 0; i < this.table.length; i++) {
      if(this.table[i]){
        console.log(i , this.table[i]);
      }
    }
  }
}

const instance = new Hash(50) 
instance.set('name' , 'siyad')
instance.set('place' , 'wayanad')
instance.set('degree' , 'BA arabic') 
instance.get('name')
instance.remove('name') 

instance.display() 