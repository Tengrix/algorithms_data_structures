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
        let poppedTail = this.tail;
        if(this.length===1){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null
        }
        this.length--;
        return poppedTail;
    }
    shift(){
        if(this.length === 0) return undefined;
        let shiftedNode = this.head;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        }else{
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }

        this.length--;
        return shiftedNode;
    }
    unshift(val){
        let newNode = new Node(val);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(pos){
        if(pos < 0 || pos >= this.length){
            return null;
        }
        let current;
        if(Math.floor(this.length/2) > pos){
            current = this.head;
            for(let i = 0; i < pos ;i++){
                current = current.next;
            }
        }else{
            current = this.tail;
            for(let i = this.length-1; i > pos ;i--){
                current = current.prev;
            }
        }
        return current;
    }
    set(pos, val){
        let newVal = this.get(pos);
        if(newVal){
            newVal.val = val;
            return true;
        }
        return false
    }
    insert(pos,val){
        if(pos < 0 || pos > this.length) return null;
        if(pos === 0){
            return this.unshift(val);
        }else if(pos===this.length){
            return this.push(val);
        }else{
            let newNode = new Node(val)
            let newVal = this.get(pos-1);
            let nextToNewVal = newVal.next
            newVal.next = newNode;
            newNode.prev = newVal;
            newNode.next = nextToNewVal
            nextToNewVal.prev = newNode
        }
        this.length++;
        return true;
    }
    remove(pos){
        if(pos < 0 || pos >= this.length) return null;
        if(pos===0) return this.shift();
        if(pos===this.length-1) return this.pop();
        let getRemovingNode = this.get(pos);
        let nextNode = getRemovingNode.next;
        let prevNode = getRemovingNode.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        getRemovingNode.prev = null;
        getRemovingNode.next = null;
        this.length--;
        return getRemovingNode
    }
}
