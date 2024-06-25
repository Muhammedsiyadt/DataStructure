
class Queue {
    constructor (){
        this.item = []
    }

    isEmpty(){
        return this.item.length === 0
    }

    enQueue(el){
        this.item.push(el)
    }

    deQueue(){
        return this.isEmpty() ? "Underflow.." : this.item.shift() 
    }

    front(){
        return this.isEmpty() ? 'No item ' : this.item[0]
    }

    print(){
        console.log(this.isEmpty() ? 'No item ' : this.item);  
    }
}

// function reverse(queue){
//     if(queue.isEmpty()){
//         return;
//     }

//     let item = queue.deQueue() 
//     reverse(queue)

//     queue.enQueue(item)
// }

function reverse(queue){
    let ar = []
    while(!queue.isEmpty()){
        ar.push(queue.deQueue()) 
    }
    console.log(ar.reverse()); 
}

const queue = new Queue() 
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)

queue.print() 
console.log('.............');
// reverse(queue) 
// queue.print()  

reverse(queue) 