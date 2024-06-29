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

    removeVertex(v){
        for(let list of this.vertices[v]){
            const i = this.vertices[list].indexOf(v)
            this.vertices[list].splice(i,1)
        }
        delete this.vertices[v]
    } 

    addEdge(v1 , v2){
        this.vertices[v1].push(v2)
        this.vertices[v2].push(v1)
    }

    hasEdge(v1, v2){
        return this.vertices[v1].includes(v2) 
    }

    removeEdge(v1, v2){
        const i1 = this.vertices[v1].indexOf(v2)
        const i2 = this.vertices[v2].indexOf(v1)
        if(i1 !== -1 && i2 !== -1){
            this.vertices[v1].splice(i1 , 1)
            this.vertices[v2].splice(i2 , 1)
        }
    } 

    
}
const graph = new Graph()
graph.addVertex("A");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

console.log(graph); 