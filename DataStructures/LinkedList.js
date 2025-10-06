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
}

let list = new SinglyLinkedList()
list.push('test')
list.push('testTest')
list.push('testTest123')

// const first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you?')

console.log(list)