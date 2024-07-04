class Node {
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class TRIE{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    prefixSearch(pref){
        let node = this.root
        for(let char of pref){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}

const trie = new TRIE()

trie.insert("SIYAD") 

console.log(trie.prefixSearch("SI"));   

console.log(trie);