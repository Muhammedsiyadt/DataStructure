
// CREATE NODE CALL
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// CREATE LINKEDLIST CLASS
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

    // INSERTION
    // INSERTING TO FIRST
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

    // INSERT TO LAST
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

    // INSERT A NODE TO GIVEN INDEX POSITION
    insert(index, value) {
        const node = new Node(value)
        if (index <= 0 || index > this.size) {
            console.log('Invalid index..');
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

    // DELETE
    // REMOVING FIRST NODE
    removeFirstNode() {
        if (this.isEmpty()) {
            console.log('List is empty...');
            return
        } else {
            this.head = this.head.next
            this.size--
        }
    }

    // REMOVING LAST NODE
    removeLastNode() {
        if (this.isEmpty()) {
            console.log('List is empty...');
        } else {
            let current = this.head
            let prev = null
            while (current.next) {
                prev = current
                current = current.next
            }
            prev.next = null
            this.size--
        }

    }

    // REMOVING BY GIVEN INDEX
    removeNodeByIndex(index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index... ');
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let prev = null
            for (let i = 0; i < index - 1; i++) {
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
        this.size--
    }

    // REMOVING NOGE BY GIVEN DATA
    removeNodeByData(data) {
        if(this.isEmpty()){
            console.log('List is empty...');
        }
        if(this.head.data === data){
            this.head = this.head.next
            this.size--
            return data
        }else{
            let current = this.head
            while(current.next && current.next.data != data){
                current = current.next
            }
            if(current.next){
                const Item = current.next
                current.next = Item.next
                this.size--
                return data
            }
            console.log(`${data} not available in this linked list`);
        }
    }

    // REMOVE DUPLICATES
    removeDuplicates(){ 
        if(this.isEmpty()){
            console.log('empty...');
        }else{
            let current = this.head
            while(current.next){
                if(current.data === current.next.data){
                    current.next = current.next.next
                }
                current = current.next
            }
        }
        this.size-- 
    }

    // FIND
    // FINDING BIGGEST NODE
    BiggextNode(){
        if(this.isEmpty()){
            console.log("Not available..");
        }else{
            let current = this.head 
            let max = this.head.data
            while(current){
                if(current.data > max){
                    max = current.data
                }
                current = current.next
            }
            return max
        }
    }

    // FINDING LOWEST NODE
    LowestNode(){
        if(this.isEmpty()){
            console.log('no item');
        }else{
            let current = this.head
            let lowest = this.head.data
            while(current){
                if(current.data < lowest){
                    lowest = current.data
                }
                current = current.next
            }
            return lowest
        }
    }

    // FINDING MIDDLE
    Middle(){
        let current = this.head 
        let prev = this.head
        while(current && current.next){
            prev = prev.next
            current = current.next.next
        }
        return prev.data
    }

    // FINDING FIRST NODE
    findFirst(){
        if(this.isEmpty()){
            return null
        }else{
            return this.head.data
        }
    }

    // FINDING LAST NODE
    findLast(){
        if(this.isEmpty()){
            return null
        }else{
            let current = this.head 
            while(current.next){
                current = current.next
            }
            return current.data
        }
    }

    // PRINT REVERSLY
    reverse(){
        if(this.isEmpty()){
            console.log('No nodes here...');
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

    // PRINT
    print() {
        if (this.isEmpty()) {
            console.log('No node here');
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

// PREPEND 
list.prepend(10)
// console.log("Size is : ",list.getSize());
// list.print() 

// APPEND
list.append(20)
list.append(30)
list.append(40)
list.append(50) 
list.append(60) 
list.append(70) 
list.append(80)   
// console.log("Size is : ",list.getSize());
// list.print() 

// INSERT
// list.insert(2, 30)
// console.log("Size is : ",list.getSize());
// list.print() 

// DELETE FIRST NODE
// list.removeFirstNode()
// console.log("Size is : ",list.getSize());
// list.print() 

// DELETE LAST NODE
// console.log("Size is : ",list.getSize());
// list.removeLastNode()
// console.log("Size is : ",list.getSize());
// list.print() 

// DELETE NODE BY GIVING INDEX
// console.log("Size is : ",list.getSize());
// list.removeNodeByIndex(0)
// console.log("Size is : ",list.getSize());
// list.print() 

// REMOVE NODE BY GIVING DATA
// console.log("Size is : ", list.getSize());
// list.removeNodeByData(10) 
// console.log("Size is : ", list.getSize());
// list.print() 

// REVERSED LINKEDLIST
// console.log("BEFORE >>>>>>>>>>>>>>>>>>>>>");
// list.print()
// console.log("AFTER >>>>>>>>>>>>>>>>>>>>>");
// list.reverse()
// list.print()

// BIGGEST NODE 
// console.log(list.BiggextNode());

// LOWEST NODE
// console.log(list.LowestNode()); 

//MIDDLE NODE
// list.print() 
// console.log("Middle node : ",list.Middle());

// FIRST NODE
console.log("First node : ",list.findFirst());

// LAST NODE
console.log("Last node : ",list.findLast());  