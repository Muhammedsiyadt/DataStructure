class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.next = null;
    }
    this.size++;
  }

  insert(index, data) {
    const node = new Node(data);
    if (index < 0 || index > this.size) {
      console.log("invalid index..");
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node; 
    }
    this.size++;
  }

  removeFirstNode() {
    if (this.isEmpty()) {
      console.log("LIST IS EMPTY...");
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  removeLastNode() {
    if (this.isEmpty()) {
      console.log("List is empty..");
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.size--;
    }
  }

  removeNodeByGivingIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index....");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index - 1; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }

  removeNodeByGivingData(data) {
    if (this.isEmpty()) {
      console.log("list is empty..");
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return data;
    } else {
      let current = this.head;
      while (current.next && current.next.data != data) {
        current = current.next;
      }
      if (current.next) {
        const item = current.next;
        current.next = item.next;
        this.size--;
        return data;
      }
      console.log("data is not available in this linked list..");
    }
  }

  removeDuplicateNodes() {
    if(this.isEmpty()){
        console.log('list is empty....');
    }else{
        let current = this.head
        while(current &&  current.next){
            if(current.data === current.next.data){
                current.next = current.next.next
            }
            current = current.next
        }
    }
    this.size--
  }

  removeMiddleNode(){
    let current = this.head 
    let prev = null
    let half = Math.floor(this.size / 2)
    for (let i = 0; i < half; i++) {
        prev = current
        current = current.next 
    }
    prev.next = current.next
}

  biggestNode(){
    if(this.isEmpty()){
        console.log('list is empty..');
    }else{
        let current = this.head 
        let big = this.head.data
        while(current){
            if(current.data > big){
                big = current.data
            }
            current = current.next
        }
        return big 
    }
  }

  lowestNode(){
    if(this.isEmpty()){
        console.log('list is empty..');
    }else{
        let current = this.head
        let low = this.head.data
        while(current){
            if(current.data < low){
                low = current.data
            }
            current = current.next
        }
        return low
    }
  }

  findMiddleNode(){
    let current = this.head
    let prev = this.head 
    while(current && current.next){
        prev = prev.next
        current = current.next.next
    }
    return prev.data
  }

  reversedPrint(){
    if(this.isEmpty()){
        console.log('List is empty...');
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

  display() {
    if (this.isEmpty()) {
      console.log("No linked here...");
    } else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

const list = new linkedList();
list.prepend(10);
list.append(20); 
list.insert(0, 50);
// list.removeFirstNode()
// list.removeLastNode()
// list.removeNodeByGivingIndex(2)
// list.removeNodeByGivingData(50)
// list.removeDuplicateNodes() 
list.display();
// console.log(list.biggestNode()); 
// console.log(list.lowestNode()); 
// console.log('Middle Node : ' , list.findMiddleNode()); 
// list.removeMiddleNode() 
console.log('reversed..');
list.reversedPrint()  
list.display()

