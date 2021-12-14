//Function to find Factorial of a number
function Fact(num:number)
{
    let factorial:number=1;

    for(let i=1;i<=num;i++)
    {
        factorial=factorial*i;
    }

    return factorial;
}

//calling function Fact

console.log("The factorial is: "+Fact(5));