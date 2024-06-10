
// const array = [12,32,13,54,66,75,32,66,15]
// const sort = array.sort((a,b) => a-b)
// console.log(sort);
// console.log(sort[sort.length-2]);


// const set = Array.from(new Set(array)) // O(n)
// set.sort((a,b) => b-a) // O(nlogn)

// if(set.length >= 2){
//     // return set[1]
//     console.log(set[1]);
// }else{
//     // return -1
//     console.log(-1);
// }
// Taking ---  O(nlogn) Time Complexity


// const array = [12,32,13,54,66,75,32,66,15]
// function secLar(num) {
//     let large = Number.NEGATIVE_INFINITY
//     let sLarge = Number.NEGATIVE_INFINITY

//     for (let i = 0; i < num.length; i++) {
//         if(num[i] > large){
//             sLarge =  large
//             large = num[i]
//         }else if(num[i] > sLarge && num[i] != large){
//             sLarge = num[i]
//         }
//     }
//     return sLarge
// }

// console.log(secLar(array))

function count (string){
    var c = {}
    for (let i = 0; i < string.length; i++) {
        if(c[string[i]]){
            c[string[i]]++
        }else{
            c[string[i]] = 1
        }
    }
    return c 
}

// Example usage
const string = "hello world";
// const result = countCharacters(string);
console.log(count(string)); 
