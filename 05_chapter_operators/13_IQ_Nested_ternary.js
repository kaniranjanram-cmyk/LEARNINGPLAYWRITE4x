let status=400;
let category= status<300 ? "success" : status<400 ? "Redirect" : status<500 ? "client error" :"server error";
console.log(`status : ${status} :category is : ${category}`);