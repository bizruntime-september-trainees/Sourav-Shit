let value:number|string;
value=100;
console.log("the number vakue of value is ",value);
value="my name is sourav";
console.log("the string vakue of value is ",value);

function fun(value:number|string)
{
    if(typeof(value=="number"))
    console.log("the value is a number ",value);
    else if(typeof(value)=="string")
    console.log("the value is a strig ",value);
}
fun(1344);
fun("Messi");