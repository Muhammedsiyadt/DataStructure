class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    } 

    insert(data) {
        const node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node; 
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    search(root, data) {
        if (root === null) {
            return false;
        }
        if (root.data === data) {
            return true;
        } else if (data < root.data) {
            return this.search(root.left, data);
        } else {
            return this.search(root.right, data);
        }
    }

    remove(data) {
        return this.removeNode(this.root, data);
    }

    removeNode(root, data) {
        if (root === null) {
            return null;
        }

        if (data < root.data) {
            root.left = this.removeNode(root.left, data); 
        } else if (data > root.data) {
            root.right = this.removeNode(root.right, data);
        } else { 
            if (root.left === null && root.right === null) {
                return null 
            }

            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            const temp = this.findMin(root.right); 
            root.data = temp.data;
            root.right = this.removeNode(root.right, temp.data); 
        }
        return root;
    }

    findMin(root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root;
    }

    findMax(root) {
        while (root.right !== null) {
            root = root.right;
        }
        return root.data;
    }

    count(root) {
        if (!root) {
            return 0;
        }
        return this.count(root.left) + this.count(root.right) + 1;
    }

    height(root) {
        if (!root) {
            return 0;
        }
        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

    bfs() {
        const result = [];
        const queue = [];

        if (this.root != null) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);

            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
        return result;
    } 

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(9);
bst.insert(15);
bst.insert(1);
bst.insert(19);
bst.insert(4);

console.log(bst.findMin(bst.root));  

console.log('In Order...');
bst.inOrder(bst.root); 
console.log(bst.bfs());

bst.remove(1);

console.log('In Order after removal...');
bst.inOrder(bst.root);

console.log('BFS after removal:');
console.log(bst.bfs());


