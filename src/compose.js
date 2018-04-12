/**
 * function composition f(g(h(x)))
 * the function composition in maths start from the more inner function to the more outer
 * that's why we need to loop in reverse either with reduceRight() or inverting the array with inverse()
 * @param {*} fns 
 */

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const testCompose = compose (
  x => x + 2,
  x => x * 3,
  x => x + 5
)

console.log(testCompose(2));