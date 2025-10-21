class Node {
    constructor(val,next) {
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor(val) {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        const node = new Node(val)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else if(this.length > 0){
            let current = this.tail;
            current.next = node;
            this.tail = current.next
        }
        this.length++
        return this;
    }
    pop(){
        if(this.length===0) return undefined;
        if(this.length===1){
            let removedVal = this.head;
            this.head = null;
            this.tail = null;
            this.length--
            return removedVal
        }
        let prev = this.head;
        let current = this.head.next;
        while (current.next!==null){
            prev = current
            current = current.next
        }
        this.tail = prev;
        let removedVal = this.tail.next
        this.tail.next = null
        this.length--;
        return removedVal;
    }

}

var singlyLinkedList = new List();
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.length; // 1
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 5

singlyLinkedList.push(10); // singlyLinkedList
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.tail.val; // 10

singlyLinkedList.push(15); // singlyLinkedList
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.pop(); // 15
console.log(singlyLinkedList)