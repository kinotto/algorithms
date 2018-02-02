//TODO 
function findNode(targetNode, node){
    if(node == targetNode){
        return node;
    }
    for(var i = 0; i < tree.children.length; i++){
        findNode(targetNode, tree.children[i]);
    }
    return null;
}