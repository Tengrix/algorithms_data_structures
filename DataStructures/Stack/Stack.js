//LIFO principle -> Last IN First OUT
//insertion and remove O(1)
//search and access O(N)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(val){
        let node = new Node(val);
        if(this.size===0){
            this.first = node;
            this.last = node;
        }else{
            let curr = this.first;
            this.first = node;
            this.first.next = curr;
        }
        return ++this.size;
    }

    pop(){
        if(this.size < 1){
            return null;
        }
        let curr = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = curr.next;
            curr.next = null;
        }
        this.size--;
        return curr;
    }
}


let stack = new Stack();

console.log(stack.push('first node'));
console.log(stack.push('second node'));
console.log(stack.push('third node'));
console.log(stack.size);
console.log(stack);
console.log(stack.pop());
console.log(stack.size);
