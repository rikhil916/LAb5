//demonstrate how es6 symbols enable to change common behaviour of javascript code
//in this keep basic code and in next program demonstrate how it is different from other primitive data types and implement well known symbols such as asinstanceof,toprimitive,isconcatspreadable and iterable
let a=Symbol();
let b=Symbol("Red");
console.log(a);
console.log(b);
console.log(Symbol('b').description);

const sym1 = Symbol('foo');
const sym2 = Symbol('foo');

console.log(sym1 === sym2);