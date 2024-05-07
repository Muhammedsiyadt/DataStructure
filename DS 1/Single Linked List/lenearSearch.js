

function search(array, t) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === t) {
            return i
        }
    }
}
const array = [1, 2, 3, 4, 5]
const t = 3
console.log(search(array,t)) 