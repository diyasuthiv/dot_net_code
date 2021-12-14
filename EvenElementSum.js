//) find the Array even  element sum and return it.
function EvenSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
//calling function
var nums = [3, 2, 3, 4];
var evenSum = EvenSum(nums);
console.log("The sum of even elements is: " + evenSum);
