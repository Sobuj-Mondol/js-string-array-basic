let products = [
    'hp hardcore 1000GB Laptop',
    'amar akta Phone ace',
    'hp akta laptop ace',
    'xiomi A6 16px flashlight Phone laptop',
    'LG supernova laptop',
    'hp silvar color Laptop with white color phone'
];
let searching = 'laptop'
// indexOf
let output = [];
for(let product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);
// includes
for(let product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output);
// start with
for(let product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output);
// endsWith
for(let product of products){
    if(product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output);