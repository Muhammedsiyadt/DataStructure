
function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) { 
            if(array[i] > array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp 
            }
        }
    }
    return array
}

const array = [2,5,7,6,3,1,8,9]
console.log(bubbleSort(array)); 