const e = require("express")

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

    // Constand time complexity [ O(1) ]
    prepend(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Linear time complexity [ O(n) ]
    append(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.next = null
        }
        this.size++
    }

    insert(index, data) {
        const node = new Node(data)
        if (index < 0 || index > this.size) {
            console.log("Invalid index...!");
        }
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
        this.size++
    }

    RemoveFirst() {
        this.head = this.head.next
        this.size--
    }

    RemoveLast() {
        let current = this.head
        let prev = null
        while (current.next) {
            prev = current
            current = current.next
        }
        prev.next = null
    }

    removeByIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index...!');
            return
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let prev = null
            for (let i = 0; i < index; i++) {
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
        this.size--

    }

    RemoveByValue(data) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.data === data) {
            this.head = this.head.next
            this.size--
            return data
        } else {
            let current = this.head
            while (current.next && current.next.data != data) {
                current = current.next
            }
            if (current.next) {
                const removedItem = current.next
                current.next = removedItem.next
                this.size--
                return data
            }
            console.log('No item');
        }

    }

    search(values) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let current = this.head
        while (current) {
            if (current.data === values) {
                return i
            }
            current = current.next
            i++ 
        }
        return -1
    }

    reverse() {
        if(this.isEmpty()){
            console.log('Empty..');
        }else{
            let prev = null
            let current = this.head
            while(current){
                const nextNode = current.next
                current.next = prev
                prev = current
                current = nextNode
            }
            this.head = prev
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty...!');
        } else {
            let current = this.head
            while (current) {
                console.log(current.data);
                current = current.next
            }
        }
    }


}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
console.log("List size is : ", list.getSize());
// list.print()

// console.log('After isertion.....');
// list.insert(2,100)
// list.print()

// console.log('After reversed..');
// list.reverse()
// list.print()

// console.log('Remove first');
// list.RemoveFirst()
// list.print() 

// console.log('Removed last one');
// list.RemoveLast()
// list.print()

// console.log('Removed one by index');
// list.removeByIndex(2)
// list.print()

// console.log('Removed one by value');
// list.RemoveByValue(100) 
// list.print() 

// console.log('After search');
// console.log(list.RemoveByValue(10));
// list.print()

