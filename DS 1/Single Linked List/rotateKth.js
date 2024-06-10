// function rotate(nums, k) {
//     let size = nums.length

//     if (size > k) {
//         k = k % size
//     }

//     const rotate = nums.splice(size - k, size)
//     nums.unshift(...rotate)

//     return nums
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7],3));

// function rotate(nums, k) {
//     let size = nums.length

//     if (size > k) {
//         k = k % size
//     }

//     reverse(nums, 0, nums.length - 1)
//     reverse(nums, 0, k - 1)
//     reverse(nums, k, nums.length - 1)

//     return nums

// }
// function reverse(nums, l, r) {
//     while (l < r) {
//         const temp = nums[l]
//         nums[l++] = nums[r]
//         nums[r--] = temp
//     }
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

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

  prepend(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.next = null;
      this.size++;
    }
  }

  insert(index, data) {
    const node = new Node(data);
    if (index < 0 && index > this.size) {
      console.log("invalid index");
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
    this.size++;
  }

  removeFirstNode() {
    if (this.size === 0) {
      console.log("There is no node..");
    } else {
      this.head = this.head.next;
      this.size--;
    }
  } 

  removeLastNode() {
    if (this.size === 0) {
      console.log("List is empty....");
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
    if (index < 0 && index > this.size) {
      console.log("Invalid index...");
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
    if (this.size === 0) {
      console.log("list is empty...");
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
      console.log("Data not available..");
    }
  }

  removeDuplicateNodes() {
    if (this.size === 0) {
      console.log("List is empty...");
    } else {
      let current = this.head;
      while (current && current.next) {
        if (current.data === current.next.data) {
          current.next = current.next.next;
        }
        current = current.next;
      }
    }
    this.size--;
  }

  removeMiddleNode() {
    let current = this.head;
    let prev = null;
    let mid = Math.floor(this.size / 2);
    for (let i = 0; i < mid; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.size--;
  }

  biggestNode() {
    if (this.size === 0) {
      console.log("List is empty...");
    } else {
      let current = this.head;
      let big = this.head.data;
      while (current) {
        if (current.data > big) {
          big = current.data;
        }
        current = current.next;
      }
      return big;
    }
  }

  smallestNode() {
    if (this.size === 0) {
      console.log("List is empty...");
    } else {
      let current = this.head;
      let small = this.head.data;
      while (current) {
        if (current.data < small) {
          small = current.data;
        }
        current = current.next;
      }
      return small
    }
  }

  middleNode(){
    let current = this.head
    let prev = this.head
    while(current && current.next){
      prev = prev.next
      current = current.next.next
    }
    return prev.data
  }

  reversedPrint(){
    if(this.size === 0 ){
      console.log('List is empty....');
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

  print() {
    if (this.size === 0) {
      console.log("Empty....!!"); 
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
list.append(30);
list.append(40); 
list.insert(0, 100);
// list.removeFirstNode()
// list.removeLastNode()
list.print();
console.log("After...");
// list.removeNodeByGivingIndex(2)
// list.removeNodeByGivingData(100)
// list.removeDuplicateNodes();
// list.removeMiddleNode()
// list.print();
// console.log(list.biggestNode());
// console.log(list.smallestNode());
// console.log(list.middleNode()); 
list.reversedPrint() 
list.print();