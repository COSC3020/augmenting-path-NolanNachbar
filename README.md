# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


Recall, my code
```js
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

        // Check if node has any neighbors in the graph
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
```

The worst case $\Theta$ would be when the target is the last node it checks or when the node isn't there; in either of those cases, it checks every edge of every node. It will check each node's edges a maximum of one time before it gets put into the visited array. Thus, the worst case $\Theta$ complexity is $\Theta(V + E)$. 

I basically used my depth first search algorithm and modified a couple of things like adding this check ```if (graph[node])``` to make sure that it only runs the loops when if thats valid. I also switched the old for loop ```for (let i = 0; i < graph[node].length; i++)``` with ```for (let neighbor in graph[node])``` to make it more readable.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
