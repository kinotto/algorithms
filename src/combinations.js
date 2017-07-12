/*You are given N distinct numbers. You are tasked with finding the number of
groups of 2 or 3 that can be formed whose sum is divisible by three.

Examples:

Input  : 1 5 7 2 9 14
Output : 13
The groups of two that can be
formed are:
(1, 5)
(5, 7)
(1, 2)
(2, 7)
(1, 14)
(7, 14)
The groups of three are:
(1, 5, 9)
(5, 7, 9)
*/

//get ordered key to avoid duplicates using bubble sort
function getOrderedKey(){
  do{
    var swapped = false;
    for(var i = 0; i < arguments.length - 1; i++){
      if(arguments[i] > arguments[i + 1]){
        var tmp = arguments[i];
        arguments[i] = arguments[i + 1];
        arguments[i + 1] = tmp;
        swapped = true;
      }
    }
  } while(swapped);

  return arguments.length === 2 ? arguments[0] + '' +arguments[1]
    : arguments[0] + '' +arguments[1] + '' + arguments[2];
}
function getGroups(arr){
  var sum = {};
  //var sum = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(i !== j){
        var ok = (arr[i] + arr[j]) % 3 === 0;
        //ok && (sum[arr[i] + '' + arr[j]] = [arr[i], arr[j]]);
        ok && (sum[getOrderedKey(arr[i], arr[j])] = [arr[i], arr[j]]);
        //ok && sum.push([arr[i], arr[j]])
      }
      for(var k = 0; k < arr.length; k++){
        if(k !== i && k !== j && i !== j){
          var ok = (arr[i] + arr[j] + arr[k]) % 3 === 0;
          ok && (sum[getOrderedKey(arr[i], arr[j], arr[k])] = [arr[i], arr[j], arr[k]]);
          //ok && sum.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }
  return Object.keys(sum);
}

console.log(getGroups([1, 5, 7, 2, 9, 14]).length)
