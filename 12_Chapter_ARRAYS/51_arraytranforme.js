let scores=[45,82,91,60,73];
let grades= scores.map(s=>s>70?"pass":"fail");
console.log(grades); 
let pass=scores.filter(s=>s>=70);
console.log(pass);

let add=scores.reduce((sum,s)=>(sum+s),0);
console.log(add);
let arr=[2,10,1,29];
console.log(arr.sort());
let fruite=["mango","banana","apple"];
console.log(fruite.sort());
arr.sort((a,b)=>a-b);
console.log(arr);
arr.sort((a,b)=>b-a);
console.log(arr);

