let original=[1,2,3,4,5];
let copy=[...original];
console.log(copy);
let copy2=original.concat();
console.log(copy2);
let copy3=original.slice();
console.log(copy3);
let copy4=Array.from(original);
console.log(copy4);

console.log("---------");
copy4.push(87);
console.log(copy4);
console.log(original);

console.log("--------");

let deep_copy_array=original;
console.log(deep_copy_array);
deep_copy_array.push(45);

console.log("#######");
console.log(deep_copy_array);
console.log(original);



