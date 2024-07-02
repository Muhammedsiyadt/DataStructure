class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearch{
    constructor(){
        this.root = null
    }

    insert(data){
        const node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            this.inserFun(this.root , node)
        }
    }

    inserFun(root , node){
        if(node.data < root.data){
            if(root.left === null){
                root.left = node
            }else{
                return this.inserFun(root.left , node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                return this.inserFun(root.right , node)
            }
        }
    }

    search(root , data){
        if(root === null){
            return false
        }

        if(root.data === data){
            return root
        }else if(data < root.data){
            return this.search(root.left , data)
        }else{
            return this.search(root.right , data)
        }
    }

    remove(data){
        return this.removeFun(this.root , data)
    }

    removeFun(root , data){
        if(root === null){
            return null
        }

        if(data < root.data){
            root.left = this.removeFun(root.left , data)
        }else if(data > root.data){
            root.right = this.removeFun(root.right , data)
        }else {
            if(root.left === null && root.right === null){
                return null
            }
            if(root.left === null){
                return root.right
            }else if(root.right === null){
                return root.left 
            }

            const temp = this.findMin(root.right); 
            root.data = temp.data;
            root.right = this.removeNode(root.right, temp.data); 
        }
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

    height(root){
        if(root === null){
            return -1
        }else{
            return Math.max(this.height(root.left) , this.heigh(root.right)) + 1 
        }
    }

    count(root){
        if(!root){
            return -1
        }else{
            return this.count(root.left) + this.count(root.right) + 1
        }
    }

}