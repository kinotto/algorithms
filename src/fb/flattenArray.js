var arr = [[1,[2,2]], [2,2]];

let flatten = arr => {
    return arr.reduce((acc, el) => {
        if(Array.isArray(el)){
            return acc.concat(flatten(el));
        }
        acc.push(el);
        return acc;
    }, []); 
    
}

console.log(flatten(arr));
