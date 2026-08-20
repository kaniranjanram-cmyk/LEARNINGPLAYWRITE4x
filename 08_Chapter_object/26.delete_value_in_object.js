let config={};
config.browser="chrome";
config.timeout=4000;
console.log(config);
delete config.timeout;
console.log(config);
let status=config;
status.browser="firefox";
console.log(config);
status.timeout=6000;
console.log(config);
console.log(status);

let a=90;
let b=a;
console.log(b);
b=10;
console.log(a);
console.log(b);