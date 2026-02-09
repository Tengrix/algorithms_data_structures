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
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.root = new Node(10);
binarySearchTree.root.right = new Node(15);
binarySearchTree.root.left = new Node(5);

console.log(binarySearchTree);