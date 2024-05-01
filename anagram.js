
// 249

const s = 'anagram'
const t = 'nagaram'

const f1 = s.split('').sort().join('')
const s1 = t.split('').sort().join('')

if(f1 === s1){
    console.log(true);
}else{
    console.log(false);
}