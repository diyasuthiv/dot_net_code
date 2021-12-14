//) find the Array even  element sum and return it.

function EvenSum(arr:number[])
{
    let sum:number=0;

    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            sum=sum+arr[i];
        }
    }

    return sum;
}

//calling function
let nums=[3,2,3,4];
let evenSum:number=EvenSum(nums);
console.log("The sum of even elements is: "+evenSum);