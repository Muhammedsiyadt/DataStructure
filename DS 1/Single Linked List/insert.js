

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    pripend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.pripend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let current = this.head
            while (current) {
                console.log(current.data)
                current = current.next
            }
        }
    }
}

const list = new linkedList()

list.pripend(1)
list.pripend(2)
list.pripend(3)
list.pripend(4)
list.insert(324,4)
list.display()