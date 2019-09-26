class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first.value;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue(){
        if(this.isEmpty()) {
            return null;
        }
        const result = this.first;
        this.first = this.first.next;

        if(this.first === null) {
            this.last = null;
        }

        this.length--;
        return result.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

// const myQueue = new Queue();
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.enqueue('Samir');
// console.log(JSON.stringify(myQueue, null, 4));
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(JSON.stringify(myQueue, null, 4));

// implement queue using stacks
class Queue2 {
    constructor(){
        this.first = [];
        this.last = [];
    }

    peek() {
        if(this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length-1];
    }

    enqueue(value){
        var length = this.first.length;
        for(let i = 0; i < length; i++){
            this.last.push(this.first.pop())
        }
        this.last.push(value);
    }

    dequeue(){
        var length = this.last.length;
        for(let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        return this.first.pop();
    }
}

const myQueue = new Queue2();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(JSON.stringify(myQueue, null, 4));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(JSON.stringify(myQueue, null, 4));