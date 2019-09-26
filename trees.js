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

    remove(value) {
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