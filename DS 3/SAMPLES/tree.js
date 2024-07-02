class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null 
    }
}

class linkedList{
    constructor(){
        this.root  = null
    }

    insert(data){
        const node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            this.insertFun(this.root , node)
        }
    }

    insertFun(root , node){
        if(node.data < root.data){
            if(!root.left){
                root.left = node
            }else{
                this.insertFun(root.left , node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertFun(root.right , node)
            }
        }
    }

    search(root , node){
        if(root === null){
            return false
        } 
        if(root.data === node){
            return true
        }else if(node < root.data){
            return this.search(root.left , node)
        }else{
            return this.search(root.right , node)
        }
    }

    remove(node){
        return this.removeFun(this.root , node)
    }

    removeFun(root , node){
        if(root === null){
            return null
        }
        if(node < root.data){
            root.left =  this.removeFun(root.left , node)
        }else if(node > root.data){
            root.right = this.removeFun(root.right , node)
        }else{
            if(root.left === null && root.right === null){
            root = null
            return root 
            }
            if(root.left == null){
            return root.right
            }else if(root.right == null){
            return root.left
           }

            const temp = this.findMin(root.right)
            root.data = temp.data
            root.right = this.removeFun(root.right , temp.data)
        }
        return root
    }

    findMin(root){
        while(root.left !== null){
            root = root.left
        }
        return root
    }

    findMax(root){
        while(root.right !== null){
            root = root.right
        }
        return root
    }

    count(root){
        if(!root){
            return null
        }else{
            return this.count(root.right) + this.count(root.left) + 1
        }
    }

    height(root){
        if(!root){
            return null
        }else{
            return Math.max(this.height(root.right) , this.height(root.left)) + 1 
        }
    }

    bfs(){
        const result = []
        const queue = []

        if(this.root !== null){
            queue.push(this.root)
        }
        while(queue.length > 0){
            const current = queue.shift() 
            console.log(current);
            result.push(current.data)

            if(current.left !== null){
                queue.push(current.left)
            }
            if(current.right !== null){
                queue.push(current.right) 
            }
        }
        return result 
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    preOrder(root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.data);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }
    
}

const list = new linkedList()
list.insert(10)
list.insert(5)
list.insert(15)
list.insert(1)

// console.log(list.search(list.root , 14)); 

// list.remove(10) 

// console.log("MAX : " , list.findMax(list.root)); 
// console.log("MIN : " , list.findMin(list.root)); 
// console.log("COUNT : " , list.count(list.root)); 
// console.log("HEIGHT : " , list.height(list.root));   

// console.log(list.bfs()); 

// list.remove(5)  

list.postOrder(list.root) 