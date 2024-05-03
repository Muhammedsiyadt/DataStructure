

class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor () {
        this.head = null
    }

    insert(data) {
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }


    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}

const list = new linkedList()
// list.insert(1)
// list.insert(4)
// list.insert(2)
list.insert(3)

// list.insertBeginning(6)
list.display()