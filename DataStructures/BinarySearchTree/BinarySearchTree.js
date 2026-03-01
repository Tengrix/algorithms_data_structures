class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = new Node(value);
            return this;
        }else{
            let current = this.root;
            while (true){
                if (value === current.value) {
                    return this; // дубликат — ничего не делаем
                }
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode
                        return this
                    }else{
                        current = current.left
                    }
                }else if(value > current.value){
                    if(!current.right){
                        current.right = newNode
                        return this
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }
    find(value){
        if(!this.root){
            return false;
        }
        let current = this.root;
        if(current.value===value){
            return true;
        }
        while(current){
            if(value > current.value){
                current = current.right
            }else if(value < current.value){
                current = current.left
            }else{
                return true;
            }
        }
        return false;
    }
}


const binarySearchTree = new BinarySearchTree();
binarySearchTree.root = new Node(10);
binarySearchTree.root.right = new Node(15);
binarySearchTree.root.left = new Node(5);
binarySearchTree.insert(3)

console.log(binarySearchTree.find(3));