//write a function to find max of  array number function should take array as a parameter  and return max value
function max(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
//calling function
var nums = [1, 2, 3, 4, 5, 6, 33];
var maxNum = max(nums);
console.log("The maximum in the array is: " + maxNum);
