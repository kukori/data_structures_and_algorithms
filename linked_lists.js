// 1 10 99 5 16

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if(index >= this.length) {
            this.append(value);
        }
        if(index <= 0) {
            this.prepend(value);
        }

        const newNode = new Node(value);
        let actualNode = this.traverseToIndex(index);
        newNode.next = actualNode.next;
        actualNode.next = newNode;
        this.length++;
    }

    traverseToIndex(index){
        let i = 1;
        let actualNode = this.head;
        while (i < index) {
            actualNode = actualNode.next;
            i++;
        }
        return actualNode;

    }

    remove(index) {
        let actualNode = this.traverseToIndex(index);
        if (index === this.length-1) {
            actualNode.next = null;
            this.tail = actualNode;
        } else {
            actualNode.next = actualNode.next.next;
        }
        this.length--;
    }

    reverse() {
       let first = this.head;
       this.tail = first;
       let second = first.next;
       while(second){
           const temp = second.next;
           second.next = first;
           first = second;
           second = temp;
       }
       this.head.next = null;
       this.head = first;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);

//console.log(JSON.stringify(myLinkedList, null, 4));
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList, null, 4));

class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new DoublyNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new DoublyNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }

    prepend(value) {
        const newNode = new DoublyNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if(index >= this.length) {
            this.append(value);
        }
        if(index <= 0) {
            this.prepend(value);
        }

        const newNode = new DoublyNode(value);
        const actualNode = this.traverseToIndex(index);
        const nextNode = actualNode.next;
        newNode.next = actualNode.next;
        newNode.prev = actualNode;
        actualNode.next = newNode;
        nextNode.prev = newNode;
        this.length++;
    }

    traverseToIndex(index){
        let i = 1;
        let actualNode = this.head;
        while (i < index) {
            actualNode = actualNode.next;
            i++;
        }
        return actualNode;
    }

    remove(index) {
        let actualNode = this.traverseToIndex(index);
        actualNode.next = actualNode.next.next;
        actualNode.next.prev = actualNode;
        this.length--;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.remove(3);

// const util = require('util')
// console.log(util.inspect(myDoublyLinkedList, false, null, true));