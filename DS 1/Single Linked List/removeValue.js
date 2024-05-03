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

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return 
        }
        if (index === 0) {
            this.pripend(value)
        } else {
            const node = new Node(value)
            const prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            return
        }
        let removedIndex
        if (index === 0) {
            removedIndex = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedIndex = prev.next
            prev.next = removedIndex.next
        }
        this.size--
        return removedIndex.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.data === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedIndex = prev.next
                prev.next = removedIndex.next
                this.size--
                return value
            }
            return null
        }
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

const list  = new linkedList()
// list.append(10)
// list.pripend(20)
// list.insert(25,1)
// list.remove()
// list.display()
// console.log(list);
list.insert(10,0)
list.insert(20,1)
list.pripend(5)

list.removeValue(5) 
list.display()