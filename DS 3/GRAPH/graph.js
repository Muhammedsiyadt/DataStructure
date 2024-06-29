class Graph{
    constructor(){
        this.vertices = {}
    }

    addVertex(v){
        if(!this.vertices[v]){
            this.vertices[v] = []
        }
    }

    hasVertex(vertex){
        return this.vertices.hasOwnProperty(vertex)
    } 

    addEdge(v1, v2){
        this.vertices[v1].push(v2)
        this.vertices[v2].push(v1) // For undirected graph
    } 

    hasEdge(v1, v2){
        return this.vertices[v1].includes(v2)
    } 

    removeVertex(v){
        for (let list of this.vertices[v]) {
            const i = this.vertices[list].indexOf(v)  
            this.vertices[list].splice(i , 1)
        }
        delete this.vertices[v]
    }

    removeEdge(v1 , v2){
        const i1 = this.vertices[v2].indexOf(v1) 
        const i2 = this.vertices[v1].indexOf(v2)
        if(i1 !== -1 && i2 !== -1){
            this.vertices[v1].splice(i2, 1)
            this.vertices[v2].splice(i1, 1)
        } 
    }

    display(){
        for(let vertex in this.vertices){
            console.log(vertex + "->" + this.vertices[vertex].join(', '));
        }
    }

    dfs(v , visited = {}){
        visited[v] = true
        console.log(v); 

        for(let a of this.vertices[v]){
            if(!visited[a]){
                this.dfs(a , visited) 
            }
        }
    }

    bfs(v){
        const visited = {}
        const queue = [v]
        visited[v] = true
        console.log(v); 
        while(queue.length > 0){
            const current = queue.shift() 
            
            for(let a of this.vertices[current]){
                if(!visited[a]){
                    
                    visited[a] = true
                    queue.push(a)
                    console.log(a); 
                } 
            }
        }
    }
} 

const graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.display() 

// console.log(graph); 

// console.log(graph.hasVertex("A")); 
console.log('......B F S.....');
graph.dfs("A");  

console.log('......D F S.....');
graph.bfs("A");      