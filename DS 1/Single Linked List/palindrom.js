

// Check A Number 
// const x = 121
// const isPalNum = function(){
//     return x === +x.toString().split('').reverse().join('')
    
// }
// console.log(isPalNum());

const x = "malayalam"
const isPal = function(){
    return x === x.toString().split('').reverse().join('')
}
console.log(isPal()); 



// Check A String 
// const y = "malayalam"
// const isPalString = function(){
//     return y === y.split('').reverse().join('')
    
// }
// console.log(isPalString()); 

// var isPalindrome = function(head) {
//     let str1 = str2 = ''
//     let node = head
//     while(node!= null){
//         str1 = `${str1}${node.val}`
//         str2 = `${node.val}${str1}`
//         node = node.next
//     }
//     return str1 === str2
// };
// var head = [1,2,2,1]
// isPalindrome(head)

// var l1 = [2,4,3] 
// var l2 = [5,6,4]
// const f = parseInt(l1.join(''))
// const s = parseInt(l2.join(''))
// const reversedNumber1 = parseInt(f.toString().split('').reverse().join('')) 
// const reversedNumber2 = parseInt(s.toString().split('').reverse().join(''))
// console.log(reversedNumber1);
// console.log(reversedNumber2);
// console.log(reversedNumber1+reversedNumber2);