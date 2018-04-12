class Queue {
  constructor(){
    this.data = [];
  }
  push(...elems){
    elems.forEach(elem => this.data.push(elem));
  }
  shift(){
    return this.data.shift();
  }
}

class Stack {
  constructor(){
    this.data = [];
  }
  push(...elems){
    elems.forEach(elem => this.data.push(elem));
  }
  pop(){
    return this.data.pop();
  }
}



let queue = new Queue();
queue.push(1,2,3);
console.log(queue.shift());

let stack = new Stack();
stack.push(3,4,5);
console.log(stack.pop());




let debounce = (clb, debounceTime) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(clb.bind(this, args), debounceTime);
  }
}


function print(){
  console.log(this.name + this.surname);
}

var obj = {
  name: 'pippo',
  surname: 'paperino',
  print: debounce(print, 2000)
}

obj.print();
obj.print();

