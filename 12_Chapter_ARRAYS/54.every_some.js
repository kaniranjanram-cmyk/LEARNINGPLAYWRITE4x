let h=[80,60,91];
let status =h.every(s=>s>=70)
console.log(status);

let g=[80,73,91];
let status1 =g.every(s=>s>=70)
console.log(status1);

let status2=h.some(s=>s<70);
console.log(status2);

let status3 =g.some(s=>s<70);
console.log(status3);
