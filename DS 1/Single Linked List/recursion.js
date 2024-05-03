

// function multiply(array){
//     let pro = 1
//     for (let i = 0; i < array.length; i++) {
//         pro *= array[i] 
//     } 
//     return pro
// }
// console.log(multiply([1, 2, 3, 4]));


// function multiply(array) {
//     if(array.length <= 0){
//         return 1
//     }
//     return array[array.length - 1] * multiply(array.slice(0, array.length - 1))


// }

// const nums = [1, 2, 3, 4]
// console.log(multiply(nums));



// Printing array 
// function rec(start, end) {
//     if (end < start) {
//         return []
//     } else {
//         const range =  rec(start, end - 1)
//         range.push(end)
//         return range 
//     }

// }
// console.log(rec(1,5));


// Check the palindrome (String)
// function checkPal(x){
//     if(x <= 1 ){
//         return true
//     }
//     if(x[0] !== x[x.length - 1]){
//         return false
//     }

//     return checkPal(x.slice(1,-1))
// }
// console.log(checkPal("malayalam"));


// Check the palindrome (Number)
// function checkPal(x){
//     x = x.toString() 

//     if(x <= 1 ){
//         return true
//     }
//     if(x[0] !== x[x.length - 1]){
//         return false
//     }

//     return checkPal(x.slice(1,-1))
// }
// console.log(checkPal(121)) 



// Fibonacci 
// function checkFeb(n) {
//     if (n <= 1) return n

//     return checkFeb(n-1 ) + checkFeb(n-2)

// }

// console.log(checkFeb(13));


// REVERSE A STRING
function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length-1] + reverse(str.slice(0, -1))
    return reverse(str.substr(1)) + str.charAt(0)
}

console.log(reverse('anas')) 


