//EXPLICIT
var obj = { name: "John", age: 30, city: "New York" };
console.log(obj);
console.log(typeof(obj));
var string=JSON.stringify(obj);
console.log(string);
console.log(typeof(string));

//implicit
var x=5;
var str="10";
var z=x+str;
console.log(typeof(x));
console.log(typeof(str));
console.log(typeof(z));
console.log(z);
console.log(Number(x)+Number(str));

