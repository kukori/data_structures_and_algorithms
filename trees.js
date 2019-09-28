class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {

    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while(true) {
            if(value === currentNode.value) {
                return;
            }

            if(value < currentNode.value) {
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value){
        let currentNode = this.root;

        while(true) {
            if(currentNode === null) {
                return null;
            }

            if(currentNode.value === value) {
                return currentNode;
            } 
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    breathFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breathFirstSearchRecursive(queue, list = []) {
        if (!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);

        if(currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if(currentNode.right !== null) {
            queue.push(currentNode.right);
        }
        return this.breathFirstSearchRecursive(queue, list);
    }

    depthFirstSearchInOrder(node, list = []) {
        if(node.left) {
            this.depthFirstSearchInOrder(node.left, list);
        }
        list.push(node.value);
        if(node.right) {
            this.depthFirstSearchInOrder(node.right, list);
        }
        return list;
    }

    depthFirstSearchPreOrder(node, list = []) {
        list.push(node.value);
        if(node.left) {
            this.depthFirstSearchPreOrder(node.left, list);
        }
        if(node.right) {
            this.depthFirstSearchPreOrder(node.right, list);
        }
        return list;
    }

    depthFirstSearchPostOrder(node, list = []) {
        if(node.left) {
            this.depthFirstSearchPostOrder(node.left, list);
        }
        if(node.right) {
            this.depthFirstSearchPostOrder(node.right, list);
        }
        list.push(node.value);
        return list;
    }
}
  
const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))
  
//     9
//  4     20
//1  6  15  170
  
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(77));
console.log(tree.lookup(170));
console.log(tree.lookup(20));

console.log('BFS: ', tree.breathFirstSearch());
console.log('BFS recursive: ', tree.breathFirstSearchRecursive([tree.root]));

console.log('DFS - in order: ', tree.depthFirstSearchInOrder(tree.root));
console.log('DFS - pre order: ', tree.depthFirstSearchPreOrder(tree.root));
console.log('DFS - post order: ', tree.depthFirstSearchPostOrder(tree.root));