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
        if(!this.length) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if(this.length===0){
            this.tail = null;
        }
        return currentHead
    }
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head
            this.head = node
        }
        this.length++
        return this;
    }
    get(pos){
        if(pos >= this.length || pos < 0) return null;
        let counter = 0;
        let current = this.head
        while(pos !== counter){
            current = current.next
            counter++
        }
        return current
    }
    set(pos,value){
        let node = this.get(pos)
        if(node){
            node.val = value
            return true
        }else{
            return false
        }
    }
    insert(pos,value){
        let newNode = new Node(value)
        if(pos > this.length || pos < 0) return false;
        if(pos===this.length){
            return !!this.push(value)
        }
        if(pos===0){
            return !!this.unshift(value)
        }
        let prev = this.get(pos-1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true;
    }
    remove(pos){
        if(pos > this.length || pos < 0) return null;
        if(pos===0) return this.shift()
        if(pos===this.length-1) return this.pop()
        let prev = this.get(pos-1)
        let removedNode = prev.next
        prev.next = prev.next.next
        this.length--
        return removedNode
    }
    reverse(){
        if(this.length===0) return this;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let counter = 0;
        let next;
        let prev = null;

        while(counter < this.length){
            next = current.next
            current.next = prev
            prev = current
            current = next
            counter++
        }
        return this;
    }
}
//  1 - 2 - 3 - 4


let list = new SinglyLinkedList()
list.push('test')
list.push('testTest')
list.push('testTest123')
list.push('newVal')
list.insert(3,'!!!!!')
list.remove(1)
list.reverse()
// const first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you?')

console.log(list)