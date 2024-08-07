

function heapSort(arr){

    const n = arr.length

    for(let i = Math.floor(n / 2) - 1 ; i >= 0 ; i--){
        heapify(arr , n , i)
    } 

    for(i = n - 1 ; i > 0 ; i--){
        [arr[0] ,arr[i]] = [arr[i] , arr[0]]

        heapify(arr,i,0)
    }

    return arr
} 

function heapify(arr , n , i){
    let largest = i 
    let l = 2 * i + 1
    let r = 2 * i + 2
    if(l < n && arr[l] > arr[largest]){
        largest = l
    }
    if(r < n && arr[r] > arr[largest]){
        largest = r
    } 

    if(largest !== i) { 
        [arr[i] , arr[largest]] = [arr[largest] , arr[i]] 
        heapify(arr , n , largest)  
    }

    
}

const arr = [5,47,23,6,4,8]

console.log(heapSort(arr)); 