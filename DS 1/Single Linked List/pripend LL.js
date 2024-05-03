

// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     } 

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     insert(val) {
//         const node = new Node(val)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let current = this.head
//             while (current.next) {
//                 current = current.next
//             }
//             current.next = node

//         }
//         this.size++
//     }

//     display() {
//         if (this.isEmpty()) {
//             console.log('List is Empty...!');
//         } else {
//             let current = this.head
//             while (current) {
//                 console.log(current.data);
//                 current = current.next;
//             }
//         }
//     }

// }

// const list = new linkedList()
// console.log('Empty', list.isEmpty());
// console.log('Size', list.getSize());
// list.display()
// list.insert(3)
// list.insert(4)
// list.insert(6)
// list.display()


// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     insert(val){
//         const newNode = new Node(val)
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//         this.size++
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log('List is Empty..!');
//         }else{
//             let current = this.head
//             while(current){
//                 console.log(current.data);
//                 current = current.next
//             }
//         }
//     }
// }

// const list = new linkedList()
// list.insert(10)
// list.insert(20)
// list.insert(30)
// list.display()



// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//         this.size++
//     } 

//     display(){
//         if(this.isEmpty()){
//             console.log('List is Empty ...!');
//         }else{
//             let current = this.head
//             while(current){
//                 console.log(current.data)
//                 current = current.next
//             }
//         }
//     }
// }

// const list = new linkedList()
// list.insert(100)
// list.insert(200)
// list.insert(300)
// list.display()


// PREPEND INSERTION
class Node {
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

    prepend(value){
        const newOne = new Node(value)
        if(this.isEmpty()){
            this.head = newOne
        }else{
            newOne.next = this.head
            this.head = newOne
        }
        this.size++
    } 

    display(){
        if(this.isEmpty()){
            console.log('List is Empty...............!');
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
list.display()

    