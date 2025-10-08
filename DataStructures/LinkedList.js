class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let node = new Node(val)
        if(this.length===0){
            this.head = node
            this.tail = node
        }else if(this.length!==0){
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }
    pop(){
        if(this.length===0) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
            this.head = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        return currentHead
    }
}

let list = new SinglyLinkedList()
list.push('test')
list.push('testTest')
list.push('testTest123')
list.shift()

// const first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you?')

console.log(list)