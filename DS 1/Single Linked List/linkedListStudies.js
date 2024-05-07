
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

    prepend(value) {
        const newNode = new Node(value)
        if (this.size == 0) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value) {
        const newNode = new Node(value)
        if (this.size == 0) {
            this.head = newNode
        } else {
            let b = this.head
            while (b.next) {
                b = b.next
            }

            b.next = newNode
        }
        this.size++
    }

    insert(value, index) {
        const node = new Node(value)
        if (index < 0) {
            console.log('Invalid Index...')
            return
        }

        if (index == 0) {
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

    deleteNode(index) {
        if (index < 0) {
            console.log('Invalid Index...')
            return
        }
        if (index >= this.size) {
            console.log('Invalid Index...')
            return
        }
        if (index == 0) {
            this.head = this.head.next
            this.size--
        } else {
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            if (current.next === null) {
                let prev = current
                current = prev.next
                return
            }
            let prev = current.next
            current.next = null
            current.next = prev.next
        }

        this.size--
    }

    deleteNodeByValue(value) {
        if (!this.head) {
            console.log("List Is Empty...!")
            return
        }
        if (this.head.data === value) {
            this.head = this.head.next
            return 
        } 

        let current = this.head
        let prev = null
        while (current.data != value) {
            prev = current
            current = current.next
        }
        if (current) {
            prev.next = current.next
        }else{
            console.log("Node with data " + data + " not found");
        }

        this.size--
    }

    deleteDup(){
        let current = this.head
        while(current && current.next){
            if(current.data === current.next.data){
                current.next = current.next.next
            }
            current = current.next
        }
    }

    print() {
        if (this.size == 0) {
            console.log('List is Empty....!');
        } else {
            let current = this.head
            while (current) {
                console.log(current.data)
                current = current.next
            }
        }
    }
    printReverse() {
        const stack = [];
        let current = this.head;
        while (current) {
            stack.push(current.data);
            current = current.next;
        }
        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }
}

const list = new linkedList()
list.prepend(100)
list.append(110)
// list.append(120)
list.append(120)
list.append(130)
// list.append(140)
list.append(140)
// list.deleteNodeByValue(120)
// list.deleteNode()
// list.insert(1005, 2) 
// list.deleteDup() 
console.log('first');
list.print()
console.log('last');
list.printReverse()