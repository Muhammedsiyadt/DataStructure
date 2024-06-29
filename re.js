class Graph{
    constructor (){
        this.vertices = {}
    }

    addVertex(v){
        if(!this.vertices[v]){
            this.vertices[v] = []
        }
    }

    addEdge(v1 , v2){
        this.vertices[v1].push(v2)
        this.vertices[v2].push(v1)
    } 

    bfs(v){
        const visited = {}
        const queue = []
        

        visited[v] = true
        queue.push(v)
        console.log(visited); 

        while(queue.length > 0){
            const current = queue.shift()

            for(let a of this.vertices[current]){
                if(!visited[a]){
                    visited[a] = true
                    queue.push(a) 
                    console.log("Visited after adding", a, ":", visited);   
                }
            }
        }

    }
} 

const graph = new Graph()

graph.addVertex(1)
graph.addVertex(3)
graph.addVertex(5)
graph.addVertex(8)
graph.addVertex(2) 

graph.addEdge(1, 5);


graph.bfs(1) 

// console.log(graph); 