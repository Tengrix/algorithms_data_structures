//LIFO principle -> Last IN First OUT
//insertion and remove O(1)
//search and access O(N)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
//
// }
//
// class Stack {
//     constructor() {
//         this.size = 0;
//         this.first = null;
//         this.last = null;
//     }
//
//     push(val){
//         let node = new Node(val);
//         if(this.size===0){
//             this.first = node;
//             this.last = node;
//         }else{
//             let curr = this.first;
//             this.first = node;
//             this.first.next = curr;
//         }
//         return ++this.size;
//     }
//
//     pop(){
//         if(this.size < 1){
//             return null;
//         }
//         let curr = this.first;
//         if(this.size === 1){
//             this.first = null;
//             this.last = null;
//         }else{
//             this.first = curr.next;
//             curr.next = null;
//         }
//         this.size--;
//         return curr;
//     }
// }
//
//
// let stack = new Stack();

// Stack using 2 Queues (FIFO)
// Strategy: cheap push O(1), expensive pop O(n)

class Stack {
    constructor() {
        this.queue = new Queue();   // main queue
        this.queue2 = new Queue();  // helper queue
        this.size = 0;
    }

    // should return the stack to allow chaining: s.push(10).push(20)
    push(value) {
        this.queue.enqueue(value);
        this.size++;
        return this;
    }

    // returns popped value, or null if empty
    pop() {
        if (this.size === 0) return null;

        // Move size-1 items from queue -> queue2
        // leaving the last enqueued item in `queue`
        while (this.queue.size > 1) {
            const v = this.queue.dequeue();
            this.queue2.enqueue(v);
        }

        // The remaining item is the "top" of the stack
        const popped = this.queue.dequeue();
        this.size--;

        // Swap queues: queue2 becomes the main queue again
        const tmp = this.queue;
        this.queue = this.queue2;
        this.queue2 = tmp;

        return popped;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
        return this.size;
    }

    dequeue() {
        if (!this.first) return null;

        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const stack = new Stack();

console.log(stack.push('1'))
console.log(stack.push('2'))
console.log(stack.push('3'))
console.log(stack)
















