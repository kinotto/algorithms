var bst = require('./bst');

function depthFirst(node, data){
  var steps = arguments[2] || [];
  steps.push(node.root.data);

  if(node.root.data === data)
    return steps;


  if(node.root.left && steps.indexOf(node.root.left.data) === -1){
    return depthFirst(node.root.left, data, steps);
  }
  if(node.root.right && steps.indexOf(node.root.right.data) === -1){
    return depthFirst(node.root.right, data, steps);
  }

  return depthFirst(node.root.parent, data, steps);
}

depthFirst(bst, '11');
