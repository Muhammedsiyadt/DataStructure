
// const matrix = [[1,2,3],[4,5,6],[7,8,9]]

// matrix[0][0] = 'X'
// matrix[0][1] = 'O'
// matrix[0][2] = 'X'
// matrix[1][0] = 'O'
// matrix[1][1] = 'X'
// matrix[1][2] = 'O'
// matrix[2][0] = 'X'
// matrix[2][1] = 'O'
// matrix[2][2] = 'X'
// for(let s of matrix){
//     const ar = s.join(' ')
//     console.log(ar);
// }
// console.log(matrix.flat(Infinity));

// JAGGED ARRAY >>>>>>>>>>>>>>>>>>>>> 
const ar = [[1, 2, 3,[500]], [10, 20, 30], [100, 200, 300]]
const sum = (ar) => {
    return ar.flat(Infinity).reduce((a, b) => a + b, 0)
}
console.log(sum(ar));   


