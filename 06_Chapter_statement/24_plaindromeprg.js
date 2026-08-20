let str="hello"
let str1="";
for(i=str.length-1;i>=0;i--)
{
    str1=str1+str[i];
}
if (str1===str)
{
    console.log("palindrome")
}
else
{
    console.log("not palindeome");
}