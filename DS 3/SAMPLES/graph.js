class Graph{
    constructor(){
        this.vertices = {} 
    }

    // VERTECES
    addVertex(v){
        if(!this.vertices[v]){
            this.vertices[v] = [] 
        }
    }

    hasVertex(v){
        return this.vertices.hasOwnProperty(v)
    }

    removeVertex(v){
        for(let list of this.vertices[v]){
            const i = this.vertices[list].indexOf(v) 
            this.vertices[list].splice(i , 1)
        }
        delete this.vertices[v] 
    }

    // EDGES
    addEdge(v1 , v2) {
        this.vertices[v1].push(v2)
        this.vertices[v2].push(v1) 
    }

    hasEdge(v1 , v2){
        return this.vertices[v1].includes(v2)
    }

    removeEdge(v1 , v2){
        const i1 = this.vertices[v1].indexOf(v2)
        const i2 = this.vertices[v2].indexOf(v1)

        if(i1 !== -1 && i2 !== -1){
            this.vertices[v1].splice(i1 , 1)
            this.vertices[v2].splice(i2 , 1)  
        }
    }

    bfs(v){
        const visited = {}
        const queue = []

        visited[v] = true
        queue.push(v)
        console.log(visited);

        while(queue.length > 0){
            let current = queue.shift()

            for(let a of this.vertices[current]){
                if(!visited[a]){
                    visited[a] = true
                    queue.push(a)
                    console.log(visited); 
                }
            }
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
}

const graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A" , "B") 
graph.addEdge("B" , "C") 
graph.addEdge("C" , "D")  

// console.log(graph.hasVertex("A") ); 
// console.log(graph.hasEdge("A" , "B"));   

// graph.bfs("A")
graph.dfs("A")   