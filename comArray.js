//common elements in two sorted array
const arr1 = [1,3,5,7,9];
const arr2 = [1,2,4,5,6,8]
const arr3 = arr1.filter((data) => arr2.includes(data));
console.log(arr3);