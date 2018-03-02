class Node {
    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let a = new Node(5, null, null);
let b = new Node(4, null, null);
let d = new Node(1, null, null);
let e = new Node(20, null, null);
let c = new Node(10, a, b);
let f = new Node(18, d, e);
let tree = new Node(5, c, f);


let sumBST = node => {
    if(!node.right && !node.left){
        return node.value;
    }
    if(node.right && !node.left){
        return node.value + sumBST(node.right);
    }
    if(node.left && !node.right){
        return node.value + sumBST(node.left);
    }
    return node.value + sumBST(node.left) + sumBST(node.right);
}

console.log(sumBST(tree));