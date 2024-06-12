
class HasTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hashFunction(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key , value){
        const index = this.hashFunction(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key , value]]
        }else{
            const same = bucket.find(item  => item[0] === key)
            if(same){
                same[1] = value
            }else{
                bucket.push([key , value])
            }
        }
    }

    get(key){
        const index = this.hashFunction(key)
        const bucket = this.table[index]
        if(bucket){
            const same = bucket.find(item => item[0] === key)
            if(same){
                return same[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hashFunction(key)
        const bucket = this.table[index]
        if(bucket){
            const same = bucket.find(item => item[0] === key)
            if(same){
                bucket.splice(bucket.indexOf(same) , 1)
            }
        }
    }

    print(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i , this.table[i]);
            }
        }
    }
}

const hash = new HasTable(50)
hash.set('Name' , 'Afsal')
hash.set('Place' , 'Kasrode')
hash.set('Age' , 19) 
hash.print() 
console.log('<----------------------->');
hash.remove('Name') 
hash.print()  