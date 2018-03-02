const sampleTree = {
    someProperty1: 4,
    someProperty2: 7,
    children: [
        {
            someProperty1: 5,
            someProperty2: 6,  
            children: [],
        },
        {
            someProperty1: 8,
            someProperty2: 6,  
            children: [
                {
                    someProperty1: 6,
                    someProperty2: 6,  
                    children: [],
                },
                {
                    someProperty1: 7,
                    someProperty2: 6,  
                    children: [],
                }
            ],
        }
    ],
};

const flattenObj = (node) => {

    return node.someProperty1 + node.children.reduce((acc, child) => acc + flattenObj(child), 0);
}

console.log(flattenObj(sampleTree));

/*const flattenObj = (node, acc) => {
    acc = acc + node.someProperty1;
    if(node.children){
        for(var i = 0; i < node.children.length; i++){
            acc += flattenObj(node.children[i], 0)
        }   
    }
    return acc;
}

console.log(flattenObj(sampleTree, 0));*/