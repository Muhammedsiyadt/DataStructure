
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }

}

class linkedList{

    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    display(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let current = this.head
            while(current){
                console.log(current.data);
                current = current.next
            }
        }
    }
}

const list = new linkedList()
