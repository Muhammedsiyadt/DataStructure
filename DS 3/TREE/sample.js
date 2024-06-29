class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        const node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            this.inesertFun(this.root,node)
        }
    }

    inesertFun(root,node){
        if(node.data < root.data){
            if(!root.left){
                root.left = node
            }else{
                this.inesertFun(root.left , node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.inesertFun(root.right , node)
            }
        }
    }

    search(root , data){
        if(root === null) {
            return false
        }
        if(root.data = data){
            return true
        }else if(data < root.data){
            return this.search(root.left , data)
        }else{
            return this.search(root.right , data)
        }
    }

    remove(data){
        return this.removeFun(this.root, data)
    }

    removeFun(root , data){
        if(root === null){
            return null
        }

        if(data < root.data){
            root.left = this.removeFun(root.left , data)
        }else if(data > root.right){
            root.right = this.removeFun(root.right , data)
        }else{
            if(root.left === null && root.right === null){
                root = null
            }

            if(root.left === null){
                return root.right 
            }else if(root.right === null){
                return root.left
            }

            const temp = this.findMin(root.right)
            root.data = temp.data
            root.right = this.removeFun(root.right , temp.data)
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

    count(root){
        if(!root){
            return null
        }
        return this.count(root.left) + this.count(root.right) + 1
    }

    height(root){
        if(!root) return 0
        return Math.max(this.height(root.left) , this.height(root.right)) + 1
    }
}