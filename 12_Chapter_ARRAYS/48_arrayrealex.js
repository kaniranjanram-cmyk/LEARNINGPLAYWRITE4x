let fruite=["apple","mango","banana","grapes"];
console.log(fruite.length);
console.log(fruite);
fruite.pop();
console.log(fruite);
let remove=fruite.shift();
console.log(fruite);
console.log(remove);
fruite.push("orange");
console.log(fruite);

for(let i=0;i<fruite.length;i++)
{
    console.log(fruite[i]);
    if(fruite[i]==="orange")
    {
        console.log("orange is in saffaron colour");
    }
}
