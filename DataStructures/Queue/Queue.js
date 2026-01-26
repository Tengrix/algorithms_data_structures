//FIFO principle -> First IN First OUT


//Examples in use: printing/ task processing/ game queue




class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(val){
        let node = new Node(val);
        if(this.size === 0){
            this.first = node;
            this.last = node;
        }else{
             let curr = this.last;
             this.last = node;
             curr.next = this.last;
        }
        return ++this.size
    }
    shift(){
        if(this.size < 1){
            return null;
        }
        let curr = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null
        }else{

            this.first = curr.next;
            curr.next = null;
        }
        this.size--;
        return this;
    }

}

const queue = new Queue()
console.log(queue.push('1'))
console.log(queue.push('2'))
console.log(queue.push('3'))
console.log(queue)
console.log(queue.shift())