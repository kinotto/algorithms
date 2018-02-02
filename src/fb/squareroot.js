const squareRoot = (num) => {
    let low = 0,
        hi = num;
    
    for(let i = 0; i < 1000; i++){
        let mid = (low + hi) / 2
        if( (mid * mid) === num ){
            return mid;
        }
        if( (mid * mid) > num){
            hi = mid;
        } else {
            low = mid;
        }
    }
    return mid;
}

console.log(squareRoot(9));