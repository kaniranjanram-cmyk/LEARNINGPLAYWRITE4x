let a={status:"pass"};
console.log(a.status);
console.log(a["status"]);

let a1={Status:"pass",status:"fail"};//key is the case sensitive
console.log(a1.Status);
console.log(a1["status"]);

let b=a;
b.status="medium";
console.log(a.status);
