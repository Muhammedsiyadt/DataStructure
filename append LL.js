

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList {
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

    append(value){

        // Append
        // const node = new Node(value)
        // if(this.isEmpty()){
        //     this.head = node
        // }else{
        //     let current = this.head
        //     while(current.next){
        //         current = current.next
        //     }
        //     current.next = node
        // }
        // this.size++


        // Prepend
        // const node = new Node(value)
        // if(this.isEmpty()){
        //     this.head = node
        // }else{
        //     node.next = this.head
        //     this.head = node
        // }
        // this.size++
    }

    display(){
        if(this.isEmpty()){
            console.log('List is Empty-.-.-.-.-!');
        }else{
            let current = this.head
            while(current){
                console.log(current.data)
                current = current.next
            }
        }
    }
}

const list = new linkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.display()