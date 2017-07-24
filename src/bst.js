/**
* lowest common ancestor LCA in BST (binary search tree)
*/

function Node(data){
  this.data = data;
  this.left = this.right = null;
  //this.parent = null;
}

function BST(){
  this.root = null;
  this.lca = function(root, a, b){

    if(root.data > a && root.data > b){
      return this.lca(root.left, a, b);
    }
    if(root.data < a && root.data < b){
      return this.lca(root.right, a, b);
    }

    return root && root.data;

  }
}

BST.prototype.add = function(root, el){

  if(!root.left && el < root.data)
    root.left = new Node(el);

  if(!root.right && el < root.data)
    root.left = new Node(el);

  if(el > root.left.data)
    this.add(root.right, el);

  if(el < root.left.data)
    this.add(root.left, el);

}

/*  8
  4   10
2 6   9 11 */

var bst = new BST();
bst.root = new Node(8);
bst.root.left = new Node(4);
bst.root.right = new Node(10);
bst.root.left.left = new Node(2);
bst.root.left.right = new Node(6);
//bst.root.left.parent = bst.root;
bst.root.right.left = new Node(9);
bst.root.right.right = new Node(11);
//bst.root.right.parent = bst.root;

console.log('LCA '+ bst.lca(bst.root, 0, 2));

bst.add(bst.root, 7);

module.exports = bst;
