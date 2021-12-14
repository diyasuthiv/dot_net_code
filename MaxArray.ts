//write a function to find max of  array number function should take array as a parameter  and return max value

function max(arr:number[])
{
    let max=0;

    for(let i=0;i<arr.length;i++)
    {
        if(max<=arr[i])
        {
            max=arr[i];
        }
    }

    return max
}

//calling function
let nums1=[1,2,3,4,5,6,33];

let maxNum:number=max(nums1);
console.log("The maximum in the array is: "+maxNum);