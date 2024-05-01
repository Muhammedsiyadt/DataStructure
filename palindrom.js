

// Check A Number 
const x = 121
const isPalNum = function(){
    return x === +x.toString().split('').reverse().join('')
    
}
console.log(isPalNum());



// Check A String 
const y = "malayalam"
const isPalString = function(){
    return y === y.split('').reverse().join('')
    
}
console.log(isPalString());