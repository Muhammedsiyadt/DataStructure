const set = new Set([1,2,3,4,5])
set.add(6)

set.delete(3)
for(const items of set){
    console.log(items);
}
console.log(set);