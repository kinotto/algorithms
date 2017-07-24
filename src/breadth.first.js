var bst = require('./bst');
var Queue = require('./queue');

function breadthFirst(node, el){
    var steps = arguments[2] || [];
    var queue = arguments[3] || new Queue();

    /*if(el == node.value)
      return steps;

    var currentNode = queue.shift();
    if(currentNode){
      return breadthFirst(currentNode, el, steps, queue);
    }
    if(node.left && steps.indexOf(node.left.value === -1)){
      queue.push(node);
      steps.push(node);
      return breadthFirst(node.left, el, steps, queue);
    }
    if(node.right && steps.indexOf(node.right.value) === -1){
      queue.push(node);
      steps.push(node);
      return breadthFirst(node.right, el, steps, queue);
    }*/
    queue.push(node);
    steps.push(node.data);
    while(queue.length() > 0){
      var elem = queue.shift();
      if(steps.indexOf(elem.data) === -1)
        steps.push(elem.data);

      elem.left && queue.push(elem.left);
      elem.right && queue.push(elem.right);
    }
    return steps;
}

console.log('bfs ' + breadthFirst(bst.root, '11'));
