function Queue(){
  this.arr = [];
  this.push = function(el){
    this.arr.push(el);
  }
  this.shift = function(){
    return this.arr.shift();
  }
  this.length = function(){
    return this.arr.length;
  }
}

module.exports = Queue;
