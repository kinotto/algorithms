var bst = require('./bst');
var Stack = require('./stack');

function depthFirst(node, data){
  var steps = arguments[2] || [];
  var stack = arguments[3] || new Stack(); //list of parent nodes


  if(node.data == data)
    return steps;


  if(node.left && steps.indexOf(node.left.data) === -1){
    stack.push(node);
    steps.push(node.left.data);
    return depthFirst(node.left, data, steps, stack);
  }
  if(node.right && steps.indexOf(node.right.data) === -1){
    stack.push(node);
    steps.push(node.right.data);
    return depthFirst(node.right, data, steps, stack);
  }

  return depthFirst(stack.pop(), data, steps, stack);
}

console.log('dfs ' + depthFirst(bst.root, '11'));
