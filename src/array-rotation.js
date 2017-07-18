//rotazione a sinistra e a destra
// +1 rotazione a sinistra
//-1 rotazione a destra

function rotate(arr, steps){
  if(!arr.length)
    return -1;
  if(arr.length < 2)
    return arr.slice();

  var n = steps % arr.length;
  if(n === 0)
    return arr.slice(0);

  if(n < 0)
    return arr.slice(n).concat(arr.slice(0, arr.length + n));
  else
    return arr.slice(n).concat(arr.slice(0, n));

}

//1 2 3 4 5

//4 5 1 2 3

var arr = [1, 2, 3, 4, 5];
var steps = 1;
console.log('rotazione di ' + arr + ' steps:' + steps);
console.log('=' + rotate([1, 2, 3, 4, 5], steps));
