// stack lifo -> linked list (prepend), access the head only. this can be implemented with arrays it can be faster (the items can be next to eacth other in memory)
// queue fifo -> linked list (append), access the head only. Array would be O(n).

//Stack - Linked List implementation
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
  
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value;
    }

    push(value){
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop(){
        if(this.isEmpty()) {
            return null;
        }

        const result = this.top;
        this.top = result.next;

        if(this.top === null) {
            this.bottom = null;
        }

        this.length--;
        return result.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}
  
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(JSON.stringify(myStack, null, 4));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(JSON.stringify(myStack, null, 4));

// Stack array implementation
class Stack2 {
    constructor(){
        this.content = [];
    }

    peek() {
        if(this.isEmpty) {
            return null;
        } else {
            return this.content[this.content.length-1];
        }
    }

    push(value){
      this.content.push(value);
    }

    pop(){
       return this.content.pop();
    }

    isEmpty() {
        return this.content.length === 0;
    }
}

// const myStack = new Stack2();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// console.log(JSON.stringify(myStack, null, 4));
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(JSON.stringify(myStack, null, 4));