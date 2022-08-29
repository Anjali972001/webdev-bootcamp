console.log("Hi,My name is Anjali Kumari")


let name1="Anjali";
/*console.log(name+ " is a good girl.")// to add a name

console.log(name1 + "is in gla.");*/
let name2="Geeta";
let greetText="Good Morning!"
function greet(name,greetText)
{
    console.log(name + " is a good girl.");
    console.log(greetText + " " +name)
}
greet(name1,greetText);
greet(name2,greetText);
// this function is made to make our work easier and simpler.
// this is done to increase the code reuseability.
function sum(a,b,c)
{
    let d=a+b+c;
    return d;

}
let returnValue=sum(10,20,30);
console.log("sum of the given numbers is "+returnValue)
