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
    get(pos){
        if(pos >= this.length || pos < 0) return undefined;
        if(pos === 0) return this.head;
        if(pos === this.length - 1) return this.tail;
        let counter = 0;
        let current = this.head;
        while(counter !== pos){
            counter++
            current = current.next
        }
        return current.next;
    }
    set(pos,val){
        let node = this.get(pos)
        if(node){
            node.val = val
            return true;
        }else{
            return false;
        }
    }
    insert(pos,value){
        let newNode = new Node(value)
        if(pos > this.length || pos < 0) return undefined;
        if(pos === this.length){
            return !!this.push(value)
        }
        let prev = this.get(pos-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++
        return true;
    }
    remove(pos){
        if(pos > this.length || pos < 0) return null;
        // if(pos===0) return this.shift()
        // if(pos===this.length-1) return this.pop()
        let current = this.get(pos-1);
        let temp = current.next;
        current.next = temp.next;
        this.length--
        return temp;
    }
    rotate(pos){
        if(this.length===0) return null;

        let tail = this.tail
        this.tail = this.head;
        this.head = tail;
        let curr = this.head
        let prev = null;
        let next
        for(let i = 0; i < pos; i++){
            next = curr.next;
            curr.next = prev;
            prev = curr
            curr = next
        }
        return this
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