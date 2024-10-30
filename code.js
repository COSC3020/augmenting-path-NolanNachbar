function augmentingPath(graph, start, end) {
    let visited = []; 
    let path = [];

    if (start === end) return [start];
    
    function depthFirstHelp(node) {
        if (visited.includes(node)) return false;
        if (node === end) {
            path.push(node);
            return true;
        }

        visited.push(node);
        path.push(node);

        // check if node has any neighbors in the graph
        if (graph[node]) {
            for (let neighbor in graph[node]) {
                if (depthFirstHelp(neighbor)) {
                    return true;
                }
            }
        }

        path.pop(); // backtrack if the target wasn't found on this path
        return false;
    }
    
    depthFirstHelp(start);
    return path;
}
