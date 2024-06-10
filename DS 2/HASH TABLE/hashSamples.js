class Hash{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            const sameItem = bucket.find(item => item[0] === key)
            if(sameItem){
                sameItem[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

    

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item => item[0] === key)
            if(sameItem){
                return sameItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item => item[0] === key)
            if(sameItem){
                bucket.splice(bucket.indexOf(sameItem) , 1)
            }
        }
    }

    display(){
        for (let j = 0; j < this.table.length; j++) {
            if(this.table[j]){
                console.log(j , this.table[j]);
            }
        }
    }
}

const table = new Hash(10)  
table.set('name' , 'Siyad')
table.set('age' , 25)
table.set('place' , 'wayanad')
table.set('clape' , 'way')
// console.log(table.get('name'));  
table.remove('place')
table.display() 