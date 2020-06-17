var arr=[1,2,3,4,5,56,7,8,9];

var arr1=arr.map(x=>x**2);
console.log(arr1);

console.log(" ");

var arr2=arr.filter(x=>x%2==0);
console.log(arr2);

console.log("  ");
var num=arr.find(x=>x%2==0);
console.log(num)
