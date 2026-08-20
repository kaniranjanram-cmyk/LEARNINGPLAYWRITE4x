let arr=[ 5, 1 ,2 ,1 ,3 ,2]
let count=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=1;j<arr.length;j++){

     if(arr[i]===arr[j])
        {  
                count=count+1;
        } 
    }
console.log(arr[i],count);
}