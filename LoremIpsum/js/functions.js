function displayName(name){
console.log('Hello, ' + name)
}
displayName("Evan");

function f2C(f){
    let c = (f - 32) *(5/9);
    return c;
}
function c2F(c){
    let f = (c * (9/5)) + 32;
    return f;
}

console.log(f2C(212));
console.log(c2F(60));