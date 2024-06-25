class HAshTAble{
    constructor(size = 50){
        this.table = new Array(size)
        this.size = size
    }

    hashFun(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key , value){
        const index = this.hashFun(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key , value]]
        }else{
            const sameItem = bucket.find(item => item[0] == key)
            if(sameItem){
                sameItem[1] = value
            }else{
                bucket.push([key , value])
            }
        }
    }

    get(key){ 
        const index = this.hashFun(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item => item[0] == key)
            if(sameItem){
                return sameItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hashFun(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item => item[0] == key)
            if(sameItem){
                bucket.splice(bucket.indexOf(sameItem) , 1)
            }
        }
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i , this.table[i]);
            }
        }
    }
}

const hash = new HAshTAble() 

hash.set('name' , 'muneer')
hash.set('place' , 'palakkad') 
// hash.remove('place') 
hash.display() 