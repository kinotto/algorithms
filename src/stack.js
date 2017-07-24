function Stack(){
  var arr = [];;
  this.arr = arr;
  this.push = function(obj){
    arr.splice(0, 0, obj);
  }
  this.pop = function(){
    var ret = arr[0];
    var newArr = arr.slice(1);
    arr.length = 0;
    [].push.apply(arr, newArr);
    //arr = arr.slice(1);
    return ret;
  }
  this.toString = function(){
    var stdOut = '';
    arr.forEach(function(el){
      stdOut += el + ' ';
    })
    console.log(stdOut);
  }
}


var stack = new Stack();
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.toString());

module.exports = Stack;
