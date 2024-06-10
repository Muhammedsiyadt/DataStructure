
class Queue{
  constructor(){
    this.item = []
  }

  enQueue(elem) {
    this.item.push(elem)
  }

  deQueue(){
    if(this.isEmpty()){
      console.log('Queue is empty..');
    }else{
      return this.item.shift()
    }
  }

  isEmpty(){
    return this.item.length === 0
  }

  print(){
     console.log(this.item.join()); 
  }
}

function Reverse(queue){
  if(queue.isEmpty()){
    return;
  }

  let item = queue.deQueue() 

  Reverse(queue)

  console.log(item); 
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)
queue.print() 
console.log('Reversed..'); 
Reverse(queue) 