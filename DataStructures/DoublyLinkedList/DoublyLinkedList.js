class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let node = new Node(val)
        if(this.length < 1){
            this.head = node
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node
        }
        this.length++
        return this;
    }
    pop(){
        if(this.length < 1) return undefined;
        let tail = this.tail;
        if(this.length===1){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return tail;
    }
}