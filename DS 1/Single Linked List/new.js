
class Node{
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

    prepend(data){
        const node = new Node(data)
        if(this.size === 0){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    reverse(){
        if(this.size === 0){
            console.log('empty..');
        }else{
            let current = this.head
            let prev = null
            while(current){
                const nextNode = current.next
                current.next = prev
                prev = current
                current = nextNode
            }
            this.head = prev
        }
    }

    print(){
        if(this.size === 0){
            console.log('list is empty..');
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
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)

list.reverse() 
list.print()