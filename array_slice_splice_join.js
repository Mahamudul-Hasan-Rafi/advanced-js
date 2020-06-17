const arr=[1,2,3,4,5,6,7,8,9];

const part=arr.slice(2,5);
console.log(part);
console.log(arr);

const arr1=arr.splice(3,0,100,90,858,4578);
console.log(arr.length);
console.log(arr1);
console.log(arr);

let letters=['R','A','F','I'];
let name=letters.join("");
console.log(name);

let number="898788";
console.log(number.slice(2,2));

//In JavaScipt "String" is 'Immutable' so that we can't apply splice() & join() method on a string. 
//Because of this "Immutability" why we can only apply slice() method on string

//"Array/List" is 'Mutable' in JS. That's why we can use splice(), join() method on them.
//We can also use slice() method on "Array/List"